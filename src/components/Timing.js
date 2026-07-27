import React from 'react';
import './Timing.css';

const Timing = () => {
  return (
    <section id="details" className="timing">
      <div className="timing_container">
        <div className="timing_background"></div>
        <div className="timing_content">
          <h2 className="timing_title">Программа торжества</h2>
          <div className="timing_schedule">
            <div className="timing_item">
              <span className="timing_time">13:00</span>
              <span className="timing_event">Церемония в ЗАГСе</span>
            </div>
            <div className="timing_item">
              <span className="timing_time">17:00</span>
              <span className="timing_event">Начало банкета</span>
            </div>
            <div className="timing_item">
              <span className="timing_time">20:00</span>
              <span className="timing_event">Окончание банкета</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timing;