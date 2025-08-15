import React, { useState, useEffect } from 'react';
import './App.css';
import Home from './views/Home';
import History from './views/History';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // 현재 hash 확인하는 함수
    const checkHash = () => {
      const hash = window.location.hash.substring(1); // # 제거
      if (hash === 'history') {
        setCurrentPage('history');
      } else {
        setCurrentPage('home'); // 기본값 또는 #home일 때
      }
    };

    // 초기 로드시 hash 확인
    checkHash();

    // hash 변경 감지 (뒤로가기/앞으로가기, 직접 URL 변경 등)
    window.addEventListener('hashchange', checkHash);

    // cleanup: 컴포넌트 언마운트시 이벤트 리스너 제거
    return () => {
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  return (
    <>
      {currentPage === 'home' && <Home />}
      {currentPage === 'history' && <History />}
    </>
  );
}

export default App;