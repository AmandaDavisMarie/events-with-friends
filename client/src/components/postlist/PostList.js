import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Post from '../post/Post';
 
export function PostList({events, setEvents}) {
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getEvents() {
     const response = await fetch(`http://localhost:5000/event/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const events = await response.json();
     setEvents(events);
   }
   getEvents();
 
   return;
 }, [events.length]);
 
 // This method will delete a record
//  async function deleteEvent(id) {
//    await fetch(`http://localhost:5000/${id}`, {
//      method: "DELETE"
//    });
 
//    const newEvents = events.filter((el) => el._id !== id);
//    setEvents(newEvents);
//  }
 
 // This method will map out the records on the table
 function postList() {
   return events.map((event) => {
     return (
       <Post
         event={event}
        //  deleteRecord={() => deleteRecord(record._id)}
        //  key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div>
     <h3>Post List</h3>
     {postList()}
   </div>
 );
}

export default PostList;