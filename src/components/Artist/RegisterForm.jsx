// PersonalDetails.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container,Row,Col,Card } from 'react-bootstrap';

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

  const navigate = useNavigate();

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
    // Navigate to the other details page
    navigate('/other-details', { state: { formData } });
  };

  return (
    <Container className="my-2" style={{ maxWidth: '800px' }}>
      <div className="border p-4 rounded shadow">
        <h2 className="my-2 text-center">Personal Details</h2>
        <form onSubmit={handleSubmit}>
          <Row className="mb-3">
            {/* Artist Name (Left) */}
            <Col md={6}>
              <Form.Group controlId="artistName">
                <Form.Label className="text-start">Artist Name</Form.Label>
                <Form.Control
                  type="text"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            {/* Profile Picture (Right) */}
            <Col md={6}>
              <Form.Group controlId="profilePicture">
                <Form.Label>Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  name="profilePicture"
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-3">
            {/* About (Left) */}
            <Col md={12}>
              <Form.Group controlId="about">
                <Form.Label>About</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
            
            <Row className="mb-3">
            {/* Primary Work Location (Left) */}
            <Col md={6}>
              <Form.Group controlId="primaryWorkLocation">
                <Form.Label>Email ID</Form.Label>
                <Form.Control
                  type="text"
                  name="primaryWorkLocation"
                  value={formData.primaryWorkLocation}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            {/* Height (Right) */}
            <Col md={6}>
              <Form.Group controlId="height">
                <Form.Label>Phone No.</Form.Label>
                <Form.Control
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          

          

          <Row className="mb-3">
            {/* Height (Right) */}
            <Col md={6}>
              <Form.Group controlId="height">
                <Form.Label>Height (in cm)</Form.Label>
                <Form.Control
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          

          
            {/* Weight (Left) */}
            <Col md={6}>
              <Form.Group controlId="weight">
                <Form.Label>Weight (in kg)</Form.Label>
                <Form.Control
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
            </Row>

            {/* Age (Right) */}
            <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="age">
                <Form.Label>Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Submit Button */}
          <div className="text-centre" style={{marginLeft:"300px"}}>
          <Button variant="primary" type="submit" className="mt-3">
            Next
          </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default RegistrationForm;
