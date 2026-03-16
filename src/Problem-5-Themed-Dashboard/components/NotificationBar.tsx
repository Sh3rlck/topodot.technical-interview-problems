import { useNotifications } from '../context/NotificationContext';

export function NotificationBar() {
  // TODO: Call useNotifications() and destructure `notifications` and `dismissNotification`.

  // TODO: If notifications is empty, render the empty state instead of the list:
  //
  //   <aside className="p5-notification-bar p5-notification-bar--empty">
  //     <h4>Notifications</h4>
  //     <p>No notifications.</p>
  //   </aside>

  return (
    <aside className="p5-notification-bar">
      <h4>Notifications</h4>
      <ul className="p5-notification-list">
        {/* TODO: Map over notifications and render a <li> for each one.
                  Each <li> should have:
                    - key={notification.id}
                    - className `p5-notification-item p5-notification-item--{type}`
                  Inside each <li>:
                    - A <span> with the notification message.
                    - A <button> with className "p5-dismiss-btn" and the label "×"
                      that calls dismissNotification(notification.id) when clicked. */}
      </ul>
    </aside>
  );
}
