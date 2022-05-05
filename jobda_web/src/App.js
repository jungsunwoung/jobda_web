import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import jobda from "./icons/jobda.png";
import texts from "./icons/text.png";
import bell from "./icons/bell.png";
import first from "./icons/first.png";
import second from "./icons/second.png";
import third from "./icons/third.png";
import jeong from "./icons/jeongseung.png";
function App() {
  useEffect(() => {
    console.log("hi");
  }, []);
  return (
    <div>
      <div
        style={{
          width: "100vw",
          backgroundColor: "#ffffff",
          zIndex: 0,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "fixed",
            top: 0,
            zIndex: 1,
            width: "100vw",
            padding: "1vw",
            marginTop: "1vh",
            height: "5vh",
            backgroundColor: "#ffffff",
            boxShadow: "0 3px 5px 0 rgba(38, 37, 37, 0.12)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div>
            <img
              style={{ width: "20vw", height: "4vh", marginLeft: 10 }}
              src={jobda}
            ></img>
            <img style={{ width: "20vw", height: "4vh" }} src={texts}></img>
          </div>
          <div>
            <img style={{ width: "20vw", height: "4vh" }} src={bell}></img>
          </div>
        </div>
      </div>
      <div
        style={{
          marginTop: "15vh",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <img
          style={{ width: "15vw", height: "15vw", borderRadius: 50 }}
          src={jeong}
        ></img>
        <div style={{ color: "#808080", fontSize: 15, marginTop: 20 }}>
          등록일 2022.04.21
        </div>
        <div style={{ fontWeight: "bold", fontSize: 30, marginTop: 10 }}>
          정승 네트워크
        </div>
        <div style={{ fontWeight: "lighter", fontSize: 15, marginTop: 10 }}>
          (주)좋좋소
        </div>
        <div style={{ color: "#808080", fontSize: 15, marginTop: 15 }}>
          IT서비스, 웹 기획, 무역, 앱 개발, 응용 SW 개발, 갑질, 상사
        </div>
        <div style={{ color: "#808080", fontSize: 15, marginTop: 7 }}>
          인턴 | 서울특별시
        </div>
        <div
          style={{
            border: "0.1px solid #d3d3d3",
            width: "95vw",
            marginTop: 50,
          }}
        ></div>
      </div>
      <div
        style={{
          marginLeft: "5vw",
          marginTop: "10vh",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        회사소개
      </div>
      <div
        style={{
          marginLeft: "5vw",
          marginTop: "3vh",
          fontSize: 15,
          whiteSpace: "pre-wrap",
        }}
      >
        -정승 네트워크는 소개팅 시장에 패러다임을 불러온 좋소개팅\n
        어플리케이션을 비롯하여 여러가지 사업을 준비하고 있습니다
      </div>
      <div
        style={{
          marginLeft: "5vw",
          marginTop: "10vh",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        주요업무
      </div>
      <div
        style={{
          marginLeft: "5vw",
          marginTop: "3vh",
          fontSize: 15,
        }}
      ></div>
      <div
        style={{
          marginLeft: "5vw",
          marginTop: "10vh",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        자격요건
      </div>
      <div
        style={{
          marginLeft: "5vw",
          marginTop: "10vh",
          fontSize: 20,
          fontWeight: "bold",
        }}
      >
        우대사항
      </div>

      <div
        style={{
          width: "90%",
          marginLeft: "5%",
          marginRight: "5%",
          paddingTop: "3%",
          paddingBottom: "3%",
          textAlign: "center",
          backgroundColor: "#5dd970",
          boxShadow: "0 4px 20px 0 rgba(0, 0, 0, 0.14)",
          borderRadius: 6,

          fontSize: 18,
          fontWeight: "bold",
          fontFamily: "NotoSansCJKkr",
          color: "#ffffff",
          cursor: "pointer",
          position: "fixed",
          bottom: 100,
        }}
      >
        지원하기
      </div>
      <div
        style={{
          width: "100vw",
          height: "7vh",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          bottom: 0,
          zIndex: 1,
          position: "fixed",
          backgroundColor: "#ffffff",

          boxShadow: "0 3px 5px 0 rgba(38, 37, 37, 0.12)",
        }}
      >
        <img
          style={{ width: "15vw", height: "7vh", marginLeft: "10vw" }}
          src={first}
        ></img>
        <img style={{ width: "15vw", height: "7vh" }} src={second}></img>
        <img
          style={{ width: "15vw", height: "7vh", marginRight: "10vw" }}
          src={third}
        ></img>
      </div>
    </div>
  );
}

export default App;
