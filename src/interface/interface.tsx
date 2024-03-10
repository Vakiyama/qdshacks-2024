export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface Session {
  cookie: {
    originalMaxAge: number;
    expires: string;
    secure: boolean;
    httpOnly: boolean;
    path: string;
  };
  flash: string;
  userId: string;
}

export interface UserServices {
  findUserByEmailAndPassword: (
    email: string,
    password_hash: string
  ) => Promise<User | undefined>;
  findUserByUsername: (username: string) => Promise<User | undefined>;
  findUserByEmail: (email: string) => Promise<User | undefined>;
  createUser: (
    email: string,
    username: string,
    password_hash: string
  ) => Promise<bigint | undefined>;
  findUserById: (id: number) => Promise<User | undefined>;
}

export interface Category {
  categoryId: number;
  name: string;
  energy: number;
  creatorId: number;
}

export interface CategoryServices {
  createCategory: (name: string, energy: number, user_id: number) => Promise<bigint | undefined>;
  removeCategory: (name: string, user_id: number) => Promise<void>;
  getCateoriesByUserId: (id: number) => Promise<Category[] | undefined>;
}
export interface ResultSet {
  rows: Array<{ [key: string]: any }>;
  columns: string[];
}
