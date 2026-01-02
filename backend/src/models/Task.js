import { pool } from "../config/db.js";

export class Task {
  static async getTasks() {
    const data = await pool.query(`SELECT * FROM tasks`);
    return data.rows;
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

  static async getTasksByColumn(id_board_column) {
    const data = await pool.query(
      `SELECT t.id_task as id, t.name, t.description, t.created_at as "createdAt", t.priority, t.id_performer as "performerId", u.name as "performerName", u.surname as "performerSurname", u.patronymic as "performerPatronymic" FROM tasks t
        LEFT JOIN users u ON u.id_user = t.id_performer
        WHERE id_board_column=$1`,
      [id_board_column],
    );
    return data.rows || [];
  }
}
