import React, { createContext, useContext, useState } from 'react';
import type {NotificationContextType, NotificationType} from "../types/app.types.ts";

const NotificationContext = createContext<NotificationContextType | null>(null);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  // TODO: Declare a state variable for the notifications array.
  //       It should be of type Notification[] and default to an empty array.

  /**
   * TODO: Implement addNotification.
   *
   * Create a new Notification object:
   *   - id:      Date.now()  (a simple unique identifier)
   *   - message: the provided message argument
   *   - type:    the provided type argument
   *
   * Append it to the notifications array WITHOUT mutating state directly.
   * Hint: use the spread operator → [...prev, newNotification]
   */
  const addNotification = (_message: string, _type: NotificationType) => {};

  /**
   * TODO: Implement dismissNotification.
   *
   * Remove the notification whose id matches the provided id argument.
   * The remaining notifications should stay in the array.
   * Hint: Array.filter()
   */
  const dismissNotification = (_id: number) => {};

  const notifications: Notification[] = []; // TODO: Replace with your state variable.

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
