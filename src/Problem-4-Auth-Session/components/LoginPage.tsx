import { useState } from 'react';
import { useAuth } from '../context/AuthContext';

interface LoginPageProps {
  onSuccess: () => void;
}

export function LoginPage({ onSuccess }: LoginPageProps) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError]       = useState('');

  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

  
    // TODO: Call login() with the current username and password values.
    //         - If login() returns false → set error to "Invalid username or password."
    //         - If login() returns true  → call onSuccess() to enter the app.
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2>Sign In</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="p4-username">Username</label>
            <input
              id="p4-username"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Enter username"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="p4-password">Password</label>
            <input
              id="p4-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter password"
              required
            />
          </div>

          {error && <p className="login-error">{error}</p>}

          <button type="submit" className="btn-primary">Login</button>
        </form>

        <div className="credentials-hint">
          <p><strong>Test credentials:</strong></p>
          <p>Admin — <code>admin / admin123</code></p>
          <p>User &nbsp;— <code>user / user123</code></p>
        </div>
      </div>
    </div>
  );
}
