// import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm';
import Navbar from './components/Navbar';
import React, { useState } from 'react';
import Alert from './components/Alert';
// import About from './components/About';
//  import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  
  const showAlert=(message,type)=>{
    setAlert({
    msg: message,
    type:type
    })
    setTimeout(()=>{
          setAlert(null);
  },1500);
  }
  const toggleMode = ()=> {
    if(mode === 'light'){
        setMode('dark');
        document.body.style.backgroundColor='#10103d';
        showAlert("Dark Mode has been enabled","success");
        // document.title= "TextUtils - Dark Mode";
        // setInterval(()=>{
        //   document.title="TextUtil is Amazing"},2000);
        //  setInterval(()=>{
        //     document.title="Install TextUtil Now"},1500);
     }
     else
     {
       setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light Mode has been enabled","success");
      // document.title= "TextUtils - Light Mode";

     }
    }
  // whether darkmode is enabled or not
  // /user-->component 1
  // /user/home-->component 2
  return (
    <>
   {/* <Router> */}
   <Navbar title="TextUtils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
   <Alert alert={alert}/>
   <div className="container my-3">
   {/* <Routes> */}
          {/* <Route exact path="/about" element={<About/>}/> */}
          {/* <Route exact path="/" element={<TextForm showAlert={showAlert}heading="Enter The Text To Analyze Below" mode={mode}/>}/> */}
     {/* </Routes> */}
     <TextForm showAlert={showAlert}heading="Enter The Text To Analyze Below" mode={mode}/>
   </div>
   {/* </Router> */}
   </>
  );
}

export default App;
