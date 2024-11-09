// RegistrationForm.js
import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
// import './RegistrationForm.css'; // Import the custom CSS

function RegistrationForm() {
  const [formData, setFormData] = useState({
    artistName: '',
    profilePicture: null,
    about: '',
    primaryWorkLocation: '',
    height: '',
    weight: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === 'file') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <div className="background-container">
      <Container className="form-container">
        <div className="form-wrap">
          <h2 className="text-center text-white mb-4">Registration Form</h2>
          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="artistName">
                  <Form.Label className="text-white">Artist Name</Form.Label>
                  <Form.Control
                    type="text"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleChange}
                    required
                    className="transparent-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="profilePicture">
                  <Form.Label className="text-white">Profile Picture</Form.Label>
                  <Form.Control
                    type="file"
                    name="profilePicture"
                    onChange={handleChange}
                    required
                    className="transparent-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={12}>
                <Form.Group controlId="about">
                  <Form.Label className="text-white">About</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={3}
                    name="about"
                    value={formData.about}
                    onChange={handleChange}
                    required
                    className="transparent-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="primaryWorkLocation">
                  <Form.Label className="text-white">Primary Work Location</Form.Label>
                  <Form.Control
                    type="text"
                    name="primaryWorkLocation"
                    value={formData.primaryWorkLocation}
                    onChange={handleChange}
                    required
                    className="transparent-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="height">
                  <Form.Label className="text-white">Height (cm)</Form.Label>
                  <Form.Control
                    type="number"
                    name="height"
                    value={formData.height}
                    onChange={handleChange}
                    required
                    className="transparent-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col md={6}>
                <Form.Group controlId="weight">
                  <Form.Label className="text-white">Weight (kg)</Form.Label>
                  <Form.Control
                    type="number"
                    name="weight"
                    value={formData.weight}
                    onChange={handleChange}
                    required
                    className="transparent-input"
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group controlId="age">
                  <Form.Label className="text-white">Age</Form.Label>
                  <Form.Control
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    required
                    className="transparent-input"
                  />
                </Form.Group>
              </Col>
            </Row>
            <div className="text-center mt-3">
              <Button variant="primary" type="submit">
                Register
              </Button>
            </div>
          </Form>
        </div>
      </Container>
    </div>
  );
}

export default RegistrationForm;
