# Problem 5 — Themed Dashboard with Context

## Scenario

You are adding a shared-state layer to a dashboard application. Two independent pieces of global state — the **UI theme** and a **notification feed** — need to be accessible by components at different levels of the component tree, without passing props through every intermediate component.
Your job is to implement two React contexts and wire them into the pre-built component shells.

---

## What you need to build

### 1. `context/ThemeContext.tsx` — UI theme
- Manage available themes and the current theme.
- Allow the ability to toggle between themes.
- Light is the default theme.

### 2. `context/NotificationContext.tsx` — Notification feed
- Manage a list of active notifications.
- Allow the ability to add and remove notifications.

### 3. `components/Header.tsx`
- Add a theme toggle button that updates its state based on the current theme.
- Display a notification badge showing the count of active notifications. Hide it when the count is 0.

### 4. `components/Sidebar.tsx`
- Apply the correct theme CSS class to the sidebar element (`p5-sidebar--light` or `p5-sidebar--dark`).

### 5. `components/FeaturePanel.tsx`
- Implement trigger button to add notifications.

### 6. `components/NotificationBar.tsx`
- Render the list of active notifications, each with a dismiss (`×`) button, and the notification text.
- Show an empty-state message when there are no notifications.

### 7. `ThemedApp.tsx` — App entry point
- Implement ThemeProvider and NotificationProvider to wrap the AppLayout component.
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
