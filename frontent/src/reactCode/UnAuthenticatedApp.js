import { Route, Routes, Navigate } from 'react-router-dom';


import Login from './components/Login.js';

function UnauthenticatedApp({ setCurrentAdmin }){

    return(
        <div>
            <div>
        {/* <NavBar setCurrentMember={setCurrentMember}/> */}
        <Routes>
            {/* <Route path="/bulletins" element={<BulletinContainer showBulletins={showBulletins} setShowBulletins={setShowBulletins}/>}/> */}
            <Route path="/login" element={<Login setCurrentAdmin={setCurrentAdmin}/>}/>
            <Route path="/" element={<Navigate replace to="/login"/>}/>
        </Routes>
        </div>
        </div>
    )
    
}

export default UnauthenticatedApp