
import React, { useState } from 'react';

const HanwhaEagles = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const gameSchedule = [
    { date: '대전(금)', time: '2025. 04. 25. FRI', team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기' },
    { date: '대전(토)', time: '2025. 04. 26. SAT', team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기' },
    { date: '대전(일)', time: '2025. 04. 27. SUN', team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기' },
    { date: '대전(월)', time: '2025. 04. 28. MON', team: 'SL', opponent: 'vs 기아 타이거즈', link: '예매 바로가기' }
  ];

  const newsItems = [
    { date: '2025.04.06', title: '한화이글스, 창단 40주년 기념 레거시 유니폼 화보 공개' },
    { date: '2025.04.04', title: '한화이글스, 에스앤케이병원과 후원 협약' },
    { date: '2025.04.03', title: '한화이글스, 정한방병원과 후원 협약' },
    { date: '2025.03.28', title: '개인정보처리방침 변경 고지' },
    { date: '2025.03.27', title: '대전 한화생명 볼파크, 시즌 개막 준비 완료' }
  ];

  const merchandiseItems = [
    { name: '홈 유니폼', image: 'white' },
    { name: '원정 유니폼', image: 'navy' },
    { name: '한정판 유니폼', image: 'orange' },
    { name: '모자', image: 'cap' },
    { name: '후드티', image: 'hoodie' },
    { name: '키링', image: 'keyring' },
    { name: '텀블러', image: 'tumbler' },
    { name: '응원도구', image: 'cheer' }
  ];

  return (
    <div className="min-h-screen text-white" style={{backgroundColor: '#222222'}}>
      {/* Hero Section */}
      <section className="relative overflow-hidden" style={{height: '100vh'}}>
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full z-0">
          <iframe
            className="w-full h-full object-cover"
            src="https://www.youtube.com/embed/2n6eiW2ALcY?start=27&autoplay=1&mute=1&loop=1&playlist=2n6eiW2ALcY&controls=0&showinfo=0&rel=0&iv_load_policy=3&modestbranding=1"
            title="Background Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '100vw',
              height: '100vh',
              transform: 'translate(-50%, -50%)',
              zIndex: -1
            }}
          ></iframe>
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-40 z-10"></div>
        </div>

        {/* Navigation - 영상 위에 오버레이 */}
        <nav className="absolute top-0 left-0 right-0 p-4 z-30">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex space-x-8">
              <span className="text-white font-bold hover:text-orange-500 transition-colors cursor-pointer">EAGLES</span>
              <span className="text-white hover:text-orange-500 transition-colors cursor-pointer">PLAYERS</span>
              <span className="text-white hover:text-orange-500 transition-colors cursor-pointer">GAME</span>
              <span className="text-white hover:text-orange-500 transition-colors cursor-pointer">SHOP</span>
            </div>
            <div className="flex items-center space-x-4">
              
              {/* 오른쪽 아이콘들 */}
              <div className="text-white hover:text-orange-500 transition-colors cursor-pointer">📱</div>
              <div className="text-white hover:text-orange-500 transition-colors cursor-pointer">👤</div>
            </div>
          </div>
        </nav>
        
        {/* Content Overlay - 영상 하단에 위치 */}
        <div className="absolute bottom-0 left-0 right-0 z-20 pb-16">
          <div className="max-w-7xl mx-auto px-4">
            {/* Team Photo */}
            <div className="flex justify-center mb-8">
              <div className="w-96 h-48 bg-gray-800 bg-opacity-70 rounded-lg flex items-center justify-center">
                <span className="text-gray-400 text-lg">7명 선수 단체사진</span>
              </div>
            </div>

            {/* Text and Title Section */}
            <div className="text-center">
              {/* Right aligned text */}
              <div className="flex justify-end mb-4">
                <p className="text-white text-lg leading-relaxed drop-shadow-lg">
                  독수리는 추진력을 얻어<br />
                  더욱 더 높이 비상한다
                </p>
              </div>
              
              {/* Main Title */}
              <h1 className="text-7xl font-bold mb-8 text-white drop-shadow-lg">
                RIDE THE STORM
              </h1>
              
              {/* Button */}
              <button className="border-2 border-white px-8 py-3 hover:bg-white hover:text-black transition-colors text-white bg-black bg-opacity-30">
                VIEW ALL ABOUT
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Player Showcase Section */}
      <section className="py-16" style={{backgroundColor: '#222222'}}>
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center space-x-16">
            {/* Player Image with Number Background */}
            <div className="relative">
              {/* Large Number Background */}
              <div className="text-9xl font-bold text-gray-600 absolute -z-10 -top-8 -left-8">
                6
              </div>
              {/* Player Image Placeholder */}
              <div className="w-80 h-96 bg-gray-700 rounded-lg flex items-center justify-center">
                <span className="text-gray-400">선수 사진</span>
              </div>
            </div>

            {/* Player Info */}
            <div className="text-left">
              <div className="text-white text-lg mb-2">투수 · 우투우타</div>
              <hr className="border-orange-500 border-2 w-32 mb-4" />
              <div className="text-white text-4xl font-bold">주현상</div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors text-white">
              VIEW ALL PLAYERS
            </button>
          </div>
        </div>
      </section>
      {/* Contents Section */}
      <section className="py-16" style={{backgroundColor: '#222222'}}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-12 text-white">CONTENTS</h2>
          
          <div className="flex justify-center">
            <div className="text-center">
              {/* YouTube Video */}
              <div className="w-96 h-64 rounded-lg mb-6 overflow-hidden">
                {!isVideoPlaying ? (
                  // Thumbnail
                  <div 
                    className="w-full h-full bg-gray-800 rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-700 transition-colors relative overflow-hidden"
                    onClick={() => setIsVideoPlaying(true)}
                  >
                    {/* Background Image Placeholder */}
                    <div className="absolute inset-0 bg-cover bg-center" style={{backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzg0IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDM4NCAyNTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIzODQiIGhlaWdodD0iMjU2IiBmaWxsPSIjNDA0MDQwIi8+Cjx0ZXh0IHg9IjE5MiIgeT0iMTI4IiBmaWxsPSIjOTk5OTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSIgZm9udC1mYW1pbHk9InNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMTgiPuyViOyImCDsgYzsp4Q8L3RleHQ+Cjwvc3ZnPgo=')"}}>
                    </div>
                    
                    {/* Play Button */}
                    <div className="relative z-10 text-center">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-2 hover:bg-red-700 transition-colors">
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Duration */}
                    <div className="absolute bottom-4 right-4 bg-gray-800 bg-opacity-70 text-white px-2 py-1 rounded text-xs">
                      16:44
                    </div>
                  </div>
                ) : (
                  // Actual YouTube Video
                  <iframe
                    className="w-full h-full rounded-lg"
                    src="https://www.youtube.com/embed/S7sT7M0rFpM?autoplay=1&rel=0&modestbranding=1"
                    title="한화 이글스 영상"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                )}
              </div>
              
              {/* Video Description */}
              <div className="text-white">
                <div className="text-lg">8연승, 창단 최초 8경기 연속 선발승</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MD Section */}
      <section className="py-16" style={{backgroundColor: '#222222'}}>
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-12 text-white">MD</h2>
          
          <div className="flex justify-center space-x-8 mb-8">
            {/* 한화 이글스 마스코트 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center text-3xl">
                🦅
              </div>
              <div className="text-white text-sm">공식마스코트</div>
            </div>
            
            {/* 홈 유니폼 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="text-black font-bold text-sm">Eagles<br/>99</div>
              </div>
              <div className="text-white text-sm">2025 어린이 유니폼</div>
            </div>
            
            {/* 원정 유니폼 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-blue-900 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="text-white font-bold text-sm">EAGLES<br/>99</div>
              </div>
              <div className="text-white text-sm">2025 어린이 유니폼</div>
            </div>
            
            {/* 오렌지 유니폼 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-orange-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <div className="text-white font-bold text-sm">Eagles<br/>99</div>
              </div>
              <div className="text-white text-sm">2025 어린이 유니폼</div>
            </div>
            
            {/* 수리 캐릭터 */}
            <div className="text-center">
              <div className="w-24 h-24 bg-white rounded-lg mx-auto mb-4 flex items-center justify-center text-3xl">
                🐧
              </div>
              <div className="text-white text-sm">수리 캐릭터 굿즈</div>
            </div>
          </div>
          
          <div className="text-center">
            <button className="border border-white px-8 py-3 hover:bg-white hover:text-black transition-colors text-white">
              VIEW ALL MD
            </button>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-12">NEWS</h2>
          
          <div className="space-y-4 max-w-4xl mx-auto">
            {newsItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between p-4 hover:bg-gray-800 transition-colors cursor-pointer">
                <div className="flex items-center space-x-6">
                  <span className="text-gray-400 text-sm">{item.date}</span>
                  <span className="text-white">{item.title}</span>
                </div>
                <span className="text-gray-400">→</span>
              </div>
            ))}
          </div>
          
          <div className="grid grid-cols-5 gap-4 mt-12">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-orange-500 font-bold">ddd</div>
              <div className="text-white text-sm mt-2">img</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-white text-lg font-bold">ddd</div>
              <div className="text-orange-500">ddd</div>
            </div>
            <div className="bg-orange-500 p-4 rounded-lg text-center">
              <div className="text-white font-bold">ddd</div>
            </div>
            <div className="bg-red-600 p-4 rounded-lg text-center">
              <div className="text-white text-2xl font-bold">ddd</div>
              <div className="text-white text-sm">ddd</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-white">ddd</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-start">
            {/* Left Side - Main Content */}
            <div className="flex-1">
              <div className="text-center">
                <div className="text-white text-4xl font-bold mb-4">HANWHA EAGLES</div>
                <div className="text-gray-400 text-sm mb-8">
                  대전광역시 중구 대종로 373 한화이글스 | 대표이사 박종태<br/>TEL 042-630-8200 | FAX 042-632-2929
                </div>
                <div className="flex justify-center space-x-8 text-gray-400 text-sm">
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">법적고지</span>
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">개인정보 처리방침</span>
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">이용약관</span>
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">고객문의</span>
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">사이트맵</span>
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">광고문의</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Scroll to Top Button */}
            <div className="ml-8">
              <button 
                className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors flex items-center justify-center"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HanwhaEagles;