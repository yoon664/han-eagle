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
  const [position, setPosition] = useState(50); // 초기 위치 50% (중앙)
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
      // 텍스트 축소가 완료될 지점
      const endShrink = containerTop + containerRect.height * 0.7;

      // 텍스트 크기 및 위치 조절
      if (scrollY >= startShrink && scrollY <= endShrink) {
        const progress = (scrollY - startShrink) / (endShrink - startShrink);
        // 크기: 1 (초기 크기)에서 finalScale (최종 크기) 사이로 스케일 조절
        setScale(1 - progress * (1 - finalScale));
        // 위치: 50% (중앙)에서 75% (아래쪽)로 이동
        setPosition(50 + progress * 25);
      } else if (scrollY > endShrink) {
        // 축소 완료 지점을 넘어서면 최종값으로 고정
        setScale(finalScale);
        setPosition(90); // 최종 위치 75% (더 아래쪽)
      } else {
        // 스크롤 시작 지점 이전이면 원래 크기와 위치
        setScale(1);
        setPosition(50);
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
      className="relative"
      style={{ 
        height: containerHeight,
        ...style 
      }}
    >
      <div 
        className="absolute w-full flex items-center justify-center"
        style={{ top: `${position}%`, transform: 'translateY(-50%)' }}
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
    </div>
  );
};

export default BigTitle;