import React from 'react';
import ContactForm from './ContactForm';

const currentYear = new Date().getFullYear();

const Footer = () => {
  const teamMembers = [
    { name: 'Jeff S. Drever', githubUrl: 'https://github.com/jsdrever' },
    { name: 'Logan Landen', githubUrl: 'https://github.com/LoganWantstoCode' },
    { name: 'Tim Johnson', githubUrl: 'https://github.com/timjohnson818' },
    { name: 'Andrew Allemond', githubUrl: 'https://github.com/aallemond' },
    { name: 'Joshua Romani', githubUrl: 'https://github.com/DongleJosh' },
    { name: 'Danielle Sison', githubUrl: 'https://github.com/DanielleSison' },
    { name: 'Vageli Stathatos', githubUrl: 'https://github.com/bulkingfire' },
    { name: 'Jesus A. Vazquez', githubUrl: 'https://github.com/JesusV545' },
  ];

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-3 gap-8">
        <div className="col-span-1">
          <ContactForm />
        </div>
        <div className="col-span-1">
          <h1 className='text-2xl font-bold mb-4 text-gray-300'>Message to Our Audience:</h1>
          <p className="text-gray-500 mb-4">
          "Empowerment lies within the diligent pursuit of knowledge. Before casting a vote, let curiosity be your compass, 
          and research be your guiding light. For in the realm of democracy, an informed decision is the key that unlocks the 
          door to a better future."</p>
          <p className=''>-TableFlip Coders </p>
        </div>
        <div className="col-span-1">
          <p className="text-2xl font-bold mb-4 text-gray-300">Meet The TableFlip Coders:</p>
          <div className="grid grid-cols-2 gap-4">
            {teamMembers.map((member, index) => (
              <a
                key={index}
                href={member.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-300"
              >
                <img
                  src={`https://github.com/${member.githubUrl.split('/').pop()}.png`}
                  alt={`${member.name}'s GitHub`}
                  className="h-8 w-8 rounded-full"
                />
                <span className="ml-2">{member.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-center justify-center mt-8">
        <p className="text-gray-300">&copy; {currentYear} Informed Voter. All rights reserved. </p>
          <a
            href="https://github.com/jsdrever/smart-vote"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center ml-4"
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

