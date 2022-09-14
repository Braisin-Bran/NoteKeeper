import React, { useState, useEffect } from 'react'
import { Navigate, Routes, Route } from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom'
import './App.css';
import Login from './reactCode/components/Login.js';
import AuthenticatedApp from './reactCode/AuthenticatedApp';
import UnauthenticatedApp from './reactCode/UnAuthenticatedApp';

function App() {
  const [currentAdmin, setCurrentAdmin] = useState(null)
  const [authChecked, setAuthChecked] = useState(false)

  console.log(currentAdmin)
  useEffect(() => {
    fetch('/me', {
      credentials: 'include'
    })
      .then(res => {
        if (res.ok) {
          res.json().then(admin => {
            setCurrentAdmin(admin)
            setAuthChecked(true)
          })
        } else {
          setAuthChecked(true)
        }
        console.log(authChecked)
     })
  }, [])


  if(!currentAdmin) <Login setCurrentAdmin={setCurrentAdmin} />
  return (
    <div className="App">
      { currentAdmin ? (
      
      <AuthenticatedApp
          setCurrentAdmin={setCurrentAdmin}
          currentAdmin={currentAdmin}
          />
    
        ):(

          
      <UnauthenticatedApp
          setCurrentAdmin={setCurrentAdmin}
          />
        )
      }


      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
