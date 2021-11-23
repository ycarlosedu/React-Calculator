import styled from 'styled-components';
import React from 'react';

const Btn = styled.button`
  background-color: ${({ bg }) => (bg ? bg : 'black')};
  min-width: clamp(30px, 150px, 100px);
  min-height: clamp(30px, 150px, 100px);
  color: white;
  border: none;
  border-radius: 10px;
  transition: all 0.2s;
  cursor: pointer;
  font-size: 2rem;

  &:hover {
    filter: brightness(1.5);
    transform: scale(1.05);
  }
`;

export default function Button({ children, bg, onClick }) {
  return (
    <Btn onClick={onClick} bg={bg}>
      {children}
    </Btn>
  );
}
