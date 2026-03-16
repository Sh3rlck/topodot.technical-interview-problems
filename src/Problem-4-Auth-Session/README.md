# Problem 4 — Auth Session & Role-Based UI

## Scenario

You are building the authentication layer for a new React application. The back end has already been implemented, but for this exercise a set of **mock users** is provided in `data/mockUsers.ts` — no real API calls are needed.

Your job is to wire up login, session persistence, protected navigation, and role-based UI using React state and context.

---

## What you need to build

### 1. `context/AuthContext.tsx` — Auth state & session

Implement the `AuthProvider` so that:

- **Session restore on mount** — if a session exists in `sessionStorage`, initialize `currentUser` from it so a page refresh does not log the user out.
- **`login(username, password)`** — validates credentials against `MOCK_USERS`. On success, updates state, persists the user to `sessionStorage`, and returns `true`. Returns `false` on failure.
- **`logout()`** — resets state to `null` and clears `sessionStorage`.

### 2. `components/LoginPage.tsx` — Login form

- Connect the form's submit handler to `login()` from context.
- Show an error message when login fails.
- Call `onSuccess()` to navigate into the app on a successful login.

### 3. `components/NavBar.tsx` — Navigation

- Render the **Admin Panel** nav link **only** when the current user has the `'admin'` role.

### 4. `components/Dashboard.tsx` — Home page

- Show a role-specific message:
  - **Admin** → prompt to visit the Admin Panel.
  - **User** → confirm standard account access.

### 5. `components/AdminPanel.tsx` — Protected page

- **Guard** the page: if the current user is not an admin, render an *Access Denied* message instead of the table.
- Render a table listing all users from `MOCK_USERS`.

### 6. `AuthApp.tsx` — App entry point

- When **not authenticated** → render `<LoginPage>`.
- When **authenticated** → render `<NavBar>` and the active page (`<Dashboard>` or `<AdminPanel>`).

---

## Test credentials

| Role  | Username | Password   |
|-------|----------|------------|
| Admin | `admin`  | `admin123` |
| User  | `user`   | `user123`  |

---

## File structure

```
Problem-4-Auth-Session/
├── AuthApp.tsx              ← app entry (wire everything together here)
├── AuthApp.css              ← pre-written styles (do not modify)
├── context/
│   └── AuthContext.tsx      ← implement login, logout, session restore
├── components/
│   ├── LoginPage.tsx        ← implement form submit handler
│   ├── NavBar.tsx           ← implement admin-only nav link
│   ├── Dashboard.tsx        ← implement role-based message
│   └── AdminPanel.tsx       ← implement page guard + user table
├── data/
│   └── mockUsers.ts         ← pre-filled, do not modify
└── types/
    └── auth.types.ts        ← pre-filled, do not modify
```

---

## Concepts demonstrated

- `createContext` / `useContext` for global auth state
- Session persistence with `sessionStorage`
- Conditional rendering based on authentication state
- Role-based UI (showing/hiding elements by role)
- Component guards (protecting a page from unauthorised access)
