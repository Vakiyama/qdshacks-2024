import { client } from "./client";

export class UserTable {
  static async createUserTable(): Promise<void> {
    const createUserSql = `
        CREATE TABLE IF NOT EXISTS User (
          user_id INTEGER PRIMARY KEY AUTOINCREMENT,
          email VARCHAR(255) NOT NULL UNIQUE,
          username VARCHAR(255) NOT NULL UNIQUE,
          password_hash VARCHAR(255) NOT NULL
        );
      `;

    try {
      const result = await client.execute(createUserSql);
      console.log("User table created", result);
    } catch (err) {
      console.error("Error occurred creating User table", err);
    }
  }

  static async dropUserTable(): Promise<void> {
    const dropUserSql = `DROP TABLE IF EXISTS User;`;

    try {
      const result = await client.execute(dropUserSql);
      console.log("User table dropped", result);
    } catch (err) {
      console.error("Error occurred dropping User table", err);
    }
  }

  static async insertFakeUsers(): Promise<void> {
    const insertUsersSql = `
      INSERT INTO User (email, username, password_hash) VALUES 
      ('fakeuser1@example.com', 'fakeuser1', 'fakepasswordhash1'),
      ('fakeuser2@example.com', 'fakeuser2', 'fakepasswordhash2');
    `;

    try {
      const result = await client.execute(insertUsersSql);
      console.log("Fake users inserted", result);
    } catch (err) {
      console.error("Error occurred inserting fake users", err);
    }
  }
}

export class CategoryTable {
  static async createCategoryTable(): Promise<void> {
    const createCategorySql = `
        CREATE TABLE IF NOT EXISTS Category (
          category_id INTEGER PRIMARY KEY AUTOINCREMENT,
          name VARCHAR(255) NOT NULL,
          energy INT NOT NULL,
          user_id INTEGER,
          FOREIGN KEY(user_id) REFERENCES User(user_id)
        );
      `;

    try {
      const result = await client.execute(createCategorySql);
      console.log("Category table created", result);
    } catch (err) {
      console.error("Error occurred creating Category table", err);
    }
  }

  static async dropCategoryTable(): Promise<void> {
    const dropCategorySql = `DROP TABLE IF EXISTS Category;`;

    try {
      const result = await client.execute(dropCategorySql);
      console.log("Category table dropped", result);
    } catch (err) {
      console.error("Error occurred dropping Category table", err);
    }
  }
  static async insertFakeCategories(): Promise<void> {
    const insertCategoriesSql = `
      INSERT INTO Category (name, energy, user_id) VALUES 
      ('Study', 10, 1),
      ('Exercise', 20, 1),
      ('Social', 30, 2),
      ('Work', 40, 2);
    `;

    try {
      const result = await client.execute(insertCategoriesSql);
      console.log("Fake categories inserted", result);
    } catch (err) {
      console.error("Error occurred inserting fake categories", err);
    }
  }
}

export class DatabaseReset {
  static async resetDatabase(): Promise<void> {
    await CategoryTable.dropCategoryTable();
    await UserTable.dropUserTable();
    await UserTable.createUserTable();
    await CategoryTable.createCategoryTable();
    await UserTable.insertFakeUsers();
    await CategoryTable.insertFakeCategories();
  }
}
