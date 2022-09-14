import '../styles/list.css'
function ListCard({ list, handleDeleteList }) {

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
        method: "DELETE"
    }
    fetch(`http://localhost:9292/eventList/${id}`, reqObj )
    .then((res) => res.json())
    .then(handleDeleteList(id))
}

    return(
    <div className="listCard">
        <button className="delete_button" onClick={handleDeleteClick}>X</button>
        <h1>{title}</h1>
        <p><strong>Event Type: </strong>{eventType}</p>
        <p>Title: {event.title}</p>
        <p>Activity: {event.activity}</p>
        <p>Description: {event.description}</p>
        <p>Location: {event.location}</p>
        <p>Start Time: {event.starts}</p>
        <p>End Time: {event.ends}</p>
        
    </div>
    )

}

export default ListCard

