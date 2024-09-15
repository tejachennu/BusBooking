import React from 'react';

jest.mock('react-beautiful-dnd', () => {
  const Draggable = ({ children }) =>
    children({
      draggableProps: { style: {} },
      dragHandleProps: {},
      innerRef: React.createRef(),
    }, { isDragging: false });

  const Droppable = ({ children }) =>
    children({
      droppableProps: { style: {} },
      innerRef: React.createRef(),
    });

  return { Droppable, Draggable };
});
