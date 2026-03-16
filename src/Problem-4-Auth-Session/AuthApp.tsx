import { useState } from 'react';
import { AuthProvider, useAuth } from './context/AuthContext';
import { LoginPage } from './components/LoginPage';
import { NavBar } from './components/NavBar';
import { Dashboard } from './components/Dashboard';
import { AdminPanel } from './components/AdminPanel';
import './AuthApp.css';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'admin'>('dashboard');

  // TODO: If the user is NOT authenticated, render the login page:
  //
  //         <LoginPage onSuccess={() => setCurrentPage('dashboard')} />
  //
  // TODO: If the user IS authenticated, render the full app layout:
  //
  //   1. <NavBar currentPage={currentPage} onNavigate={setCurrentPage} />
  //
  //   2. The correct page below the NavBar based on currentPage:
  //        'dashboard' → <Dashboard />
  //        'admin'     → <AdminPanel />

  return <div className="p4-placeholder">Implement the app layout here.</div>;
}

export function AuthApp() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
