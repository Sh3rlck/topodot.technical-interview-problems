import { User } from '../types/auth.types';

export interface MockUser extends User {
  password: string;
}

export const MOCK_USERS: MockUser[] = [
  { id: 1, username: 'admin', password: 'admin123', role: 'admin', name: 'Alice Admin' },
  { id: 2, username: 'user',  password: 'user123',  role: 'user',  name: 'Bob User'   },
];
