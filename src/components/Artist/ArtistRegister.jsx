import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FiHome, FiUser, FiLogOut } from 'react-icons/fi';

function ArtistRegister() {
  const [formData, setFormData] = useState({
    artistName: '',
    artistProfilePicture: null,
    artistAbout: '',
    artistPrimaryWorkLocation: '',
    artistHeight: '',
    artistWeight: '',
    artistAge: '',
    artistSpecialSkills: '',
    artistExperience: '',
    artistType: '',
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
    console.log('Final Form Data:', formData);
    alert('Form submitted successfully!');
    // You can navigate to a different page here after submitting
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <a
                href="/home"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiHome className="mr-2" />
                Home
              </a>
              <a
                href="/profile"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiUser className="mr-2" />
                Profile
              </a>
            </div>
            <a
              href="/logout"
              className="flex items-center text-white hover:text-red-400 transition-colors no-underline"
            >
              <FiLogOut className="mr-2" />
              Sign Out
            </a>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-2xl text-center font-bold text-white mb-6">
              Artist Registration
            </h2>

            {/* Single Form Section */}
            <form onSubmit={handleSubmit}>
              <h3 className="text-xl text-white mb-4">Personal Details</h3>

              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group controlId="artistName">
                    <Form.Label className="text-sm text-gray-300">Artist Name</Form.Label>
                    <input
                      type="text"
                      name="artistName"
                      value={formData.artistName}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="artistProfilePicture">
                    <Form.Label className="text-sm text-gray-300">Profile Picture</Form.Label>
                    <input
                      type="file"
                      name="artistProfilePicture"
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={12}>
                  <Form.Group controlId="artistAbout">
                    <Form.Label className="text-sm text-gray-300">About</Form.Label>
                    <textarea
                      rows={3}
                      name="artistAbout"
                      value={formData.artistAbout}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group controlId="artistHeight">
                    <Form.Label className="text-sm text-gray-300">Height (in cm)</Form.Label>
                    <input
                      type="number"
                      name="artistHeight"
                      value={formData.artistHeight}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="artistWeight">
                    <Form.Label className="text-sm text-gray-300">Weight (in kg)</Form.Label>
                    <input
                      type="number"
                      name="artistWeight"
                      value={formData.artistWeight}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group controlId="artistAge">
                    <Form.Label className="text-sm text-gray-300">Age</Form.Label>
                    <input
                      type="number"
                      name="artistAge"
                      value={formData.artistAge}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={12}>
                  <Form.Group controlId="artistSpecialSkills">
                    <Form.Label className="text-sm text-gray-300">Special Skills</Form.Label>
                    <input
                      type="text"
                      name="artistSpecialSkills"
                      value={formData.artistSpecialSkills}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group controlId="artistExperience">
                    <Form.Label className="text-sm text-gray-300">Experience (years)</Form.Label>
                    <input
                      type="number"
                      name="artistExperience"
                      value={formData.artistExperience}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="artistPrimaryWorkLocation">
                    <Form.Label className="text-sm text-gray-300">Primary Work Location</Form.Label>
                    <input
                      type="text"
                      name="artistPrimaryWorkLocation"
                      value={formData.artistPrimaryWorkLocation}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={12}>
                  <Form.Group controlId="artistType">
                    <Form.Label className="text-sm text-gray-300">Artist Type</Form.Label>
                    <select
                      name="artistType"
                      value={formData.artistType}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option value="Painter">Painter</option>
                      <option value="Sculptor">Sculptor</option>
                      <option value="Photographer">Photographer</option>
                    </select>
                  </Form.Group>
                </Col>
              </Row>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistRegister;
