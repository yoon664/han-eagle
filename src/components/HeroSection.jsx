export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{backgroundColor: '#222222', marginTop: '100vh'}}>
      {/* 배경 단체선수 이미지 */}
      <div className="absolute left-0 right-0 flex items-center justify-center top-[0%]">
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
      <div className="relative z-10 text-center text-white max-w-6xl mx-auto px-4 mt-[27%]">
        {/* 상단 텍스트 - 오른쪽 정렬 */}
        <div className="flex justify-end">
          <p className="text-white text-3xl leading-snug text-right ">
            독수리는 추진력을 얻어<br />
            더욱 더 높이 비상한다
          </p>
        </div>

        {/* 메인 타이틀 */}
        <h1 className="text-[230px] font-black text-white font-alumni leading-[0.8]">
          RIDE THE STORM
        </h1>

        {/* 버튼 */}
        {/* <svg xmlns="http://www.w3.org/2000/svg" width="326" height="96" viewBox="0 0 326 96" fill="none">
        <path d="M1 95V1H325V63.3654L298 95H1Z" stroke="white"/>
        </svg> */}

        <div className="flex justify-center mt-3">
          <button className="relative group cursor-pointer transition-all duration-300 ">
            <svg xmlns="http://www.w3.org/2000/svg" width="326" height="96" viewBox="0 0 326 96" fill="none">
              <path d="M1 95V1H325V63.3654L298 95H1Z" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="transparent" 
                    className="group-hover:stroke-[#DF6D21] group-hover:fill-[#DF6D21] transition-all duration-300"/>
            </svg>
            
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
            text-white text-2xl font-bold tracking-wider whitespace-nowrap">
              VIEW ALL ABOUT
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}