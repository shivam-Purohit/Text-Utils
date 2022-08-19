
import './App.css';
// import About from './mycomponents/About';
import Navbar from './mycomponents/Navbar';
import TextForm from './mycomponents/TextForm';
import React, { useState } from 'react';
import Alert from './mycomponents/Alert';

// import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {

  const[mode,setMode] = useState('light');
  const[alert,setAlert] = useState(null);

    const toggleMode = ()=>{
      if(mode === "light"){
        setMode('dark');
        document.body.style.backgroundColor = "#212529";
         showAlert("dark mode is enabled","success");

      }else{
        setMode("light");
        document.body.style.backgroundColor = "#f8f9fa";
        showAlert("light mode is enabled","success");
      }
    }
    const showAlert = (message,type)=>{
   setAlert ({
     msg : message,
     type : type
   })
   setTimeout(() => {
    setAlert(null);
   },1500);
    }

  return (
    <>
    


    {/* <BrowserRouter> */}


    <Navbar title= "Text-Utils" mode={mode} toggleMode = {toggleMode} about = "About "/>
    <Alert alert ={alert}/> 


 {/* <Routes> */}

    {/* <Route path='/' element ={<div className="container" my-3= "true"> */}
    <div className="container" my-3= "true">
    < TextForm heading = "Enter the text to analyze" mode={mode} showAlert = {showAlert}/>
{/* </div>}/> */}
</div>
    {/* <Route exact path='/about' element = {<div className="container" my-3= "true">
    <About exact mode={mode} toggleMode = {toggleMode} />\
    </div>}  /> */}

 {/* </Routes> */}


    {/* </BrowserRouter> */}
      
    </>
  );
}

export default App;
