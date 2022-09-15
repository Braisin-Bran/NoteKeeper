import '../styles/list.css'
function ListCard({ list, handleDeleteList, targetListTitle,setTargetListTitle,targetListDesc,setTargetListDesc,targetListType,setTargetListType, editVisibility, setEditVisibility, setTargetListID,setTargetEventID }) {

    const {id, title, eventType, admin_id, event_id,event } = list

    console.log(list)

//     create_table "watches", force: :cascade do |t|
//     t.string "image_url"
//     t.string "name"
//     t.string "manufacturer"
//     t.string "materials"
//     t.integer "year"
//     t.integer "company_id"
//     t.integer "collection_id"
//     end

function handleDeleteClick() {
    const reqObj = {
        method: "DELETE",
        credentials:'include'
    }
    fetch(`/eventList/${id}`, reqObj )
    .then((res) => res.json())
    .then(handleDeleteList(id))
}
function toggleEditVisibility(){
setEditVisibility(false)
setTargetListTitle(title)
setTargetListType(eventType)
setTargetListDesc(event.description)
setTargetListID(id)
setTargetEventID(event.id)
}

    return(
    <div className="listCard">
        
        <h1>{title}</h1>
        <h2><strong>Note Type: </strong>{eventType}</h2>
       
        
        <p>{event.description}</p>
        <button className="edit_button" onClick={toggleEditVisibility}>Edit</button><button className="delete_button" onClick={handleDeleteClick}>Delete</button>
        
    </div>
    )

}

export default ListCard

