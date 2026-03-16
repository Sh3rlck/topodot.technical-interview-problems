import { useTheme } from '../context/ThemeContext';
import { useNotifications } from '../context/NotificationContext';

export function Header() {
  // TODO: Call useTheme() and destructure `theme` and `toggleTheme`.
  // TODO: Call useNotifications() and destructure `notifications`.

  return (
    <header className="p5-header">
      <span className="p5-app-title">My Dashboard</span>

      <div className="p5-header-actions">
        {/* TODO: Render a button that calls toggleTheme() when clicked.
                  Its label should be:
                    "Switch to Dark"  → when theme is 'light'
                    "Switch to Light" → when theme is 'dark'
                  Apply className "p5-theme-btn" to it. */}

        {/* TODO: Render a notification count badge ONLY when there is at least
                  1 notification. Show the total count of notifications.
                  Apply className "p5-badge" to the element. */}
      </div>
    </header>
  );
}
