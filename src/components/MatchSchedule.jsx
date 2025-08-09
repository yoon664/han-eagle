import React from 'react';

const getFormattedDateAfter = (offset = 0) => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + offset);

  const year = targetDate.getFullYear();
  const month = `${targetDate.getMonth() + 1}`.padStart(2, '0');
  const day = `${targetDate.getDate()}`.padStart(2, '0');
  const weekday = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'][targetDate.getDay()];

  return `${year}. ${month}. ${day}. ${weekday}`;
};

const offsets = [0, 2, 4, 6];

// 경기 스케줄
const baseGameSchedule = [
  { location: '대전(신)', time: '18:30', team: 'T', opponent: 'vs NC 다이노스', link: '결과 보러가기', teamLogo: 'lglogo.png' },
  { location: '대전(신)', time: '18:30', team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기', teamLogo: 'lglogo.png' },
  { location: '대전(신)', time: '18:30', team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기', teamLogo: 'lglogo.png' },
  { location: '대전(신)', time: '14:00', team: 'SL', opponent: 'vs 기아 타이거즈', link: '예매 바로가기', teamLogo: 'samsung.png' }
];

const gameSchedule = baseGameSchedule.map((game, index) => ({
  ...game,
  date: getFormattedDateAfter(offsets[index])
}));

export default function MatchSchedule() {
  return (
    <>
      {/* 데스크탑 4장 */}
      <section className="hidden md:block absolute top-[73vh] left-0 right-0 z-40 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center space-x-4">
            {gameSchedule.map((game, index) => (
              <div key={index} className="relative">
                <div className="w-[295px] h-[122px] relative overflow-hidden">
                  <img
                    src={`/img/${index === 0 ? 'ticketbgw1.png' : 'ticketbg.png'}`}
                    alt="Ticket Background"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  
                  <div className="absolute inset-0 flex">
                    <div className={`flex-1 p-3 ml-2 text-left ${index === 0 ? 'text-black' : 'text-gray-400'}`}>
                      <div className="font-medium mb-1">{game.location}</div>
                      <div className={`${index === 0 ? 'text-black' : 'text-gray-500'} text-sm font-bold mb-1`}>
                        {game.date}
                      </div>
                      <div className={`${index === 0 ? 'text-black' : 'text-gray-500'} text-sm font-bold mb-2`}>{game.time}</div>
                      <div className="text-orange-600 text-base font-medium cursor-pointer hover:text-orange-700 transition-colors flex items-center space-x-1">
                        <span>{game.link}</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                          <path d="M0.517945 8.013L18.379 8M11.5745 15L18.5908 8L11.5745 1" stroke="#DF6D21" strokeLinecap="round" strokeLinejoin="round" />
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

      {/* 모바일용 1장만 (반응형으로 수정) */}
      <section className="md:hidden absolute top-[70vh] left-0 right-0 z-40 px-4">
        <div className="flex justify-center">
          <div className="relative w-full max-w-[414px]">
            <div className="w-full aspect-[414/170] relative overflow-hidden">
              <img
                src="/img/ticketbgw1.png"
                alt="Ticket Background"
                className="absolute inset-0 w-full h-full object-cover"
              />
              
              <div className="absolute inset-0 flex p-3">
                <div className="flex-1 ml-3 text-left text-black">
                  <div className="font-bold mb-1 text-lg sm:text-xl">{gameSchedule[0].location}</div>
                  <div className="font-medium mb-1 text-lg sm:text-xl">{gameSchedule[0].date}</div>
                  <div className="mb-2 text-lg sm:text-xl">{gameSchedule[0].time}</div>
                  <div className="text-orange-600 font-bold text-lg sm:text-xl cursor-pointer hover:text-orange-700 transition-colors flex items-center space-x-1">
                    <span>{gameSchedule[0].link}</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                      <path d="M0.517945 8.013L18.379 8M11.5745 15L18.5908 8L11.5745 1" stroke="#DF6D21" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                </div>
                <div className="w-24 sm:w-36 flex items-center justify-center">
                  <img
                    src={`/img/${gameSchedule[0].teamLogo}`}
                    alt="Team Logo"
                    className="w-16 h-16 sm:w-[105px] sm:h-[105px] object-contain"
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
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