import logo from "./logo.svg";
import "./App.css";
import React, { useState, useEffect, useRef } from "react";
import jobda from "./icons/jobda.png";
import texts from "./icons/text.png";
import bell from "./icons/bell.png";
function App() {
  useEffect(() => {
    console.log("hi");
  }, []);
  return (
    <div>
      <div
        style={{
          height: "7vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
          alignContent: "flex-start",
          justifyContent: "space-between",
        }}
      >
        <div
          style={{
            height: "5vh",
            width: "100vw",
            display: "flex",
            flexDirection: "row",
            alignContent: "flex-start",
            justifyContent: "space-between",
            borderBottomWidth: "110",
            borderBottomColor: "#808080",

            paddingTop: 15,
            paddingBottom: 15,
          }}
        >
          <div>
            <img
              style={{ width: "23vw", height: "4vh", marginLeft: 10 }}
              src={jobda}
            ></img>
            <img style={{ width: "23vw", height: "4vh" }} src={texts}></img>
          </div>
          <div>
            <img style={{ width: "20vw", height: "4vh" }} src={bell}></img>
          </div>
        </div>
        <div
          style={{
            width: "100vw",
            borderWidth: 1,
            borderColor: "#808080",
          }}
        ></div>
      </div>
    </div>
  );
}

export default App;
