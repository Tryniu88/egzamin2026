import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import img1 from './assets/obraz1.jpg';
import img2 from './assets/obraz2.jpg';
import img3 from './assets/obraz3.jpg';
import img4 from './assets/obraz4.jpg';
import img5 from './assets/obraz5.jpg';
import img6 from './assets/obraz6.jpg';
import img7 from './assets/obraz7.jpg';
import img8 from './assets/obraz8.jpg';
import img9 from './assets/obraz9.jpg';
import img10 from './assets/obraz10.jpg';
import img11 from './assets/obraz11.jpg';
import img12 from './assets/obraz12.jpg';

const dane_zdjecia = [
    { id: 0, alt: "Mak", plik: img1, kategoria: 1, pobrania: 35 },
    { id: 1, alt: "Bukiet", plik: img2, kategoria: 1, pobrania: 43 },
    { id: 2, alt: "Dalmatyńczyk", plik: img3, kategoria: 2, pobrania: 2 },
    { id: 3, alt: "Świnka morska", plik: img4, kategoria: 2, pobrania: 53 },
    { id: 4, alt: "Rotwailer", plik: img5, kategoria: 2, pobrania: 43 },
    { id: 5, alt: "Audi", plik: img6, kategoria: 3, pobrania: 11 },
    { id: 6, alt: "kotki", plik: img7, kategoria: 2, pobrania: 22 },
    { id: 7, alt: "Róża", plik: img8, kategoria: 1, pobrania: 33 },
    { id: 8, alt: "Świnka morska", plik: img9, kategoria: 2, pobrania: 123 },
    { id: 9, alt: "Foksterier", plik: img10, kategoria: 2, pobrania: 22 },
    { id: 10, alt: "Szczeniak", plik: img11, kategoria: 2, pobrania: 12 },
    { id: 11, alt: "Garbus", plik: img12, kategoria: 3, pobrania: 321 }
];

function App() {
  const [zdjecia, ustawZdjecia] = useState(dane_zdjecia);
  const [pokazKwiaty, ustawPokazKwiaty] = useState(true);
  const [pokazZwierzeta, ustawPokazZwierzeta] = useState(true);
  const [pokazSamochody, ustawPokazSamochody] = useState(true);

  const obslugaPobierania = (id) => {
    ustawZdjecia(poprzednieZdjecia =>
      poprzednieZdjecia.map(foto => foto.id === id ? { ...foto, pobrania: foto.pobrania + 1 } : foto)
    );
  };

  const przefiltrowaneZdjecia = zdjecia.filter((foto) => {
    if (foto.kategoria === 1 && pokazKwiaty) return true;
    if (foto.kategoria === 2 && pokazZwierzeta) return true;
    if (foto.kategoria === 3 && pokazSamochody) return true;
    return false;
  });

  return (
    <div className="container mt-4">
      <h2 className="mb-3">zdjecia</h2>

      <div className="d-flex gap-4 mb-4">
        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="switchKwiaty"
            checked={pokazKwiaty}
            onChange={(e) => ustawPokazKwiaty(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="switchKwiaty">kwiaty</label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="switchZwierzeta"
            checked={pokazZwierzeta}
            onChange={(e) => ustawPokazZwierzeta(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="switchZwierzeta">Zwierzęta</label>
        </div>

        <div className="form-check form-switch">
          <input
            className="form-check-input"
            type="checkbox"
            id="switchSamochody"
            checked={pokazSamochody}
            onChange={(e) => ustawPokazSamochody(e.target.checked)}
          />
          <label className="form-check-label" htmlFor="switchSamochody">Samochody</label>
        </div>
      </div>

      <div className="row row-cols-1 row-cols-md-3 g-4">
        {przefiltrowaneZdjecia.map((foto) => (
          <div key={foto.id} className="col d-flex flex-column align-items-start">
            <img
              src={foto.plik}
              alt={foto.alt}
              className="img-fluid m-1 rounded"
              style={{ width: '100%', height: '220px', objectFit: 'cover' }}
            />
            <h4 className="mt-2 mb-2 px-1">Pobrań: {foto.pobrania}</h4>
            <button 
              className="btn btn-success btn-sm ms-1"
              onClick={() => obslugaPobierania(foto.id)}
            >
              Pobierz
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
