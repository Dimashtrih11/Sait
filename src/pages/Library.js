import React from 'react';

const articles = [
  {
    title: "Основы ухода за пожилыми людьми",
    description: "Полное руководство по базовым принципам ухода, включая гигиену, питание и безопасность.",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    link: "https://www.miloserdie.ru/article/uhod-za-pozhilymi-lyudmi/"
  },
  {
    title: "Питание и диета для пожилых",
    description: "Рекомендации по правильному питанию, специальные диеты и рецепты для пожилых людей.",
    image: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad04?auto=format&fit=crop&w=400&q=80",
    link: "https://www.gastronom.ru/text/pitanie-pozhilyh-lyudej-1006612"
  },
  {
    title: "Физическая активность и упражнения",
    description: "Комплекс упражнений и физических активностей, подходящих для пожилых людей.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    link: "https://www.kp.ru/putevoditel/zdorove/uprazhneniya-dlya-pozhilyh/"
  },
  {
    title: "Профилактика простудных заболеваний",
    description: "Как защитить себя и близких от ОРВИ и гриппа. Советы по профилактике и укреплению иммунитета.",
    image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=400&q=80",
    link: "https://www.rlsnet.ru/articles/prostuda-i-gripp-profilaktika.htm"
  },
  {
    title: "Лекарства: как принимать безопасно",
    description: "Памятка по безопасному приёму лекарств, взаимодействию препаратов и контролю расписания.",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=400&q=80",
    link: "https://apteka.ru/info/articles/lekarstva/kak-prinimat-lekarstva/"
  },
  {
    title: "Психологическая поддержка и общение",
    description: "Почему важно поддерживать эмоциональное здоровье и как наладить общение с близкими.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
    link: "https://www.psychologies.ru/self-knowledge/individuality/kak-podderzhat-pozhilogo-cheloveka/"
  },
  {
    title: "Гигиена и профилактика пролежней",
    description: "Советы по уходу за кожей, профилактике и лечению пролежней у лежачих больных.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
    link: "https://www.miloserdie.ru/article/prolezhni-u-lezhachih-bolnyh/"
  },
  {
    title: "Безопасность дома для пожилых",
    description: "Как сделать дом безопасным: предотвращение падений, пожарная безопасность, тревожные кнопки.",
    image: "https://images.unsplash.com/photo-1465101178521-c1a9136a3c5c?auto=format&fit=crop&w=400&q=80",
    link: "https://www.domashniy.ru/zdorovie/bezopasnost-doma-dlya-pozhilyh/"
  },
  {
    title: "Памятка по экстренным ситуациям",
    description: "Что делать при ухудшении состояния, как вызвать скорую, какие документы держать под рукой.",
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=400&q=80",
    link: "https://www.rosminzdrav.ru/ministry/programms/medpomoshch/ekstrennaya-pomoshch"
  }
];

function Library() {
  return (
    <div style={{ padding: '32px 16px 0 16px' }}>
      <h2 style={{ marginBottom: 24 }}>Библиотека статей</h2>
      {articles.map((a, i) => (
        <div
          key={i}
          style={{
            background: 'var(--card)',
            borderRadius: 18,
            marginBottom: 18,
            padding: 0,
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <img src={a.image} alt={a.title} style={{width: '100%', height: 160, objectFit: 'cover'}} />
          <div style={{padding: '18px 20px'}}>
            <div style={{ fontWeight: 600, fontSize: 17, marginBottom: 6 }}>
              <a href={a.link} target="_blank" rel="noopener noreferrer" style={{ color: '#2a5bd7', textDecoration: 'underline' }}>{a.title}</a>
            </div>
            <div style={{ fontSize: 14, color: 'var(--text-secondary)', marginBottom: 8 }}>
              {a.description}
            </div>
            <a href={a.link} target="_blank" rel="noopener noreferrer" style={{ fontSize: 13, color: '#2a5bd7' }}>Читать подробнее</a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Library;
