import { useState, useEffect, useRef } from 'react';

export default function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      
      if (heroRef.current) {
        const heroRect = heroRef.current.getBoundingClientRect();
        const heroTop = heroRect.top + window.scrollY;
        const heroHeight = heroRect.height;
        const currentScroll = window.scrollY;
        
        // Hero 섹션이 뷰포트에 들어오기 시작할 때 애니메이션 시작
        if (currentScroll >= heroTop - window.innerHeight * 0.8 && 
            currentScroll <= heroTop + heroHeight) {
          setIsVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const text = "RIDE THE STORM";
  const letters = text.split('').map((char, index) => ({
    char: char,
    index: index,
    isSpace: char === ' '
  }));

  return (
    <section
      ref={heroRef}
      className="relative mb-[25vh] md:min-h-screen flex flex-col lg:flex-row items-center justify-center overflow-hidden"
      style={{marginTop: '110vh' }}
    >
      {/* 데스크탑 배경 이미지 */}
      <div className="absolute left-0 right-0 flex items-center justify-center bottom-[18vh] z-40">
        <img
          src="/img/playersteam1.png"
          alt="Hanwha Eagles Team"
          className="object-contain"
          style={{ width: '743px', height: '759px' }}
          onError={(e) => {
            console.log('이미지 로딩 실패:', e.target.src);
            e.target.style.display = 'none';
          }}
          onLoad={() => console.log('이미지 로딩 성공')}
        />
      </div>

       {/* 모바일 - 이미지 위 텍스트 */}
       <div className="md:hidden w-full z-30 text-center text-white px-4">
        <p className="text-3xl lg:text-5xl leading-relaxed">
          독수리는 추진력을 얻어<br />
          더욱 더 높이 비상한다
        </p>
      </div>

      {/* 모바일 배경 이미지 */}
      <div className="md:hidden absolute left-0 right-0 flex items-center justify-center bottom-[25vh] z-40">
        <img
          src="/img/playersteam1.png"
          alt="Hanwha Eagles Team"
          className="object-contain"
          style={{ width: '743px', height: '759px' }}
          onError={(e) => {
            console.log('모바일 이미지 로딩 실패:', e.target.src);
            e.target.style.display = 'none';
          }}
          onLoad={() => console.log('모바일 이미지 로딩 성공')}
        />
      </div>

     

      {/* 데스크탑 */}
      <div className="hidden md:block relative z-40 text-center text-white mx-auto px-4 mt-[27%]">
        {/* 상단 텍스트 - 오른쪽 정렬 */}
        <div className="flex justify-end">
          <p className="text-white text-3xl leading-snug text-right">
            독수리는 추진력을 얻어<br />
            더욱 더 높이 비상한다
          </p>
        </div>

        {/* 메인 타이틀 - 스크롤 애니메이션 */}
        <h1 className="hidden lg:block text-[230px] font-black text-white font-alumni leading-[0.8] overflow-hidden">
          {letters.map((letter, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-700 ease-out ${
                letter.isSpace ? 'w-[0.3em]' : ''
              } ${
                isVisible 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-full opacity-0'
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 100}ms` : '0ms'
              }}
            >
              {letter.isSpace ? '\u00A0' : letter.char}
            </span>
          ))}
        </h1>

        {/* 버튼 */}
        <div className="flex justify-center mt-3">
          <button className="relative group cursor-pointer transition-all duration-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="326"
              height="96"
              viewBox="0 0 326 96"
              fill="none"
            >
              <path
                d="M1 95V1H325V63.3654L298 95H1Z"
                stroke="white"
                strokeWidth="2"
                fill="transparent"
                className="group-hover:stroke-[#DF6D21] group-hover:fill-[#DF6D21] transition-all duration-300"
              />
            </svg>
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-2xl font-bold tracking-wider whitespace-nowrap">
              VIEW ALL ABOUT
            </span>
          </button>
        </div>
      </div>

      {/* 모바일용 */}
      <div className="md:hidden bottom-[13vh] p-4 text-center text-white z-40">

        {/* 메인 타이틀 - 모바일 스크롤 애니메이션 */}
        <h1 className="text-9xl lg:text-[180px] font-black mb-6 font-alumni leading-[0.8] overflow-hidden">
          RIDE THE STORM
        </h1>

        {/* 버튼 */}
        <button className="relative group cursor-pointer transition-all duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="59"
            viewBox="0 0 326 96"
            fill="none"
          >
            <path
              d="M1 95V1H325V63.3654L298 95H1Z"
              stroke="white"
              strokeWidth="2"
              fill="transparent"
              className="group-hover:stroke-[#DF6D21] group-hover:fill-[#DF6D21] transition-all duration-300"
            />
          </svg>
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[14px] font-bold tracking-wider whitespace-nowrap">
            VIEW ALL ABOUT
          </span>
        </button>
      </div>
    </section>
  );
}