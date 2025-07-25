import ScrollTitle from '../components/Bigtitle';

export default function NewsSection() {
  const news = [
    { id: 1, title: '한화이글스, 창단 40주년 기념 레거시 유니폼 화보 공개', date: '2025.04.06' },
    { id: 2, title: '한화이글스, 에스앤케이병원과 후원 협약', date: '2025.04.04' },
    { id: 3, title: '한화이글스, 정한방병원과 후원 협약', date: '2025.04.03' },
    { id: 4, title: '개인정보처리방침 변경 고지', date: '2025.03.28' },
    { id: 5, title: '대전 한화생명 볼파크, 시즌 개막 준비 완료', date: '2025.03.27' },
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16" style={{backgroundColor: '#222222'}}>
      <div className="max-w-4xl mx-auto px-4 w-full">
        
        {/* NEWS 타이틀 */}
        <div className="text-center mb-16">
          <h2 className="text-[300px] font-bold text-white tracking-wider leading-none">NEWS</h2>
        </div>

        {/* <ScrollTitle text="NEWS" /> */}

        {/* 뉴스 리스트 */}
        <div>
          {/* 상단 구분선 */}
          <hr className="border-gray-600 border-t mb-0" />
          
          {news.map((item, index) => (
            <div key={item.id}>
              <div className="flex items-center justify-between py-8 cursor-pointer group hover:bg-gray-800 hover:bg-opacity-30 transition-all duration-300 px-6">
                {/* 왼쪽: 날짜 */}
                <div className="text-gray-400 text-lg font-medium min-w-[120px]">
                  {item.date}
                </div>
                
                {/* 가운데: 제목 */}
                <div className="flex-1 mx-8">
                  <h3 className="text-white text-xl font-medium group-hover:text-orange-500 transition-colors duration-300">
                    {item.title}
                  </h3>
                </div>
                
                {/* 오른쪽: 화살표 */}
                <div className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300 text-2xl font-light">
                  →
                </div>
              </div>
              
              {/* 구분선 */}
              <hr className="border-gray-600 border-t" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}