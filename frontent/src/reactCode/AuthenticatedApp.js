import react, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom'

function AuthenticatedApp({setCurrentAdmin}){

    const navigate = useNavigate()

    console.log("made it into our admin account")

    const handleLogout = () => {
        fetch(`/logout`, {
          method: 'DELETE',
          credentials: 'include'
        })
        .then(res => {
          if (res.ok) {
            setCurrentAdmin(null)
            navigate('/', {replace:false})
          }
        })
      }

    return(
        <form onSubmit={handleLogout}>
            Random
            <button  onClick={handleLogout}>Logout</button>
        </form>
    )
}

export default AuthenticatedApp