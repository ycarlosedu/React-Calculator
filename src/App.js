import Calculator from './Calculator';
import GlobalStyle from './GlobalStyle';
import { ResultContextProvider } from './contexts/ResultContext';

function App() {
  return (
    <>
      <ResultContextProvider>
        <GlobalStyle />
        <Calculator />
      </ResultContextProvider>
    </>
  );
}

export default App;
