import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const SpacecraftForm = () => {
  const [name, setName] = useState('');
  const [height, setHeight] = useState('');
  const [width, setWidth] = useState('');
  const [mass, setMass] = useState('');
  const [thrust, setThrust] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    // Crear objeto con la información del cohete
    const spacecraftData = {
      name,
      height,
      width,
      mass,
      thrust
    };

    // Hacer algo con los datos del cohete, como enviarlos a un servidor

    // Reiniciar los campos del formulario
    setName('');
    setHeight('');
    setWidth('');
    setMass('');
    setThrust('');
  };

  return (
    <Container className="bg-light p-4 rounded">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Nombre Spacecraft:</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="height">
          <Form.Label>Altura:</Form.Label>
          <Form.Control
            type="number"
            value={height}
            onChange={(event) => setHeight(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="width">
          <Form.Label>Anchura:</Form.Label>
          <Form.Control
            type="number"
            value={width}
            onChange={(event) => setWidth(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="mass">
          <Form.Label>Masa:</Form.Label>
          <Form.Control
            type="number"
            value={mass}
            onChange={(event) => setMass(event.target.value)}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="thrust">
          <Form.Label>Empuje:</Form.Label>
          <Form.Control
            type="number"
            value={thrust}
            onChange={(event) => setThrust(event.target.value)}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </Container>
  );
};

export default SpacecraftForm;




