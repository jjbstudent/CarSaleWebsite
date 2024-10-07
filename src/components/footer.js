import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Affordable Cars. All rights reserved.</p>
        <p>Designed and developed by Jermaine.</p>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <FontAwesomeIcon icon={faInstagram} className="text-white hover:text-gray-400" size="2x" />
          </a>
          <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
            <FontAwesomeIcon icon={faFacebook} className="text-white hover:text-gray-400" size="2x" />
          </a>
          <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} className="text-white hover:text-gray-400" size="2x" />
          </a>
          <a href="mailto:jblearn2023@gmail.com" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} className="text-white hover:text-gray-400" size="2x" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
