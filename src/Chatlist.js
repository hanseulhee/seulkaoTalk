import React from "react";
import "./styles/Chatlist.css";
import family from "./가족.PNG";
import lion from "./멋사.PNG";
import food from "./배민.PNG";
import macaron from "./채우당.PNG";
import hannah from "./헤나.PNG";
import study from "./스터디.PNG";
import frog from "./혜성.PNG";
import neck from "./애들.PNG";
import bell from "./죠르디.PNG";
import it from "./아이티.PNG";
import Sidebar from "./components/Sidebar";
import Footer from"./components/Footer";

function Chatlist() {
  return (
    <div className="chat__tool">
      <Sidebar />
      <div className="navbar__tool">
        <div className="logo">
          <h2>채팅</h2>
        </div>
        <div className="nav">
          <img
            src="https://img.icons8.com/ios/40/000000/search--v1.png"
            alt="search"
          />
          <img
            src="https://img.icons8.com/pastel-glyph/64/000000/talk--v2.png"
            alt="openchat"
          />
          <img
            src="https://img.icons8.com/ios/50/000000/moved-topic--v1.png"
            alt="open"
          />
        </div>
      </div>
      <div className="chatlist">
      <div className="rowlist">
          <img src={frog} width="58" height="58" alt="family" />

          <div className="listcontent">
            <div className="listtitle">
              혜성오빠 💙<h4>오후 6:07</h4>
            </div>
            <div className="summary">스리야 나 두꺼비 닮은것 같탕
            </div>
            
          </div>
        </div>
        <div className="rowlist">
          <img src={family} width="63" height="72" alt="family" />

          <div className="listcontent">
            <div className="listtitle">
              가족 3 <h4>오후 5:22</h4>
            </div>
            <div className="summary">아 차차 나혼자 집이네 ㅎ
            <div className="count">5</div></div>
            
          </div>
        </div>

      <div className="rowlist">
          <img src={hannah} width="65" height="65" alt="family" />

          <div className="listcontent">
            <div className="listtitle">
              친구 <h4>오후 4:20</h4>
            </div>
            <div className="summary">오키</div>
          </div>
        </div>

      <div className="rowlist">
          <img src={food} width="60" height="58" alt="family" />

          <div className="listcontent">
            <div className="listtitle">
              배달의민족 <h4>오후 4:13</h4>
            </div>
            <div className="summary">(픽업완료) 고객님이 주문하신 배달이 시작되었습니다…
            <div className="count">1</div></div>
          </div>
        </div>
        <div className="rowlist">
          <img src={lion} width="65" height="60" alt="family" />

          <div className="listcontent">
            <div className="listtitle">
              🦁 멋쟁이 사자처럼 9기 수다방 🦁 <h4>오후 2:13</h4>
            </div>
            <div className="summary">6시부터 sns에 마구 업로드해주세옹
            <div className="count">13</div>
            </div>
          </div>
        </div>
        <div className="rowlist">
          <img src={macaron} width="65" height="65" alt="family" />

          <div className="listcontent">
            <div className="listtitle">
              채우당 <h4>오후 12:00</h4>
            </div>
            <div className="summary">안녕하세요! 네네! 가능하세요!</div>
          </div>
        </div>
        <div className="rowlist">
          <img src={study} width="65" height="65" alt="family" />

          <div className="listcontent">
            <div className="listtitle">
              프론트 스터디 8 <h4>오전 10:32</h4>
            </div>
            <div className="summary">저 수락해주세요 ㅜㅜㅜㅜ</div>
          </div>
        </div>
        <div className="rowlist">
          <img src={bell} width="65" height="65" alt="family" />

          <div className="listcontent">
            <div className="listtitle">
              톡비서 죠르디 <h4>어제</h4>
            </div>
            <div className="summary">[5분 후] 멋사운영진 8차 회의
            <div className="count">2</div></div>
          </div>
        </div>
        <div className="rowlist">
          <img src={neck} width="65" height="65" alt="family" />

          <div className="listcontent">
            <div className="listtitle">
              외가 친구들 <h4>어제</h4>
            </div>
            <div className="summary">사진을 보냈습니다.</div>
          </div>
        </div>
        <div className="rowlist">
          <img src={it} width="65" height="65" alt="family" />

          <div className="listcontent">
            <div className="listtitle">
              IT융합자율학부 20학번 톡방 <h4>어제</h4>
            </div>
            <div className="summary">🌿청백리는 지금 함께할 국원 찾는 중! …
            <div className="count">9</div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Chatlist;
