import { pool } from "../config/db.js";

export class User {
  static async getUsers() {
    const data = await pool.query(
      `SELECT id_user, name, surname, patronymic, login, id_role FROM users ORDER BY name ASC`,
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
      `SELECT id_user, name, surname, patronymic, login, id_role FROM users WHERE id_user=$1`,
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

  static async updateUser(form) {
    const updatedData = {
      name: form.name,
      surname: form.surname,
      patronymic: form.patronymic,
      login: form.login,
      id_role: form.id_role,
    };

    const id_user = form.id_user;

    const data = await pool.query(
      `UPDATE users SET name=$1, surname=$2, patronymic=$3, login=$4, id_role=$5 WHERE id_user=$6 RETURNING id_user, name, surname, patronymic, login, id_role`,
      [
        updatedData.name,
        updatedData.surname,
        updatedData.patronymic,
        updatedData.login,
        updatedData.id_role,
        id_user,
      ],
    );

    if (!data.rows[0]) throw { status: 400, message: "Invalid data" };

    return data.rows[0];
  }
}
