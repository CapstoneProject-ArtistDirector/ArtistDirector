import React, { useState } from "react";
import { BookOpen, FileText, MessageCircle, LogOut, ChevronDown } from "lucide-react";

function Dashboard() {
  // Courses and their associated content
  const courses = [
    { id: 1, name: "Math 101" },
    { id: 2, name: "Science 102" },
    { id: 3, name: "History 103" },
  ];

  // Selected course and content state
  const [selectedCourse, setSelectedCourse] = useState(courses[0]);
  const [activeSection, setActiveSection] = useState("chat");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Function to handle course selection
  const handleCourseChange = (course) => {
    setSelectedCourse(course);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  // Function to handle section change (Notes, Assignments, Chat)
  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-green-500 to-teal-500 p-6 text-white shadow-lg">
        <h2 className="text-3xl font-semibold mb-8">Dashboard</h2>

        {/* Courses Dropdown */}
        <div className="mb-6">
          <p className="text-xl font-semibold">Courses</p>
          <div className="relative">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center justify-between w-full p-3 mt-2 bg-green-600 text-white rounded-md focus:outline-none"
            >
              {selectedCourse.name}
              <ChevronDown className="h-5 w-5 ml-2" />
            </button>
            {isDropdownOpen && (
              <ul className="absolute left-0 w-full mt-2 bg-white text-gray-700 rounded-md shadow-lg">
                {courses.map((course) => (
                  <li key={course.id}>
                    <button
                      onClick={() => handleCourseChange(course)}
                      className="block w-full px-4 py-2 text-left hover:bg-gray-200"
                    >
                      {course.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Sidebar Menu - Assignments, Notes, Chat */}
        <ul className="space-y-4">
          <li>
            <button
              onClick={() => handleSectionChange("assignments")}
              className="flex items-center text-lg hover:bg-green-600 p-2 rounded-md transition-all"
            >
              <BookOpen className="h-5 w-5 mr-3" />
              Assignments
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionChange("notes")}
              className="flex items-center text-lg hover:bg-green-600 p-2 rounded-md transition-all"
            >
              <FileText className="h-5 w-5 mr-3" />
              Notes
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSectionChange("chat")}
              className="flex items-center text-lg hover:bg-green-600 p-2 rounded-md transition-all"
            >
              <MessageCircle className="h-5 w-5 mr-3" />
              Chat
            </button>
          </li>
          <li className="absolute bottom-10 w-full">
            <button
              onClick={() => alert("Signed out")}
              className="flex items-center text-lg hover:bg-red-600 p-2 rounded-md transition-all"
            >
              <LogOut className="h-5 w-5 mr-3" />
              Sign Out
            </button>
          </li>
        </ul>
      </div>

      {/* Main Content (Right Side) */}
      <div className="flex-1 p-8 overflow-y-auto bg-white">
        <h3 className="text-2xl font-semibold text-gray-800 mb-6">{selectedCourse.name}</h3>

        {/* Tabs for Notes, Assignments, Chat */}
        <div className="mb-6">
          <button
            onClick={() => handleSectionChange("chat")}
            className={`px-4 py-2 mr-4 rounded-md transition-all ${
              activeSection === "chat" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Chat
          </button>
          <button
            onClick={() => handleSectionChange("assignments")}
            className={`px-4 py-2 mr-4 rounded-md transition-all ${
              activeSection === "assignments" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Assignments
          </button>
          <button
            onClick={() => handleSectionChange("notes")}
            className={`px-4 py-2 rounded-md transition-all ${
              activeSection === "notes" ? "bg-green-500 text-white" : "bg-gray-100 text-gray-700"
            }`}
          >
            Notes
          </button>
        </div>

        {/* Chat Section */}
        {activeSection === "chat" && (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Chat with Teacher</h4>
            <div className="bg-white p-6 rounded-lg shadow-md space-y-4 h-64 overflow-y-auto">
              <div className="text-gray-700">Teacher: How can I help you today?</div>
              <div className="text-green-500">You: I have a question about the homework.</div>
              {/* Add more chat messages here */}
            </div>
            <textarea
              placeholder="Type your message..."
              className="w-full p-3 mt-4 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            ></textarea>
          </div>
        )}

        {/* Assignments Section */}
        {activeSection === "assignments" && (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Assignments for {selectedCourse.name}</h4>
            <ul className="space-y-4">
              <li>
                <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                  <p className="text-gray-700 font-medium">Assignment 1: Math Homework</p>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all">Upload</button>
                </div>
              </li>
              <li>
                <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                  <p className="text-gray-700 font-medium">Assignment 2: Science Report</p>
                  <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 transition-all">Upload</button>
                </div>
              </li>
            </ul>
          </div>
        )}

        {/* Notes Section */}
        {activeSection === "notes" && (
          <div className="space-y-6">
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Notes for {selectedCourse.name}</h4>
            <ul className="space-y-4">
              <li>
                <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                  <p className="text-gray-700 font-medium">Notes: {selectedCourse.name} Lecture 1</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all">View PDF</button>
                </div>
              </li>
              <li>
                <div className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                  <p className="text-gray-700 font-medium">Notes: {selectedCourse.name} Lecture 2</p>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-all">View PDF</button>
                </div>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Dashboard;
