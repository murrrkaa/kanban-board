import { pool } from "../config/db.js";

export class Dashboard {
  static async getDashboards() {
    const data = await pool.query(`SELECT * FROM dashboards`);
    return data.rows;
  }

  static async createDashboard({ name, description = null, id_project }) {
    const created_at = new Date();
    const data = await pool.query(
      `INSERT INTO dashboards(name, description, created_at, id_project) VALUES($1, $2, $3, $4) RETURNING *`,
      [name, description, created_at, id_project],
    );

    if (!data.rows.length)
      throw { status: 404, message: "Dashboard Not Found" };

    return data.rows[0];
  }

  static async deleteDashboard(id_dashboard) {
    const data = await pool.query(
      `DELETE FROM dashboards WHERE id_dashboard=$1 RETURNING *`,
      [id_dashboard],
    );

    if (!data.rows.length)
      throw { status: 404, message: "Dashboard Not Found" };

    return data.rows[0];
  }

  static async getDashboard(id_dashboard) {
    const data = await pool.query(
      `SELECT * FROM dashboards WHERE id_dashboard=$1`,
      [id_dashboard],
    );

    if (!data.rows.length)
      throw { status: 404, message: "Dashboard Not Found" };

    return data.rows[0];
  }
}
