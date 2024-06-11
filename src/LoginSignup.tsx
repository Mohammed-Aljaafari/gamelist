// import logo from './logo.svg';
import React, { useState } from 'react';
import Layout from "./layout.tsx";
// import './App.css';
import Login from './login.tsx';
import Singup from "./signup.tsx";


function LoginSignup()  {
    const [isLogin, setIsLogin] = useState(true);


  return (
    
    <div className="flex flex-col items-center  " >
      <main className='w-full max-w-md ' >
      <div className="flex items-center justify-center "><div className="join grid grid-cols-2 w-44 m-5 shadow-lg ">
  <button className="join-item btn btn-outline" onClick={() => setIsLogin(true)}>Login</button>
  <button className="join-item btn btn-outline" onClick={() => setIsLogin(false)} >Signup</button>
</div>
        </div> 
      

        {isLogin ? <Login /> : <Singup />}
      </main>
    </div>
   
  );
}

export default LoginSignup;