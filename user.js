import React from 'react'
import { useNavigate, useResolvedPath } from 'react-router-dom';
import './user.css'
export default function SingleUser({user}) {
  const navigate = useNavigate();
  console.log(user);
  return (
    <>
    <div className="user">
        <h3 className="title">{user.firstname} {user.lastname}</h3>
        <p className="username">{user.username}</p>
        <div className="buttons">
        <button className="btn1" onClick={()=> {navigate(`/events/${user._id}`, { state: user._id })}}>view profile</button>
        <button className="btn2" onClick={()=> {navigate(`/createEvent/${user._id}`, { state: user._id })}}>Create Event</button>
        </div>
    </div>
    </>
  )
}
