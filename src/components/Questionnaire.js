import React from 'react';
import './Questionnaire.css';

const Questionnaire = () => {
  return (
    <section className="questionnaire">
      <div className="questionnaire_container">
        <h2 className="questionnaire_title">Анкета гостя </h2>
        
        <p className="questionnaire_description">
          Просим вас заполнить <a href='https://docs.google.com/forms/d/e/1FAIpQLSc4PtCF3FsrFxtNnXAQM08A0x5BGViDFirJLBzltR4xrS_7Fg/viewform?usp=publish-editor' className='questionnaire_description-link' target="_blank">анкету</a> и подтвердить ваше присутствие 
        </p>
      </div>
    </section>
  );
};

export default Questionnaire;