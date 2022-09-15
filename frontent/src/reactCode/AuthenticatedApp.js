import react, { useState, useEffect } from 'react';
import { useNavigate, Route, Routes, Navigate } from 'react-router-dom'
import './components/ListContainer'
import ListContainer from './components/ListContainer';
import NewListMod from './components/NewListMod';
import EditListMod from './components/EditListMod';
import NavBar from './components/Navbar';
import About from './components/About';
function AuthenticatedApp({setCurrentAdmin, currentAdmin}){
    
    const navigate = useNavigate()
    const [lists, setLists] = useState ([])
    const [submitVisibility, setSubmitVisibility] = useState(true)
    const [editVisibility, setEditVisibility] = useState(true)
    const [targetListTitle, setTargetListTitle] = useState("")
    const [targetListType, setTargetListType] = useState("")
    const [targetListDesc, setTargetListDesc] = useState("")
    const [targetListID,setTargetListID] = useState()
    const [targetEventID, setTargetEventID] = useState()
    console.log("made it into our admin account")

   
    
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
        function updateLists(){
          fetch(`/eventList/${adminID}`, {
            method:"GET",
          credentials: 'include'
        })
        .then((res) => res.json())
        .then((data) => setLists(data))
        
      
        }
        function handleAddList(newList){
          console.log("new list: "+newList)
          const updatedListArray = [...lists, newList]
          console.log("updatedListArray: "+ updatedListArray)
          setLists(updatedListArray);
        }

    return(
        <div>
          
        <Routes>
          <Route path="/" element={[
          <NavBar currentAdmin={currentAdmin}/>,
          <ListContainer 
            currentAdmin={currentAdmin} 
            submitVisibility={submitVisibility} 
            setSubmitVisibility={setSubmitVisibility} 
            handleDeleteList={handleDeleteList} 
            editVisibility={editVisibility} 
            setEditVisibility={setEditVisibility} 
            lists={lists} 
            targetListDesc={targetListDesc} 
            setTargetListDesc={setTargetListDesc}  
            targetListType={targetListType} 
            setTargetListTitle={setTargetListTitle} 
            targetListTitle={targetListTitle} 
            setTargetListType={setTargetListType} 
            setTargetListID={setTargetListID}
            setTargetEventID={setTargetEventID}
            targetEventID={targetEventID}
            /> ]}/>
          <Route path="/login" element={<Navigate replace to="/"/>}/>
          <Route path="/about" element={[<NavBar currentAdmin={currentAdmin}/>,<About/>]}/>
        </Routes>
        {submitVisibility ? (
          ""
          ):(
            <div className='submitContainer'>
            <NewListMod 
            handleAddList={handleAddList} 
            currentAdmin={currentAdmin}  
            submitVisibility={submitVisibility} 
            setSubmitVisibility={setSubmitVisibility}/>
            </div>
          )}
          {editVisibility ? (
          ""
          ):(
            <div className='submitContainer'>
            <EditListMod  
            currentAdmin={currentAdmin} 
            targetListDesc={targetListDesc} 
            setTargetListDesc={setTargetListDesc}  
            targetListType={targetListType} 
            setTargetListTitle={setTargetListTitle} 
            editVisibility={editVisibility} 
            targetListTitle={targetListTitle} 
            setEditVisibility={setEditVisibility} 
            setTargetListType={setTargetListType} 
            targetListID={targetListID}
            targetEventID={targetEventID}
            setTargetEventID={setTargetEventID}
            updateLists={updateLists}
            />
            
            </div>
          )}
        </div>
    )
}

export default AuthenticatedApp