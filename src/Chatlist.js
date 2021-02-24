import React from 'react';
import "./styles/Chatlist.css";

import Sidebar from"./components/Sidebar";


function Chatlist(){
    return  <div className="chat__tool">
    <Sidebar />
    <div className="navbar__tool">
    <div className="logo">
      <h2>채팅</h2>
    </div>
    <div className="nav">
    <img src="https://img.icons8.com/ios/40/000000/search--v1.png" alt="search"/>
    <img src="https://img.icons8.com/pastel-glyph/64/000000/talk--v2.png" alt="openchat"/>
    <img src="https://img.icons8.com/ios/50/000000/moved-topic--v1.png" alt="open"/>
    </div>
  </div>

 </div>;
}

export default Chatlist;