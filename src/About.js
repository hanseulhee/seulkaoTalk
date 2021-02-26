import React from "react";
import "./styles/About.css";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

function About() {
  return (
    <div className="chat__tool">
      <Sidebar />
      <div className="navbar__tool">
        <div className="logo">
          <h2>더보기</h2>
        </div>
      </div>
      <div className="about__walet">
        <h5>한슬희</h5>
        3021062@naver.com
      </div>
      <div className="walet">
        안전하고 간편한 지갑을 만들어 보세요. <h3>➕</h3>
      </div>
      <div className="about__icon">
        <div className="one__tool">
          <div className="icon__tool">
            <img
              src="https://img.icons8.com/ios/50/000000/important-mail.png"
              alt="icon"
            />
            메일
          </div>
          <div className="icon__tool">
            <img
              src="https://img.icons8.com/dotty/80/000000/calendar.png"
              alt="icon"
            />
            캘린더
          </div>
          <div className="icon__tool">
            <img
              src="https://img.icons8.com/ios/50/000000/drawer.png"
              alt="icon"
            />
            서랍
          </div>
          <div className="icon__tool">
            <img
              src="https://img.icons8.com/dotty/80/000000/lab-items.png"
              alt="icon"
            />
            실험실
          </div>
        </div>
        <div className="two__tool">
          <div className="icon__tool">
            <img
              src="https://img.icons8.com/cotton/64/000000/info--v1.png"
              alt="icon"
            />
            정보
          </div>
          <div className="icon__tool">
            <img
              src="https://img.icons8.com/ios/50/000000/comma.png"
              alt="icon"
            />
            스토리
          </div>
          <div className="icon__tool">
            <img
              src="https://img.icons8.com/ios/50/000000/megaphone.png"
              alt="icon"
            />
            공지사항
          </div>
          <div className="icon__tool">
            <img
              src="https://img.icons8.com/ios/50/000000/help.png"
              alt="icon"
            />
            도움말
          </div>
        </div>
      </div>
      <hr className="hrcss" align="left" width="100%" color="#EBEBEB"></hr>

      <p className="item-1">
        <h3>공지</h3> 3.2.2 버전 업데이트 안내
      </p>

      <p className="item-2">
        <h3>Tips</h3> '컴알못'도 문제없어요~ 단축키 총정리
      </p>

      <p className="item-3">
        <h3>나우</h3> 카카오톡 지갑 속 새로운 인증서
      </p>
      <Footer />
    </div>
  );
}

export default About;
