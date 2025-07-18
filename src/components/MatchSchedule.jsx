const gameSchedule = [
  { 
    location: '대전(신)', 
    date: '2025. 04. 29. TUE', 
    time: '18:30', 
    team: 'T', 
    opponent: 'vs NC 다이노스', 
    link: '결과 보러가기',
    teamLogo: 'samsung.png'
  },
  { 
    location: '대전(신)', 
    date: '2025. 04. 30. WED', 
    time: '18:30', 
    team: 'T', 
    opponent: 'vs NC 다이노스', 
    link: '예매 바로가기',
    teamLogo: 'samsung.png'
  },
  { 
    location: '대전(신)', 
    date: '2025. 05. 01. THU', 
    time: '18:30', 
    team: 'T', 
    opponent: 'vs NC 다이노스', 
    link: '예매 바로가기',
    teamLogo: 'samsung.png'
  },
  { 
    location: '대전(신)', 
    date: '2025. 05. 05. MON', 
    time: '14:00', 
    team: 'SL', 
    opponent: 'vs 기아 타이거즈', 
    link: '예매 바로가기',
    teamLogo: 'samsung.png'
  }
];

export default function MatchSchedule() {
  return (
    <section className="absolute top-[715px] left-0 right-0 z-40 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-center space-x-4">
          {gameSchedule.map((game, index) => (
            <div key={index} className="relative">
              {/* 티켓 배경 */}
              <div 
                className="w-[295px] h-[122px] relative overflow-hidden"
                style={{
                  backgroundImage: `url('/img/ticketbg.png')`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  backgroundRepeat: 'no-repeat'
                }}
              >
              {/* <div className="w-64 h-32 bg-white rounded-lg shadow-lg border-2 border-dashed border-gray-300 relative overflow-hidden"> */}
                {/* 티켓 내용 */}
                <div className="absolute inset-0 flex">
                  {/* 왼쪽 경기 정보 */}
                  <div className="flex-1 p-4 text-left">
                    <div className="text-gray-600 text-xs font-medium mb-1">
                      {game.location}
                    </div>
                    <div className="text-gray-800 text-sm font-bold mb-1">
                      {game.date}
                    </div>
                    <div className="text-gray-600 text-xs mb-2">
                      {game.time}
                    </div>
                    <div className="text-orange-600 text-xs font-medium cursor-pointer hover:text-orange-700 transition-colors">
                      {game.link} →
                    </div>
                  </div>

                  {/* 가운데 점선 */}
                  <div className="w-px border-l-2 border-dashed border-gray-400 my-2"></div>

                  {/* 오른쪽 팀 로고 */}
                  <div className="w-20 flex items-center justify-center p-2 ">
                    <img 
                      src={`/img/${game.teamLogo}`} 
                      alt="Team Logo" 
                      className="w-12 h-12 object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'block';
                      }}
                    />
                    <div className="hidden w-12 h-12 bg-gray-300 rounded flex items-center justify-center text-xs text-gray-600">
                      LOGO
                    </div>
                  </div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}