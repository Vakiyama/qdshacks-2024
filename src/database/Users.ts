import { client } from "./client";
import sqlite3 from "sqlite3";
import {
  type User,
  type UserServices,
  type ResultSet,
} from "../interface/interface";

export class UserService implements UserServices {
  async findUserByEmailAndPassword(
    email: string,
    password_hash: string
  ): Promise<User | undefined> {
    try {
      const result = await client.execute({
        sql: `SELECT * FROM User WHERE email = ? AND password_hash = ?`,
        args: [email, password_hash],
      });
      const userArray = parseTable<User>(result);
      if (result.rows.length) {
        return userArray[0];
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async findUserByUsername(username: string): Promise<User | undefined> {
    try {
      const result = await client.execute({
        sql: `SELECT * FROM User WHERE username = ?`,
        args: [username],
      });
      const userArray = parseTable<User>(result);
      if (result.rows.length) {
        return userArray[0];
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async findUserByEmail(email: string): Promise<User | undefined> {
    try {
      const result = await client.execute({
        sql: `SELECT * FROM User WHERE email = ?`,
        args: [email],
      });
      const userArray = parseTable<User>(result);
      if (result.rows.length) {
        return userArray[0];
      } else {
        return undefined;
      }
    } catch (error) {
      console.log(error);
    }
  }

  async createUser(
    email: string,
    username: string,
    password_hash: string
  ): Promise<bigint | undefined> {
    try {
      const result = await client.execute({
        sql: `INSERT INTO User (email, username, password_hash) VALUES (?, ?, ?)`,
        args: [email, username, password_hash],
      });
      return result.lastInsertRowid;
    } catch (error) {
      console.log(error);
    }
  }

  async findUserById(id: number): Promise<User | undefined> {
    try {
      const result = await client.execute({
        sql: `SELECT * FROM User WHERE user_id = ?`,
        args: [id],
      });
      const userArray = parseTable<User>(result);
      if (result.rows.length) {
        return userArray[0];
      } else {
        return undefined;
      }
    } catch (error) {
      console.error(error);
      return undefined;
    }
  }
}

export default function parseTable<T>(result: ResultSet): T[] {
  return result.rows.map((row) => {
    return result.columns.reduce((object: T, columnName, index) => {
      object[columnName as keyof T] = row[columnName];
      return object;
    }, {} as T);
  });
}
