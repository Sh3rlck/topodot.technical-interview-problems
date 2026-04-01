import { useAuth } from '../context/AuthContext';

interface NavBarProps {
  currentPage: 'dashboard' | 'admin';
  onNavigate: (page: 'dashboard' | 'admin') => void;
}

export function NavBar({ currentPage, onNavigate }: NavBarProps) {
  const { currentUser, logout } = useAuth();

  return (
    <nav className="p4-navbar">
      <span className="p4-navbar-brand">MyApp</span>

      <div className="p4-navbar-links">
        <button
          className={currentPage === 'dashboard' ? 'p4-nav-btn active' : 'p4-nav-btn'}
          onClick={() => onNavigate('dashboard')}>
          Dashboard
        </button>

        {currentUser?.role === 'admin' && (
            <button onClick={() => onNavigate('admin')}>
                Admin Panel
            </button>
        )}
      </div>

      <div className="p4-navbar-user">
        <span className="p4-user-greeting">Welcome, {currentUser?.name}</span>
        <button className="p4-btn-logout" onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
