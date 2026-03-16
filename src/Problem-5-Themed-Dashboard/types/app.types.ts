export type Theme = 'light' | 'dark';

export type NotificationType = 'info' | 'success' | 'warning' | 'error';

export interface Notification {
  id: number;
  message: string;
  type: NotificationType;
}

export interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

export interface NotificationContextType {
  notifications: Notification[];
  addNotification: (message: string, type: NotificationType) => void;
  dismissNotification: (id: number) => void;
}
