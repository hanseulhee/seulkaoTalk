import React from "react";
import "./Navbar.css";

function Navbar() {
  return(
  <div className="navbar__tool">
    <div className="logo">
      <h2>친구</h2>
    </div>
    <div className="nav">
    <img src="https://img.icons8.com/ios/40/000000/search--v1.png" alt="search"/>
    <img src="https://img.icons8.com/windows/40/000000/add-user-male--v1.png" alt="add friends"/>
    </div>
  </div>
  )
}

export default Navbar;
