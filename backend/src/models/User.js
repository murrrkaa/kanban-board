import { pool } from "../config/db.js";

export class User {
  static async getUsers() {
    const data = await pool.query(
      `SELECT user_id, name, surname, patronymic, login, id_role  * FROM users`,
    );
    return data.rows;
  }

  static async createUser({
    name,
    surname,
    patronymic = null,
    login,
    password,
    id_role,
  }) {
    const data = await pool.query(
      `INSERT INTO users(name,
        surname,
        patronymic,
        login,
        password,
        id_role) VALUES($1, $2, $3, $4, $5, $6) RETURNING user_id, name, surname, patronymic, login, id_role`,
      [name, surname, patronymic, login, password, id_role],
    );

    if (!data.rows.length) throw { status: 404, message: "User Not Created" };

    return data.rows[0];
  }

  static async deleteUser(id_user) {
    const data = await pool.query(
      `DELETE FROM users WHERE id_user=$1 RETURNING user_id, name, surname, patronymic, login, id_role`,
      [id_user],
    );

    if (!data.rows.length) throw { status: 404, message: "User Not Found" };

    return data.rows[0];
  }

  static async getUser(id_user) {
    const data = await pool.query(
      `SELECT user_id, name, surname, patronymic, login, id_role FROM users WHERE id_user=$1`,
      [id_user],
    );

    if (!data.rows.length) throw { status: 404, message: "User Not Found" };

    return data.rows[0];
  }

  static async getUserByLogin(login) {
    const data = await pool.query(`SELECT * FROM users WHERE login=$1`, [
      login,
    ]);

    if (!data.rows.length) throw { status: 404, message: "Invalid login" };

    return data.rows[0];
  }

  // static async updateUser({ id_user, params }) {
  //   const { field, value } = params;
  //   const data = await pool.query(
  //     `UPDATE users SET ${field}=$1 WHERE id_user=$2`,
  //     [value, id_user],
  //   );
  // } доделать редактирование юзеров
}
