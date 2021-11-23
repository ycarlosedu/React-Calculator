/* eslint no-eval: 0 */
import styled from 'styled-components';
import React, { useContext } from 'react';
import Button from './Button';
import { ResultContext } from '../contexts/ResultContext';
import swal from 'sweetalert';

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 5px;
`;

export default function CalculatorGrid({ children, bg }) {
  const {
    valorTela,
    setValorTela,
    resultado,
    setResultado,
    acumulador,
    setAcumulador,
    operacao,
    setOperacao,
  } = useContext(ResultContext);

  const addDigitoTela = async (event) => {
    var element = event.target.textContent;

    if (valorTela.length > 19) {
      swal('Cuidado!', 'Este é o limite máximo de elementos!', 'warning');
      return;
    }
    if (!isNaN(element)) {
      // element is a number
      setValorTela(valorTela + element);
      setAcumulador(null);
      return;
    }
    if (
      element === '+' ||
      element === '-' ||
      element === '*' ||
      element === '/' ||
      element === '.'
    ) {
      if (operacao) {
        // element is a operation and last command was '='
        setAcumulador(element);
        setOperacao(false);
        setValorTela(resultado + element);
        return;
      } else if (acumulador) {
        // element and last element are operations
        const NewValue = valorTela.substring(0, valorTela.length - 1);
        setOperacao(false);
        setAcumulador(element);
        setValorTela(NewValue + element);
        return;
      } else {
        // element is a operation but last command was another one
        setValorTela(valorTela + element);
        setAcumulador(element);
        return;
      }
    } else if (element === '(') {
      if (acumulador) {
        //element is a ( and last command was a operation
        setValorTela(valorTela + element);
        setAcumulador(null);
        return;
      }
      setValorTela(valorTela + '*' + element); // last command was another one
      setAcumulador(null);
    } else {
      //element is a )
      setValorTela(valorTela + element);
      setAcumulador(null);
    }
  };

  const CleanMemory = (event) => {
    setResultado(0);
    setOperacao(false);
    setValorTela('');
    setAcumulador(null);
  };

  const VerifyAcumulator = () => {
    const lastElement = valorTela.substring(
      valorTela.length - 2,
      valorTela.length - 1
    );
    console.log(lastElement);
    if (
      lastElement === '+' ||
      lastElement === '-' ||
      lastElement === '*' ||
      lastElement === '/' ||
      lastElement === '.'
    ) {
      setAcumulador(lastElement);
    } else {
      setAcumulador(null);
    }
  };

  const DeleteLastNumber = async () => {
    await setValorTela(valorTela.substring(0, valorTela.length - 1));
    setOperacao(false);
    VerifyAcumulator();
  };

  const Operacao = () => {
    try {
      const Result = eval(valorTela);
      setAcumulador(null);
      setResultado(Result);
      setOperacao(true);
    } catch {
      setResultado('ERROR');
    }
  };

  return (
    <Grid>
      <Button onClick={addDigitoTela} bg='#037171'>
        (
      </Button>
      <Button onClick={addDigitoTela} bg='#037171'>
        )
      </Button>
      <Button onClick={CleanMemory} bg='#02C3BD'>
        Clear
      </Button>
      <Button onClick={addDigitoTela} bg='#037171'>
        /
      </Button>

      <Button onClick={addDigitoTela}>7</Button>
      <Button onClick={addDigitoTela}>8</Button>
      <Button onClick={addDigitoTela}>9</Button>
      <Button onClick={addDigitoTela} bg='#037171'>
        *
      </Button>

      <Button onClick={addDigitoTela}>4</Button>
      <Button onClick={addDigitoTela}>5</Button>
      <Button onClick={addDigitoTela}>6</Button>
      <Button onClick={addDigitoTela} bg='#037171'>
        -
      </Button>

      <Button onClick={addDigitoTela}>1</Button>
      <Button onClick={addDigitoTela}>2</Button>
      <Button onClick={addDigitoTela}>3</Button>
      <Button onClick={addDigitoTela} bg='#037171'>
        +
      </Button>

      <Button onClick={DeleteLastNumber} bg='#02C3BD'>
        Del
      </Button>
      <Button onClick={addDigitoTela}>0</Button>
      <Button onClick={addDigitoTela}>.</Button>
      <Button onClick={Operacao} bg='#03312E'>
        =
      </Button>
    </Grid>
  );
}
