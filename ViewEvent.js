import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import './ViewEvent.css'
export default function ViewEvent() {
  const [event, setEvent] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    // var data = {
    //   id,
    // };
    var config = {
      method: "get",
      url: `http://localhost:4000/event/${id}`,
    //   data: data,
    };
    axios(config).then(function(response) {
        console.log(response.data);
        setEvent(response.data);
        // console.log(d);
      });
      // fetchUsers();
    }, []);
  return (
  <>
  <div className="view_event">
      <div className="title">Title:{event.title}</div>
      <div className="description">Description:{event.description}</div>
      <div className="Markdown">Markdown:{event.markdown}</div>
  </div>
  </>
  );
}
