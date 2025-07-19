export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundColor: '#222222', marginTop: '100vh'}}>
      {/* 배경 단체선수 이미지 */}
      <div className="absolute left-0 right-0 flex items-center justify-center top-[20%]">
        <img 
          src="/img/playersteam1.png" 
          alt="Hanwha Eagles Team" 
          className="object-contain"
          style={{width: '743px', height: '759px'}}
          onError={(e) => {
            console.log('이미지 로딩 실패:', e.target.src);
            e.target.style.display = 'none';
          }}
          onLoad={() => console.log('이미지 로딩 성공')}
        />

      </div>

      {/* 메인 콘텐츠 */}
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 mt-[49%]">
        {/* 상단 텍스트 - 오른쪽 정렬 */}
        <div className="flex justify-end">
          <p className="text-white text-lg leading-snug text-right ">
            독수리는 추진력을 얻어<br />
            더욱 더 높이 비상한다
          </p>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-[170px] font-black text-white tracking-wider font-alumni leading-none">
          RIDE THE STORM
        </h1>

        {/* 버튼 */}
        <div className="flex justify-center">
          <button className="border-2 border-white px-8 py-4 text-white font-medium hover:bg-[#DF6D21] hover:border-[#DF6D21] transition-all duration-300 tracking-wider">
            VIEW ALL ABOUT
          </button>
        </div>
      </div>
    </section>
  );
}