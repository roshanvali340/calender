// src/App.js
import React, { useState } from 'react';
import { EventProvider } from './context/EventContext';
import CalendarView from './components/CalendarView';
import EventForm from './components/EventForm';
import EventDetailsModal from './components/EventDetailsModal';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const AddEventButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-top: 20px;
  font-size: 16px;
  
  &:hover {
    background-color: #0056b3;
  }
`;

const App = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEventClick = (event) => {
    setSelectedEvent(event);
  };

  const handleAddEvent = () => {
    setSelectedEvent(null);
    setIsFormOpen(true);
  };

  return (
    <EventProvider>
      <Container>
        <CalendarView onEventClick={handleEventClick} />
        <AddEventButton onClick={handleAddEvent}>Add Event</AddEventButton>
        {isFormOpen && (
          <EventForm
            selectedEvent={selectedEvent}
            onClose={() => setIsFormOpen(false)}
          />
        )}
        {selectedEvent && !isFormOpen && (
          <EventDetailsModal
            event={selectedEvent}
            onClose={() => setSelectedEvent(null)}
          />
        )}
      </Container>
    </EventProvider>
  );
};

export default App;
