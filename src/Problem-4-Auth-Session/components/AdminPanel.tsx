import { useAuth } from '../context/AuthContext';
import { MOCK_USERS } from '../data/mockUsers';

export function AdminPanel() {
  const { currentUser } = useAuth();

    if (currentUser?.role !== 'admin') {
        return (
            <div className="p4-access-denied">
                <h3>Access Denied</h3>
                <p>You do not have permission to view this page.</p>
            </div>
        );
    }

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
          {
              MOCK_USERS.map((user) => {
                  return (
                      <tr key={user.id}>
                          <td>{user.id}</td>
                          <td>{user.name}</td>
                          <td>{user.username}</td>
                          <td>{user.role}</td>
                      </tr>
                  )
              })
          }
        </tbody>
      </table>
    </div>
  );
}
