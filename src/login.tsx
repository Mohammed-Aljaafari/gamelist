import React, { useState } from 'react';

function Login(){

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login Details:', { email, password });
  };


    return(
      <html>
        <div className=" flex justify-center m-0 ">
        <form className=" w-96 h-96 border border-900 flex flex-col items-center justify-center  rounded-box " onSubmit={handleSubmit}>
          <div className='flex flex-col items-center justify-center '>
            <label className="m-2">Email</label>
            <input className="input input-bordered w-full max-w-xs m-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='flex flex-col items-center justify-center '>
            <label className="m-2">Password</label>
            <input 
            className="input input-bordered w-full max-w-xs m-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button className="btn btn-outline  rounded-full p-4" type="submit">Login</button>
        </form>
      </div>
      </html>
    );
  }

  export default Login;