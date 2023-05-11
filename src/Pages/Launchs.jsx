import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

    
const allowedLocations = ["Cabo Cañaveral", "Vandenberg", "Baikonur", "Wenchang", "Boca Chica", "McGregor"];
const LaunchForm = () => {
  const [missionName, setMissionName] = useState('');
  const [missionDate, setMissionDate] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [missionType, setMissionType] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear objeto con la información de la misión
    const launchData = {
      missionName,
      missionDate,
      selectedLocation,
      missionType
    };

    // Convertir objeto a JSON
    const jsonData = JSON.stringify(launchData);

    // Crear archivo .json
    const element = document.createElement('a');
    const file = new Blob([jsonData], { type: 'application/json' });
    element.href = URL.createObjectURL(file);
    element.download = 'missionData.json';
    document.body.appendChild(element);
    element.click();
  };

  return (
    <Container className="d-flex align-items-center justify-content-center vh-100">
      <div className="p-4 bg-primary rounded">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="missionName">
            <Form.Label className="text-light">Nombre de la misión:</Form.Label>
            <Form.Control
              type="text"
              value={missionName}
              onChange={(event) => setMissionName(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="missionDate">
            <Form.Label className="text-light">Fecha:</Form.Label>
            <Form.Control
              type="date"
              value={missionDate}
              onChange={(event) => setMissionDate(event.target.value)}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="selectedLocation">
            <Form.Label className="text-light">Lugar:</Form.Label>
            <Form.Control
              as="select"
              value={selectedLocation}
              onChange={(event) => setSelectedLocation(event.target.value)}
              required
            >
              <option value="">Selecciona un lugar</option>
              {allowedLocations.map((location) => (
                <option key={location} value={location}>{location}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group className="mb-3" controlId="missionType">
            <Form.Label className="text-light">Tipo:</Form.Label>
            <Form.Control
              as="select"
              value={missionType}
              onChange={(event) => setMissionType(event.target.value)}
              required
            >
              <option value="">Selecciona un tipo</option>
              <option value="satelite">Satélite</option>
              <option value="spacecraft">Spacecraft</option>
            </Form.Control>
          </Form.Group>

          <Button variant="danger" type="submit">
            Generar archivo
          </Button>
        </Form>
      </div>
    </Container>
  );
};

  

export default LaunchForm;


