// OtherDetails.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

function OtherDetails() {
  const [formData, setFormData] = useState({
    specialSkills: '',
    experience: '',
    artistType: '',
  });

  const location = useLocation();
  const navigate = useNavigate();

  // Pre-fill with personal details data passed from the previous page
  useEffect(() => {
    if (location.state?.formData) {
      setFormData({ ...formData, ...location.state.formData });
    }
  }, [location.state]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could send the form data to an API or do something with it
    console.log('Final Submission:', formData);
    alert('Form submitted successfully!');
  };

  return (
    <Container className="my-4" style={{ maxWidth: '800px' }}>
      <div className="border p-4 rounded shadow">
        <h2 className="my-2 text-center">Other Details</h2>
        <form onSubmit={handleSubmit}>
          {/* Special Skills */}
          <Row className="mb-3">
            <Col md={12}>
              <Form.Group controlId="specialSkills">
                <Form.Label>Special Skills</Form.Label>
                <Form.Control
                  type="text"
                  name="specialSkills"
                  value={formData.specialSkills}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>
          </Row>

          {/* Experience */}
          <Row className="mb-3">
            <Col md={6}>
              <Form.Group controlId="experience">
                <Form.Label>Primary Work Location</Form.Label>
                <Form.Control
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            <Col md={6}>
              <Form.Group controlId="experience">
                <Form.Label>Experience (years)</Form.Label>
                <Form.Control
                  type="number"
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </Form.Group>
            </Col>

            {/* Artist Type */}
            <Col md={6}>
              <Form.Group controlId="artistType">
                <Form.Label>Artist Type</Form.Label>
                <Form.Control
                  as="select"
                  name="artistType"
                  value={formData.artistType}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select Type</option>
                  <option value="Painter">Painter</option>
                  <option value="Sculptor">Sculptor</option>
                  <option value="Musician">Musician</option>
                  <option value="Photographer">Photographer</option>
                  <option value="Writer">Writer</option>
                  <option value="Other">Other</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Row>

          {/* Submit Button */}
          <div className="text-centre " style={{marginLeft:"250px"}}>
          <Button variant="primary" type="submit" className="mt-3" >
            Submit Registration
          </Button>
          </div>
        </form>
      </div>
    </Container>
  );
}

export default OtherDetails;
