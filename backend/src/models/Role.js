import { pool } from "../config/db.js";

export class Role {
  static async getRoles() {
    const data = await pool.query(`SELECT * FROM roles`);
    return data.rows;
  }
}
