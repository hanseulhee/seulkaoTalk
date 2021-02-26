import React from "react";
import "./styles/Main.css";
import hannah from "./헤나.PNG";
import frog from "./혜성.PNG";
import me from "./나.PNG";
import daddy from "./아빠.PNG";
import friend1 from "./친구2.PNG";
import mom from "./엄마.PNG";
import sister from "./언니.PNG";
import cheese from "./카톡치즈.PNG";

function Main() {
  return (
    <div className="main__tool">
      <div className="main__rowtool">
        <img src={me} width="58" height="58" alt="family" />
        <div className="main__content">
          한슬희
          <div className="melon">Ring Pop - JAX ▶</div>
        </div>
      </div>

      <hr class="hrcss" align="left" width="95%" color="#EBEBEB"></hr>

      <div className="birth">생일인 친구</div>

      <hr class="hrcss" align="left" width="95%" color="#EBEBEB"></hr>
      <div className="birth">즐겨찾기</div>
      <div className="main__rowtool">
        <img src={daddy} width="58" height="58" alt="family" />
        <div className="main__content">아빠 💓</div>
      </div>

      <div className="main__rowtool">
        <img src={mom} width="58" height="58" alt="family" />
        <div className="main__content">엄마 💓</div>
      </div>

      <div className="main__rowtool">
        <img src={frog} width="58" height="58" alt="family" />
        <div className="main__content">
          혜성오빠 💙
          <div className="melon1">Sweet Dream (Feat.Def) - OFFSHORE ▶</div>
        </div>
      </div>
      <hr class="hrcss" align="left" width="95%" color="#EBEBEB"></hr>
      <div className="birth">채널</div>
      <hr class="hrcss" align="left" width="95%" color="#EBEBEB"></hr>
      <div className="birth">친구 &nbsp; 697</div>

      <div className="main__rowtool">
        <img src={friend1} width="58" height="58" alt="family" />
        <div className="main__content">
          호두
          <div className="melon">METEOR - 창모 ▶</div>
        </div>
      </div>

      <div className="main__rowtool">
        <img src={sister} width="53" height="55" alt="family" />
        <div className="main__content">채원이언니</div>
      </div>

      <div className="main__rowtool">
        <img src={cheese} width="58" height="58" alt="family" />
        <div className="main__content">카카오톡 치즈</div>
      </div>

      <div className="main__rowtool">
        <img src={hannah} width="56" height="55" alt="family" />
        <div className="main__content">
          동아리 친구
          <div className="melon1">Outro (Feat. 기리보이) - Kin Milli ▶</div>
        </div>
      </div>
    </div>
  );
}

export default Main;
