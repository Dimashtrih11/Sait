import React from 'react';

function Profile() {
  return (
    <div style={{ padding: '32px 16px 0 16px' }}>
      <h2 style={{ marginBottom: 24 }}>Профиль</h2>
      <div style={{
        background: 'var(--card)',
        borderRadius: 18,
        padding: '24px 20px',
        marginBottom: 18,
        display: 'flex',
        alignItems: 'center',
        gap: 18
      }}>
        <img
          src="https://randomuser.me/api/portraits/women/44.jpg"
          alt="avatar"
          style={{
            width: 64,
            height: 64,
            borderRadius: '50%',
            objectFit: 'cover',
            border: '3px solid var(--button)'
          }}
        />
        <div>
          <div style={{ fontWeight: 600, fontSize: 18 }}>Анна Петрова</div>
          <div style={{ color: 'var(--text-secondary)', fontSize: 14 }}>Пользователь</div>
        </div>
      </div>
      <div style={{
        background: 'var(--card)',
        borderRadius: 18,
        padding: '18px 20px',
        fontSize: 15
      }}>
        <div style={{ marginBottom: 10 }}>Настройки профиля и приложения будут здесь.</div>
        <div style={{ color: 'var(--text-secondary)' }}>Скоро появится больше функций!</div>
      </div>
    </div>
  );
}

export default Profile;
