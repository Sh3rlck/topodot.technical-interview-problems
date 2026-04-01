import { useState } from 'react';
import { LoginPage } from './components/LoginPage';
import { NavBar } from './components/NavBar';
import { Dashboard } from './components/Dashboard';
import { AdminPanel } from './components/AdminPanel';
import './AuthApp.css';

function AppContent() {
  const { isAuthenticated } = useAuth();
  const [currentPage, setCurrentPage] = useState<'dashboard' | 'admin'>('dashboard');

  if (!isAuthenticated) {
    return <LoginPage onSuccess={() => setCurrentPage('dashboard')} />;
  }

  return (
      <>
        <NavBar currentPage={currentPage} onNavigate={setCurrentPage} />
        {currentPage === 'dashboard' ? <Dashboard /> : <AdminPanel />}
      </>
  );
}

export function AuthApp() {
  return (
      <AppContent />
  );
}
