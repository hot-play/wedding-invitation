import React from 'react';
import './Questionnaire.css';

const Questionnaire = () => {
  return (
    <section className="questionnaire">
      <div className="questionnaire_container">
        <h2 className="questionnaire_title">Мы вас ждем</h2>
        <p className="questionnaire_description">
          Просим вас дать обратную информацию сообщением о своем присутствии и своем спутнике
        </p>
      </div>
    </section>
  );
};

export default Questionnaire;