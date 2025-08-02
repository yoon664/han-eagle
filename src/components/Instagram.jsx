import { useState, useEffect, useRef } from 'react';

export default function Instagram() {
  const [isMobile, setIsMobile] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(6); // 중간에서 시작
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const sliderRef = useRef(null);

  const images = [
    { id: 1, src: 'in1.png' },
    { id: 2, src: 'in2.png' },
    { id: 3, src: 'in3.png' },
    { id: 4, src: 'in4.png' },
    { id: 5, src: 'in5.png' },
    { id: 6, src: 'in6.png' }
  ];

  // 무한 스크롤을 위해 3세트 복사 (앞 + 원본 + 뒤)
  const infiniteImages = [...images, ...images, ...images];
  const duplicatedImages = [...images, ...images]; // 데스크탑용

  // 모바일 감지
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // 모바일에서 터치 시작
  const handleTouchStart = (e) => {
    if (!isMobile) return;
    setIsDragging(true);
    setStartX(e.touches[0].clientX);
  };

  // 모바일에서 터치 이동
  const handleTouchMove = (e) => {
    if (!isMobile || !isDragging) return;
    
    const currentX = e.touches[0].clientX;
    const diff = currentX - startX;
    setDragOffset(diff);
  };

  // 모바일에서 터치 종료
  const handleTouchEnd = () => {
    if (!isMobile || !isDragging) return;
    
    setIsDragging(false);
    
    const cardWidth = 310 + 24; // 카드 너비 + 마진
    const threshold = cardWidth / 3; // 1/3 지점에서 스냅
    
    if (Math.abs(dragOffset) > threshold) {
      if (dragOffset > 0) {
        // 오른쪽으로 드래그 - 이전 슬라이드
        setCurrentIndex(prev => Math.max(0, prev - 1));
      } else {
        // 왼쪽으로 드래그 - 다음 슬라이드
        setCurrentIndex(prev => Math.min(images.length - 1, prev + 1));
      }
    }
    
    setDragOffset(0);
  };

  // 모바일에서 현재 인덱스에 따른 translateX 계산
  useEffect(() => {
    if (isMobile) {
      const cardWidth = 310 + 24;
      setTranslateX(-currentIndex * cardWidth);
    }
  }, [currentIndex, isMobile]);

  return (
    <section className="relative py-16 mb-32 overflow-hidden">
      <div className="w-full">
        
        {/* 데스크탑: 무한 스크롤, 모바일: 드래그 슬라이드 */}
        <div className={`overflow-hidden ${!isMobile ? 'instagram-container' : ''}`}>
          <div 
            ref={sliderRef}
            className={`flex ${!isMobile ? 'instagram-slide' : ''}`}
            style={{
              width: isMobile ? 'calc(310px * 6 + 24px * 6)' : 'calc(310px * 12 + 24px * 12)',
              transform: isMobile ? `translateX(${translateX + dragOffset}px)` : 'none',
              transition: isMobile && !isDragging ? 'transform 0.3s ease-out' : 'none'
            }}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {(isMobile ? images : duplicatedImages).map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0 mx-3">
                <div 
                  className="relative group cursor-pointer overflow-hidden" 
                  style={{
                    marginTop: isMobile ? '0px' : (index % 2 === 0 ? '0px' : '100px')
                  }}
                >
                  <img 
                    src={`/img/${image.src}`} 
                    alt="Instagram post"
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                    style={{width: '310px', height: '413px'}}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <img 
                      src="/img/inslogo.png" 
                      alt="Instagram Logo"
                      className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>


      </div>

      {/* 데스크탑 애니메이션 스타일 */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @media (min-width: 769px) {
          .instagram-slide {
            animation: slide 30s linear infinite;
          }
          
          /* 컨테이너 호버 시 애니메이션 일시정지 */
          .instagram-container:hover .instagram-slide {
            animation-play-state: paused;
          }
        }
      `}</style>
    </section>
  );
}