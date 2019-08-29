import React from "react";
import List from "./components/List";
import Form from "./components/Form";
import Post from "./components/Post";

import './App.css';

const App = () => (
  <div className="row mt-5">
    <div className="col-md-4 offset-md-1">
      
    <h2>API posts</h2>
      <Form />
      <br></br>
      <br></br>

      <hr></hr>
      <h2>Books on library</h2>
      <List />
      
      <hr></hr>
    
      <h2>API posts</h2>
      <Post />
    
    </div>
    
  </div>
);
export default App;