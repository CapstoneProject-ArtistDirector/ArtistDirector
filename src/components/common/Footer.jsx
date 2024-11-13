import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt,FaFacebook,FaInstagram,FaTwitter } from 'react-icons/fa';
import { FiInstagram } from "react-icons/fi";

export default function Footer() {
  return (
    <>
      <footer className="bg-black dark:bg-gray-900">
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-start lg:gap-12 justify-center">
             {/* About Section on the Right */}
          <div className="mt-12 flex justify-between lg:mt-16">
            <div className="flex-1">
              <p className="font-medium text-white dark:text-white">About Us</p>
              <p className="mt-4 text-sm text-gray-300 dark:text-gray-200">
                We are a dynamic and innovative company focused on providing top-notch services
                for businesses across various industries. Our mission is to deliver excellence in
                every project, ensuring our clients' success.
              </p>
              <div className="text-white">
              <FaFacebook />
              <FaInstagram />
              <FaTwitter />
              
              </div>
            </div>
            {/* Getting Started Section */}
            <div className="sm:col-span-1 mx-15">
              <p className="font-medium text-white dark:text-white">Getting Started</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75 dark:text-gray-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75 dark:text-gray-200"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Accounts Review
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    HR Consulting
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    SEO Optimisation
                  </a>
                </li>
              </ul>
            </div>

            {/* Company Section */}
            <div className="sm:col-span-1 mx-40">
              <p className="font-medium text-white dark:text-white">Company</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Meet the Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            {/* Helpful Links Section */}
            {/* <div className="sm:col-span-1 mx-30">
              <p className="font-medium text-white dark:text-white">Helpful Links</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75 dark:text-gray-200"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white transition hover:opacity-75 dark:text-gray-200"
                  >
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-700 transition hover:opacity-75 dark:text-gray-200"
                  >
                    Live Chat
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="flex-1">
              <p className="font-medium  text-white dark:text-white mx-8">Contact</p>
              <ul className="mt-6 space-y-4 text-sm">
                <li className="flex items-center space-x-2 text-gray-300 dark:text-gray-200">
                  <FaMapMarkerAlt className="text-xl" />
                  <span>123 Business St, City, Country</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300 dark:text-gray-200">
                  <FaPhoneAlt className="text-xl" />
                  <span>+1 (123) 456-7890</span>
                </li>
                <li className="flex items-center space-x-2 text-gray-300 dark:text-gray-200">
                  <FaEnvelope className="text-xl" />
                  <span>contact@company.com</span>
                </li>
              </ul>
            </div>
          </div>    
          </div>
          
          {/* Footer Bottom Section */}
          <div className="mt-12">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              &copy; 2022. Company Name. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
