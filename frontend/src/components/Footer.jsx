import React from 'react';
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-base text-white py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h2 className="text-2xl font-semibold mb-2">Ujjwal Shrivastava</h2>
          <p className="text-gray-400 mb-4">Full Stack Developer</p>
          <p className="text-gray-500 text-sm">&copy; 2024 ujjwal shrivastava. All rights reserved.</p>
        </div>
        <div className="text-center md:text-left mb-6 md:mb-0">
          <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#blog" className="text-gray-400 hover:text-white">Blog</a></li>
            <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
          </ul>
        </div>
        <div className="text-center md:text-right">
          <h3 className="text-xl font-semibold mb-2">Follow Me</h3>
          <div className="flex justify-center md:justify-start space-x-4">
            <a href="https://x.com/ujjwalshri15013" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaTwitter size={24} />
            </a>
            <a href="https://www.linkedin.com/in/ujjwal-shrivastava-2a6138268" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaLinkedin size={24} />
            </a>
            <a href="https://github.com/ujjwalshri" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
              <FaGithub size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;