import { useState } from 'react';

const players = [
  { id: 1, name: '주현상', number: 66, position: '투수 우투우타', image: 'player1.png' },
  { id: 2, name: '이재원', number: 20, position: '투수 우투우타', image: 'player2.png' },
  { id: 3, name: '김서현', number: 44, position: '투수 우투우타', image: 'player3.png' },
  { id: 4, name: '최재훈', number: 13, position: '포수 우투우타', image: 'player4.png' },
  { id: 5, name: '노시환', number: 8, position: '내야수 우투우타', image: 'player5.png' },
];

export default function ResponsivePlayersCarousel() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [nextPlayer, setNextPlayer] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const [slideDirection, setSlideDirection] = useState('');

  const goToPrevious = () => {
    if (isAnimating) return; // 애니메이션 중이면 클릭 무시
    
    setIsAnimating(true);
    setSlideDirection('prev');
    
    setTimeout(() => {
      setCurrentPlayer((prev) => {
        const newCurrent = prev === 0 ? players.length - 1 : prev - 1;
        setNextPlayer(newCurrent === players.length - 1 ? 0 : newCurrent + 1);
        return newCurrent;
      });
      
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection('');
      }, 30);
    }, );
  };

  const goToNext = () => {
    if (isAnimating) return; // 애니메이션 중이면 클릭 무시
    
    setIsAnimating(true);
    setSlideDirection('next');
    
    setTimeout(() => {
      setCurrentPlayer((prev) => {
        const newCurrent = prev === players.length - 1 ? 0 : prev + 1;
        setNextPlayer(newCurrent === players.length - 1 ? 0 : newCurrent + 1);
        return newCurrent;
      });
      
      setTimeout(() => {
        setIsAnimating(false);
        setSlideDirection('');
      }, 30);
    }, );
  };

  return (
    <>
    <div style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}>
      {/* 데스크탑 */}
      <section className="hidden md:flex relative min-h-screen items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 pt-48">
          <div className="relative flex items-center justify-center">
            
            {/* 이전 버튼 */}
            <button 
              onClick={goToPrevious}
              disabled={isAnimating}
              className={`absolute left-[-130px] z-20 text-white hover:text-orange-500 transition-colors text-6xl font-light ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="24" viewBox="0 0 80 24" fill="none">
                <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM80 12V10.5L2 10.5V12V13.5L80 13.5V12Z" fill="white"/>
              </svg>
            </button>

            {/* 메인 선수 영역 */}
            <div className="relative flex items-center justify-center">
              
              {/* 배경 넘버 */}
              <div className={`absolute left-[-250px] top-[-130px] z-0 transition-all duration-700 linear ${
                isAnimating ? (slideDirection === 'next' ? 'transform translate-x-[-100px] opacity-0' : 'transform translate-x-[100px] opacity-0') : 'transform translate-x-0 opacity-100'
              }`}>
                <span className="tracking-tighter text-[500px] font-bold leading-none" style={{color: '#070707'}}>
                  {players[currentPlayer].number}
                </span>
              </div>

              {/* 메인 선수 이미지 */}
              <div className={`relative z-10 transition-all duration-700 linear ${
                isAnimating ? (slideDirection === 'next' ? 'transform translate-x-[-200px] opacity-0' : 'transform translate-x-[200px] opacity-0') : 'transform translate-x-0 opacity-100'
              }`}>
                <img 
                  src={`/img/${players[currentPlayer].image}`} 
                  alt={players[currentPlayer].name}
                  className="w-[500px] h-[700px] object-contain transition-opacity duration-700 linear"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-96 h-[500px] flex items-center justify-center text-white">
                  선수 이미지
                </div>
              </div>

              {/* 선수 정보 */}
              <div className={`absolute right-[-150px] top-24 text-white text-right transition-all duration-700 linear ${
                isAnimating ? (slideDirection === 'next' ? 'transform translate-x-[-100px] opacity-0' : 'transform translate-x-[100px] opacity-0') : 'transform translate-x-0 opacity-100'
              }`}>
                <div className="text-lg mb-2">
                  <span className="font-bold">{players[currentPlayer].position.split(' ')[0]}</span>
                  <span className="font-normal"> {players[currentPlayer].position.split(' ').slice(1).join(' ')}</span>
                </div>
                <hr className="border-white w-[300px] mb-2" />
                <div className="text-4xl font-bold" style={{color: '#DF6D21'}}>
                  {players[currentPlayer].name}
                </div>
              </div>

              {/* 다음 선수 미리보기 */}
              <div className={`absolute right-[-550px] top-20 z-5 transition-all duration-700 linear ${
                isAnimating ? (slideDirection === 'next' ? 'transform translate-x-[-100px] opacity-30' : 'transform translate-x-[100px] opacity-30') : 'transform translate-x-0 opacity-70'
              }`}>
                <div className="w-96 h-[380px] overflow-hidden">
                  <img 
                    src={`/img/${players[nextPlayer].image}`} 
                    alt={players[nextPlayer].name}
                    className="w-full h-full object-contain transition-opacity duration-700 linear"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center text-white text-xs">
                    선수
                  </div>
                </div>
              </div>

            </div>

            {/* 다음 버튼 */}
            <button 
              onClick={goToNext}
              disabled={isAnimating}
              className={`absolute right-[-130px] z-20 text-white hover:text-orange-500 transition-colors text-6xl font-light ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="24" viewBox="0 0 80 24" fill="none">
                <path d="M79.0607 13.0607C79.6464 12.4749 79.6464 11.5251 79.0607 10.9393L69.5147 1.3934C68.9289 0.807611 67.9792 0.807611 67.3934 1.3934C66.8076 1.97919 66.8076 2.92893 67.3934 3.51472L75.8787 12L67.3934 20.4853C66.8076 21.0711 66.8076 22.0208 67.3934 22.6066C67.9792 23.1924 68.9289 23.1924 69.5147 22.6066L79.0607 13.0607ZM-13 12V13.5L78 13.5V12V10.5L-13 10.5V12Z" fill="white"/>
              </svg>
            </button>
          </div>

          {/* 버튼 */}
          <div className="flex justify-center mt-7">
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
                VIEW ALL PLAYER
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 모바일 */}
      <section className="flex md:hidden relative min-h-screen items-center justify-center overflow-hidden">
        <div className="w-full px-4 py-16">
          <div className="relative flex flex-col items-center justify-center">
            
            {/* 이전 버튼 */}
            <button 
              onClick={goToPrevious}
              disabled={isAnimating}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-orange-500 transition-colors text-4xl font-light ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="24" viewBox="0 0 80 24" fill="none">
                <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM80 12V10.5L2 10.5V12V13.5L80 13.5V12Z" fill="white"/>
              </svg>
            </button>

            {/* 다음 버튼 */}
            <button 
              onClick={goToNext}
              disabled={isAnimating}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 z-20 text-white hover:text-orange-500 transition-colors text-4xl font-light ${isAnimating ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="24" viewBox="0 0 80 24" fill="none">
                <path d="M79.0607 13.0607C79.6464 12.4749 79.6464 11.5251 79.0607 10.9393L69.5147 1.3934C68.9289 0.807611 67.9792 0.807611 67.3934 1.3934C66.8076 1.97919 66.8076 2.92893 67.3934 3.51472L75.8787 12L67.3934 20.4853C66.8076 21.0711 66.8076 22.0208 67.3934 22.6066C67.9792 23.1924 68.9289 23.1924 69.5147 22.6066L79.0607 13.0607ZM-13 12V13.5L78 13.5V12V10.5L-13 10.5V12Z" fill="white"/>
              </svg>
            </button>

            {/* 메인 선수 영역 */}
            <div className="relative flex items-center justify-center mb-2">
              
              {/* 배경 넘버 */}
              <div className={`absolute right-[18vw] top-[-100px] z-0 transition-all duration-700 linear ${
                isAnimating ? (slideDirection === 'next' ? 'transform translate-x-[-50px] opacity-0' : 'transform translate-x-[50px] opacity-0') : 'transform translate-x-0 opacity-100'
              }`}>
                <span className="text-[400px] font-bold leading-none">
                  {players[currentPlayer].number}
                </span>
              </div>

              {/* 메인 선수 이미지 */}
              <div className={`relative z-10 transition-all duration-700 top-11 linear ${
                isAnimating ? (slideDirection === 'next' ? 'transform translate-x-[-100px] opacity-0' : 'transform translate-x-[100px] opacity-0') : 'transform translate-x-0 opacity-100'
              }`}>
                <img 
                  src={`/img/${players[currentPlayer].image}`} 
                  alt={players[currentPlayer].name}
                  className="w-[550px] h-[700px] object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
              </div>
            </div>

            {/* 선수 정보 - 이미지 왼쪽 아래 */}
            <div className={`relative z-10 right-32 bottom-16 text-white text-left transition-all duration-700 linear ${
              isAnimating ? (slideDirection === 'next' ? 'transform translate-x-[-50px] opacity-0' : 'transform translate-x-[50px] opacity-0') : 'transform translate-x-0 opacity-100'
            }`}>
              <div className="text-5xl mb-3 text-white">
                <span className="font-bold">{players[currentPlayer].position.split(' ')[0]}</span>
                <span className="font-light"> {players[currentPlayer].position.split(' ').slice(1).join(' ')}</span>
              </div>
              <div className="text-7xl tracking-tighter font-bold" style={{color: '#DF6D21'}}>
                {players[currentPlayer].name}
              </div>
            </div>

          </div>

          {/* 버튼 */}
          <div className="flex justify-center mt-8">
            <button className="relative group cursor-pointer transition-all duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="250" height="74" viewBox="0 0 326 96" fill="none">
                <path d="M1 95V1H325V63.3654L298 95H1Z" 
                      stroke="white" 
                      strokeWidth="2" 
                      fill="transparent" 
                      className="group-hover:stroke-[#DF6D21] group-hover:fill-[#DF6D21] transition-all duration-300"/>
              </svg>
              
              <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
              text-white text-[20px] font-bold tracking-wider whitespace-nowrap">
                VIEW ALL PLAYER
              </span>
            </button>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}