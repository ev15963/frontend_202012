import React, { useState, useEffect } from "react";
import "./App.css";
import customAxios from "./customAxios";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import MediaQuery from "react-responsive";
import { useMediaQuery } from "react-responsive";
import GridTest from "./GridTest";
import GridTest2 from "./GridTest2";
import Bye from "./bye";
import Button1 from "./button";
// import * as React from "react";
// import { View, Text } from "react-native";

function App() {
  const isPC = useMediaQuery({
    query: "(min-width: 1024px)",
  });
  const isTablet = useMediaQuery({
    query: "(min-width: 768px) and (max-width: 1023px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <Router>
      <div className="App">
        <div className="menu">
          <nav>
            <ul>
              <li>
                <Link to="/">홈</Link>
              </li>
              <li>
                <Link to="/about">소개</Link>
              </li>
              <li>
                <Link to="/users">사용자</Link>
              </li>
              <li>
                <Link to="/menu4">new</Link>
              </li>
              <li>
                <Link to="/menu5">new</Link>
              </li>
              <li>
                <Link to="/menu6">new</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* <div className="back_menu">
          <nav>
            <ul>
              <li>
                <Link to="/my">my</Link>
              </li>
            </ul>
          </nav>
        </div> */}
        {/** <switch>는 하위 <Route>들을 살펴보고 현재 URL과 일치하는 첫 번째 경로를 렌더링합니다. */}
        <Switch>
          <Route path="/menu4">
            <Users />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <div className="footer">
          {isPC && <p>PC화면입니다.</p>}
          {isTablet && <p>Tablet화면입니다.</p>}
          {isMobile && <p>Mobile화면입니다.</p>}
        </div>
      </div>
    </Router>
  );
}
function Home() {
  //ip 주소 변수 선언
  const [ip, setIp] = useState("IPaddresss");

  //ip 주소 값을 설정
  function callback(data) {
    setIp(data);
  }

  //첫번째 렌더릉을 다 마친 후 실행
  useEffect(() => {
    //클라이언트의 ip주소를 알아내는 백엔드ㄹ의 함수를 호출
    customAxios("/ip", callback);
  }, []);

  return (
    <div>
      <hr />
      <header className="App-header">이 기기의 IP주소는 바로 {ip}입니다</header>
    </div>
  );
}

function About() {
  return (
    <div>
      <hr />
      <Bye />
      <h2>
        소개 페이지
        <GridTest />
      </h2>
    </div>
  );
}

function Users() {
  return (
    <div>
      <hr />
      <Button1 />
      <h2>사용자 개인 페이지</h2>
      <userPage />
      <h2>콘텐츠</h2>
      <GridTest2 />
    </div>
  );
}

export default App;
