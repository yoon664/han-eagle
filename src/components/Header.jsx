export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-30 bg-transparent">
      
      <video
        // autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-screen object-cover z-0 pointer-events-none"
      >
        <source src="/img/HanwhaEagles_BrandFilm.webm" type="video/webm" />
      </video>

      {/* 헤더 네비게이션 */}
      <div className="relative z-10 p-6 max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          {/* 왼쪽 */}
          <nav className="flex space-x-8">
            <a href="#" className="text-white font-medium hover:text-orange-400 transition-colors duration-300">
              EAGLES
            </a>
            <a href="#" className="text-white font-medium hover:text-orange-400 transition-colors duration-300">
              PLAYERS
            </a>
            <a href="#" className="text-white font-medium hover:text-[#DF6D21] transition-colors duration-300">
              GAME
            </a>
            <a href="#" className="text-white font-medium hover:text-[#DF6D21] transition-colors duration-300">
              SHOP
            </a>
          </nav>

          {/* 오른쪽 아이콘 */}
          <div className="flex items-center space-x-10">
            <button className=" transition-opacity duration-300">
              <img 
                src="/img/ticket.png" 
                alt="Ticket" 
                className="h-5 w-auto"
              />
            </button>
            <button className=" transition-opacity duration-300">
              <img 
                src="/img/login.png" 
                alt="Login" 
                className="h-5 w-auto"
              />
            </button>
          </div>
        </div>

        {/* 로고 */}
        <div className="absolute left-1/2 top-6 transform -translate-x-1/2">
          <img 
            src="/img/mark.png" 
            alt="Hanwha Eagles Logo" 
            className="h-12 w-auto"
          />
        </div>
      </div>
    </header>
  );
}