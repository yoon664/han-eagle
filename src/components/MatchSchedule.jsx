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
    date: '2025. 08. 05. WED', 
    time: '18:30', 
    team: 'T', 
    opponent: 'vs NC 다이노스', 
    link: '예매 바로가기',
    teamLogo: 'lglogo.png'
  },
  { 
    location: '대전(신)', 
    date: '2025. 08. 15. THU', 
    time: '18:30', 
    team: 'T', 
    opponent: 'vs NC 다이노스', 
    link: '예매 바로가기',
    teamLogo: 'lglogo.png'
  },
  { 
    location: '대전(신)', 
    date: '2025. 08. 30. MON', 
    time: '14:00', 
    team: 'SL', 
    opponent: 'vs 기아 타이거즈', 
    link: '예매 바로가기',
    teamLogo: 'samsung.png'
  }
];


const getTodayFormatted = () => {
  const today = new Date();
  const year = today.getFullYear();
  const month = `${today.getMonth() + 1}`.padStart(2, '0');
  const day = `${today.getDate()}`.padStart(2, '0');
  const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][today.getDay()];
  return `${year}. ${month}. ${day}. ${weekday}`;
};

export default function MatchSchedule() {
  return (
    <>
      {/* 데스크탑 4장 */}
      <section className="hidden md:block absolute top-[73vh] left-0 right-0 z-40 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-4">
            {gameSchedule.map((game, index) => (
              <div key={index} className="relative">
                <div 
                  className="w-[295px] h-[122px] relative overflow-hidden"
                  style={{
                    backgroundImage: `url('/img/${index === 0 ? 'ticketbgw1.png' : 'ticketbg.png'}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  <div className="absolute inset-0 flex">
                    <div className="flex-1 p-3 ml-2 text-left">
                      <div className={`${index === 0 ? 'text-black' : 'text-gray-400'} font-medium mb-1`}>{game.location}</div>

                      {/* 당일날짜 */}
                      <div className={`${index === 0 ? 'text-black' : 'text-gray-500'} text-sm font-bold mb-1`}>
                        {index === 0 ? getTodayFormatted() : game.date}
                      </div>

                      <div className={`${index === 0 ? 'text-black' : 'text-gray-500'} text-sm font-bold mb-2`}>{game.time}</div>
                      <div className="text-orange-600 text-base font-medium cursor-pointer hover:text-orange-700 transition-colors flex items-center space-x-1">
                        <span>{game.link}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                          <path d="M0.517945 8.013L18.379 8M11.5745 15L18.5908 8L11.5745 1" stroke="#DF6D21" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
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

      {/* 모바일용 1장만 (항상 첫 번째 경기) */}
      <section className="md:hidden absolute top-[74vh] left-0 right-0 z-40 px-4">
        <div className="flex justify-center">
          <div className="relative">
            <div 
              className="w-[296px] h-[122px] relative overflow-hidden"
              style={{
                backgroundImage: `url('/img/ticketbgw1.png')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
            >
              <div className="absolute inset-0 flex">
                <div className="flex-1 p-2 ml-3 text-left">
                  <div className="text-black text font-medium mb-1">{gameSchedule[0].location}</div>

                  {/* 오늘날짜표시 */}
                  <div className="text-black text font-bold mb-1">{getTodayFormatted()}</div>

                  <div className="text-black text mb-2">{gameSchedule[0].time}</div>
                  <div className="text-orange-600 text font-medium cursor-pointer hover:text-orange-700 transition-colors flex items-center space-x-1">
                    <span>{gameSchedule[0].link}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path d="M0.517945 8.013L18.379 8M11.5745 15L18.5908 8L11.5745 1" stroke="#DF6D21" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                </div>
                <div className="w-24 flex items-center justify-center p-2">
                  <img 
                    src={`/img/${gameSchedule[0].teamLogo}`} 
                    alt="Team Logo" 
                    className="w-12 h-12 object-contain"
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