import { pool } from "../config/db.js";

export class Comment {
  static async getComments(id_task) {
    const data = await pool.query(`SELECT * FROM comments WHERE id_task=$1`, [
      id_task,
    ]);
    if (!data.rows) throw { status: 404, message: "Comment Not Found" };

    return data.rows;
  }

  static async createComment({ content, id_task, id_author }) {
    const created_at = new Date();

    const query = `
    WITH inserted_comment AS (
      INSERT INTO comments (content, created_at, id_task, id_author)
      VALUES ($1, $2, $3, $4)
      RETURNING *
    )
    SELECT
      c.id_comment as "id",
      c.id_author as "authorId",
      c.content as "content",
      c.created_at as "createdAt",
      u.name as "authorName",
      u.surname as "authorSurname",
      u.patronymic as "authorPatronymic"
    FROM inserted_comment c
    LEFT JOIN users u ON u.id_user = c.id_author
  `;

    const data = await pool.query(query, [
      content,
      created_at,
      id_task,
      id_author,
    ]);

    if (!data.rows[0]) {
      throw { status: 400, message: "Comment Not Found" };
    }

    return data.rows[0];
  }

  static async deleteComment(id_comment) {
    const data = await pool.query(
      `DELETE FROM comments WHERE id_comment=$1 RETURNING *`,
      [id_comment],
    );

    if (!data.rows.length) throw { status: 404, message: "Comment Not Found" };

    return data.rows[0];
  }
}
