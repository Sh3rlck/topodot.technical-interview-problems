import { useAuth } from '../context/AuthContext';

export function Dashboard() {
  const { currentUser } = useAuth();

  return (
    <div className="p4-page-content">
      <h2>Dashboard</h2>
      <p>Welcome back, <strong>{currentUser?.name}</strong>!</p>

      {currentUser?.role === 'admin' &&
          <div className="p4-info-box p4-info-box--admin">
              <strong>Admin account detected.</strong>
              <p>You have full access. Navigate to the Admin Panel to manage users.</p>
          </div>
      }

        {currentUser?.role === 'user' &&
            <div className="p4-info-box p4-info-box--user">
                <strong>Standard account.</strong>
                <p>You are logged in with a regular user account.</p>
            </div>
        }
    </div>
  );
}
