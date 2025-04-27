import { Box, styled } from "@mui/material";
import Button from "@mui/material/Button";
import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Workers from "./pages/Workers";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/track" element={<Home />}></Route>
          <Route path="/" element={<Workers />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
