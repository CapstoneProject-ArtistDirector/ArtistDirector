import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';

function RegisterForm() {
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
    <Container className="my-2 max-w-3xl  mx-auto">
      <div className="border p-6 rounded-lg shadow-lg bg-gray-800 text-white">
        <h2 className="my-2 text-center text-3xl font-bold">Personal Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Artist Name & Profile Picture */}
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="artistName">
                <Form.Label className="text-start text-gray-300">Artist Name</Form.Label>
                <input
                  type="text"
                  name="artistName"
                  value={formData.artistName}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 text-red-500 border-gray-600 p-2 text-sm form-control"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="profilePicture">
                <Form.Label className="text-gray-300">Profile Picture</Form.Label>
                <Form.Control
                  type="file"
                  name="profilePicture"
                  onChange={handleChange}
                  required
                  className="bg-gray-700 text-red-500 border-gray-600 p-2 text-sm"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* About Section */}
          <Row className="mb-4">
            <Col md={12}>
              <Form.Group controlId="about">
                <Form.Label className="text-gray-300">About</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  name="about"
                  value={formData.about}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 text-red-500 border-gray-600 p-2 text-sm"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Contact Info & Other Details */}
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="primaryWorkLocation">
                <Form.Label className="text-gray-300">Email ID</Form.Label>
                <Form.Control
                  type="text"
                  name="primaryWorkLocation"
                  value={formData.primaryWorkLocation}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 text-red-500 border-gray-600 p-2 text-sm"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="phoneNumber">
                <Form.Label className="text-gray-300">Phone No.</Form.Label>
                <Form.Control
                  type="number"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 text-red-500 border-gray-600 p-2 text-sm"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Height, Weight & Age */}
          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="height">
                <Form.Label className="text-gray-300">Height (in cm)</Form.Label>
                <Form.Control
                  type="number"
                  name="height"
                  value={formData.height}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 text-red-500 border-gray-600 p-2 text-sm"
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="weight">
                <Form.Label className="text-gray-300">Weight (in kg)</Form.Label>
                <Form.Control
                  type="number"
                  name="weight"
                  value={formData.weight}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 text-red-500 border-gray-600 p-2 text-sm"
                />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-4">
            <Col md={6}>
              <Form.Group controlId="age">
                <Form.Label className="text-gray-300">Age</Form.Label>
                <Form.Control
                  type="number"
                  name="age"
                  value={formData.age}
                  onChange={handleChange}
                  required
                  className="bg-gray-700 text-red-500 border-gray-600 p-2 text-sm"
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Submit Button */}
          <div className="text-center">
            <Button
              variant="primary"
              type="submit"
              className="mt-4 px-6 py-3 rounded-l-full bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 text-white"
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default RegisterForm;
