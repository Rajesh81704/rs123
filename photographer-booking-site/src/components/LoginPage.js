// import React, { useContext } from 'react';
// import { useState } from 'react';
// import { Navigate } from 'react-router-dom';
// import { UserContext } from '../UserContext ';

// const Login = () => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [redirectToHome, setRedirectToHome] = useState(false);
// //   const { setUserInfo } = useContext(UserContext);
//   const { userInfo,setUserInfo } = useState("");

//   async function login(ev) {
//     ev.preventDefault();

//     const response = await fetch("http://localhost:4000/login", {
//       method: 'POST',
//       body: JSON.stringify({ username, password }),
//       headers: { 'Content-Type': 'application/json' },
//       credentials: 'include',
//     });

//     if (response.ok) {
//       const userInfo = await response.json(); // Parse the JSON response
//       setUserInfo(userInfo);
//       setRedirectToHome(true);
//     } else {
//       alert('Wrong credentials');
//     }
//   }

//   if (redirectToHome) {
//     return <Navigate to={'/'} />;
//   }

//   return (
//     <>
//       <form className='login' onSubmit={login}>
//         <h1>Login</h1>
//         <input type="text" placeholder='Username' value={username} onChange={(ev) => setUsername(ev.target.value)} />
//         <input type="password" placeholder='Password' value={password} onChange={(ev) => setPassword(ev.target.value)} />
//         <input type="submit" className='button' value="Login" />
//       </form>
//     </>
//   );
// }

// export default Login;
