import { useNotifications } from '../context/NotificationContext';

export function NotificationBar() {

  return (
    <aside className="p5-notification-bar">
      <h4>Notifications</h4>
      <ul className="p5-notification-list">
        {/* TODO: display each notification object in the notifications array */}
      </ul>
    </aside>
  );
}
