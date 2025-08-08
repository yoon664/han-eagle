import { useState, useEffect } from 'react';

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 모바일 메뉴 열림/닫힘에 따른 스크롤 제어
  useEffect(() => {
    if (isMenuOpen) {
      // 메뉴가 열리면 스크롤 막기
      document.body.style.overflow = 'hidden';
    } else {
      // 메뉴가 닫히면 스크롤 복원
      document.body.style.overflow = 'auto';
    }

    // 컴포넌트 언마운트 시 스크롤 복원
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* 배경 영상 */}
      <video
        // autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-[80vh] object-cover z-0 pointer-events-none"
      >
        <source src="/img/HanwhaEagles_BrandFilm.webm" type="video/webm" />
      </video>

      {/* 모바일 헤더 */}
      <header className="md:hidden fixed top-0 left-0 right-0 z-[999] backdrop-blur-sm transition-all duration-300">
        <div className="flex justify-between items-center p-4">
          <img src="/img/mark.png" alt="Logo" className="h-20 w-auto" />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                <line x1="40.8527" y1="13.2374" x2="12.2369" y2="41.8532" stroke="white" strokeWidth="3.5"/>
                <line x1="40.7626" y1="41.8532" x2="12.1468" y2="13.2375" stroke="white" strokeWidth="3.5"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="31" height="28" viewBox="0 0 31 28" fill="none">
                <path d="M0.125 0H30.875V3.41667H0.125V0ZM10.375 11.9583H30.875V15.375H10.375V11.9583ZM0.125 23.9167H30.875V27.3333H0.125V23.9167Z" fill="white"/>
              </svg>
            )}
          </button>
        </div>

        {/* 전체화면 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#222222] z-[10000] flex flex-col w-full h-full min-h-screen overflow-hidden">
            {/* 헤더 영역 */}
            <div className="flex justify-between items-center p-4 bg-[#222222] w-full">
              <img src="/img/mark.png" alt="Logo" className="h-20 w-auto" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="51" height="51" viewBox="0 0 51 51" fill="none">
                  <line x1="40.8527" y1="13.2374" x2="12.2369" y2="41.8532" stroke="white" strokeWidth="3.5"/>
                  <line x1="40.7626" y1="41.8532" x2="12.1468" y2="13.2375" stroke="white" strokeWidth="3.5"/>
                </svg>
              </button>
            </div>

            {/* 메뉴 영역 */}
            <nav className="flex-1 px-6 pt-16 bg-[#222222] w-full">
              <div className="space-y-8">
                
                {/* EAGLES 메뉴 */}
                <div>
                  <div 
                    className="flex items-center justify-start space-x-4"
                    onMouseEnter={() => setHoveredMenu('eagles')}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <span className="text-[#DF6D21] text-6xl font-bold font-alumni">EAGLES</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                      <path d="M31.8489 1C31.8489 0.447718 31.4012 3.11446e-06 30.8489 1.51288e-06L21.8489 9.64968e-07C21.2966 1.97649e-06 20.8489 0.447716 20.8489 1C20.8489 1.55229 21.2966 2 21.8489 2L29.8489 2L29.8489 10C29.8489 10.5523 30.2966 11 30.8489 11C31.4012 11 31.8489 10.5523 31.8489 10L31.8489 1ZM1.15039 30.6985L1.8575 31.4056L31.556 1.70711L30.8489 1L30.1418 0.292895L0.443284 29.9914L1.15039 30.6985Z" fill="#DF6D21"/>
                    </svg>
                  </div>
                  
                  {/* EAGLES 서브메뉴 */}
                  <div className="mt-4 space-y-3">
                    <a href="#" className="block text-white text-4xl font-normal font-alumni hover:text-[#DF6D21] transition-colors">ABOUT</a>
                    <a href="#" className="block text-white text-4xl font-normal font-alumni hover:text-[#DF6D21] transition-colors">HISTORY</a>
                    <a href="#" className="block text-white text-2xl font-normal font-alumni hover:text-[#DF6D21] transition-colors">사회공헌</a>
                  </div>
                </div>

                {/* PLAYERS 메뉴 */}
                <div className="flex items-center justify-start space-x-4">
                  <span className="text-white text-6xl font-bold font-alumni">PLAYERS</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M30.8489 31.6985C31.4012 31.6985 31.8489 31.2508 31.8489 30.6985L31.8489 21.6985C31.8489 21.1462 31.4012 20.6985 30.8489 20.6985C30.2966 20.6985 29.8489 21.1462 29.8489 21.6985L29.8489 29.6985L21.8489 29.6985C21.2966 29.6985 20.8489 30.1462 20.8489 30.6985C20.8489 31.2508 21.2966 31.6985 21.8489 31.6985L30.8489 31.6985ZM1.15039 1L0.443284 1.70711L30.1418 31.4056L30.8489 30.6985L31.556 29.9914L1.8575 0.292893L1.15039 1Z" fill="white"/>
                  </svg>
                </div>

                {/* GAME 메뉴 */}
                <div className="flex items-center justify-start space-x-4">
                  <span className="text-white text-6xl font-bold font-alumni">GAME</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <path d="M30.8489 31.6985C31.4012 31.6985 31.8489 31.2508 31.8489 30.6985L31.8489 21.6985C31.8489 21.1462 31.4012 20.6985 30.8489 20.6985C30.2966 20.6985 29.8489 21.1462 29.8489 21.6985L29.8489 29.6985L21.8489 29.6985C21.2966 29.6985 20.8489 30.1462 20.8489 30.6985C20.8489 31.2508 21.2966 31.6985 21.8489 31.6985L30.8489 31.6985ZM1.15039 1L0.443284 1.70711L30.1418 31.4056L30.8489 30.6985L31.556 29.9914L1.8575 0.292893L1.15039 1Z" fill="white"/>
                  </svg>
                </div>

                {/* SHOP 메뉴 */}
                <div>
                  <span className="text-white text-6xl font-bold font-alumni">SHOP</span>
                </div>

              </div>
            </nav>

            {/* 하단 아이콘 영역 */}
            <div className="p-6 mt-4 mb-8 bg-[#222222] w-full">
              <div className="flex space-x-6">
                <button className="hover:opacity-80 transition-opacity">
                  <img src="/img/login.png" alt="Login" className="h-8 w-auto" />
                </button>
                <button className="hover:opacity-80 transition-opacity">
                  <img src="/img/ticket.png" alt="Ticket" className="h-8 w-auto" />
                </button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* 데스크톱 헤더 */}
      <header className={`hidden md:block fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 backdrop-blur-sm py-3' : 'bg-transparent py-6'
      }`}>
        <div className="relative z-10 px-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* 왼쪽 네비 */}
            <nav className="flex space-x-8">
              <div
                className="relative"
                onMouseEnter={() => setHoveredMenu('eagles')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a href="#" className={`relative text-white hover:text-[#DF6D21] font-medium text-xl font-alumni transition-colors duration-300 ${hoveredMenu === 'eagles' ? 'text-orange-400' : 'hover:text-orange-400'}`}>
                  EAGLES
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-[#DF6D21] transform transition-transform duration-300 ${hoveredMenu === 'eagles' ? 'scale-x-100' : 'scale-x-0'}`} />
                </a>
                {hoveredMenu === 'eagles' && (
                  <div className="absolute top-full left-0 pt-2">
                    <a href="#" className="block text-white font-semibold text-xl font-alumni hover:text-[#DF6D21] transition-colors py-2">ABOUT</a>
                    <a href="#" className="block text-white font-semibold text-xl font-alumni hover:text-[#DF6D21] transition-colors py-2">HISTORY</a>
                    <a href="#" className="block text-white font-semibold text-sm font-alumni hover:text-[#DF6D21] transition-colors py-2 whitespace-nowrap">사회공헌</a>
                  </div>
                )}
              </div>
              <a href="#" className="text-white font-medium text-xl font-alumni hover:text-[#DF6D21] transition-colors duration-300">PLAYERS</a>
              <a href="#" className="text-white font-medium text-xl font-alumni hover:text-[#DF6D21] transition-colors duration-300">GAME</a>
              <a href="#" className="text-white font-medium text-xl font-alumni hover:text-[#DF6D21] transition-colors duration-300">SHOP</a>
            </nav>

            {/* 아이콘 */}
            <div className="flex items-center space-x-10">
              <button className="hover:opacity-80 transition-opacity duration-300">
                <img src="/img/ticket.png" alt="Ticket" className="h-5 w-auto" />
              </button>
              <button className="hover:opacity-80 transition-opacity duration-300">
                <img src="/img/login.png" alt="Login" className="h-5 w-auto" />
              </button>
            </div>
          </div>

          {/* 로고 */}
          <div className={`absolute left-1/2 transform -translate-x-1/2 transition-all duration-300 ${
            isScrolled ? 'top-0' : 'top-0'
          }`}>
            <img src="/img/mark.png" alt="Hanwha Eagles Logo" className={`w-auto transition-all duration-300 ${
              isScrolled ? 'h-10' : 'h-14'
            }`} />
          </div>
        </div>
      </header>
    </>
  );
}