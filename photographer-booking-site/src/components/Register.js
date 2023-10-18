import React, { useState } from 'react'

const Register = () => {

    async function register(ev) {
        ev.preventDefault();
      const response=  await fetch("http://localhost:4000/registeruser", {
          method: 'POST',
            body: JSON.stringify({ username, password }),
            headers: { 'Content-Type': 'application/json' },
            
        });
     if(response.status===200){
      alert("Registration Sucessfull");
     }else{
      alert("Registration Faield");
    
     }
      }


    const[username,setusername]=useState('')
    const[password,setpassword]=useState('')
  return (
    <>

    <form  style={{marginTop:'100px',marginBottom:'200px'}} onSubmit={register}>
    <center><h1>Login Page</h1></center>

<input type="text" name="username" value={username} onChange={(ev)=>setusername(ev.target.value)} />

<input type="password" name="password"  value={password} onChange={(ev)=>setpassword(ev.target.value)} />
<button type='submit'>Register</button>
    </form>
    
    
    </>
  )
}

export default Register;