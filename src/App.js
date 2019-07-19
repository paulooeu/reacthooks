import React, { useState, useEffect } from 'react';

function App() {
  const [tecnologiaList, setTecnologia] = useState(['ReactJs', 'React Native']);
  const [novaTecnologia, setNovaTecnologia] = useState('');

  function handleAdd() {
    setTecnologia([...tecnologiaList, novaTecnologia]);
    setNovaTecnologia('');
  }
  return (
    <>
      <ul>
        {tecnologiaList.map(tecnologia => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>
      <input
        type="text"
        value={novaTecnologia}
        onChange={e => setNovaTecnologia(e.target.value)}
      />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
