import React, { createContext, useContext, useState } from 'react';
import type {NotificationContextType, NotificationType, Notification} from "../types/app.types.ts";

const NotificationContext = createContext<NotificationContextType | null>(null);

export function NotificationProvider({ children }: { children: React.ReactNode }) {

  const [notifications] = useState<Notification[]>([]);

  /**
   * TODO: Implement addNotification. Add new notification object to the notifications array
   */
  const addNotification = (_message: string, _type: NotificationType) => {};

  /**
   * TODO: Implement dismissNotification. Removes the notification object from the notifications array with the given id.
   */
  const dismissNotification = (_id: number) => {};

  return (
    <NotificationContext.Provider value={{ notifications, addNotification, dismissNotification }}>
      {children}
    </NotificationContext.Provider>
  );
}

export function useNotifications(): NotificationContextType {
  const context = useContext(NotificationContext);
  if (!context) throw new Error('useNotifications must be used within a <NotificationProvider>');
  return context;
}
