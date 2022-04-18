import axios from 'axios';
import React, { useState } from 'react'
import {useLocation , useParams} from 'react-router-dom'


export default function EditEvent() {
    const location = useLocation();
    const { id } = useParams()
    console.log(id)
    const [data, setData] = useState({
        title: location.state.title, description: location.state.description ,markdown: location.state.markdown
    });
    const edit_event = () => {
     var data1 ={
      title: data.title,
      description :data.description,
      markdown : data.markdown,
      id
     }
     var config = {
         method : "put",
         url : `http://localhost:4000/event/EditEvent/${id}`,
         data : data1
     }
     axios(config)
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
     <div class="form_container">
        <h1 class="new_event">new event</h1>

        <form >
            <div class="form-group">
                <label for="title"></label>
                <input required value={data.title} type="text" name="title" id="title"placeholder="title" class="form-control" onChange={changeData}/>
            </div>
            <div class="form-group">
                <label for="description"></label>
               <textarea  name="description" value={data.description} id="description" placeholder="description" class="form-control" onChange={changeData}></textarea>
            </div>
            <div class="form-group">
                <label for="markdown"></label>
               <textarea name="markdown" value={data.markdown} id="markdown" placeholder ="markdown" class="form-control" onChange={changeData}></textarea>
            </div>
            <br/>
            <a href="/" class="btn3">cancel</a>
             <button type="submit" class="btn4" onClick={edit_event}>save</button>
        </form>
      
    </div>
    </>
  )
}
