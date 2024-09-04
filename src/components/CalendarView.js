// src/components/CalendarView.js
import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import styled from 'styled-components';

const CalendarContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 10px;
  max-width: 800px;
  margin: 20px 0;
`;

const DayCell = styled.div`
  background-color: #f8f9fa;
  padding: 15px;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #e9ecef;
  }
`;

const EventLabel = styled.div`
  background-color: #007bff;
  color: white;
  padding: 5px;
  border-radius: 3px;
  margin-top: 5px;
  font-size: 14px;
`;

const CalendarView = ({ onEventClick }) => {
  const { events } = useContext(EventContext);

  const daysInMonth = new Date(new Date().getFullYear(), new Date().getMonth() + 1, 0).getDate();

  return (
    <CalendarContainer>
      {[...Array(daysInMonth)].map((_, day) => (
        <DayCell key={day}>
          <p>{day + 1}</p>
          {events.filter(event => new Date(event.date).getDate() === day + 1).map(event => (
            <EventLabel key={event.id} onClick={() => onEventClick(event)}>
              {event.title}
            </EventLabel>
          ))}
        </DayCell>
      ))}
    </CalendarContainer>
  );
};

export default CalendarView;
