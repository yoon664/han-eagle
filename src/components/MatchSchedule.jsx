const gameSchedule = [
  { 
    location: '대전(신)', 
    date: '2025. 04. 29. TUE', 
    time: '18:30', 
    team: 'T', 
    opponent: 'vs NC 다이노스', 
    link: '결과 보러가기',
    teamLogo: 'lglogo.png'
  },
  { 
    location: '대전(신)', 
    date: '2025. 04. 30. WED', 
    time: '18:30', 
    team: 'T', 
    opponent: 'vs NC 다이노스', 
    link: '예매 바로가기',
    teamLogo: 'lglogo.png'
  },
  { 
    location: '대전(신)', 
    date: '2025. 05. 01. THU', 
    time: '18:30', 
    team: 'T', 
    opponent: 'vs NC 다이노스', 
    link: '예매 바로가기',
    teamLogo: 'lglogo.png'
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
    <>
      {/* 데스크탑4장 */}
      <section className="hidden md:block absolute top-[715px] left-0 right-0 z-40 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-4">
            {gameSchedule.map((game, index) => (
              <div key={index} className="relative">
                <div 
                  className="w-[295px] h-[122px] relative overflow-hidden"
                  style={{
                    backgroundImage: `url('/img/ticketbg.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 p-4 text-left">
                      <div className="text-gray-400 text-xs font-medium mb-1">{game.location}</div>
                      <div className="text-gray-500 text-sm font-bold mb-1">{game.date}</div>
                      <div className="text-gray-500 text-xs mb-2">{game.time}</div>
                      <div className="text-orange-600 text-xs font-medium cursor-pointer hover:text-orange-700 transition-colors">
                        {game.link} →
                      </div>
                    </div>
                    <div className="w-24 flex items-center justify-center p-2">
                      <img 
                        src={`/img/${game.teamLogo}`} 
                        alt="Team Logo" 
                        className="w-12 h-12 object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 모바일용 1장만 나오게 */}
      <section className="md:hidden absolute top-[74vh] left-0 right-0 z-40 px-4">
        <div className="flex justify-center">
          <div className="relative">
            <div 
              className="w-[280px] h-[116px] relative overflow-hidden"
              style={{
                backgroundImage: `url('/img/ticketbg.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 flex">
                <div className="flex-1 p-4 text-left">
                  <div className="text-gray-400 text-xs font-medium mb-1">{gameSchedule[0].location}</div>
                  <div className="text-gray-500 text-sm font-bold mb-1">{gameSchedule[0].date}</div>
                  <div className="text-gray-500 text-xs mb-2">{gameSchedule[0].time}</div>
                  <div className="text-orange-600 text-xs font-medium cursor-pointer hover:text-orange-700 transition-colors">
                    {gameSchedule[0].link} →
                  </div>
                </div>
                <div className="w-20 flex items-center justify-center p-2">
                  <img 
                    src={`/img/${gameSchedule[0].teamLogo}`} 
                    alt="Team Logo" 
                    className="w-10 h-10 object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
