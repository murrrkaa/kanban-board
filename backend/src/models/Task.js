import { pool } from "../config/db.js";

export class Task {
  static async getTasks(filters = {}) {
    const conditions = [];
    const values = [];

    Object.keys(filters).forEach((key) => {
      const value = filters[key];
      if (value !== undefined && value !== null) {
        values.push(value);
        switch (key) {
          case "id_board_column":
            conditions.push(`t.id_board_column = $${values.length}`);
            break;
          case "id_dashboard":
            conditions.push(`b.id_dashboard = $${values.length}`);
            break;
          case "id_project":
            conditions.push(`p.id_project = $${values.length}`);
            break;
          default:
            conditions.push(`${key} = $${values.length}`);
        }
      }
    });

    const whereClause = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : "";

    const query = `
    SELECT
      t.id_task as id,
      t.name,
      t.description,
      t.created_at as "createdAt",
      t.priority,
      t.id_performer as "performerId",
      u.name as "performerName",
      u.surname as "performerSurname",
      u.patronymic as "performerPatronymic",
      b.id_dashboard as "boardId",
      boards.id_project as "projectId",
      t.id_board_column as "boardColumnId"
    FROM tasks t
    LEFT JOIN users u ON u.id_user = t.id_performer
    LEFT JOIN board_column b ON t.id_board_column = b.id_board_column
    LEFT JOIN boards ON boards.id_dashboard = b.id_dashboard
    ${whereClause}
    ORDER BY t.created_at DESC
  `;

    const data = await pool.query(query, values);
    return data.rows || [];
  }

  static async getTask(id_task) {
    const data = await pool.query(`SELECT * FROM tasks WHERE id_task=$1`, [
      id_task,
    ]);
    if (!data.rows[0]) throw { status: 404, message: "Task Not Found" };

    return data.rows[0];
  }

  static async createTask({
    name,
    priority,
    id_board_column,
    id_performer,
    description = null,
  }) {
    const created_at = new Date();
    const data = await pool.query(
      `INSERT INTO tasks(name, created_at, priority, id_board_column, id_performer,
    description) VALUES($1, $2, $3, $4, $5, $6) RETURNING *`,
      [name, created_at, priority, id_board_column, id_performer, description],
    );
    if (!data.rows[0]) throw { status: 404, message: "Task Not Created" };

    return data.rows[0];
  }

  static async deleteTask(id_task) {
    const data = await pool.query(
      `DELETE FROM tasks WHERE id_task=$1 RETURNING *`,
      [id_task],
    );
    if (!data.rows[0]) throw { status: 404, message: "Task Not Deleted" };

    return data.rows[0];
  }

  static async updateTask(form) {
    const data = await pool.query(
      `UPDATE tasks SET name=$1, description=$2, priority=$3, id_board_column=$4, id_performer=$5 WHERE id_task=$6 RETURNING name, description, priority, id_board_column, id_performer`,
      [
        form.name,
        form.description,
        form.priority,
        form.id_board_column,
        form.id_performer,
        form.id,
      ],
    );

    if (!data.rows[0]) throw { status: 400, message: "Invalid data" };

    return data.rows[0];
  }
}
