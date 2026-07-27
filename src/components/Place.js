import React from 'react';
import './Place.css';
import photo1 from '../assets/images/i.webp';

const Place = () => {
  const handleMapClick = () => {
    window.open('https://yandex.ru/maps/?um=constructor%3Acddc15e7c4f853d8f981f56aaa523d73e436ce774b42ac0b61213f4788d0632c&source=constructorLink', '_blank');
  };

  return (
    <section id="place" className="place">
      <div className="place_container">
        {/* Заголовок */}
        <h2 className="place_title">Церемония бракосочетания</h2>

        {/* Адреса */}
        <div className="place_addresses">
          <p className="place_address-text">
            Отдел ЗАГС №4 по г. Барнаулу
            <br />
            Улица Сухэ-Батора, 13
          </p>
        </div>

        <h2 className="place_title place_title_2">Банкетный зал</h2>
        
        {/* Адреса */}
        <div className="place_addresses">
          <p className="place_address-text">
            Дыхание Леса
            <br />
            Улица Н. Ивлева, 46а
          </p>
        </div>

        {/* Фотографии */}
        <div className="place_photos">
          <div className="place_photo-container">
            <img 
              src={photo1} 
              className="place_photo"
            />
            <a href="https://go.2gis.com/SbmL4" target="_blank">
              <div className="place_on-map">
                <p className="place_address-text place_on-map-text">
                  Посмотреть на карте
                </p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Place;