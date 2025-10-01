import { pool } from "../config/db.js";

export class Comment {
  static async getComments(id_task) {
    const data = pool.query(`SELECT * FROM comments WHERE id_task=$1`, [
      id_task,
    ]);
    if (!data.rows) throw { status: 404, message: "Comment Not Found" };

    return data.rows;
  }
  static async createComment({ content, id_task, id_author }) {
    const created_at = new Date();
    const data = pool.query(
      `INSERT INTO comments(content, created_at, id_task, id_author) VALUES($1, $2, $3, $4) RETURNING *`,
      [content, created_at, id_task, id_author],
    );

    if (!data.rows[0]?.length)
      throw { status: 404, message: "Comment Not Found" };

    return data.rows[0];
  }
  static async deleteComment(id_comment) {
    const data = pool.query(`DELETE FROM comments WHERE id_comment=$1`, [
      id_comment,
    ]);

    if (!data.rows[0]?.length)
      throw { status: 404, message: "Comment Not Found" };

    return data.rows[0];
  }
}
