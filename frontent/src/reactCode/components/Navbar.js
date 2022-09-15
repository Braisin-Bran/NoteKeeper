import {useState} from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import "../styles/navBar.css"

function NavBar({currentAdmin, setCurrentAdmin }){
  const navigate = useNavigate()
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
  
    const [navbarOpen, setNavbarOpen] = useState(true)

    // const handleUpload = (result) => {
    //   const body = {
    //     profile_picture_url: result.info.secure_url,
    //     profile_picture_thumbnail_url: result.info.eager[0].secure_url
    //   }
    //   fetch('/me', {
    //     method: 'PATCH',
    //     headers: {
    //       'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify(body)
    //   })
    //     .then(res => res.json())
    //     .then(user => {
    //       console.log(user);
    //       setCurrentUser(user)
    //     })
    // }
    // const profilePic = () => {
    //   if (currentUser.profile_picture_thumbnail_url) {
    //     return (
    //       <img
    //         src={currentUser.profile_picture_thumbnail_url}
    //         alt={currentUser.username}
    //         className="rounded-full ml-auto"
    //       />
    //     )
    //   } else {
    //     return `Logged in as ${currentUser.username}`
    //   }
      
    // }
  
    return (
      <nav className="">
        
        <div className="navContainer">
          <NavLink className="navLogo" to="/">Note Keeper |</NavLink>
          <NavLink  to="/">Home</NavLink>
          <NavLink className="" to="/about">About</NavLink>
          
          {currentAdmin ?(<form onSubmit={handleLogout}>
            
            <button onClick={handleLogout}>Logout</button>

        </form>):(<NavLink className="pr-2 py-6" to="/login">Login</NavLink>)
          }
          
        </div>
      </nav>
    )
  
}

export default NavBar