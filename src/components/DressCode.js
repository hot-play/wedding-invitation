import React from 'react';
import './DressCode.css';

const DressCode = () => {
  const colors = [
    { code: '#e8b5b5', name: 'светло-розовый' },
    { code: '#FFE4C4', name: 'бисквитный' },
    { code: '#8ab1de', name: 'небесно-голубой' },
    { code: '#FFBCD9', name: 'розовый' },
    { code: '#B39F7A', name: 'кофе-с-молоком' },
    { code: '#696969', name: 'серый' },
    { code: '#755C48', name: 'чоколадный' },
    { code: '#35170C', name: 'темно-коричневый' },
  ];

  return (
    <section id="dress-code" className="dress-code">
      <div className="dress-code_container">
        <h2 className="dress-code_title">Дресс-код</h2>
        
        <p className="dress-code_description">
          Пожалуйста, поддержите атмосферу праздника элегантными нарядами, 
          соответствующими цветовой гамме свадьбы
        </p>

        <div className="dress-code_colors">
          {colors.map((color, index) => (
            <div key={index} className="dress-code_color-item">
              <div 
                className="dress-code_color-circle"
                style={{ backgroundColor: color.code }}
                title={color.name}
              ></div>
            </div>
          ))}
        </div>
        <p className="dress-code_description dress-code_description_2">
          Избегайте белого цвета
        </p>
      </div>
    </section>
  );
};

export default DressCode;