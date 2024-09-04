// src/components/EventDetailsModal.js
import React, { useContext } from 'react';
import { EventContext } from '../context/EventContext';
import styled from 'styled-components';

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  width: 300px;
`;

const ModalHeader = styled.h2`
  margin-top: 0;
`;

const ModalButton = styled.button`
  background-color: #dc3545;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;

  &:hover {
    background-color: #c82333;
  }
`;

const CloseButton = styled.button`
  background-color: #6c757d;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #5a6268;
  }
`;

const EventDetailsModal = ({ event, onClose }) => {
  const { deleteEvent } = useContext(EventContext);

  const handleDelete = () => {
    deleteEvent(event.id);
    onClose();
  };

  return (
    <ModalContainer>
      <ModalHeader>{event.title}</ModalHeader>
      <p>Date: {event.date}</p>
      <p>Category: {event.category}</p>
      <ModalButton onClick={handleDelete}>Delete</ModalButton>
      <CloseButton onClick={onClose}>Close</CloseButton>
    </ModalContainer>
  );
};

export default EventDetailsModal;
