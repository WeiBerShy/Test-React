import React, { useState } from 'react';

function Formu({ cambio }) {
  const [palabra1, setPalabra1] = useState('');
  const [palabra2, setPalabra2] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'palabra1') {
      setPalabra1(value);
    } else if (name === 'palabra2') {
      setPalabra2(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    cambio(palabra1, palabra2);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Palabra 1</label>
        <input type="text" name="palabra1" placeholder="Ingrese la palabra 1"  onChange={handleInputChange} />
        <label htmlFor="">Palabra 2</label>
        <input type="text" name="palabra2" placeholder="Ingrese la palabra 2"  onChange={handleInputChange} />
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default Formu;