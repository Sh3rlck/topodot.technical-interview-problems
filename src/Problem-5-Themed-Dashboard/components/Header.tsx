import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../context/NotificationContext';

export function Header() {

  return (
    <header className="p5-header">
      <span className="p5-app-title">My Dashboard</span>

      <div className="p5-header-actions">
        {/* TODO: Implement Toggle button*/}

        {/* TODO: Implement notification count badge */}
      </div>
    </header>
  );
}
