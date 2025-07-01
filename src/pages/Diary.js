import React, { useState } from 'react';

const defaultNotes = [
  { date: "10.06.2024", text: "Проведён уход" },
  { date: "11.06.2024", text: "Записано наблюдение" }
];

function Diary() {
  const [notes, setNotes] = useState(defaultNotes);
  const [input, setInput] = useState("");

  const addNote = () => {
    if (input.trim()) {
      setNotes([{ date: new Date().toLocaleDateString(), text: input }, ...notes]);
      setInput("");
    }
  };

  return (
    <div style={{ padding: '32px 16px 0 16px' }}>
      <h2 style={{ marginBottom: 24 }}>Дневник</h2>
      <div style={{ marginBottom: 18 }}>
        <input
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Новая запись..."
          style={{
            padding: '10px 16px',
            borderRadius: 8,
            border: '1px solid var(--border)',
            fontSize: 15,
            marginRight: 8
          }}
        />
        <button
          onClick={addNote}
          style={{
            background: 'var(--button)',
            color: 'var(--button-fg)',
            border: 'none',
            borderRadius: 8,
            padding: '10px 18px',
            fontWeight: 600,
            fontSize: 15,
            cursor: 'pointer'
          }}
        >
          Добавить
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {notes.map((n, i) => (
          <li
            key={i}
            style={{
              background: 'var(--card)',
              borderRadius: 12,
              marginBottom: 12,
              padding: '14px 18px',
              fontSize: 15
            }}
          >
            <b>{n.date}:</b> {n.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Diary;
