# Problem 4 — Auth Session & Role-Based UI

## Scenario

You are building the authentication layer for a new React application. The back end has already been implemented, but for this exercise a set of **mock users** is provided in `data/mockUsers.ts` — no real API calls are needed.
Your job is to wire up login, session persistence, protected navigation, and role-based UI using React state and context.

---

## What you need to build

### 1. `context/AuthContext.tsx` — Auth state & session

Implement the `AuthProvider` so that:
- Log in as any of the users provided in `MOCK_USERS`.
- Page maintains the current session after a refresh.
- Log out of the current session.

### 2. `components/LoginPage.tsx` — Login form
- Execute login logic when the form is submitted.
- Show an error message when login fails.
- Navigate into the application when login succeeds.

### 3. `components/NavBar.tsx` — Navigation
- Display the Admin Panel only when the current user has the `'admin'` role.

### 4. `components/Dashboard.tsx` — Home page
- Show a role-specific message:
  - **Admin** → prompt to visit the Admin Panel.
  - **User** → confirm standard account access.

### 5. `components/AdminPanel.tsx` — Protected page
- Deny access to the panel if the current user is not an admin.
- Render a table listing all users from `MOCK_USERS`.

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
