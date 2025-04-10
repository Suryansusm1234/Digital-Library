import React from 'react';
import '../styles/events.css';

const Events = () => {
  return (
    <section className="events">
      <div className="container">
        <h2 className="section-title">Upcoming Events</h2>
        <div className="event-list">
          <div className="event-item">
            <div className="event-date">
              <div className="day">15</div>
              <div className="month">APR</div>
            </div>
            <div className="event-info">
              <h3>Workshop: Research Methodologies</h3>
              <p>Learn advanced research techniques from Dr. Emily Chen, 2:00 PM - 4:00 PM, Main Library Room 302</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">
              <div className="day">22</div>
              <div className="month">APR</div>
            </div>
            <div className="event-info">
            <h3>Author Talk: &quot;The Future of Science&quot;</h3>
              <p>Join bestselling author James Peterson for a discussion on his latest book, 6:00 PM, Auditorium</p>
            </div>
          </div>
          <div className="event-item">
            <div className="event-date">
              <div className="day">30</div>
              <div className="month">APR</div>
            </div>
            <div className="event-info">
              <h3>Library Resources Orientation</h3>
              <p>New student orientation on how to effectively use library resources, 10:00 AM, Information Commons</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Events; 