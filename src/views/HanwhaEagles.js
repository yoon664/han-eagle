import React from 'react';

const HanwhaEagles = () => {

  const gameSchedule = [
    { date: '대전(금)', time: '2025. 04. 25. FRI', team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기' },
    { date: '대전(토)', time: '2025. 04. 26. SAT', team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기' },
    { date: '대전(일)', time: '2025. 04. 27. SUN', team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기' },
    { date: '대전(월)', time: '2025. 04. 28. MON', team: 'SL', opponent: 'vs 기아 타이거즈', link: '예매 바로가기' }
  ];

  const newsItems = [
    { date: '2025.04.08', title: '한화이글스, 창단 40주년 기념 레시피 유니폼 착용 공개' },
    { date: '2025.04.04', title: '한화이글스, 예스24공연장창과 후원 협약' },
    { date: '2025.04.03', title: '한화이글스, 창립멤버쉽장 후원 협약' },
    { date: '2025.03.28', title: '개인정보처리방침 변경 고지' },
    { date: '2025.03.27', title: '대전 한화생명 클리닉, 시즌 개막 준비 완료' }
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
        
        {/* Content Overlay */}
        <div className="relative z-20 h-full flex flex-col justify-between">
          {/* Game Schedule Cards */}
          <div className="pt-24">
            <div className="flex justify-center space-x-4 px-4">
              {gameSchedule.map((game, index) => (
                <div 
                  key={index}
                  className="bg-white bg-opacity-90 p-4 rounded-lg w-64"
                >
                  <div className="text-black text-sm mb-1">{game.date}</div>
                  <div className="text-gray-600 text-xs mb-2">{game.time}</div>
                  <div className="flex items-center justify-between mb-2">
                    <div className={`w-8 h-8 rounded flex items-center justify-center font-bold text-white ${
                      game.team === 'T' ? 'bg-red-600' : 'bg-gray-600'
                    }`}>
                      {game.team}
                    </div>
                    <div className="text-black text-sm">{game.opponent}</div>
                  </div>
                  <button className="text-orange-500 text-sm font-medium hover:underline">
                    {game.link} →
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="pb-16">
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
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-6xl font-bold text-center mb-12">CONTENTS</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-red-600 p-6 rounded-lg">
              <div className="text-yellow-400 text-2xl font-bold mb-2">치킨</div>
              <div className="text-yellow-400 text-2xl font-bold mb-4">우승!</div>
              <div className="bg-red-700 text-white text-6xl font-bold p-4 rounded text-center">
                8연승
              </div>
              <div className="text-white text-center mt-4">
                유형준, 창단 첫 8승기 연속 신기록
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-gray-800 p-4 rounded-lg">
                <div className="text-white">한화이글스 노벨</div>
                <div className="text-orange-500">몰티브 선수진 5명 소개</div>
              </div>
              <div className="bg-orange-500 p-4 rounded-lg">
                <div className="text-white font-bold">NEW RECORD</div>
              </div>
              <div className="bg-red-600 p-4 rounded-lg text-center">
                <div className="text-white text-4xl font-bold">4400</div>
                <div className="text-white">RECORD</div>
                <div className="text-yellow-400">한화이글스 구단 창단이후 4400승 달성</div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-orange-500 text-xl mb-4">Eagles</div>
              <div className="text-white text-lg">
                한화이글스 선수들의 다양한 모습을 만나보세요
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
              <div className="text-orange-500 font-bold">SOLD OUT</div>
              <div className="text-white text-sm mt-2">한화이글스 vs 넥센 히어로즈 5차전 티켓 매진</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-white text-lg font-bold">130</div>
              <div className="text-orange-500">RECORD</div>
            </div>
            <div className="bg-orange-500 p-4 rounded-lg text-center">
              <div className="text-white font-bold">NEW RECORD</div>
            </div>
            <div className="bg-red-600 p-4 rounded-lg text-center">
              <div className="text-white text-2xl font-bold">4400</div>
              <div className="text-white text-sm">RECORD</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg">
              <div className="text-white">Eagles</div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-orange-500 text-2xl font-bold">HANWHA EAGLES</div>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600 transition-colors">
              ↑
            </button>
          </div>
          <div className="flex space-x-8 mt-4 text-gray-400 text-sm">
            <span>개인정보처리방침</span>
            <span>영상정보처리기기</span>
            <span>이용약관</span>
            <span>저작권</span>
            <span>윤리경영</span>
            <span>사이트맵</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HanwhaEagles;