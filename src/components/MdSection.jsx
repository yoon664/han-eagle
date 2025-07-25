import { useState, useRef, useEffect } from 'react';

export default function MdSection() {
  const [currentIndex, setCurrentIndex] = useState(2); // 가운데 카드를 기본으로
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentX, setCurrentX] = useState(0);
  const containerRef = useRef(null);

  const products = [
    { id: 1, name: '후디(ON)봉제인형', image: 'md1.png' },
    { id: 2, name: '2025 어센틱 유니폼', image: 'md2.png' },
    { id: 3, name: '2025 어센틱 유니폼', image: 'md3.png' },
    { id: 4, name: '2025 어센틱 유니폼', image: 'md4.png' },
    { id: 5, name: '수리 캐릭터 후드', image: 'md5.png' }
  ];

  // 카드 클릭 핸들러
  const handleCardClick = (index) => {
    setCurrentIndex(index);
  };

  // 마우스/터치 드래그 시작
  const handleStart = (clientX) => {
    setIsDragging(true);
    setStartX(clientX);
    setCurrentX(clientX);
  };

  // 마우스/터치 드래그 중
  const handleMove = (clientX) => {
    if (!isDragging) return;
    setCurrentX(clientX);
  };

  // 마우스/터치 드래그 끝
  const handleEnd = () => {
    if (!isDragging) return;
    
    const deltaX = currentX - startX;
    const threshold = 50; // 최소 드래그 거리
    
    if (deltaX > threshold && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    } else if (deltaX < -threshold && currentIndex < products.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
    
    setIsDragging(false);
  };

  // 마우스 이벤트
  const handleMouseDown = (e) => handleStart(e.clientX);
  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleMouseUp = () => handleEnd();

  // 터치 이벤트
  const handleTouchStart = (e) => handleStart(e.touches[0].clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);
  const handleTouchEnd = () => handleEnd();

  // 키보드 네비게이션
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft' && currentIndex > 0) {
        setCurrentIndex(currentIndex - 1);
      } else if (e.key === 'ArrowRight' && currentIndex < products.length - 1) {
        setCurrentIndex(currentIndex + 1);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, products.length]);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden" style={{backgroundColor: '#222222'}}>
      <div className="w-full">
        
        {/* MD 타이틀 */}
        <div className="text-center mb-16">
          <h2 className="text-[300px] font-bold text-white tracking-wider leading-none">MD</h2>
        </div>

        {/* 파노라마 슬라이더 컨테이너 */}
        <div className="relative mb-16 h-[500px]">
          <div 
            ref={containerRef}
            className={`flex items-center justify-center h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'} select-none`}
            style={{ perspective: '1000px' }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {products.map((product, index) => {
              const offset = index - currentIndex;
              const absOffset = Math.abs(offset);
              const isCenter = offset === 0;
              
              // 파노라마 변환 계산
              const rotateY = offset * 45; // 회전각도
              const translateZ = isCenter ? 50 : -absOffset * 100; // Z축 이동
              const translateX = offset * 200; // X축 간격
              const scale = isCenter ? 1.1 : 1 - absOffset * 0.2; // 크기
              const opacity = absOffset > 2 ? 0 : 1 - absOffset * 0.3; // 투명도
              
              return (
                <div
                  key={product.id}
                  className="absolute transition-all duration-700 ease-in-out"
                  style={{
                    transform: `
                      translateX(${translateX}px)
                      translateZ(${translateZ}px)
                      rotateY(${rotateY}deg)
                      scale(${scale})
                    `,
                    opacity: opacity,
                    zIndex: isCenter ? 100 : 50 - absOffset,
                    transformStyle: 'preserve-3d'
                  }}
                  onClick={() => handleCardClick(index)}
                >
                  {/* 상품 카드 */}
                  <div className={`
                    w-80 h-96 rounded-2xl overflow-hidden shadow-2xl cursor-pointer
                    transition-all duration-300 hover:shadow-3xl
                    ${isCenter ? 'ring-4 ring-orange-500 ring-opacity-50' : ''}
                  `}>
                    <img 
                      src={`/img/${product.image}`} 
                      alt={product.name}
                      className="w-full h-full object-cover"
                      draggable="false"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-gray-600 flex items-center justify-center text-white text-xl">
                      {product.name}
                    </div>
                  </div>
                  
                  {/* 상품명 */}
                  <div className="text-center mt-6">
                    <h3 className={`
                      font-medium transition-all duration-300
                      ${isCenter ? 'text-2xl text-white' : 'text-lg text-gray-400'}
                    `}>
                      {product.name}
                    </h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 네비게이션 인디케이터 */}
        <div className="flex justify-center space-x-3 mb-12">
          {products.map((_, index) => (
            <button
              key={index}
              className={`
                w-3 h-3 rounded-full transition-all duration-300
                ${index === currentIndex ? 'bg-orange-500 scale-125' : 'bg-gray-600 hover:bg-gray-400'}
              `}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>

        {/* 네비게이션 화살표 */}
        <div className="flex justify-center space-x-8 mb-12">
          <button
            className={`
              w-12 h-12 rounded-full border-2 flex items-center justify-center
              transition-all duration-300 text-2xl
              ${currentIndex > 0 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-gray-600 text-gray-600 cursor-not-allowed'
              }
            `}
            onClick={() => currentIndex > 0 && setCurrentIndex(currentIndex - 1)}
            disabled={currentIndex === 0}
          >
            ←
          </button>
          <button
            className={`
              w-12 h-12 rounded-full border-2 flex items-center justify-center
              transition-all duration-300 text-2xl
              ${currentIndex < products.length - 1 
                ? 'border-white text-white hover:bg-white hover:text-black' 
                : 'border-gray-600 text-gray-600 cursor-not-allowed'
              }
            `}
            onClick={() => currentIndex < products.length - 1 && setCurrentIndex(currentIndex + 1)}
            disabled={currentIndex === products.length - 1}
          >
            →
          </button>
        </div>

        {/* VIEW ALL MD 버튼 */}
        <div className="flex justify-center">
          <button className="relative group cursor-pointer transition-all duration-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="326" height="96" viewBox="0 0 326 96" fill="none">
              <path d="M1 95V1H325V63.3654L298 95H1Z" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="transparent" 
                    className="group-hover:stroke-[#DF6D21] group-hover:fill-[#DF6D21] transition-all duration-300"/>
            </svg>
            
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-white text-2xl font-bold tracking-wider whitespace-nowrap">
              VIEW ALL MD
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}