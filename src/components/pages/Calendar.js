import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  getAllEvents,
  deleteEventById,
  postNewEvent,
} from '../services/ApiService';

import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

export const Calendar = () => {
  let history = useHistory();

  const [events, setEvents] = useState([]);

  useEffect(() => {
    getEvents();
  }, []);

  const getEvents = async () => {
    const dataEvents = await getAllEvents();
    setEvents(dataEvents);
  };

  const deleteEvent = async (eventId) => {
    await deleteEventById(eventId);
  };

  const handleDateClick = (info) => {
    const infoDelete = window.confirm(`Are you sure to delete this record?  `);

    if (infoDelete) {
      info.event.remove();
      deleteEvent(info.event.id);
    }
  };

  const clickDate = (info) => {
    const title = prompt('Event Title:');

    if (title) {
      postNewEvent({
        title: title,
        date: info.dateStr,
      });
    }

    history.push('/calendar');
    getEvents();
  };

  return (
    <div className='container'>
      <div className='py-4 d-flex'>
        <h1>Calendar</h1>

        <div className='d-flex ml-auto p-2'>
          <Link
            type='submit'
            className='btn btn-outline-warning  pull-right'
            to='../Application'
          >
            Back to application
          </Link>
        </div>
      </div>

      <small id='emailHelp' className='form-text text-muted'>
        Set day to add event
      </small>

      {/* Calendar */}

      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        events={events}
        eventClick={handleDateClick}
        dateClick={clickDate}
      />
    </div>
  );
};
