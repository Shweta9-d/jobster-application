import React from "react";
import { Landing, Error, Register, Dashboard } from "./pages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import styled from "styled-components";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="landing" element={<Landing />} />
        <Route path="register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
