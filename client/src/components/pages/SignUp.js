import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
import logo from '../assets/images/informedvoterlogo2.png';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const { data } = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
      },
    });
    console.log(data)
    const token = data.createUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-100" style={{ backgroundImage: 'url(/images/thumb-1920-554598senate.jpg)' }}>
      <div className="max-w-2xl mx-auto p-4 flex-grow flex flex-col md:flex-row items-center">
        <div className="flex items-center justify-center mb-8 md:mr-8">
          <img src={logo} alt="logo" className="w-100 h-auto border-4 border-black rounded" />
        </div>
        <div className="w-full">
          <h2 className="mb-4 text-3xl font-bold text-white text-center">Signup</h2>
          <div className="my-4 border-t border-neutral-300"></div>
          <form onSubmit={handleFormSubmit} className="w-full">
            <div className="mb-6">
              <label htmlFor="email" className="block mb-2 font-semibold text-white">Email:</label>
              <input
                className="w-full px-6 py-3 border border-indigo-500 rounded focus:outline-none focus:border-indigo-700"
                placeholder="JohnHancock@iv.com"
                name="email"
                type="email"
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block mb-2 font-semibold text-white">Password:</label>
              <input
                className="w-full px-6 py-3 border border-indigo-500 rounded focus:outline-none focus:border-indigo-700"
                placeholder="******"
                name="password"
                type="password"
                id="password"
                onChange={handleChange}
              />
            </div>
            <div className="flex justify-center">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded"
                type="submit"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
  
  
  
}
export default Signup;