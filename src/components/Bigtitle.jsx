import React, { useState, useEffect, useRef } from 'react';

const BigTitle = ({ 
  children, 
  initialSize = 800, 
  finalSize = 300, 
  containerHeight = '100vh',
  className = '',
  style = {}
}) => {
  const [scale, setScale] = useState(1);
  const titleRef = useRef(null);
  const containerRef = useRef(null);

  const finalScale = finalSize / initialSize;

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current || !containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const containerTop = containerRect.top + window.scrollY;
      const scrollY = window.scrollY;

      // 컨테이너가 뷰포트에 들어오기 시작하는 지점
      const startShrink = containerTop - window.innerHeight;
      // 텍스트 축소가 완료될 지점 (컨테이너 높이의 70% 지점)
      const endShrink = containerTop + containerRect.height * 0.7;

      // 텍스트 크기 조절
      if (scrollY >= startShrink && scrollY <= endShrink) {
        const progress = (scrollY - startShrink) / (endShrink - startShrink);
        // 1 (초기 크기)에서 finalScale (최종 크기) 사이로 스케일 조절
        setScale(1 - progress * (1 - finalScale));
      } else if (scrollY > endShrink) {
        // 축소 완료 지점을 넘어서면 finalScale로 고정
        setScale(finalScale);
      } else {
        // 스크롤 시작 지점 이전이면 원래 크기
        setScale(1);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // 초기 실행
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [finalScale]);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden flex items-center justify-center"
      style={{ 
        minHeight: containerHeight,
        ...style 
      }}
    >
      <h2
        ref={titleRef}
        className={`font-bold text-white tracking-wider leading-none text-center ${className}`}
        style={{
          fontSize: `${initialSize}px`,
          transform: `scale(${scale})`,
          transition: 'transform 0.1s ease-out',
          transformOrigin: 'center center',
          zIndex: 10,
          marginBottom: '0',
        }}
      >
        {children}
      </h2>
    </div>
  );
};

export default BigTitle;