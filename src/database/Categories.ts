import { client } from "./client";
import parseTable from "./Users";

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
