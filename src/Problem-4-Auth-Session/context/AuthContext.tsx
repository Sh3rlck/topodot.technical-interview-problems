import React, { createContext, useContext, useState } from 'react';
import type { AuthContextType, User } from '../types/auth.types';
import { MOCK_USERS } from '../data/mockUsers';

const SESSION_KEY = 'auth_user';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {

  // TODO: Get current user if available.
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    return null;
  });

  /**
   * TODO: Implement the login function.
   * Find matching user in MOCK_USERS.
   * Persist user object if login is successful.
   */
  const login = (username: string, password: string): boolean => {
    return false;
  };

  /**
   * TODO: Implement the logout function.
   */
  const logout = () => {};
  const isAuthenticated = currentUser !== null;

  return (
    <AuthContext.Provider value={{ currentUser, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error('useAuth must be used within an <AuthProvider>');

  return context;
}
