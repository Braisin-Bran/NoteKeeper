import React, { useState } from "react";

import styled from "styled-components";
import "../styles/loginForm.css"
import NavBar from "./Navbar";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";

function Login({ onLogin, setCurrentAdmin }) {
  
  const [showLogin, setShowLogin] = useState(true);

  return (
    <div>
      <Wrapper className="loginWrapper">
        <Logo>Note Keeper</Logo>
        {showLogin ? (
          <>
            <LoginForm onLogin={onLogin} setCurrentAdmin={setCurrentAdmin} />
            <Divider />
            <p>
              Don't have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
              </button>
            </p>
          </>
        ) : (
          <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <p>
              Already have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p>
          </>
        )}
      </Wrapper>
    </div>
  );
}

    const Logo = styled.h1`
    font-family: 'Rampart One', cursive;
      font-size: 3rem;
      color: black;
      margin: 8px 0 16px;
    `;

    const Wrapper = styled.section`
      max-width: 500px;
      margin: 40px auto;
      padding: 16px;
    `;

    const Divider = styled.hr`
      border: none;
      border-bottom: 1px solid black;
      margin: 16px 0;
    `;

export default Login;