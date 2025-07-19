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