// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { useMutation } from '@apollo/client';
// import Auth from '../../utils/auth';
// import { ADD_USER } from '../../utils/mutations';

// function Signup(props) {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [addUser] = useMutation(ADD_USER);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     const { data } = await addUser({
//       variables: {
//         email: formState.email,
//         password: formState.password,
//       },
//     });
//     console.log(data)
//     const token = data.createUser.token;
//     Auth.login(token);
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

// const Signup = () => {
//   const [formState, setFormState] = useState({
//     email: '',
//     password: '',
//   });
//   const [addUser] = useMutation(ADD_USER);

//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);

//     try {
//       const { data } = await addUser({
//         variables: { ...formState },
//       });

//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };


//   return (
//     <div className="container my-1">
//       <Link to="/login">← Go to Login</Link>

//       <h2>Signup</h2>
//       <form onSubmit={handleFormSubmit}>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="email">Email:</label>
//           <input
//             placeholder="youremail@test.com"
//             name="email"
//             type="email"
//             id="email"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row space-between my-2">
//           <label htmlFor="pwd">Password:</label>
//           <input
//             placeholder="******"
//             name="password"
//             type="password"
//             id="pwd"
//             onChange={handleChange}
//           />
//         </div>
//         <div className="flex-row flex-end">
//           <button type="submit">Submit</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../../utils/auth';
import { ADD_USER } from '../../utils/mutations';
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
// const Signup = () => {
//   const [formState, setFormState] = useState({
//     email: '',
//     password: '',
//   });
//   const [addUser] = useMutation(ADD_USER);
//   // update state based on form input changes
//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };
//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     console.log(formState);
//     try {
//       const { data } = await addUser({
//         variables: { ...formState },
//       });
//       Auth.login(data.addUser.token);
//     } catch (e) {
//       console.error(e);
//     }
//   };

  return (
    <div className="text-center">
      <h2 class="mb-0 mr-4 font-extrabold text-xl text-red-600 ">Signup</h2>
      <div
            class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
      </div>
      <form onSubmit={handleFormSubmit}>
        <div className="relative mb-6" data-te-input-wrapper-init>
          <label htmlFor="email">Email:</label>
          <input
            class="border-2 border-indigo-500"
            placeholder="JohnHancock@iv.com"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row space-between my-2">
          <label htmlFor="pwd">Password:</label>
          <input
            class="border-2 border-indigo-500"
            placeholder="******"
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row flex-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Signup;