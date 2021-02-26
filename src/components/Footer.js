import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer__tool">
      <div className="footer_icon">
        <Link to="/app">
          <img
            src="https://img.icons8.com/material-sharp/50/000000/user.png"
            alt="profile"
            className="profile1"
          />
        </Link>

        <div className="circle1">238</div>
        <Link to="/chatlist">
          <img
            src="https://img.icons8.com/ios-glyphs/50/000000/speech-bubble.png"
            className="speech1"
            alt="speech message"
          />
        </Link>
        <Link to="/chatlist">
          <img
            src="https://img.icons8.com/ios/50/000000/hashtag.png"
            alt="etc"
            className="sharp1"
          />
        </Link>
        <div className="circle21">N</div>
        <Link to="/about">
          <img
            src="https://img.icons8.com/fluent-systems-filled/50/000000/ellipsis.png"
            alt="etc"
            className="etc1"
          />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
