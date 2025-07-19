export default function Footer() {
  return (
    <footer className="bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-start">
          
          {/* 왼쪽 메인 콘텐츠 */}
          <div className="flex-1">
            
            {/* 한화이글스 타이틀 */}
            <div className="mb-8">
              <h2 className="text-white text-6xl font-bold mb-6 font-alumni">HANWHA EAGLES</h2>
              
              {/* 주소 및 연락처 정보 */}
              <div className="text-gray-400 text-base leading-relaxed mb-8">
                <p>대전광역시 중구 대종로 373 한화이글스 | 대표이사 박종태</p>
                <p>TEL 042-630-8200 | FAX 042-632-2929</p>
              </div>
            </div>

            {/* 하단 링크들 */}
            <div className="flex space-x-8 text-gray-400 text-sm">
              <span className="hover:text-orange-500 transition-colors cursor-pointer">법적고지</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer font-medium text-orange-500">개인정보 처리방침</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer">이용약관</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer">고객문의</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer">사이트맵</span>
              <span className="hover:text-orange-500 transition-colors cursor-pointer">광고문의</span>
            </div>
          </div>
          
          {/* 오른쪽 스크롤 투 탑 버튼 */}

          <svg xmlns="http://www.w3.org/2000/svg" width="85" height="89" viewBox="0 0 85 89" fill="none">
<path d="M0 89V0H85V75.5754L71.0819 89H0Z" fill="#DF6D21"/>
</svg>

<svg xmlns="http://www.w3.org/2000/svg" width="16" height="43" viewBox="0 0 16 43" fill="none">
<path d="M8.7071 0.292892C8.31658 -0.0976296 7.68342 -0.0976295 7.29289 0.292892L0.928931 6.65685C0.538406 7.04738 0.538406 7.68054 0.928931 8.07107C1.31946 8.46159 1.95262 8.46159 2.34314 8.07107L8 2.41422L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.7071 0.292892ZM8 43L9 43L9 1L8 1L7 1L7 43L8 43Z" fill="white"/>
</svg>


          <div className="ml-8">
            <button 
              className="bg-orange-500 text-white w-16 h-16 rounded hover:bg-orange-600 transition-colors flex items-center justify-center"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="맨 위로 스크롤"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 14l5-5 5 5z"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}