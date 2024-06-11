
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Layout from "./layout.tsx";
// import './App.css';
import Login from './login.tsx';
import Singup from "./signup.tsx";
import LoginSignup from './LoginSignup.tsx';
import Home from './homepage.tsx';
function App() {

  const [isLogin, setIsLogin] = useState(true);


  return (
    <Router>
    <Layout>
      
      <Routes>
            <Route path="/homepage.tsx" element={<Home/>} ></Route>
            <Route path="/LoginSignup.tsx" element={<LoginSignup />} ></Route>
          </Routes>
      
      
         
    
    </Layout>
    </Router>
  );
}



export default App;
