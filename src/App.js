import React from "react";
import { Link } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Link to={"/login"} className="nav-link">
        Login
      </Link>
    </div>
  );
}
export default App;
