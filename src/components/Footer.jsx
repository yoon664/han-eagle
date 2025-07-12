
export default function Footer() {
  return (
    <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-start">
            {/* Left Side - Main Content */}
            <div className="flex-1">
              <div className="text-center">
                <div className="text-white text-4xl font-bold mb-4">HANWHA EAGLES</div>
                <div className="text-gray-400 text-sm mb-8">
                  대전광역시 중구 대종로 373 한화이글스 | 대표이사 박종태<br/>TEL 042-630-8200 | FAX 042-632-2929
                </div>
                <div className="flex justify-center space-x-8 text-gray-400 text-sm">
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">법적고지</span>
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">개인정보 처리방침</span>
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">이용약관</span>
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">고객문의</span>
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">사이트맵</span>
                  <span className="hover:text-orange-500 transition-colors cursor-pointer">광고문의</span>
                </div>
              </div>
            </div>
            
            {/* Right Side - Scroll to Top Button */}
            <div className="ml-8">
              <button 
                className="bg-orange-500 text-white px-6 py-3 rounded hover:bg-orange-600 transition-colors flex items-center justify-center"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7 14l5-5 5 5z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
    </footer>
  );
}

