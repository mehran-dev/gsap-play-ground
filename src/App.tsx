import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./pages/home";
import One from "./pages/1";
import Two from "./pages/2";
import Three from "./pages/3";
import Four from "./pages/4";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route Component={() => <Home />} path="/" />
          <Route Component={() => <One />} path="/1" />
          <Route Component={() => <Two />} path="2" />
          <Route Component={() => <Three />} path="3" />
          <Route Component={() => <Four />} path="4" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
