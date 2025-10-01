import { pool } from "../config/db.js";

export class Project {
  static async getProjects() {
    const data = await pool.query(`SELECT * FROM projects`);
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
}
