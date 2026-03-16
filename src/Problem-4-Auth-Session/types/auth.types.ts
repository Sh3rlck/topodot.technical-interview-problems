export type Role = 'admin' | 'user';

export interface User {
  id: number;
  username: string;
  role: Role;
  name: string;
}

export interface AuthContextType {
  currentUser: User | null;
  isAuthenticated: boolean;
  login: (username: string, password: string) => boolean;
  logout: () => void;
}
