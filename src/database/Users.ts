import { client } from './client';
import  sqlite3  from 'sqlite3';


async function userTable () {
    const sqlQuery = ` CREATE TABLE User (
        user_id INT PRIMARY KEY,
        email VARCHAR (255) NOT NULL,
        username VARCHAR(255) NOT NULL,
        password_hash VARCHAR(255) NOT NULL
    );
    `;

    try {
        const result = await client.execute(sqlQuery);
        console.log('Table created', result);
      } catch (err) {
        console.error('Error occurred', err);
      }
    }
    
// userTable();


// interface ResultSet {
//     rows: Array<{ [key: string]: any }>;
//     columns: string[];
//   }
  
//   function parseTable<T>(result: ResultSet): T[] {
//     return result.rows.map((row) => {
//       return result.columns.reduce((object: T, columnName, index) => {
//         object[columnName as keyof T] = row[columnName];
//         return object;
//       }, {} as T);
//     });
//   }
  
async function findUserById(id: number): Promise <User> {
    
    try {
      const user = await client.execute({
            sql:`SELECT * FROM User
            WHERE user_id = ?`,
            args: [id]
        })
        return user;

    } catch (error) {
        console.log(error)
    }

}


findUserById(1);