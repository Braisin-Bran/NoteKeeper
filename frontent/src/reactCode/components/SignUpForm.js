import React, { useState } from "react";
import { useNavigate, Link } from 'react-router-dom'



function SignUpForm( setCurrentAdmin ){
    const [name, setName] = useState ("")
    const [email, setEmail] = useState ("")
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [errors, setErrors] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        fetch('/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name,
            email,
            username,
            password,
            password_confirmation: passwordConfirmation
          })
        })
        .then(res => {
          if (res.ok) {
            res.json().then(member => {
              setCurrentAdmin(member)
              navigate('/login', {replace:false})
            })
          } else {
            res.json().then(({ error }) => {
              setErrors(error)
            })
          }
        })
      }
    

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Sign Up</h1>
                <p>
                    <input
                    type="text"
                    name="name"
                    autoComplete="off"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="name-input"
                    placeholder="name..."
                    />
                </p>
                <p>
                    <input
                    type="text"
                    name="email"
                    
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="email-input"
                    placeholder="email..."
                    />
                </p>
                <p>
                    <input
                    type="text"
                    name="username"
                    autoComplete="off"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="username-input"
                    placeholder="username..."
                    />
                </p>
                <p>
                    <input
                    type="text"
                    name="password"
                    autoComplete="off"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="password-input"
                    placeholder="password..."
                    />
                </p>
                <p>
                    <input
                    type="text"
                    name="password-confimation"
                    value={passwordConfirmation}
                    autoComplete="off"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                    className="password-confimation-input"
                    placeholder="confirm password..."
                    />
                </p>
                <p><button className="submit-sign-up" type="submit">Sign Up</button></p>
            </form>
        </div>
    )
}

export default SignUpForm