import React, { useState } from 'react';
import Header from './Header';

// Componente: Bloco isolado de HTML, CSS e JS, o qual não interfere no restante da aplicação 

// Propriedade: Informações que um componente PAI passa para o componente filho, como os atributos do HTML <> //Fragment

// Estado: Informações mantidas pelo componente - useState sempre retorna [varName, funcão para criar novo valor apartir do anterior]  (imutabilidade) 

function App() {
  const [counter, setCounter] = useState(0);


  function incrementCounter() {
    setCounter(counter + 1);
  }

  function dicrementCounter() {
    setCounter(counter - 1);
  }

  function zerar() {
    setCounter(0);
  }

  return (
    <> 
      <h1>Contador: {counter}</h1>
      <button onClick={dicrementCounter}>Decrementar</button>
      &nbsp;
      <button onClick={zerar}>Zerar</button>
      &nbsp;
      <button onClick={incrementCounter}>Incrementar</button>

    </>
  );
}

export default App;
