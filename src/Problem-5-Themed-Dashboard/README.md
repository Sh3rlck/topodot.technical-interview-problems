# Problem 5 — Themed Dashboard with Context

## Scenario

You are adding a shared-state layer to a dashboard application. Two independent pieces of global state — the **UI theme** and a **notification feed** — need to be accessible by components at different levels of the component tree, without passing props through every intermediate component (prop drilling).

Your job is to implement two React contexts and wire them into the pre-built component shells.

---

## What you need to build

### 1. `context/ThemeContext.tsx` — UI theme

Implement `ThemeProvider` so that:

- It manages a `theme` state value (`'light'` or `'dark'`), defaulting to `'light'`.
- `toggleTheme()` switches between the two values.

### 2. `context/NotificationContext.tsx` — Notification feed

Implement `NotificationProvider` so that:

- It manages a `notifications` state array, starting empty.
- `addNotification(message, type)` appends a new `Notification` object to the array.  Use `Date.now()` as the notification's `id`.
- `dismissNotification(id)` removes the notification with the matching `id`.

### 3. `components/Header.tsx`

- Add a **theme toggle button** that calls `toggleTheme()` and updates its label based on the current theme.
- Display a **notification badge** showing the count of active notifications. Hide it when the count is 0.

### 4. `components/Sidebar.tsx`

- Apply the correct theme CSS class to the sidebar element (`p5-sidebar--light` or `p5-sidebar--dark`).

### 5. `components/FeaturePanel.tsx`

- Apply the correct theme CSS class to the panel wrapper.
- Wire each **Trigger** button to call `addNotification` with the card's pre-defined message and type.

### 6. `components/NotificationBar.tsx`

- Render the list of active notifications, each with a dismiss (`×`) button.
- Show an empty-state message when there are no notifications.

### 7. `ThemedApp.tsx` — App entry point

- Wrap `<AppLayout>` with both `ThemeProvider` and `NotificationProvider` so the entire component tree can access both contexts.

---

## File structure

```
Problem-5-Themed-Dashboard/
├── ThemedApp.tsx               ← wrap AppLayout with both providers here
├── ThemedApp.css               ← pre-written styles (do not modify)
├── context/
│   ├── ThemeContext.tsx         ← implement theme state + toggleTheme
│   └── NotificationContext.tsx  ← implement notification state + add/dismiss
├── components/
│   ├── Header.tsx               ← implement toggle button + badge
│   ├── Sidebar.tsx              ← implement theme class
│   ├── FeaturePanel.tsx         ← implement theme class + trigger buttons
│   └── NotificationBar.tsx      ← implement notification list + dismiss
└── types/
    └── app.types.ts             ← pre-filled, do not modify
```

---

## Concepts demonstrated

- `createContext` / `useContext` for sharing state without prop drilling
- Multiple independent contexts in the same app
- Custom consumer hooks (`useTheme`, `useNotifications`) as a clean API over raw `useContext`
- Composing providers at the application root
- Immutable array state updates (spread for add, filter for remove)
