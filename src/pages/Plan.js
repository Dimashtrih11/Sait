import React, { useState } from 'react';

const MEDICAL_DATA = {
  'кашель': {
    recommendations: 'Пить больше тёплой жидкости, покой, проветривать комнату.',
    drugs: [
      { name: 'Амброксол', link: 'https://www.rlsnet.ru/tn_index_id_119.htm', schedule: '1 таблетка 2 раза в день' },
      { name: 'Пектусин', link: 'https://www.rlsnet.ru/tn_index_id_123.htm', schedule: '1 таблетка 3 раза в день' }
    ]
  },
  'температура': {
    recommendations: 'Пить больше жидкости, при температуре выше 38°С — жаропонижающее.',
    drugs: [
      { name: 'Парацетамол', link: 'https://www.rlsnet.ru/tn_index_id_1238.htm', schedule: '1 таблетка 3 раза в день' }
    ]
  },
  'насморк': {
    recommendations: 'Промывать нос солевым раствором, использовать сосудосуживающие капли при необходимости.',
    drugs: [
      { name: 'Нафтизин', link: 'https://www.rlsnet.ru/tn_index_id_1234.htm', schedule: '1-2 капли 2-3 раза в день' }
    ]
  }
};

function mergeMedicalData(symptoms) {
  const recs = [];
  const drugs = [];
  symptoms.forEach(sym => {
    const data = MEDICAL_DATA[sym];
    if (data) {
      recs.push(data.recommendations);
      data.drugs.forEach(drug => drugs.push({ ...drug, symptom: sym }));
    }
  });
  return {
    recommendations: [...new Set(recs)].join(' '),
    drugs
  };
}

const btnStyle = { padding: '8px 12px', borderRadius: 6, border: '1px solid #ccc', background: '#f5f5f5', cursor: 'pointer', fontSize: 14 };

const Plan = () => {
  const [input, setInput] = useState('');
  const [symptoms, setSymptoms] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [customRecs, setCustomRecs] = useState('');
  const [customDrugs, setCustomDrugs] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    const syms = input.toLowerCase().split(/,|\s+/).map(s => s.trim()).filter(Boolean);
    setSymptoms(syms);
    setEditMode(false);
    setCustomRecs('');
    setCustomDrugs([]);
  };

  const { recommendations, drugs } = mergeMedicalData(symptoms);
  const recsToShow = customRecs || recommendations;
  const drugsToShow = customDrugs.length ? customDrugs : drugs;

  const handleEdit = () => {
    setEditMode(true);
    setCustomRecs(recommendations);
    setCustomDrugs(drugs);
  };

  const handleDrugChange = (i, field, value) => {
    setCustomDrugs(drugsToShow.map((d, idx) => idx === i ? { ...d, [field]: value } : d));
  };

  return (
    <div style={{ maxWidth: 500, margin: '0 auto', padding: 20 }}>
      <h2>План лечения</h2>
      <form onSubmit={handleSubmit} style={{ marginBottom: 20 }}>
        <input
          type="text"
          placeholder="Введите симптомы через запятую (например: кашель, температура)"
          value={input}
          onChange={e => setInput(e.target.value)}
          style={{ width: '100%', padding: 8, marginBottom: 10 }}
        />
        <button type="submit" style={{ padding: 8, marginRight: 8 }}>Показать рекомендации</button>
        <a
          href={`https://www.google.com/search?q=${encodeURIComponent(input + ' лечение лекарства расписание')}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ padding: '8px 12px', background: '#4285f4', color: '#fff', borderRadius: 6, textDecoration: 'none' }}
        >
          Найти в Google
        </a>
      </form>
      {symptoms.length > 0 && (
        <div>
          <h3>Рекомендации:</h3>
          {editMode ? (
            <textarea
              value={customRecs}
              onChange={e => setCustomRecs(e.target.value)}
              style={{ width: '100%', minHeight: 60 }}
            />
          ) : (
            <div>{recsToShow}</div>
          )}
          <h3>Лекарства и расписание:</h3>
          <ul>
            {drugsToShow.map((drug, i) => (
              <li key={i} style={{ marginBottom: 8 }}>
                {editMode ? (
                  <>
                    <input
                      value={drug.name}
                      onChange={e => handleDrugChange(i, 'name', e.target.value)}
                      style={{ width: 120, marginRight: 8 }}
                    />
                    <input
                      value={drug.schedule}
                      onChange={e => handleDrugChange(i, 'schedule', e.target.value)}
                      style={{ width: 180, marginRight: 8 }}
                    />
                    <input
                      value={drug.link}
                      onChange={e => handleDrugChange(i, 'link', e.target.value)}
                      style={{ width: 180, marginRight: 8 }}
                    />
                  </>
                ) : (
                  <>
                    <b>{drug.name}</b> — {drug.schedule} {' '}
                    <a href={drug.link} target="_blank" rel="noopener noreferrer">инструкция</a>
                  </>
                )}
              </li>
            ))}
          </ul>
          {!editMode && (
            <button onClick={handleEdit} style={{ padding: 8, marginTop: 10 }}>Изменить</button>
          )}
          {editMode && (
            <button onClick={() => setEditMode(false)} style={{ padding: 8, marginTop: 10 }}>Сохранить</button>
          )}
          {/* Кнопки расширенного функционала */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '24px 0' }}>
            <button onClick={() => alert('Добавить симптом')} style={btnStyle}>Добавить симптом</button>
            <button onClick={() => alert('Удалить симптом')} style={btnStyle}>Удалить симптом</button>
            <button onClick={() => alert('Сохранить план')} style={btnStyle}>Сохранить план</button>
            <button onClick={() => alert('Загрузить план')} style={btnStyle}>Загрузить план</button>
            <button onClick={() => { setSymptoms([]); setInput(''); }} style={btnStyle}>Очистить всё</button>
            <button onClick={() => alert('Добавить напоминание')} style={btnStyle}>Добавить напоминание</button>
            <button onClick={() => alert('Показать историю симптомов')} style={btnStyle}>Показать историю симптомов</button>
            <button onClick={() => window.print()} style={btnStyle}>Печать</button>
            <button onClick={() => alert('Экспортировать в PDF')} style={btnStyle}>Экспортировать в PDF</button>
            <button onClick={() => alert('Отправить врачу')} style={btnStyle}>Отправить врачу</button>
            <button onClick={() => alert('Добавить заметку')} style={btnStyle}>Добавить заметку</button>
            <button onClick={() => alert('Советы по питанию: больше овощей и воды!')} style={btnStyle}>Советы по питанию</button>
            <button onClick={() => alert('Советы по уходу: проветривать комнату, соблюдать режим!')} style={btnStyle}>Советы по уходу</button>
            <button onClick={() => window.open('https://yandex.ru/maps/?text=аптека', '_blank')} style={btnStyle}>Ближайшие аптеки</button>
            <button onClick={() => window.open('https://yandex.ru/maps/?text=больница', '_blank')} style={btnStyle}>Ближайшие больницы</button>
            <button onClick={() => window.open('https://yandex.ru/pogoda/', '_blank')} style={btnStyle}>Погода</button>
            <button onClick={() => alert('Добавить фото симптома')} style={btnStyle}>Добавить фото симптома</button>
            <button onClick={() => alert('Показать календарь приёма')} style={btnStyle}>Календарь приёма</button>
            <button onClick={() => alert('Добавить новое лекарство')} style={btnStyle}>Добавить новое лекарство</button>
            <button onClick={() => alert('Инструкции по безопасности: мойте руки!')} style={btnStyle}>Инструкции по безопасности</button>
            <button onClick={() => alert('Контакты экстренных служб: 112')} style={btnStyle}>Экстренные службы</button>
            <button onClick={() => alert('Пить воду каждые 2 часа!')} style={btnStyle}>Расписание приёма воды</button>
            <button onClick={() => alert('Упражнения для восстановления: лёгкая зарядка!')} style={btnStyle}>Упражнения для восстановления</button>
            <button onClick={() => window.open('https://www.youtube.com/results?search_query=инструкция+по+уходу', '_blank')} style={btnStyle}>Видеоинструкции</button>
            <button onClick={() => alert('Список дел на день: приём лекарств, прогулка, отдых.')} style={btnStyle}>Список дел на день</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Plan;
