import BigTitle from './Bigtitle';

export default function NewsSection() {
  const news = [
    { id: 1, title: '한화이글스, 창단 40주년 기념 레거시 유니폼 화보 공개', date: '2025.04.06' },
    { id: 2, title: '한화이글스, 에스앤케이병원과 후원 협약', date: '2025.04.04' },
    { id: 3, title: '한화이글스, 정한방병원과 후원 협약', date: '2025.04.03' },
    { id: 4, title: '개인정보처리방침 변경 고지', date: '2025.03.28' },
    { id: 5, title: '대전 한화생명 볼파크, 시즌 개막 준비 완료', date: '2025.03.27' },
  ];

  return (
    <>
      {/* 스크롤 애니메이션 제목 */}
      <BigTitle 
        initialSize={1000} 
        finalSize={300}
        containerHeight="150vh"
      >
        NEWS
      </BigTitle>

      {/* 뉴스 콘텐츠 섹션 */}
      <section className="relative min-h-screen flex flex-col items-center justify-center py-16">
        <div className="w-full px-4">
          
          {/* 뉴스 리스트 - 반응형 컨테이너 */}
          <div className="max-w-lg md:max-w-4xl mx-auto">
            {/* 상단 구분선 */}
            <hr className="border-gray-600 border-t mb-0" />
            
            {news.map((item, index) => (
              <div key={item.id}>
                {/* 데스크탑 */}
                <div className="hidden md:flex items-center justify-between py-8 cursor-pointer group 
                hover:bg-black hover:bg-opacity-20 transition-all duration-300 px-6">
                  
                  {/* 왼쪽: 날짜 */}
                  <div className="text-gray-400 text-lg font-medium min-w-[120px]">
                    {item.date}
                  </div>
                  
                  {/* 가운데: 제목 */}
                  <div className="flex-1 mx-8">
                    <h3 className="text-white text-xl font-medium group-hover:text-orange-500 transition-colors duration-300 leading-relaxed">
                      {item.title}
                    </h3>
                  </div>
                  
                  {/* 오른쪽: 화살표 SVG */}
                  <div className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" width="43" height="16" viewBox="0 0 43 16" fill="none">
                      <path d="M42.7071 8.70711C43.0976 8.31658 43.0976 7.68342 42.7071 7.29289L36.3431 0.928932C35.9526 0.538408 35.3195 0.538408 34.9289 0.928932C34.5384 1.31946 34.5384 1.95262 34.9289 2.34315L40.5858 8L34.9289 13.6569C34.5384 14.0474 34.5384 14.6805 34.9289 15.0711C35.3195 15.4616 35.9526 15.4616 36.3431 15.0711L42.7071 8.70711ZM0 8L0 9H42V8V7H0L0 8Z" fill="currentColor"/>
                    </svg>
                  </div>
                </div>

                {/* 모바일 뉴스  */}
                <div className="md:hidden py-6 cursor-pointer group 
                hover:bg-black hover:bg-opacity-20 transition-all duration-300 px-4">
                  
                  {/* 제목 */}
                  <div className="flex items-start justify-between -mb-1">
                    <div className="flex-1 pr-4 max-w-[calc(100%-60px)]">
                      <h3 className="text-white text-xl font-medium group-hover:text-orange-500 transition-colors duration-300 leading-relaxed truncate">
                        {item.title}
                      </h3>
                    </div>
                    
                    {/* 화살표 */}
                    <div className="text-gray-400 group-hover:text-orange-500 transition-colors duration-300 mt-6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="12" viewBox="0 0 43 16" fill="none">
                        <path d="M42.7071 8.70711C43.0976 8.31658 43.0976 7.68342 42.7071 7.29289L36.3431 0.928932C35.9526 0.538408 35.3195 0.538408 34.9289 0.928932C34.5384 1.31946 34.5384 1.95262 34.9289 2.34315L40.5858 8L34.9289 13.6569C34.5384 14.0474 34.5384 14.6805 34.9289 15.0711C35.3195 15.4616 35.9526 15.4616 36.3431 15.0711L42.7071 8.70711ZM0 8L0 9H42V8V7H0L0 8Z" fill="currentColor"/>
                      </svg>
                    </div>
                  </div>
                  
                  {/* 아래: 날짜 */}
                  <div className="text-gray-400 text-lg font-medium">
                    {item.date}
                  </div>
                </div>
                
                {/* 구분선 */}
                <hr className="border-gray-600 border-t" />
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}