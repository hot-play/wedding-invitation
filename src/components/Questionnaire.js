import React from 'react';
import './Questionnaire.css';

const Questionnaire = () => {
  return (
    <section className="questionnaire">
      <div className="questionnaire_container">
        <h2 className="questionnaire_title">Анкета гостя </h2>
        
        <p className="questionnaire_description">
          Просим вас заполнить <a href='/' className='questionnaire_description-link'>анкету</a> и подтвердить ваше присутствие 
        </p>
      </div>
    </section>
  );
};

export default Questionnaire;