import { pool } from "../config/db.js";

export class Dashboard {
  static async getDashboards(filters = {}) {
    const conditions = [];
    const values = [];

    if (filters.id_project) {
      values.push(filters.id_project);
      conditions.push(`d.id_project = $${values.length}`);
    }

    if (filters.id_dashboard) {
      values.push(filters.id_dashboard);
      conditions.push(`d.id_dashboard = $${values.length}`);
    }

    if (filters.boardName) {
      values.push(`%${filters.boardName.trim()}%`);
      conditions.push(`d.name ILIKE $${values.length}`);
    }

    const whereClause = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : "";

    const query = `
    SELECT
      d.id_dashboard,
      d.name,
      d.description,
      d.created_at,
      d.id_project,
      p.name AS project_name,
      JSON_AGG(
        JSON_BUILD_OBJECT(
          'id', c.id_board_column,
          'name', c.name,
          'status', c.status,
          'order', c.order
        )
        ORDER BY c.order
      ) AS columns
    FROM boards d
    LEFT JOIN projects p ON p.id_project = d.id_project
    LEFT JOIN board_column c ON d.id_dashboard = c.id_dashboard
    ${whereClause}
    GROUP BY d.id_dashboard, p.name
    ORDER BY d.created_at DESC
  `;

    const data = await pool.query(query, values);
    return data.rows;
  }

  static async createDashboard({ name, description = null, id_project }) {
    const client = await pool.connect();

    try {
      await client.query("BEGIN");

      const created_at = new Date();
      const data = await client.query(
        `INSERT INTO boards(name, description, created_at, id_project) VALUES($1, $2, $3, $4) RETURNING *`,
        [name, description, created_at, id_project],
      );

      if (!data.rows.length)
        throw { status: 500, message: "Dashboard creation failed" };

      const createdDashboard = data.rows[0];

      const columns = [
        { name: "New", status: "NEW", order: 1 },
        { name: "In Progress", status: "IN_PROGRESS", order: 2 },
        { name: "Done", status: "DONE", order: 3 },
      ];

      for (const column of columns) {
        const created_at = new Date();
        await client.query(
          `
        INSERT INTO board_column(name, status, "order", id_dashboard, created_at)
        VALUES ($1, $2, $3, $4, $5)
        `,
          [
            column.name,
            column.status,
            column.order,
            createdDashboard.id_dashboard,
            created_at,
          ],
        );
      }

      await client.query("COMMIT");
      return createdDashboard;
    } catch (e) {
      await client.query("ROLLBACK");
      throw e;
    } finally {
      client.release();
    }
  }

  static async deleteDashboard(id_dashboard) {
    const data = await pool.query(
      `DELETE FROM boards WHERE id_dashboard=$1 RETURNING *`,
      [id_dashboard],
    );

    if (!data.rows.length)
      throw { status: 404, message: "Dashboard Not Found" };

    return data.rows[0];
  }

  static async getDashboard(id_dashboard) {
    const boards = await this.getDashboards({ id_dashboard });
    if (!boards.length) throw { status: 404, message: "Dashboard Not Found" };
    return boards[0];
  }

  static async updateDashboard(form) {
    const data = await pool.query(
      `UPDATE boards SET name=$2, description=$3 WHERE id_dashboard=$1 RETURNING *`,
      [form.id_dashboard, form.name, form.description],
    );

    if (!data.rows[0]) throw { status: 400, message: "Invalid data" };

    return data.rows[0];
  }
}
