import { client} from "./client"
import { type CategoryServices, type Category} from "../interface/interface"


export class CategoryService implements CategoryServices {
     async createCategory (name: string, energy: number): Promise <bigint | undefined> {
        try {
            const sql =` INSERT INTO Category (name, energy) VALUES (?, ?) RETURNING *`;
             const result = await client.execute({
                 sql: sql,
                 args: [name, energy]
             })

             return result.lastInsertRowid

        } catch (error) {
            console.log(error)
        }
        
    }

    async removeCategory (name: string): Promise <void> {
      try {
        const sqlQuery = `DELETE FROM Category 
        WHERE category_name = ?`;
        await client.execute({
          sql: sqlQuery,
          args: [name]
        })
      } catch (error) {
        console.error(error)
      }
    }

    async findCategoryByName (name: string): Promise<Category | undefined> {
      try {
        const sql = `SELECT name FROM Category
        WHERE name = ?;
        `;
        const result = await client.execute({
          sql: sql,
          args: [name]
        })
        const categoryArray = parseTable<CategoryService>(result);
      } catch (error) {
        console.log("ERROR ")
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
      console.log('Table created', result);
    } catch (err) {
      console.error('Error occurred', err);
    }
  }
  

  createCategoryTable();
  