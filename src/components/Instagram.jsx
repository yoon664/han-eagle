import { useRef, useState } from "react";

export default function Instagram() {
  const images = [
    { id: 1, src: 'in1.png' },
    { id: 2, src: 'in2.png' },
    { id: 3, src: 'in3.png' },
    { id: 4, src: 'in4.png' },
    { id: 5, src: 'in5.png' },
    { id: 6, src: 'in6.png' }
  ];

  const duplicatedImages = [...images, ...images]; // 데스크탑용
  const trackRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1; // 드래그 속도 조절
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // 터치 지원
  const handleTouchStart = (e) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - trackRef.current.offsetLeft);
    setScrollLeft(trackRef.current.scrollLeft);
  };

  const handleTouchMove = (e) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 1;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleTouchEnd = () => {
    setIsDragging(false);
  };

  return (
    <section className="relative py-60 mb-32 overflow-hidden">
      <div className="w-full">

        {/* 데스크탑 */}
        <div className="hidden md:block overflow-hidden instagram-container">
          <div 
            className="flex instagram-slide"
            style={{
              width: 'calc(310px * 12 + 24px * 12)',
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0 mx-3">
                <div 
                  className="relative group cursor-pointer overflow-hidden" 
                  style={{
                    marginTop: index % 2 === 0 ? '0px' : '100px'
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
                  <div className="hidden w-full bg-gray-600 flex items-center justify-center text-white" style={{width: '310px', height: '413px'}}>
                    Instagram Post
                  </div>
                  <div className="absolute inset-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <img 
                      src="/img/inslogo.png" 
                      alt="Instagram Logo"
                      className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      onError={(e) => {
                        e.target.style.display = 'none';
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* 모바일 (드래그/스와이프) */}
        <div 
          className="block md:hidden overflow-x-scroll scrollbar-hide cursor-grab"
          ref={trackRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex">
            {images.map((image) => (
              <div key={image.id} className="flex-shrink-0 mr-4">
                <div className="relative overflow-hidden">
                  <img 
                    src={`/img/${image.src}`} 
                    alt="Instagram post"
                    className="object-cover"
                    style={{width: '250px', height: '333px'}}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full bg-gray-600 flex items-center justify-center text-white" style={{width: '250px', height: '333px'}}>
                    Instagram Post
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 데스크탑 전용 무한 슬라이드 애니메이션 */}
      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .instagram-slide {
          animation: slide 30s linear infinite;
        }
        .instagram-container:hover .instagram-slide {
          animation-play-state: paused;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
