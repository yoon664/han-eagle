import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react'; // 모바일 메뉴 버튼

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
      <header className={`md:hidden fixed top-0 left-0 right-0 z-[9999] transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 backdrop-blur-sm' : 'bg-transparent'
      }`}>
        <div className="flex justify-between items-center p-4">
          <img src="/img/mark.png" alt="Logo" className="h-16 w-auto" />

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2"
          >
            {isMenuOpen ? <X size={45} /> : <Menu size={45} />}
          </button>
        </div>

        {/* 전체화면 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-[#222222] z-[100] flex flex-col">
            {/* 헤더 영역 */}
            <div className="flex justify-between items-center p-4">
              <img src="/img/mark.png" alt="Logo" className="h-16 w-auto" />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white p-2"
              >
                <X size={45} />
              </button>
            </div>

            {/* 메뉴 영역 */}
            <nav className="flex-1 px-6 py-8">
              <div className="space-y-8">
                
                {/* EAGLES 메뉴 */}
                <div>
                  <div 
                    className="flex items-center justify-between"
                    onMouseEnter={() => setHoveredMenu('eagles')}
                    onMouseLeave={() => setHoveredMenu(null)}
                  >
                    <span className="text-[#DF6D21] text-6xl font-bold font-alumni">EAGLES</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#DF6D21" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6"/>
                    </svg>
                  </div>
                  
                  {/* EAGLES 서브메뉴 */}
                  <div className="mt-4 ml-4 space-y-3">
                    <a href="#" className="block text-white text-2xl font-medium hover:text-[#DF6D21] transition-colors">ABOUT</a>
                    <a href="#" className="block text-white text-2xl font-medium hover:text-[#DF6D21] transition-colors">HISTORY</a>
                    <a href="#" className="block text-white text-2xl font-medium hover:text-[#DF6D21] transition-colors">사회공헌</a>
                  </div>
                </div>

                {/* PLAYERS 메뉴 */}
                <div className="flex items-center justify-between">
                  <span className="text-white text-6xl font-bold font-alumni">PLAYERS</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>

                {/* GAME 메뉴 */}
                <div className="flex items-center justify-between">
                  <span className="text-white text-6xl font-bold font-alumni">GAME</span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </div>

                {/* SHOP 메뉴 */}
                <div>
                  <span className="text-white text-6xl font-bold font-alumni">SHOP</span>
                </div>

              </div>
            </nav>

            {/* 하단 아이콘 영역 */}
            <div className="p-6">
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
            isScrolled ? 'top-3' : 'top-6'
          }`}>
            <img src="/img/mark.png" alt="Hanwha Eagles Logo" className={`w-auto transition-all duration-300 ${
              isScrolled ? 'h-8' : 'h-12'
            }`} />
          </div>
        </div>
      </header>
    </>
  );
}