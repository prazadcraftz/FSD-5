# FSD-5 – Experiment 5 (React Lazy Loading)

This project is **Experiment 5** for FSD and demonstrates **Lazy Loading (Code Splitting)** in React using **Vite**.

## Aim
To understand and implement **React Lazy Loading** using `React.lazy()` and `Suspense`, so that a component is loaded **only when it is needed**.

## Concept Used
- **`React.lazy()`**: Loads a component dynamically (creates a separate bundle for it).
- **`<Suspense fallback={...}>`**: Shows a fallback UI while the lazy component is being loaded.
- **Conditional rendering + state**: Loads the component on button click.

## Project Overview (What’s in the project)

### Root
- `package.json` – project configuration and scripts (`dev`, `build`, `preview`, `lint`)
- `index.html` – single page entry; React mounts to `#root`
- `vite.config.js` – Vite configuration
- `eslint.config.js` – ESLint configuration

### `public/`
- `vite.svg` – static asset

### `src/`
- `main.jsx` – entry point; renders `<App />`
- `App.jsx` – main component; contains the **lazy-loading logic**
  - `const User = lazy(() => import('./User'))`
  - renders the `<User />` component only after clicking **Load User**
  - wraps the lazy component in `<Suspense>` with a loading message
- `User.jsx` – lazily loaded component; displays a list of users
- `App.css`, `index.css` – styling files
- `assets/` – assets folder

## How to Run

### 1) Install dependencies
```bash
npm install
```

### 2) Start development server
```bash
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173/`).

## Output / Working
1. The app first shows a **Load User** button.
2. The `User` component is **not loaded initially**.
3. When you click **Load User**, React loads `User.jsx` dynamically.
4. While loading, the fallback text **“Loading user details...”** is displayed.
5. After loading, the list of users appears.