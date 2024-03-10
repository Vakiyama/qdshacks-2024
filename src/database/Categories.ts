import parseTable from "./Users";
import { client } from "./client";
import { type CategoryServices, type Category } from "../interface/interface";

export class CategoryService implements CategoryServices {
  async createCategory(
    name: string,
    energy: number,
    user_id: number
  ): Promise<bigint | undefined> {
    try {
      const sql = ` INSERT INTO Category (name, energy, user_id) VALUES (?, ?, ?)`;
      const result = await client.execute({
        sql: sql,
        args: [name, energy, user_id],
      });

      return result.lastInsertRowid;
    } catch (error) {
      console.log(error);
      console.log("Error creating category");
    }
  }

  async removeCategory(name: string, userId: number): Promise<void> {
    try {
      // Update the SQL query to include a condition for both the category name and the creator_id
      const sqlQuery = `DELETE FROM Category WHERE name = ? AND user_id = ?`;

      // Execute the query with both the name and userId as arguments
      await client.execute({
        sql: sqlQuery,
        args: [name, userId],
      });
    } catch (error) {
      console.error(error);
    }
  }

  async getCateoriesByUserId(id: number): Promise<Category[] | undefined> {
    try {
      const sql = `SELECT category_id FROM Category
        WHERE user_id = ?;
        `;
      const result = await client.execute({
        sql: sql,
        args: [id],
      });
      const categoryArray = parseTable<Category>(result);
      return categoryArray;
    } catch (error) {
      console.log("ERROR ");
    }
  }
  async updateCategory(
    id: number,
    name: string,
    energy: number
  ): Promise<void> {
    try {
      const sql = `UPDATE Category SET name = ?, energy = ? WHERE category_id = ?`;
      await client.execute({
        sql: sql,
        args: [name, energy, id],
      });
    } catch (error) {
      console.log("ERROR");
    }
  }
  async getCategoryById(id: number): Promise<Category | undefined> {
    try {
      const sql = `SELECT * FROM Category WHERE category_id = ?`;
      const result = await client.execute({
        sql: sql,
        args: [id],
      });
      const categoryArray = parseTable<Category>(result);
      return categoryArray[0];
    } catch (error) {
      console.log("ERROR");
    }
  }
}

async function createCategoryTable(): Promise<void> {
  const sql = `
      CREATE TABLE Category (
        category_id INT PRIMARY KEY,
        name VARCHAR(255),8
        energy DECIMAL(10, 2),
        user_id INT,
        FOREIGN KEY (user_id) REFERENCES Users(user_id)
      );
    `;

  try {
    const result = await client.execute(sql);
    console.log("Table created", result);
  } catch (err) {
    console.error("Error occurred", err);
  }
}

createCategoryTable();
