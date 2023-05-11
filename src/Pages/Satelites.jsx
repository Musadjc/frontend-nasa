import React, { useState } from 'react';

const allowedTypes = ["Comunicaciones", "Observación", "Meteorología", "Navegación"];

const SateliteForm = () => {
  const [nombre, setNombre] = useState('');
  const [yearProduccion, setYearProduccion] = useState('');
  const [launchDate, setLaunchDate] = useState('');
  const [tipo, setTipo] = useState('');
  const [enOrbita, setEnOrbita] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear objeto con la información del satélite
    const sateliteData = {
      nombre,
      yearProduccion,
      launchDate,
      tipo,
      enOrbita
    };

    // Convertir objeto a JSON
    const jsonData = JSON.stringify(sateliteData);

    // Crear archivo .jsx
    const element = document.createElement("a");
    const file = new Blob([jsonData], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "sateliteData.jsx";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <form onSubmit={handleSubmit} className="form-group">
      <label htmlFor="nombre">Nombre del satélite:</label>
      <input
        type="text"
        id="nombre"
        className="form-control"
        value={nombre}
        onChange={(event) => setNombre(event.target.value)}
        required
      />

      <label htmlFor="yearProduccion">Año de producción:</label>
      <input
        type="number"
        id="yearProduccion"
        className="form-control"
        value={yearProduccion}
        onChange={(event) => setYearProduccion(event.target.value)}
        required
        min="1960"
      />

      <label htmlFor="launchDate">Fecha de lanzamiento:</label>
      <input
        type="date"
        id="launchDate"
        className="form-control"
        value={launchDate}
        onChange={(event) => setLaunchDate(event.target.value)}
        required={enOrbita}
        disabled={!enOrbita}
      />

      <label htmlFor="tipo">Tipo de satélite:</label>
      <select
        id="tipo"
        className="form-control"
        value={tipo}
        onChange={(event) => setTipo(event.target.value)}
        required
      >
        <option value="">Selecciona un tipo</option>
        {allowedTypes.map((type) => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      <label htmlFor="enOrbita">¿En órbita?</label>
      <div className="form-check">
        <input
          type="checkbox"
          id="enOrbita"
          className="form-check-input"
          checked={enOrbita}
          onChange={(event) => setEnOrbita(event.target.checked)}
          required
        />
        <label className="form-check-label" htmlFor="enOrbita">Sí</label>
      </div>

      <button type="submit" className="btn btn-primary">Generar archivo</button>
    </form>
  );
};

export default SateliteForm;
