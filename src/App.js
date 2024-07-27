import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import Alerts from './components/Alerts';
import TextForm from './components/TextForm';
import React, { useState } from 'react'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light')

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#212529f7'
      document.body.style.color = 'white'
      showAlert('Dark mode enabled', 'success')

    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = '#212529'
      showAlert('Light mode enabled', 'success')

    }
  }

  const [alert, setAlert] = useState(null)

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }
  return (
    <>
    {/* <Router> */}
      <Navbar title="Text-Utils" mode={mode} toggleMode={toggleMode} />
      <Alerts alert={alert} />
      <div className="container my-3">
        {/* <Routes>
          <Route exact path="/about" element={
            <About />
          }>
          </Route>
          <Route exact path="/" element={ */}
            <TextForm heading="Please enter text below to analyze" mode={mode} showAlert={showAlert} />
          {/* }>
          </Route>
        </Routes> */}
      </div>
    {/* </Router> */}
    </>
  );
}

export default App;
