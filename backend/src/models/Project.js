import { pool } from "../config/db.js";

export class Project {
  static async getProjects(filters) {
    const conditions = [];
    const values = [];

    if (filters.projectName?.trim()) {
      values.push(`%${filters.projectName.trim()}%`);
      conditions.push(`p.name ILIKE $${values.length}`);
    }

    const whereClause = conditions.length
      ? `WHERE ${conditions.join(" AND ")}`
      : "";

    const query = `
      SELECT 
        p.id_project,
        p.name,
        p.description,
        p.created_at,
        u.id_user as performer_id,
        u.name as performer_name,
        u.surname as performer_surname,
        u.patronymic as performer_patronymic
      FROM projects p
      LEFT JOIN users u ON p.id_created_by = u.id_user
      ${whereClause}
      ORDER BY p.created_at DESC
    `;

    const data = await pool.query(query, values);
    return data.rows;
  }

  static async createProject({ name, description = null, id_created_by }) {
    const created_at = new Date();
    const data = await pool.query(
      `INSERT INTO projects(name, description, created_at, id_created_by) VALUES ($1, $2, $3, $4) RETURNING *`,
      [name, description, created_at, id_created_by],
    );

    if (!data.rows.length)
      throw { status: 404, message: "Project Not Created" };

    return data.rows[0];
  }

  static async deleteProject(id_project) {
    const data = await pool.query(
      `DELETE FROM projects WHERE id_project=$1 RETURNING *`,
      [id_project],
    );

    if (!data.rows.length) throw { status: 404, message: "Project Not Found" };

    return data.rows[0];
  }

  static async getProject(id_project) {
    const data = await pool.query(
      `SELECT * FROM projects WHERE id_project=$1`,
      [id_project],
    );

    if (!data.rows.length) throw { status: 404, message: "Project Not Found" };

    return data.rows[0];
  }

  static async updateProject(form) {
    const data = await pool.query(
      `UPDATE projects SET name=$2, description=$3 WHERE id_project=$1 RETURNING *`,
      [form.id_project, form.name, form.description],
    );

    if (!data.rows[0]) throw { status: 400, message: "Invalid data" };

    return data.rows[0];
  }
}
