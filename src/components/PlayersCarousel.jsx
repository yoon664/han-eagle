import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const players = [
  { id: 1, name: '주현상', number: 66, position: '투수 우투우타', image: 'player1.png' },
  { id: 2, name: '이재원', number: 20, position: '투수 우투우타', image: 'player2.png' },
  { id: 3, name: '김서현', number: 44, position: '투수 우투우타', image: 'player3.png' },
  { id: 4, name: '최재훈', number: 13, position: '포수 우투우타', image: 'player4.png' },
  { id: 5, name: '노시환', number: 8, position: '내야수 우투우타', image: 'player5.png' },
];

// 중앙 선수 애니메이션 variants (순수 슬라이드 효과)
const centerVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300, // 오른쪽/왼쪽에서 입장
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { 
      x: { type: "tween", duration: 0.5, ease: "easeOut" }, 
      opacity: { duration: 0.3 } 
    },
  },
  exit: (direction) => ({
    x: direction > 0 ? -300 : 300, // 반대 방향으로 퇴장
    opacity: 0,
    transition: { 
      x: { type: "tween", duration: 0.5, ease: "easeIn" },
      opacity: { duration: 0.3 } 
    },
  }),
};

// 미리보기 선수 애니메이션 variants (단순 슬라이드)
const previewVariants = {
  enter: {
    x: 100,
    opacity: 0,
  },
  center: {
    x: 0,
    opacity: 0.7,
    transition: { 
      x: { type: "tween", duration: 0.5, ease: "easeOut" },
      opacity: { duration: 0.3 }
    },
  },
  exit: {
    x: -100,
    opacity: 0,
    transition: { 
      x: { type: "tween", duration: 0.5, ease: "easeIn" },
      opacity: { duration: 0.3 } 
    },
  },
};

export default function ResponsivePlayersCarousel() {
  const [[currentPlayer, direction], setCurrentPlayer] = useState([0, 0]);

  const paginate = (newDirection) => {
    setCurrentPlayer(([prevIndex]) => {
      let nextIndex = prevIndex + newDirection;
      if (nextIndex < 0) nextIndex = players.length - 1;
      if (nextIndex >= players.length) nextIndex = 0;
      return [nextIndex, newDirection];
    });
  };

  const nextIndex = (currentPlayer + 1) % players.length;
  const prevIndex = currentPlayer - 1 < 0 ? players.length - 1 : currentPlayer - 1;

  return (
    <div style={{ fontFamily: 'Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI", "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", sans-serif' }}>
      
      {/* 데스크탑 */}
      <section className="hidden md:flex relative min-h-screen items-center justify-center overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 py-16 pt-48">
          <div className="relative flex items-center justify-center">
            
            {/* 이전 버튼 */}
            <button 
              onClick={() => paginate(-1)}
              className="absolute left-[-130px] z-20 text-white hover:text-orange-500 transition-colors text-6xl font-light"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="24" viewBox="0 0 80 24" fill="none">
                <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM80 12V10.5L2 10.5V12V13.5L80 13.5V12Z" fill="white"/>
              </svg>
            </button>

            {/* 중앙 선수 및 미리보기 컨테이너 */}
            <div className="relative flex items-center justify-center">

              {/* 배경 넘버 */}
              <AnimatePresence mode="wait">
                <motion.div 
                  key={players[currentPlayer].number}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute left-[-250px] top-[-130px] z-0"
                >
                  <span className="tracking-tighter text-[500px] font-bold leading-none" style={{color: '#070707'}}>
                    {players[currentPlayer].number}
                  </span>
                </motion.div>
              </AnimatePresence>

              {/* 중앙 선수 */}
              <div className="relative z-10">
                <AnimatePresence custom={direction} mode="wait">
                  <motion.div
                    key={players[currentPlayer].id}
                    custom={direction}
                    variants={centerVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                  >
                    <img 
                      src={`/img/${players[currentPlayer].image}`} 
                      alt={players[currentPlayer].name} 
                      className="w-[500px] h-[700px] object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 오른쪽 미리보기 */}
              <div className="absolute right-[-550px] top-20 z-5">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={players[nextIndex].id}
                    variants={previewVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-96 h-[380px] overflow-hidden"
                  >
                    <img 
                      src={`/img/${players[nextIndex].image}`} 
                      alt={players[nextIndex].name} 
                      className="w-full h-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* 선수 정보 */}
              <div className="absolute right-[-150px] top-24 text-white text-right">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={players[currentPlayer].id}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -30 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <div className="text-lg mb-2">
                      <span className="font-bold">{players[currentPlayer].position.split(' ')[0]}</span>
                      <span className="font-normal"> {players[currentPlayer].position.split(' ').slice(1).join(' ')}</span>
                    </div>
                    <hr className="border-white w-[300px] mb-2" />
                    <div className="text-4xl font-bold" style={{color: '#DF6D21'}}>
                      {players[currentPlayer].name}
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* 다음 버튼 */}
            <button 
              onClick={() => paginate(1)}
              className="absolute right-[-130px] z-20 text-white hover:text-orange-500 transition-colors text-6xl font-light"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="80" height="24" viewBox="0 0 80 24" fill="none">
                <path d="M79.0607 13.0607C79.6464 12.4749 79.6464 11.5251 79.0607 10.9393L69.5147 1.3934C68.9289 0.807611 67.9792 0.807611 67.3934 1.3934C66.8076 1.97919 66.8076 2.92893 67.3934 3.51472L75.8787 12L67.3934 20.4853C66.8076 21.0711 66.8076 22.0208 67.3934 22.6066C67.9792 23.1924 68.9289 23.1924 69.5147 22.6066L79.0607 13.0607ZM-13 12V13.5L78 13.5V12V10.5L-13 10.5V12Z" fill="white"/>
              </svg>
            </button>
          </div>

          {/* VIEW ALL PLAYER 버튼 */}
          <div className="flex justify-center mt-7">
            <button className="relative group cursor-pointer transition-all duration-300">
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

      {/* 모바일 버전 */}
      <section className="flex md:hidden relative min-h-screen items-center justify-center overflow-hidden">
        <div className="w-full px-4 py-16">
          <div className="relative flex flex-col items-center justify-center">
            {/* 모바일 버전도 동일한 구조로 구현 가능 */}
            <div className="text-white text-center">
              <div className="text-lg mb-2">
                <span className="font-bold">{players[currentPlayer].position.split(' ')[0]}</span>
                <span className="font-normal"> {players[currentPlayer].position.split(' ').slice(1).join(' ')}</span>
              </div>
              <div className="text-3xl font-bold mb-4" style={{color: '#DF6D21'}}>
                {players[currentPlayer].name}
              </div>
              <div className="text-6xl font-bold mb-8" style={{color: '#070707'}}>
                {players[currentPlayer].number}
              </div>
            </div>
            
            <div className="relative">
              <AnimatePresence custom={direction} mode="wait">
                <motion.div
                  key={players[currentPlayer].id}
                  custom={direction}
                  variants={centerVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                >
                  <img 
                    src={`/img/${players[currentPlayer].image}`} 
                    alt={players[currentPlayer].name} 
                    className="w-[300px] h-[400px] object-contain"
                  />
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex justify-between w-full max-w-sm mt-8">
              <button 
                onClick={() => paginate(-1)}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="12" viewBox="0 0 80 24" fill="none">
                  <path d="M0.939339 10.9393C0.353554 11.5251 0.353554 12.4749 0.939339 13.0607L10.4853 22.6066C11.0711 23.1924 12.0208 23.1924 12.6066 22.6066C13.1924 22.0208 13.1924 21.0711 12.6066 20.4853L4.12132 12L12.6066 3.51472C13.1924 2.92893 13.1924 1.97919 12.6066 1.3934C12.0208 0.807611 11.0711 0.807611 10.4853 1.3934L0.939339 10.9393ZM80 12V10.5L2 10.5V12V13.5L80 13.5V12Z" fill="white"/>
                </svg>
              </button>
              
              <button 
                onClick={() => paginate(1)}
                className="text-white hover:text-orange-500 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="12" viewBox="0 0 80 24" fill="none">
                  <path d="M79.0607 13.0607C79.6464 12.4749 79.6464 11.5251 79.0607 10.9393L69.5147 1.3934C68.9289 0.807611 67.9792 0.807611 67.3934 1.3934C66.8076 1.97919 66.8076 2.92893 67.3934 3.51472L75.8787 12L67.3934 20.4853C66.8076 21.0711 66.8076 22.0208 67.3934 22.6066C67.9792 23.1924 68.9289 23.1924 69.5147 22.6066L79.0607 13.0607ZM-13 12V13.5L78 13.5V12V10.5L-13 10.5V12Z" fill="white"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}