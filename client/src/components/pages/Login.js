// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { LOGIN } from '../../utils/mutations';
// import Auth from '../../utils/auth';

// function Login(props) {
//   const [formState, setFormState] = useState({ email: '', password: '' });
//   const [login, { error }] = useMutation(LOGIN);

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const { data } = await login({
//         variables: { email: formState.email, password: formState.password },
//       });
//       console.log(data)
//       const token = data.loginUser.token;
//       Auth.login(token);
//     } catch (e) {
//       console.log(e);
//     }
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   return (
   

      
// <section class="h-screen">
//   <div class="h-full">
   
//     <div
//       class="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
//       <div
//         class="shrink-1 mb-12 ml-5 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
//         <img
//           src="https://res.cloudinary.com/dxnwbl21t/image/upload/v1684807488/constitution2_te2fp5.jpg"
//           class="w-full"
//           alt="Constitution of the United States" />
//       </div>
//       {/* <!-- Right column container --> */}
//       <div class="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
//         <form  onSubmit={handleFormSubmit}>
//           {/* <!--Login Credentials--> */}
//           <div
//             class="flex flex-row  justify-center text-center">
//             <p class="mb-0 mr-4 text-lg ">Login</p>
//           </div>

//           {/* <!-- Separator between social media sign in and email/password sign in --> */}
//           <div
//             class="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300">
//           </div>

//           {/* <!-- Email input --> */}
//           <div class="relative mb-6" data-te-input-wrapper-init>
//             <input
//               type="text"
//               class="peer block min-h-[auto] w-full rounded border-4 border-red-800 placeholder-blue-900 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear  data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//               id="email"
//               placeholder="Email address" 
//               onChange={handleChange}
//               />
            
//             <label
//               for="exampleFormControlInput2"
//               class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] placeholder-blue-900 text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
//               >JohnHancock@gmail.com
//             </label>
//           </div>

//           <div class="relative mb-6" data-te-input-wrapper-init>
//             <input
//               type="password"
//               class="peer block min-h-[auto] w-full rounded border-4 border-red-800 bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
//               id="password"
//               placeholder="Password" 
//               onChange={handleChange}
//               />
//             <label
//               for="exampleFormControlInput22"
//               class="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none  dark:peer-focus:text-primary"
//               >********
//             </label>
//           </div>
//         {error ? (
//           <div>
//             <p className="error-text">The provided credentials are incorrect</p>
//           </div>
//         ) : null}
        
//         {/* <!-- Login button --> */}
//           <div class="text-center lg:text-left">
//             <button
//               type="button"
//               class="inline-block rounded bg-gray-200 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal  shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg- hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
//               data-te-ripple-init
//               data-te-ripple-color="light">
//               Login
//             </button>
//           </div>
//       </form>
//     </div>
//     </div>
//     </div>
//     </section>
//   );
// }

// export default Login;

import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../../utils/mutations';
import Auth from '../../utils/auth';

function Login(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error }] = useMutation(LOGIN);
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const { data } = await login({
        variables: { email: formState.email, password: formState.password },
      });
      console.log(data)
      const token = data.loginUser.token;
      Auth.login(token);
    } catch (e) {
      console.log(e);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  return (
    <div className="text-center">
      <h2 class="mb-0 mr-4 font-extrabold text-xl text-red-600 ">Login</h2>
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
        {error ? (
          <div>
            <p className="error-text">The provided credentials are incorrect</p>
          </div>
        ) : null}
        <div className="flex-row flex-end bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
}
export default Login;