import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import About from './Components/About';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  BrowserRouter as Router,
  Switch,
  Link
} from "react-router-dom";

function App(){
  const [mode, setMode]= useState('light'); //whether dark mode is enabled or not
  const[alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(()=>{
        setAlert(null);
      },1500);
  }



  const toggleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      showAlert(" Dark mode has been enabled", "success");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor = 'white';
      showAlert(" Light mode has been enabled", "success");
    }
  }
  
  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutText="About TextUtils"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Alert alert={alert} />
        <div className="container my-4" mode={mode}>
          <Routes>
            <Route path="/about" element={<About mode={mode} />}></Route>
            <Route
               path="/"
              element={
                <TextForm
                  showAlert={showAlert}
                  heading="Try TextUtils  - Word Counter,Character Counter, Download Text "
                  mode={mode}
                />
              }
            ></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
}



export default App;
