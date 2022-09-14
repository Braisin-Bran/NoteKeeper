import { useState } from 'react'
import "../styles/newListSubmit.css"
function NewListMod({handleAddList ,handleAddEvent,submitVisibility,setSubmitVisibility, currentAdmin}){
    const [ listTitle, setlistTitle ] = useState ("")
    const [ eventType, setEventType ] = useState("")
    const [ noteDescription, setNoteDescription] = useState("")
    const [ eventID, setEventID] = useState("")
    let adminID = currentAdmin.id
   //Event_lists schema
    // t.string "title"
    // t.string "eventType"
    // t.integer "admin_id", null: false
    // t.integer "event_id", null: false
    // t.datetime "created_at", null: false
    // t.datetime "updated_at", null: false
    // t.index ["admin_id"], name: "index_event_lists_on_admin_id"
    // t.index ["event_id"], name: "index_event_lists_on_event_id"

   //event schema
    //t.string "title"
    // t.string "activity"
    // t.text "description"
    // t.string "location"
    // t.datetime "starts"
    // t.datetime "ends"
    // t.datetime "created_at", null: false
    // t.datetime "updated_at", null: false
    function handleEventCreation(data){
        setEventID(data.id) 
        // handleAddEvent()
    }
    function toggleSubmitVisibility(){
        if(submitVisibility === true){
          setSubmitVisibility(false)
        }else(
          setSubmitVisibility(true)
        )
         
        }
    function handleSubmit(e) {
        e.preventDefault();
        fetch("/events", {
            method: "POST",
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
          .then((data)=>{fetch("/eventList", {
            method: "POST",
            headers: {
              "Content-Type" : "application/json",
            },
            body: JSON.stringify({
              title: listTitle,
              eventType: eventType,
              event_id: data.id,
              admin_id: adminID
  
            })
          })
          .then((res) => res.json())
          .then((data) => handleAddList(data));})
    
    }



    return (
        <div className='newListMod'>
            <div onClick={setSubmitVisibility(false)} id="closeButton">X</div>
        <form onSubmit={handleSubmit && setSubmitVisibility} >
            <h1>Create a New Note</h1>
            <ul>
                <div>
                    <label> <h2>Note Title</h2>
                    <h3><em>This is what you'll call the note</em></h3>
                        <input type="text" 
                            className="TitleInput" 
                            id="title" 
                            placeholder='Note Title' 
                            onChange={(e) => setlistTitle(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label> <h2>Note Type</h2>
                    <h3><em>Type in what you'll use this for (Work, Home, etc.)</em></h3>
                        <input type="text" 
                            className="TypeInput" 
                            id="NoteType" 
                            placeholder='Note Type' 
                            onChange={(e) => setEventType(e.target.value)}/>
                    </label>
                </div>
                <div>
                    <label>
                        <h2>Note Details</h2>
                        <h3><em>Jot down whatever you need to here</em></h3>
                        <input type="text" 
                            className="descriptionInput" 
                            id="NoteDescription" 
                            placeholder='Description' 
                            onChange={(e) => setNoteDescription(e.target.value)}/>
                    </label>
                </div>
                {/* <input id="submitBtn"  type="submit"/> */}
                <button id="submitBtn"  type="submit">Submit</button>
                <button onClick={setSubmitVisibility}>Cancel</button>
            </ul>
        </form>
        </div>
    )

}
export default NewListMod