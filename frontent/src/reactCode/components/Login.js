import React, { useState, useEffect } from 'react'



function Login({ setCurrentAdmin }){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    function HandleSubmit(e) {
        e.preventDefault();
        setIsLoading(true);
        fetch("/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }).then((r) => {
          setIsLoading(false);
          if (r.ok) {
            r.json().then((admin) => setCurrentAdmin(admin));
          } else {
            r.json().then((err) => setErrors(err.errors));
            //add stylization to this
            // errorSpace = <Error key={errors}>{errors}</Error>
            // console.log(errorSpace)
            // errorSpace.forceUpdate()
          }
        });
      }


    return (
        <form onSubmit={HandleSubmit}>
            <h1>
                Richmond Church
            </h1>
          <div className='username-input'>
              <h2>
                Username
              </h2>
              <input  
                type="text"
                id="username"
                autoComplete="on"
                value={username}
                placeholder="username"
                onChange={(e) => setUsername(e.target.value)}
                />
          </div>
          <div className='password-input'>
              <h2>
                  password
              </h2>
              <input
              type="text"
              id="password"
              autoComplete="off"
              value={password}
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}      
              />
          </div>
          <button className='login-button' type='submit'>
              {isLoading ? "Loading..." : "Login"}
          </button>
            {/* <p>
              Already have an account? &nbsp;
              <button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
              </button>
            </p> */}
        </form>
    )
}

export default Login