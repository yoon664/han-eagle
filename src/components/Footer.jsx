import { useState, useEffect } from 'react';

export default function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // 스크롤 위치에 따라 버튼 표시/숨김
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ 
      top: 0, 
      behavior: 'smooth' 
    });
  };

  return (
    <>
      <footer className="bg-black py-12 md:py-16 border-t" style={{ borderTopColor: '#656565' }}>
        <div className="max-w-7xl mx-auto px-4">
          
          {/* 데스크탑 */}
          <div className="hidden md:flex justify-between items-start">
            
            {/* 왼쪽 메인 콘텐츠 */}
            <div className="flex-1">
              
              {/* 한화이글스 타이틀 */}
              <div className="mb-8">
                <h2 className="text-white text-8xl font-bold mb-4 font-alumni">HANWHA EAGLES</h2>
                
                {/* 주소 및 연락처 정보 */}
                <div className="text-gray-400 text-lg leading-relaxed mb-8">
                  <p>대전광역시 중구 대종로 373 한화이글스{'\u00A0'}{'\u00A0'}{'\u00A0'}|{'\u00A0'}{'\u00A0'}{'\u00A0'}대표이사 박종태</p>
                  <p>TEL 042-630-8200{'\u00A0'}{'\u00A0'}{'\u00A0'}|{'\u00A0'}{'\u00A0'}{'\u00A0'}FAX 042-632-2929</p>
                </div>
              </div>

              {/* 하단 링크들 */}
              <div className="flex space-x-8 text-gray-400 text-lg font-bold">
                <span className="hover:text-orange-500 transition-colors cursor-pointer">법적고지</span>
                <span className="hover:text-orange-500 transition-colors cursor-pointer ">개인정보 처리방침</span>
                <span className="hover:text-orange-500 transition-colors cursor-pointer">이용약관</span>
                <span className="hover:text-orange-500 transition-colors cursor-pointer">고객문의</span>
                <span className="hover:text-orange-500 transition-colors cursor-pointer">사이트맵</span>
                <span className="hover:text-orange-500 transition-colors cursor-pointer">광고문의</span>
              </div>
            </div>
          </div>

          {/* 모바일 */}
          <div className="md:hidden ml-6">
            
            {/* 한화이글스 타이틀 */}
            <div className="mb-6">
              <h2 className="text-white text-8xl font-bold mb-4 font-alumni">HANWHA EAGLES</h2>
              
              {/* 주소 및 연락처 정보 */}
              <div className="text-gray-400 text-lg leading-relaxed mb-6">
                <p>대전광역시 중구 대종로 373 한화이글스</p>
                <p>대표이사 박종태</p>
                <p>TEL 042-630-8200</p> <p>FAX 042-632-2929</p>
              </div>
            </div>

            {/* 하단 */}
            <div className="grid grid-cols-3 gap-x-10 gap-y-4 text-gray-400 text-lg font-semibold text-center">
              <span className="hover:text-orange-500 transition-colors cursor-pointer py-2">법적고지</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer py-2">개인정보 처리방침</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer py-2">이용약관</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer py-2">고객문의</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer py-2">사이트맵</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer py-2">광고문의</span>
            </div>
          </div>
        </div>
      </footer>

      {/* to top 버튼 */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-50 transition-all duration-300 ${
          showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
        aria-label="맨 위로 스크롤"
      >
        <div className="relative">
          {/* 배경 SVG */}
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="60" 
            height="63" 
            viewBox="0 0 85 89" 
            fill="none"
            className="md:w-[85px] md:h-[89px]"
          >
            <path d="M0 89V0H85V75.5754L71.0819 89H0Z" fill="#DF6D21"/>
          </svg>
          
          {/* 화살표 SVG*/}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="12" 
              height="32" 
              viewBox="0 0 16 43" 
              fill="none"
              className="md:w-[16px] md:h-[43px]"
            >
              <path d="M8.7071 0.292892C8.31658 -0.0976296 7.68342 -0.0976295 7.29289 0.292892L0.928931 6.65685C0.538406 7.04738 0.538406 7.68054 0.928931 8.07107C1.31946 8.46159 1.95262 8.46159 2.34314 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.7071 0.292892ZM8 43L9 43L9 1L8 1L7 1L7 43L8 43Z" fill="white"/>
            </svg>
          </div>
        </div>
      </button>
    </>
  );
}