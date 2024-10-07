import React from "react";
import { ReactDOM, render } from "react-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./components/main.jsx";
import RegPage from "./components/reg.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<MainPage />} />
        <Route path="registration" element={<RegPage />}/>
      </Routes>
    </BrowserRouter>
  );
}

render(<App />, document.getElementById("app"));
