import axios from 'axios';
import React, { useState } from 'react'
import {useLocation , useParams , useNavigate} from 'react-router-dom'
import './CreateEvent.css'

export default function CreateEvent() {
    const Navigate = useNavigate()
    const location = useLocation();
    const { id } = useParams()
    const [data, setData] = useState({
        title: "", description: "",markdown: ""
    });
    const create_event = () => {
     var data1 ={
      title: data.title,
      description :data.description,
      markdown : data.markdown,
      id
     }
     var config = {
         method : "POST",
         url : "http://localhost:4000/event",
         data : data1
     }
     axios(config)
     Navigate(`/events/${id}`)
    
    }
    const changeData = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        setData(data => ({
            ...data,
            [name]: value
        }));
    }
  return (
    <>
     <div className="form_container">
        <h1 className="new_event">new event</h1>
        <form >
            <div className="form-group">
                <label for="title"></label>
                <input required value={data.title} type="text" name="title" id="title" placeholder="title" className="form-control" onChange={changeData}/>
            </div>
            <div className="form-group">
                <label for="description"></label>
               <textarea  name="description" value={data.description} id="description" placeholder="description" className="form-control" onChange={changeData}></textarea>
            </div>
            <div className="form-group">
                <label for="markdown"></label>
               <textarea name="markdown" value={data.markdown} id="markdown" placeholder="markdown" className="form-control" onChange={changeData}></textarea>
            </div>
            <br/>
            <a href="/" className="btn3">cancel</a>
             <button type="submit" className="btn4" onClick={create_event}>save</button>
        </form>
      
    </div>
    </>
  )
  }
