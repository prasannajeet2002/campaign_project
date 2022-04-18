import React from "react";
import { useEffect, useState } from "react";
import "./User.css";
import SingleUser from "./user/user";
import axios from "axios";

function User() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // var data = {
    //   title: data.title
    // };
    var config = {
      method: "get",
      url: "http://localhost:4000/auth/user",
      // data: data
    };
    axios(config).then(function(response) {
      console.log(response.data);
      setUsers(response.data);
      // console.log(d);
    });
    // fetchUsers();
  }, []);
  // console.log(users);
  return (
    <>
      <div className="user_container">
        {users.map((user) => (
          <SingleUser user={user} />
        ))}
      </div>
    </>
  );
}

export default User;
