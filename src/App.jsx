import React from 'react';
import './App.css';
import LoginPage from './pages/LoginPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      {/* 다른 페이지 라우트는 여기에 추가할 수 있습니다.
          예: <Route path="/" element={<HomePage />} />
      */}
    </Routes>
  );
}

export default App;
