import React from 'react';

const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p>&copy; {currentYear} Informed. All rights reserved.</p>
        <a
          href="https://github.com/jsdrever/smart-vote"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-6 w-6 mr-2"
          >
            <path d="M12 0a12 12 0 00-3.8 23.4c.6.1.8-.3.8-.6v-2.1c-3.3.7-4-1.6-4-1.6-.5-1.4-1.2-1.7-1.2-1.7-1-.6.1-.6.1-.6 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.3.9.1-.7.4-1.2.8-1.5-3-.4-6.2-1.5-6.2-6.6 0-1.5.5-2.7 1.3-3.6-.2-.4-.6-1.7.1-3.6 0 0 1.1-.4 3.6 1.4a12.7 12.7 0 013.3-.4 12.7 12.7 0 013.3.4c2.5-1.8 3.6-1.4 3.6-1.4.7 1.9.3 3.2.1 3.6.8.9 1.3 2.2 1.3 3.6 0 5.1-3.2 6.2-6.2 6.6.5.4.9 1.2.9 2.4v3.6c0 .3.2.7.8.6A12 12 0 0012 0" />
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
