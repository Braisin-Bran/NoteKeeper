import {useState} from 'react'
import { NavLink } from 'react-router-dom'
import "../styles/navBar.css"

function NavBar({setCurrentMember}){

  
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
      <nav className="flex items-center justify-between text-2xl border-black border-b-2 pb-2 mb-4">
        <div className="navContainer">
          <NavLink className="pr-6 py-6" to="/">Home</NavLink>
          {/* <NavLink className="pr-2 py-6" to="/bulletins">Bulletin</NavLink> */}
          <NavLink className="pr-2 py-6" to="/about">About</NavLink>
          <NavLink className="pr-2 py-6" to="/login">Login</NavLink>
        </div>
      </nav>
    )
  
}

export default NavBar