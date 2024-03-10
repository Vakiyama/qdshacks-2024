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
    username: string,
    password: string
  ) => Promise<User | null>;
  findUserByUsername: (username: string) => Promise<User | null>;
  findUserByEmail: (email: string) => Promise<User | null>;
  createUser: (username: string, password: string) => Promise<User>;
  findUserById: (id: string) => Promise<User | null>;
}

export interface Category {
  name: string;
  energy: number;
  creatorId: number;
}

export interface CategoryServices {
  createCategory: (name: string) => Promise<Category>;
  findCategoryByName: (name: string) => Promise<Category | null>;
  findCategoryById: (id: string) => Promise<Category | null>;
}
