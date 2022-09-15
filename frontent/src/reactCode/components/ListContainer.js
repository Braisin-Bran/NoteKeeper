import react, { useState, useEffect } from 'react';
import ListCard from './ListCard';
import '../styles/list.css'
function ListContainer({lists, currentAdmin,submitVisibility, targetListTitle,setTargetListTitle,targetListDesc,setTargetListDesc,targetListType,setTargetListType, handleDeleteList, setSubmitVisibility, setEditVisibility,editVisibility, setTargetListID,targetEventID,setTargetEventID}){
    // let listMap = lists.map()
   
    function toggleSubmitVisibility(){
        if(submitVisibility === true){
          setSubmitVisibility(false)
        }else(
          setSubmitVisibility(true)
        )
         

    }
   const {name} = currentAdmin
      const shownLists = lists.map((list, index)=>{
         return(<ListCard 
          key={index} 
          handleDeleteList={handleDeleteList} 
          list={list} 
          targetListDesc={targetListDesc} 
          setTargetListDesc={setTargetListDesc}  
          targetListType={targetListType} 
          setTargetListType={setTargetListType} 
          targetListTitle={targetListTitle} 
          setTargetListTitle={setTargetListTitle} 
          editVisibility={editVisibility} 
          setEditVisibility={setEditVisibility} 
          setTargetListID={setTargetListID}
          setTargetEventID={setTargetEventID}
          targetEventID={targetEventID}
          />
          
         )
      }
      
      )
      
      console.log(lists)

      console.log("lists showing (data that should be showing on page): "+shownLists)
    //   console.log("list.map(): "+ listMap)
    return(
        <div>
            <h1 className='mainTitle'>{name}'s Notes</h1>
            <div className='topButtons'>
              <button onClick={toggleSubmitVisibility}>Create New</button>
            </div>
           <div className='listDiv'
           >{shownLists}</div>
           
            </div>
        
    )
}
export default ListContainer