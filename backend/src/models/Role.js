import { pool } from "../config/db.js";

export class Role {
  static async getRoles() {
    const data = await pool.query(`SELECT * FROM roles`);
    return data.rows;
  }

  static async getRole(id) {
    const data = await pool.query(`SELECT * FROM roles WHERE id_role=$1`, [id]);
    return data.rows;
  }
}
