import React, { useState } from 'react';

export const ResultContext = React.createContext({});

export function ResultContextProvider({ children }) {
  const [valorTela, setValorTela] = useState('');
  const [resultado, setResultado] = useState(0);
  const [acumulador, setAcumulador] = useState('++');
  const [operacao, setOperacao] = useState(false);

  return (
    <ResultContext.Provider
      value={{
        valorTela,
        setValorTela,
        resultado,
        setResultado,
        acumulador,
        setAcumulador,
        operacao,
        setOperacao,
      }}
    >
      {children}
    </ResultContext.Provider>
  );
}
