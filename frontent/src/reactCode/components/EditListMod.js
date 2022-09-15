import { useState } from 'react'
import "../styles/newListSubmit.css"
function EditListMod({handleAddList ,setTargetListTitle,targetListTitle,setTargetListType,targetListType,setTargetListDesc,targetListDesc,targetListID, editVisibility,setEditVisibility, currentAdmin, targetEventID, updateLists}){    const [ listTitle, setlistTitle ] = useState ("")
    const [ eventType, setEventType ] = useState("")
    const [ noteDescription, setNoteDescription] = useState("")
    const [ eventID, setEventID] = useState("")
    let adminID = currentAdmin.id
    //setEventID(targetEventID)

    function toggleEditVisibility(e){
     // e.preventDefault();
        if(editVisibility === true){
          setEditVisibility(false)
        }else(
          setEditVisibility(true)
        )
         
        }
    function handleSubmit(e) {
        e.preventDefault();
        console.log("eventType: "+eventType)
        fetch(`/events/${targetEventID}`, {
            method: "PATCH",
            headers: {
              "Content-Type" : "application/json",
            },
            body: JSON.stringify({
              title: "blank",
              activity:"blank",
              description: noteDescription,
              location:"blank",
              starts: new Date("10/10/9999"),
              ends:new Date("10/10/9999")
            })
          })
          .then((res)=> res.json())
          .then((data)=>{fetch(`/eventList/${targetListID}`, {
            method: "PATCH",
            headers: {
              "Content-Type" : "application/json",
            },
            body: JSON.stringify({
              title: targetListTitle,
              eventType: targetListType,
              event_id: data.id,
              admin_id: adminID
  
            })
          })
          .then((res) => res.json())
          .then(updateLists)
          .then(toggleEditVisibility)
        })
          
    
    }



    return (
       
      
        <form className='newListMod' onSubmit={handleSubmit} >
            <h1>Edit Note</h1>
            <ul>
                <div>
                    <label> <h2>Note Title</h2>
                    <h3><em>This is what you'll call the note</em></h3>
                        <input type="text" 
                            className="TitleInput" 
                            autoComplete='off'
                            id="title" 
                            placeholder={targetListTitle}
                            value={targetListTitle}
                            onChange={(e) => {
                              setlistTitle(e.target.value)
                              setTargetListTitle(e.target.value)
                            }}/>
                    </label>
                </div>
                <div>
                    <label> <h2>Note Type</h2>
                    <h3><em>Type in what you'll use this for (Work, Home, etc.)</em></h3>
                        <input type="text" 
                            className="TypeInput" 
                            id="NoteType" 
                            autoComplete='off'
                            placeholder={targetListType} 
                            value={targetListType}
                            onChange={(e) => {
                              setTargetListType(e.target.value)
                              setEventType(e.target.value)
                              
                              
                              }}/>
                    </label>
                </div>
                <div>
                    <label>
                        <h2>Note Details</h2>
                        <h3><em>Jot down whatever you need to here</em></h3>
                        <input type="text" 
                            className="descriptionInput" 
                            id="NoteDescription" 
                            autoComplete='off'
                           
                            placeholder={targetListDesc} 
                            value={targetListDesc}
                            onChange={(e) => {
                              setNoteDescription(e.target.value)
                              setTargetListDesc(e.target.value)
                            }}/>
                    </label>
                </div>
                {/* <input id="submitBtn"  type="submit"/> */}
                <button id="submitBtn"  type="submit">Submit</button>
                <button onClick={toggleEditVisibility} type="button">Cancel</button>
            </ul>
        </form>
       
    )

}
export default EditListMod