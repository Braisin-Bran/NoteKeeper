import react, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom'
import './components/ListContainer'
import ListContainer from './components/ListContainer';
import NewListMod from './components/NewListMod';
function AuthenticatedApp({setCurrentAdmin, currentAdmin}){
    
    const navigate = useNavigate()
    const [lists, setLists] = useState ([])
    const [submitVisibility, setSubmitVisibility] = useState(true,[])
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
      let adminID = currentAdmin.id
  
      console.log("adminID: "+ adminID)
       
        useEffect(() => {
            fetch(`/eventList/${adminID}`, {
                method:"GET",
              credentials: 'include'
            })
            .then((res) => res.json())
            .then((data) => setLists(data))
            
          },[])
          console.log("THIS: "+ {lists})
          
          function handleDeleteList(deletedID) {
            // console.log(deletedID)
            const updatedListArray = lists.filter(
              (list) => list.id !== deletedID
              
            );
            setLists(updatedListArray);
        }
        function handleAddList(newList){
          console.log("new list: "+newList)
          const updatedListArray = [...lists, newList]
          console.log("updatedListArray: "+ updatedListArray)
          setLists(updatedListArray);
        }

    return(
        <div>
          <form onSubmit={handleLogout}>
            
            <button onClick={handleLogout}>Logout</button>

        </form>
        <ListContainer currentAdmin={currentAdmin} submitVisibility={submitVisibility} setSubmitVisibility={setSubmitVisibility} handleDeleteList={handleDeleteList} lists={lists}/>
        {submitVisibility ? (
        <div className='submitContainerHidden'>
        
        </div>
        ):(
          <div className='submitContainer'>
          <NewListMod handleAddList={handleAddList} currentAdmin={currentAdmin}  submitVisibility={submitVisibility} setSubmitVisibility={setSubmitVisibility}/>
          </div>
        )}
        
        </div>
    )
}

export default AuthenticatedApp