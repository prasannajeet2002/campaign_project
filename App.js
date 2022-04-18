import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
import User from "./components/users/User";
import Events from "./components/userEvents/Events";
import CreateEvent from "./components/CreateEvent/CreateEvent"
import EditEvent from "./components/EditEvent/EditEvent";
import ViewEvent from "./components/ViewEvent/ViewEvent"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<User />} />
          <Route path="/events/:id" exact element={<Events />} />
          <Route path="/createEvent/:id" exact element={<CreateEvent />} />
          <Route path="/EditEvent/:id" exact element={<EditEvent />} />
          <Route path="/event/:id" exact element={<ViewEvent />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
