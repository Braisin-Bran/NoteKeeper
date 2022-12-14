import { Route, Routes, Navigate } from 'react-router-dom';
import Homepage from './components/Homepage.js';
import NavBar from './components/Navbar.js';
import Login from './components/Login.js';
import About from './components/About.js';
function UnauthenticatedApp({ setCurrentAdmin }){

    return(
        <div>
            <div>
        {/* <NavBar setCurrentMember={setCurrentMember}/> */}
        <Routes>
            {/* <Route path="/bulletins" element={<BulletinContainer showBulletins={showBulletins} setShowBulletins={setShowBulletins}/>}/> */}
            <Route path="/login" element={[<NavBar/>, <Login setCurrentAdmin={setCurrentAdmin}/>]}/>
            <Route path="/" element={[ <NavBar/>, <Homepage/>]}/>
            <Route path="/about" element={[ <NavBar/>, <About/>]}/>
        </Routes>
        </div>
        </div>
    )
    
}

export default UnauthenticatedApp