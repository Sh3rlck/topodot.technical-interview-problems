import { useAuth } from '../context/AuthContext';
import { MOCK_USERS } from '../data/mockUsers';

export function AdminPanel() {
  const { currentUser } = useAuth();

  // TODO: Guard this page. Deny access if the current user is not an admin.

  return (
    <div className="p4-page-content">
      <h2>Admin Panel</h2>
      <p>Manage application users.</p>

      <table className="p4-admin-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Username</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {/* TODO: display the id, name, username, and role of each user in MOCK_USERS */}
        </tbody>
      </table>
    </div>
  );
}
