import React, { useContext } from 'react';
import styled from 'styled-components';
import CalculatorGrid from './components/CalculatorGrid';
import { ResultContext } from './contexts/ResultContext';

const Main = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: clamp(100px, 50vh, 60vh);
  height: clamp(40vh, 80vh, 80vh);
  margin: 10vh auto;
`;

const Title = styled.h1`
  color: white;
`;

const CalculatorLayout = styled.div`
  border: 4px solid white;
  border-radius: 10px;
  box-shadow: 10px 10px 10px black;
  width: 100%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: 2%;
`;

const Header = styled.header`
  width: 100%;
  margin: 2% 0;
  font-size: 2rem;
  min-height: 130px;
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 5%;
  position: relative;
  border: 4px solid white;
  border-radius: 10px;
  background-color: #00b9ae;
`;

const Result = styled.span`
  color: white;
  position: absolute;
  right: 15px;
  top: 15px;
`;

const Calculator = () => {
  const { valorTela, resultado } = useContext(ResultContext);
  return (
    <Main>
      <Title>React Calculator</Title>
      <CalculatorLayout>
        <Header>
          <Result>{resultado}</Result>
          <span>{valorTela}</span>
        </Header>
        <CalculatorGrid />
      </CalculatorLayout>
    </Main>
  );
};

export default Calculator;
