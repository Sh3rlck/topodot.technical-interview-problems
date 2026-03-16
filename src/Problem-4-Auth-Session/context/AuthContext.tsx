import React, { createContext, useContext, useState } from 'react';
import type { AuthContextType, User } from '../types/auth.types';
import { MOCK_USERS } from '../data/mockUsers';

const SESSION_KEY = 'auth_user';

const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    // TODO: Read SESSION_KEY from sessionStorage and parse it as a User.
    //       Return the parsed user if it exists, otherwise return null.
    //       This ensures the session is restored when the page is refreshed.
    //
    //       Hint: sessionStorage.getItem(key) returns a string or null.
    //             JSON.parse() can turn that string back into an object.
    return null;
  });

  /**
   * TODO: Implement the login function.
   *
   * Steps:
   *   1. Find a user in MOCK_USERS whose `username` AND `password` match
   *      the provided arguments.
   *   2. If a match is found:
   *        a. Build a User object from the match (exclude the `password` field).
   *        b. Call setCurrentUser with the new User object.
   *        c. Persist the User to sessionStorage under SESSION_KEY
   *           using JSON.stringify.
   *        d. Return true.
   *   3. If no match is found, return false.
   */
  const login = (username: string, password: string): boolean => {
    return false;
  };

  /**
   * TODO: Implement the logout function.
   *
   * Steps:
   *   1. Set currentUser back to null.
   *   2. Remove SESSION_KEY from sessionStorage.
   *
   *       Hint: sessionStorage.removeItem(key)
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
  if (!context) throw new Error('useAuth must be used within an <AuthProvider>');
  return context;
}
