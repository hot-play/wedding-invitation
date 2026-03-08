import React from 'react';
import './Invitation.css';

const Invitation = () => {
  return (
    <section id="invitation" className="invitation">
      <div className="invitation_container">
        <h3 className="invitation_subheading">
          Мы женимся!
        </h3>
        <p className="invitation_text">
          И этот день мы хотим провести вместе с вами. Приглашаем вас на праздник нашей любви!
        </p>
      </div>
      <div className="calendar">
        <div className="calendar-title">
          Июнь
        </div>
        <div className="calendar-columns">
          <div className="calendar-column">
            <div className="calendar-cell calendar-head-cell invitation_text">
              Пятница
            </div>
            <div className="calendar-cell invitation_text">
              5
            </div>
          </div>
          <div className="calendar-column calendar-center-column">
            <div className="calendar-cell calendar-head-cell invitation_text">
              Суббота
            </div>
            <div className="calendar-cell invitation_text calendar-center-cell">
              6
            </div>
          </div>
          <div className="calendar-column">
            <div className="calendar-cell calendar-head-cell invitation_text">
              Воскресенье
            </div>
            <div className="calendar-cell invitation_text">
              7
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invitation;