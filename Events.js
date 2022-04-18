import React from "react";
import SingleEvents from'./SingleEvents/SingleEvents'
import './Events.css'
import { useLocation , useParams } from "react-router-dom";
import { useState , useEffect} from "react"
import axios from "axios";

function Events() {
  const [events, setEvents] = useState([]);
  const { id } = useParams()
  useEffect(() => {
    var data = {
      id
    };
    var config = {
      method: "post",
      url: "http://localhost:4000/event/getUserEvents",
      data: data
    };
    axios(config).then(function(response) {
      console.log(response.data);
      setEvents(response.data);
      // console.log(d);
    });
    // fetchUsers();
  }, []);
  return (
    <>
    <ul className="Event_container">
      <ul className="event_heading">
      <li>Title</li>
      <li>Description</li>
      <li>Markdown</li>
      <i className="fas fa-ellipsis-v butn"></i>
      </ul>
      {events.map((event) => (
          <SingleEvents event={event} />
        ))}
      </ul>
    </>
  );
}
export default Events;