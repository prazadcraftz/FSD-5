import React, { lazy, Suspense, useState } from 'react';
import './App.css';

const User = lazy(() => import('./User'));
const loadingFallback = <p className="loading-text">Loading user details...</p>;

function App() {
  const [isUserLoaded, setIsUserLoaded] = useState(false);

  const handleLoadUser = () => {
    setIsUserLoaded(true);
  };

  return (
    <main className="app-shell">
      <section className="card">
        <p className="badge">Experiment 5</p>
        <h1>React Lazy Loading Demo</h1>
        <p className="subtitle">
          Click the button below to load the user component only when needed.
        </p>

        <button
          className="primary-btn"
          type="button"
          onClick={handleLoadUser}
          disabled={isUserLoaded}
          aria-label="Load user component"
        >
          {isUserLoaded ? 'User Loaded' : 'Load User'}
        </button>

        {isUserLoaded ? (
          <Suspense fallback={loadingFallback}>
            <User />
          </Suspense>
        ) : (
          <p className="hint">User component not loaded yet.</p>
        )}
      </section>
    </main>
  );
}

export default App;
