import React from 'react';
import './DressCode.css';

const DressCode = () => {
  const colors = [
    { code: '#3A2B24', name: 'коричневый' },
    { code: '#A38E77', name: 'светло-коричневый' },
    { code: '#000000', name: 'черный' },
    { code: '#FFFDF1', name: 'белый' }
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
      </div>
    </section>
  );
};

export default DressCode;