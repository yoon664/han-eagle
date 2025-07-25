import React, { useState, useEffect, useRef } from 'react';
import './Bigtitle.css';

const BigTitle = () => {
  const [scale, setScale] = useState(1);
  const [bottomContentActive, setBottomContentActive] = useState(false);
  const titleRef = useRef(null);

  // 현재 Tailwind CSS의 text-[800px] 또는 text-[1000px] 값을 가정합니다.
  // 여기서는 'text-[800px]'로 가정하고, 이 텍스트가 줄어들어 최종 300px 크기가 되도록 합니다.
  // 실제 CSS font-size에 대한 상대적인 값입니다.
  const initialFontSize = 800; // Tailwind CSS의 초기 폰트 크기 (예: text-[800px])
  const finalFontSize = 300;   // 텍스트가 멈출 최종 폰트 크기 (300px)

  const finalScale = finalFontSize / initialFontSize; // 최종 스케일 비율 계산 (예: 300/800 = 0.375)

  useEffect(() => {
    const handleScroll = () => {
      if (!titleRef.current) return;

      const scrollY = window.scrollY;
      const titleInitialHeight = titleRef.current.offsetHeight; // 텍스트의 실제 렌더링된 초기 높이

      // 스크롤 시작 지점: 텍스트가 줄어들기 시작하는 스크롤 위치
      const startShrink = 50; // 페이지 상단에서 조금 내려온 후 시작

      // 텍스트 축소가 완료될 스크롤 지점:
      // 텍스트 초기 높이에 비례하여 조정하면 자연스럽습니다.
      // 예를 들어, 텍스트 초기 높이의 70% 정도 스크롤했을 때 축소 완료
      const endShrink = startShrink + titleInitialHeight * 0.7;

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

      // 하단 콘텐츠 활성화 (올라오게 함)
      // 텍스트 축소가 완료되는 시점과 일치시키거나 살짝 늦게 트리거
      // endShrink 지점보다 살짝 일찍 (예: 50px) 활성화 시작
      if (scrollY > endShrink - 50) {
        setBottomContentActive(true);
      } else {
        setBottomContentActive(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [finalScale]); // finalScale이 변경될 가능성이 있다면 의존성 배열에 추가

  return (
    <div className="big-title-container">
      {/* Tailwind CSS 클래스를 적용하고, 동적 스타일은 style 속성에 적용 */}
      <h2
        ref={titleRef}
        // 여기 `text-[800px]`는 예시입니다. 실제 초기 크기에 맞춰 `text-[1000px]` 등으로 변경하세요.
        className="text-[800px] font-bold text-white tracking-wider leading-none text-center big-title-text-base"
        style={{
          transform: `scale(${scale})`,
          transition: 'transform 0.1s ease-out', // 부드러운 전환 효과
          position: 'sticky', // 스크롤 시 상단에 고정
          top: '50vh', // 화면 중앙에 오도록 조정
          transformOrigin: 'center center', // 중앙을 기준으로 축소
          zIndex: 10, // 다른 콘텐츠 위에 오도록
          marginBottom: '0', // Tailwind의 mb-16 충돌 방지
        }}
      >
        NEWS
      </h2>


      {/* 스크롤 가능한 공간을 만들기 위한 더미 요소 */}
      <div style={{ height: '200vh' }}></div>
    </div>
  );
};

export default BigTitle;