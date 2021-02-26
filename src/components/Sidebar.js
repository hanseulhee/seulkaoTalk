import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar__tool">
      <div className="topicon">
        <Link to="/app">
          <img
            src="https://img.icons8.com/material-sharp/50/000000/user.png"
            alt="profile"
            className="profile"
          />
        </Link>

        <div className="circle">238</div>
        <Link to="/chatlist">
          <img
            src="https://img.icons8.com/ios-glyphs/50/000000/speech-bubble.png"
            className="speech"
            alt="speech message"
          />
        </Link>
        <div className="circle2">N</div>
        <Link to="/about">
        <img
          src="https://img.icons8.com/fluent-systems-filled/50/000000/ellipsis.png"
          alt="etc"
        />
          </Link>
      </div>

      <div className="bottomicon">
        <img
          src="https://img.icons8.com/small/50/000000/happy.png"
          alt="emotion"
        />
        <img
          src="https://img.icons8.com/material-outlined/50/000000/appointment-reminders--v2.png"
          alt="bell"
        />
        <img
          src="https://img.icons8.com/fluent-systems-regular/50/000000/settings.png"
          alt="setting"
        />
      </div>
    </div>
  );
}

export default Sidebar;
