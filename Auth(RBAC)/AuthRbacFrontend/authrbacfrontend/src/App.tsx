import { useState } from "react";

import "./App.css";
import Register from "./pages/Register";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import DashBoard from "./pages/DashBoard";
import ProtectedRoute from './routes/ProtectedRoute'

function App() {
  return (
   <BrowserRouter>
  <Routes>
    <Route path="/" element={<Login />} />

    <Route path="/register" element={<Register />} />

    <Route
      path="/dashboard"
      element={
        <ProtectedRoute>
          <DashBoard />
        </ProtectedRoute>
      }
    />
  </Routes>
</BrowserRouter>
  );
}

export default App;
