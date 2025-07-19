import { useState } from 'react';

export default function Header() {
  const [hoveredMenu, setHoveredMenu] = useState(null);

  return (
    <>
      {/* 배경 영상 - 전체 화면 */}
      <video
        // autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover z-0 pointer-events-none"
      >
        <source src="/img/HanwhaEagles_BrandFilm.webm" type="video/webm" />
      </video>

      {/* 헤더 네비게이션 - 영상 위에 오버레이 */}
      <header className="absolute top-0 left-0 right-0 z-30 bg-transparent">
        <div className="relative z-10 p-6 max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            {/* 왼쪽 네비게이션 */}
            <nav className="flex space-x-8">
              {/* EAGLES 메뉴 */}
              <div 
                className="relative"
                onMouseEnter={() => setHoveredMenu('eagles')}
                onMouseLeave={() => setHoveredMenu(null)}
              >
                <a href="#" className={`relative text-white font-medium font-alumni transition-colors duration-300 ${hoveredMenu === 'eagles' ? 'text-orange-400' : 'hover:text-orange-400'}`}>
                  EAGLES
                  {/* 밑줄 효과 */}
                  <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-orange-400 transform transition-transform duration-300 ${hoveredMenu === 'eagles' ? 'scale-x-100' : 'scale-x-0'}`}></span>
                </a>
                
                {/* EAGLES 드롭다운 메뉴 */}
                {hoveredMenu === 'eagles' && (
                  <div className="absolute top-full left-0 pt-2">
                    <a href="#" className="block text-orange-400 font-medium font-alumni hover:text-orange-300 transition-colors py-2">
                      ABOUT
                    </a>
                    <a href="#" className="block text-orange-400 font-medium font-alumni hover:text-orange-300 transition-colors py-2">
                      HISTORY
                    </a>
                    <a href="#" className="block text-orange-400 font-medium font-alumni hover:text-orange-300 transition-colors py-2">
                      사회공헌
                    </a>
                  </div>
                )}
              </div>

              <a href="#" className="text-white font-medium font-alumni hover:text-orange-400 transition-colors duration-300">
                PLAYERS
              </a>
              <a href="#" className="text-white font-medium font-alumni hover:text-[#DF6D21] transition-colors duration-300">
                GAME
              </a>
              <a href="#" className="text-white font-medium font-alumni hover:text-[#DF6D21] transition-colors duration-300">
                SHOP
              </a>
            </nav>

            {/* 오른쪽 아이콘들 */}
            <div className="flex items-center space-x-10">
              <button className="hover:opacity-80 transition-opacity duration-300">
                <img 
                  src="/img/ticket.png" 
                  alt="Ticket" 
                  className="h-5 w-auto"
                />
              </button>
              <button className="hover:opacity-80 transition-opacity duration-300">
                <img 
                  src="/img/login.png" 
                  alt="Login" 
                  className="h-5 w-auto"
                />
              </button>
            </div>
          </div>

          {/* 가운데 로고 */}
          <div className="absolute left-1/2 top-6 transform -translate-x-1/2">
            <img 
              src="/img/mark.png" 
              alt="Hanwha Eagles Logo" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>
    </>
  );
}