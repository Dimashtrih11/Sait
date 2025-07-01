import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Library from './pages/Library';
import Plan from './pages/Plan';
import Diary from './pages/Diary';
import Profile from './pages/Profile';
import BottomNav from './components/BottomNav';
import Login from './pages/Login';

const PAGES = {
  library: Library,
  plan: Plan,
  diary: Diary,
  profile: Profile,
};

function App() {
  const [page, setPage] = useState('library');
  const [dark, setDark] = useState(false);
  const [user, setUser] = useState(localStorage.getItem('user') || '');

  useEffect(() => {
    document.body.className = dark ? 'dark' : '';
    localStorage.setItem('theme', dark ? 'dark' : 'light');
  }, [dark]);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') setDark(true);
  }, []);

  const handleLogin = (login) => {
    setUser(login);
    localStorage.setItem('user', login);
  };

  const handleLogout = () => {
    setUser('');
    localStorage.removeItem('user');
  };

  const CurrentPage = PAGES[page];

  if (!user) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div>
      <header style={{
        background: 'var(--gradient)',
        color: '#fff',
        padding: '24px 20px 16px 20px',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        marginBottom: 24
      }}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <h1 style={{fontWeight: 700, fontSize: 28, margin: 0}}>Уход</h1>
          <div>
            <button
              onClick={() => setDark(d => !d)}
              style={{
                background: 'var(--button)',
                color: 'var(--button-fg)',
                border: 'none',
                borderRadius: 8,
                padding: '8px 16px',
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
                marginRight: 8
              }}
            >
              {dark ? 'Светлая тема' : 'Тёмная тема'}
            </button>
            <button
              onClick={handleLogout}
              style={{
                background: '#fff',
                color: '#333',
                border: '1px solid #ccc',
                borderRadius: 8,
                padding: '8px 16px',
                fontWeight: 600,
                fontSize: 15,
                cursor: 'pointer',
                boxShadow: '0 1px 4px rgba(0,0,0,0.04)'
              }}
            >
              Выйти
            </button>
          </div>
        </div>
        <div style={{marginTop: 8, fontSize: 15, opacity: 0.9}}>Ваш помощник по уходу</div>
      </header>
      <main style={{ paddingBottom: 80 }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={page}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
          >
            <CurrentPage dark={dark} />
          </motion.div>
        </AnimatePresence>
      </main>
      <BottomNav page={page} setPage={setPage} />
    </div>
  );
}

export default App;
