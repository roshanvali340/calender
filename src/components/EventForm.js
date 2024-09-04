// src/components/EventForm.js
import React, { useState, useContext, useEffect } from 'react';
import { EventContext } from '../context/EventContext';
import styled from 'styled-components';

const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  max-width: 400px;
  width: 100%;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const Select = styled.select`
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #ccc;
  font-size: 16px;
`;

const SaveButton = styled.button`
  background-color: #28a745;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #218838;
  }
`;

const EventForm = ({ selectedEvent, onClose }) => {
  const { addEvent, editEvent } = useContext(EventContext);
  const [eventDetails, setEventDetails] = useState({ title: '', date: '', category: '' });

  useEffect(() => {
    if (selectedEvent) {
      setEventDetails(selectedEvent);
    }
  }, [selectedEvent]);

  const handleChange = (e) => {
    setEventDetails({ ...eventDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (selectedEvent) {
      editEvent(eventDetails);
    } else {
      addEvent({ ...eventDetails, id: Date.now() });
    }
    onClose();
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <FormField>
          <Label>Event Title</Label>
          <Input
            type="text"
            name="title"
            placeholder="Event Title"
            value={eventDetails.title}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label>Date</Label>
          <Input
            type="date"
            name="date"
            value={eventDetails.date}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label>Category</Label>
          <Select
            name="category"
            value={eventDetails.category}
            onChange={handleChange}
          >
            <option value="">Select Category</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
          </Select>
        </FormField>
        <SaveButton type="submit">Save Event</SaveButton>
      </form>
    </FormContainer>
  );
};

export default EventForm;
