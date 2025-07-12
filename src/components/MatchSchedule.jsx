const gameSchedule = [
    { loca: '대전(신)', date: '2025. 04. 29. TUE', time: '18:30' , team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기' },
    { loca: '대전(신)', date: '2025. 04. 30. WED', time: '18:30' , team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기' },
    { loca: '대전(신)', date: '2025. 05. 01. THU', time: '18:30' , team: 'T', opponent: 'vs NC 다이노스', link: '예매 바로가기' },
    { loca: '대전(신)', date: '2025. 05. 05. MON', time: '14:00' , team: 'SL', opponent: 'vs 기아 타이거즈', link: '예매 바로가기' }
  ];

export default function MatchSchedule() {
  return (
    <section className="bg-gray-900 text-white py-6 px-4 text-center">
      {/* <h3 className="text-lg font-semibold mb-2">경기 티켓</h3> */}
      <div className="flex justify-center space-x-4">
        <div>VS LG</div>
        <div>VS KT</div>
        <div>VS KIA</div>
      </div>
    </section>
  );
}