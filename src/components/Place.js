import React from 'react';
import './Place.css';
import photo1 from '../assets/images/photo2.png';

const Place = () => {
  const handleMapClick = () => {
    window.open('https://yandex.ru/maps/?um=constructor%3Acddc15e7c4f853d8f981f56aaa523d73e436ce774b42ac0b61213f4788d0632c&source=constructorLink', '_blank');
  };

  return (
    <section id="place" className="place">
      <div className="place_container">
        {/* Заголовок */}
        <h2 className="place_title">Место торжества</h2>
        
        {/* Адреса */}
        <div className="place_addresses">
          <p className="place_address-text">
            База отдыха «Буревестник», коттедж «Атмосфера»
            <br />
            СТ Сирень-1, 41
          </p>
        </div>

        {/* Фотографии */}
        <div className="place_photos">
          <div className="place_photo-container">
            <img 
              src={photo1} 
              className="place_photo"
            />
            <a href="https://2gis.ru/tomsk/firm/70000001062717991/84.988782%2C56.438318?m=84.989291%2C56.438316%2F18.97" target="_blank">
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