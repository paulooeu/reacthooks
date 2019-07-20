import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tecnologiaList, setTecnologia] = useState([]);
  const [novaTecnologia, setNovaTecnologia] = useState('');

  const handleAdd = useCallback(() => {
    setTecnologia([...tecnologiaList, novaTecnologia]);
    setNovaTecnologia('');
  }, [novaTecnologia, tecnologiaList]);

  useEffect(() => {
    const tecnologias = localStorage.getItem('Tecnologia');
    if (tecnologias) {
      setTecnologia(JSON.parse(tecnologias));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('Tecnologia', JSON.stringify(tecnologiaList));
  }, [tecnologiaList]);
  const quantidadeTecnologia = useMemo(() => tecnologiaList.length, [
    tecnologiaList,
  ]);
  return (
    <>
      <ul>
        {tecnologiaList.map(tecnologia => (
          <li key={tecnologia}>{tecnologia}</li>
        ))}
      </ul>

      <strong>Voce tem {quantidadeTecnologia} tecnologias</strong>
      <br />
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
