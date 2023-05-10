import React, { useState } from 'react';

const allowedLocations = ["Cabo Cañaveral", "Vandenberg", "Baikonur", "Wenchang", "Boca Chica", "McGregor"];

const Launchs = () => {
  return <div>Gestión de Launchs</div>;
};

const MissionForm = () => {
  const [missionName, setMissionName] = useState('');
  const [missionDate, setMissionDate] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [missionType, setMissionType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear objeto con la información de la misión
    const missionData = {
      missionName,
      missionDate,
      selectedLocation,
      missionType
    };

    // Convertir objeto a JSON
    const jsonData = JSON.stringify(missionData);

    // Crear archivo .jsx
    const element = document.createElement("a");
    const file = new Blob([jsonData], {type: 'text/plain'});
    element.href = URL.createObjectURL(file);
    element.download = "missionData.jsx";
    document.body.appendChild(element);
    element.click();
  };

  return (
    <>
      <MissionForm />
      <form onSubmit={handleSubmit}>
        <label htmlFor="missionName">Nombre de la misión:</label>
        <input
          type="text"
          id="missionName"
          value={missionName}
          onChange={(event) => setMissionName(event.target.value)}
          required
        />

        <label htmlFor="missionDate">Fecha:</label>
        <input
          type="date"
          id="missionDate"
          value={missionDate}
          onChange={(event) => setMissionDate(event.target.value)}
          required
        />

        <label htmlFor="selectedLocation">Lugar:</label>
        <select
          id="selectedLocation"
          value={selectedLocation}
          onChange={(event) => setSelectedLocation(event.target.value)}
          required
        >
          <option value="">Selecciona un lugar</option>
          {allowedLocations.map((location) => (
            <option key={location} value={location}>{location}</option>
          ))}
        </select>

        <label htmlFor="missionType">Tipo:</label>
        <select
          id="missionType"
          value={missionType}
          onChange={(event) => setMissionType(event.target.value)}
          required
        >
          <option value="">Selecciona un tipo</option>
          <option value="satelite">Satélite</option>
          <option value="spacecraft">Spacecraft</option>
        </select>

        <button type="submit">Generar archivo</button>
      </form>
    </>
  );
};

export default Launchs;


