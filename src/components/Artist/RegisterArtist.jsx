import React, { useState } from 'react';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import { FiHome, FiUser, FiLogOut } from 'react-icons/fi';
import { RxDashboard } from "react-icons/rx";
import { Link } from 'react-router-dom';

function RegisterArtist() {
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
    artistEmail: '',
    artistPhoneNumber: '',
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
    <div
      className="min-h-screen bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1593573969589-c416b9c926de?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')", // Replace with your image URL
      }}
    >
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-sm z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Link
                to="/home"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiHome className="mr-2" />
                Home
              </Link>
              <Link
                to="/dashboard"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <RxDashboard className="mr-2" />
                Dashboard
              </Link>
              <Link
                to="/profile"
                className="flex items-center text-white hover:text-blue-400 transition-colors no-underline"
              >
                <FiUser className="mr-2" />
                Profile
              </Link>
            </div>
            <Link
              to="/logout"
              className="flex items-center text-white hover:text-red-400 transition-colors no-underline"
            >
              <FiLogOut className="mr-2" />
              Sign Out
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-gray-900 backdrop-blur-sm rounded-lg p-6 bg-opacity-80">
            <h2 className="text-2xl text-center font-bold text-white mb-6">
              Artist Registration
            </h2>

            {/* Single Form Section */}
            <form onSubmit={handleSubmit}>
              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group controlId="artistName">
                    <Form.Label className="text-base font-semibold text-gray-300">Artist Name</Form.Label>
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
                  <Form.Group controlId="artistPrimaryWorkLocation">
                    <Form.Label className="text-base font-semibold text-gray-300">Primary Work Location</Form.Label>
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
                <Col md={6}>
                  <Form.Group controlId="artistEmail">
                    <Form.Label className="text-base font-semibold text-gray-300">Email ID</Form.Label>
                    <input
                      type="email"
                      name="artistEmail"
                      value={formData.artistEmail}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </Form.Group>
                </Col>

                <Col md={6}>
                  <Form.Group controlId="artistPhoneNumber">
                    <Form.Label className="text-base font-semibold text-gray-300">Phone Number</Form.Label>
                    <input
                      type="text"
                      name="artistPhoneNumber"
                      value={formData.artistPhoneNumber}
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
                    <Form.Label className="text-base font-semibold text-gray-300">About</Form.Label>
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
                    <Form.Label className="text-base font-semibold text-gray-300">Height (in cm)</Form.Label>
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
                    <Form.Label className="text-base font-semibold text-gray-300">Weight (in kg)</Form.Label>
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
                    <Form.Label className="text-base font-semibold text-gray-300">Age</Form.Label>
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

                <Col md={6}>
                  <Form.Group controlId="artistType">
                    <Form.Label className="text-base font-semibold text-gray-300">Artist Type</Form.Label>
                    <select
                      name="artistType"
                      value={formData.artistType}
                      onChange={handleChange}
                      required
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                      <option>SELECT</option>
                      <option value="Actor">Actor</option>
                      <option value="Musician">Musician</option>
                      <option value="Dancer">Dancer</option>
                      <option value="Model">Model</option>
                      <option value="Voice Artist">Voice Artist</option>
                      <option value="Performer">Performer</option>
                    </select>
                  </Form.Group>
                </Col>
              </Row>

              <Row className="mb-4">
                <Col md={6}>
                  <Form.Group controlId="artistExperience">
                    <Form.Label className="text-base font-semibold text-gray-300">Experience (in years)</Form.Label>
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
                  <Form.Group controlId="artistSpecialSkills">
                    <Form.Label className="text-base font-semibold text-gray-300">Special Skills</Form.Label>
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
                  <Form.Group controlId="artistProfilePicture">
                    <Form.Label className="text-base font-semibold text-gray-300">Profile Picture</Form.Label>
                    <input
                      type="file"
                      name="artistProfilePicture"
                      onChange={handleChange}
                      className="w-full bg-gray-700 border border-gray-600 text-white rounded-lg px-3 py-2"
                    />
                  </Form.Group>
                </Col>
              </Row>

              <div className="flex justify-center">
                <Button
                  type="submit"
                  className="bg-green-600 hover:bg-green-400 text-white px-6 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
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

export default RegisterArtist;
