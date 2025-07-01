import React from 'react';
import { FiBook, FiCalendar, FiFileText, FiUser } from 'react-icons/fi';
import './BottomNav.css';

const NAVS = [
  { key: 'library', icon: <FiBook />, label: 'Библиотека' },
  { key: 'plan', icon: <FiCalendar />, label: 'План' },
  { key: 'diary', icon: <FiFileText />, label: 'Дневник' },
  { key: 'profile', icon: <FiUser />, label: 'Профиль' },
];

function BottomNav({ page, setPage }) {
  return (
    <nav className="bottom-nav">
      {NAVS.map(nav => (
        <button
          key={nav.key}
          className={page === nav.key ? 'active' : ''}
          onClick={() => setPage(nav.key)}
        >
          <span className="icon">{nav.icon}</span>
          <span className="label">{nav.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default BottomNav;
