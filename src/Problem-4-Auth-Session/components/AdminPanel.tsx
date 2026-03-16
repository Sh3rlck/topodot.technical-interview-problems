import { useAuth } from '../context/AuthContext';
import { MOCK_USERS } from '../data/mockUsers';

export function AdminPanel() {
  const { currentUser } = useAuth();

  // TODO: Guard this page.
  //       If currentUser's role is NOT 'admin', return early with:
  //
  //         <div className="p4-access-denied">
  //           <h3>Access Denied</h3>
  //           <p>You do not have permission to view this page.</p>
  //         </div>
  //
  //       This acts as a safety net even if the nav link is hidden.

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
          {/* TODO: Map over MOCK_USERS and render a <tr> for each user.
                    Each row should display the user's id, name, username, and role
                    in the appropriate <td> elements.
                    Remember to add a key prop to each <tr>. */}
        </tbody>
      </table>
    </div>
  );
}
