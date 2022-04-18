import React from 'react'
import './SingleEvents.css'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from "axios";

function SingleEvents({event}) {
    const navigate = useNavigate();
    const [modelOpen , setModelOpen  ] = useState(false)
    const delete_event = () => {
        
        var config = {
            method : "delete",
            url : `http://localhost:4000/event/${event._id}`
        };
        axios(config)
        window.location.reload()
    }
  return (
    <>
    <ul className="events_container">

        <ul className="event">
            <li>{event.title}</li>
            <li>{event.description}</li>
            <li>{event.markdown}</li>
            <i class="fas fa-ellipsis-v" onClick={()=>{
                setModelOpen(!modelOpen)
            }}></i>
        </ul>
        <div className={modelOpen?"submenu":"none"}>
            {/* <Link to={navigate(`/events/${event._id}`)}></Link> */}
            <p className="view" onClick={()=> {navigate(`/event/${event._id}`, { state: event._id })}}>view</p>
            <p className="edit" onClick={()=> {navigate(`/EditEvent/${event._id}`, { state: {title:event.title , description:event.description , markdown:event.markdown} })}}>edit</p>
            <p className="delete" onClick={delete_event}>delete</p>
        </div>
    </ul>
    </>
  )
}

export default SingleEvents