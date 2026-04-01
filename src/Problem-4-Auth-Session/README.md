# Problem 4 — Auth Session & Role-Based UI

## Scenario

You are building the authentication layer for a new React application. The backend is already implemented, but for this exercise, a set of mock users is provided in data/mockUsers.ts, so no real API calls are required.

The authentication layer should:

- Log in as any of the users provided in `MOCK_USERS`.
- Allow developers to protect certain pages from unauthorized access
- Persist the user’s session even after a page refresh
- Log out of the current session.

Questions:

- Which React API(s) would you use to implement this authentication layer?
- How can different components in the application access and interact with it?

For this exercise, the UI components, styles, login form, and mock user data are already provided. Your task is to implement the authentication logic and integration.

## Test credentials

| Role  | Username | Password   |
|-------|----------|------------|
| Admin | `admin`  | `admin123` |
| User  | `user`   | `user123`  |

---

## File structure

```
Problem-4-Auth-Session/
├── AuthApp.tsx              ← pre-filled, needs implementation
├── AuthApp.css              ← pre-written style
├── context/
│   └── AuthContext.tsx      ← implement login, logout, session restore
├── components/
│   ├── LoginPage.tsx        ← pre-filled, needs implementation
│   ├── NavBar.tsx           ← pre-filled, needs implementation
│   ├── Dashboard.tsx        ← pre-filled, needs implementation
│   └── AdminPanel.tsx       ← pre-filled, needs implementation
├── data/
│   └── mockUsers.ts         ← pre-filled
└── types/
    └── auth.types.ts        ← pre-filled
```
