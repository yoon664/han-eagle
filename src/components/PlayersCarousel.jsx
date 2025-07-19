import { useState } from 'react';

const players = [
  { 
    id: 1, 
    name: '주현상', 
    number: 66, 
    position: '투수 우투우타',
    image: 'player1.png'
  },
  { 
    id: 2, 
    name: '김도연', 
    number: 27, 
    position: '내야수 우타좌투',
    image: 'player2.png'
  },
  { 
    id: 3, 
    name: '최재훈', 
    number: 15, 
    position: '외야수 좌타좌투',
    image: 'player3.png'
  },
  { 
    id: 4, 
    name: '박병호', 
    number: 52, 
    position: '내야수 좌타우투',
    image: 'player4.png'
  },
  { 
    id: 5, 
    name: '이원석', 
    number: 8, 
    position: '내야수 우타우투',
    image: 'player5.png'
  },
  { 
    id: 6, 
    name: '정우람', 
    number: 21, 
    position: '투수 우투우타',
    image: 'player6.png'
  },
  { 
    id: 7, 
    name: '채은성', 
    number: 1, 
    position: '포수 우타우투',
    image: 'player7.png'
  },
  { 
    id: 8, 
    name: '노시환', 
    number: 31, 
    position: '내야수 좌타우투',
    image: 'player8.png'
  },
  { 
    id: 9, 
    name: '문현빈', 
    number: 24, 
    position: '외야수 좌타좌투',
    image: 'player9.png'
  },
  { 
    id: 10, 
    name: '안치홍', 
    number: 6, 
    position: '내야수 우타우투',
    image: 'player10.png'
  }
];

export default function PlayersCarousel() {
  const [currentPlayer, setCurrentPlayer] = useState(0);
  const [nextPlayer, setNextPlayer] = useState(1);

  const goToPrevious = () => {
    setCurrentPlayer((prev) => {
      const newCurrent = prev === 0 ? players.length - 1 : prev - 1;
      setNextPlayer(newCurrent === players.length - 1 ? 0 : newCurrent + 1);
      return newCurrent;
    });
  };

  const goToNext = () => {
    setCurrentPlayer((prev) => {
      const newCurrent = prev === players.length - 1 ? 0 : prev + 1;
      setNextPlayer(newCurrent === players.length - 1 ? 0 : newCurrent + 1);
      return newCurrent;
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundColor: '#222222'}}>
      <div className="max-w-7xl mx-auto px-4 py-16 pt-36">
        <div className="relative flex items-center justify-center">
          
          {/* 이전 버튼 */}
          <button 
            onClick={goToPrevious}
            className="absolute left-[-130px] z-20 text-white hover:text-orange-500 transition-colors text-6xl font-light"
          >
            ←
          </button>

          {/* 메인 선수 영역 */}
          <div className="relative flex items-center justify-center">
            
            {/* 배경 넘버 */}
            <div className="absolute left-[-250px] top-[-130px] z-0 transition-all duration-500 ease-in-out">
              <span className="tracking-tighter text-[500px] font-bold leading-none" style={{color: '#070707'}}>
                {players[currentPlayer].number}
              </span>
            </div>

            {/* 메인 선수 이미지 */}
            <div className="relative z-10 transition-all duration-500 ease-in-out">
              <img 
                src={`/img/${players[currentPlayer].image}`} 
                alt={players[currentPlayer].name}
                className="w-[500px] h-[700px] object-contain transition-opacity duration-500 ease-in-out"
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
            <div className="absolute right-[-150px] top-24 text-white text-right transition-all duration-500 ease-in-out">
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
            <div className="absolute right-[-550px] top-20 z-5 transition-all duration-500 ease-in-out">
              <div className="w-96 h-[380px] overflow-hidden opacity-70">
                <img 
                  src={`/img/${players[nextPlayer].image}`} 
                  alt={players[nextPlayer].name}
                  className="w-full h-full object-contain transition-opacity duration-500 ease-in-out"
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
            className="absolute right-[-130px] z-20 text-white hover:text-orange-500 transition-colors text-6xl font-light"
          >
            →
          </button>

        </div>

        {/* 버튼 */}
        <div className="flex justify-center mt-16">
          <button className="border-2 border-white px-8 py-4 text-white font-medium hover:bg-[#DF6D21] hover:border-[#DF6D21] transition-all duration-300 tracking-wider">
            VIEW ALL PLAYER
          </button>
        </div>
      </div>
    </section>
  );
}