import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const timelineData = [
  {
    id: 1,
    years: "1985~1987",
    startYear: "1985",
    endYear: "1987",
    title: "프로야구 출범",
    subtitle: "한국 프로야구 원년, 빙그레 이글스로 창단하며 프로야구 역사의 첫 장을 열다",
    logo: "/img/history1.png",
    color: "#FF6B35",
    content: [
      {
        year: "1985년 3월 27일",
        text: "한국 프로야구 원년, 빙그레 이글스로 창단",
        image: "/img/history1_1.jpg"
      },
      {
        year: "1986년 4월 11일", 
        text: "대전을 연고지로 하는 첫 홈경기 개최",
        image: "/img/history1_2.jpg"
      },
      {
        year: "1987년 10월",
        text: "첫 정규시즌 마무리, 6개 구단 중 5위 기록",
        image: "/img/history1_3.jpg"
      }
    ]
  },
  {
    id: 2,
    years: "1991~1999", 
    startYear: "1991",
    endYear: "1999",
    title: "통합의 신화",
    subtitle: "한화그룹 인수 후 황금기 시작, 1993년 창단 첫 포스트시즌 진출의 감동",
    logo: "/img/history2.png",
    color: "#4ECDC4",
    content: [
      {
        year: "1993년",
        text: "창단 첫 포스트시즌 진출, 정규시즌 2위 달성",
        image: "/img/history2_1.jpg"
      },
      {
        year: "1995년",
        text: "한국시리즈 진출, 팬들에게 잊지 못할 감동 선사",
        image: "/img/history2_2.jpg"
      },
      {
        year: "1999년",
        text: "새로운 천년을 앞두고 팀 경쟁력 강화에 집중",
        image: "/img/history2_3.jpg"
      }
    ]
  },
  {
    id: 3,
    years: "2001~2009",
    startYear: "2001", 
    endYear: "2009",
    title: "도약의 시기",
    subtitle: "새 천년과 함께 시작된 재건, 젊은 선수들의 성장과 미래 준비",
    logo: "/img/history3.png",
    color: "#45B7D1",
    content: [
      {
        year: "2001년",
        text: "새로운 천년의 시작, 팀 재건 프로젝트 본격 가동",
        image: "/img/history3_1.jpg"
      },
      {
        year: "2005년",
        text: "젊은 선수 육성 시스템 구축, 미래 투자 확대",
        image: "/img/history3_2.jpg"
      }
    ]
  },
  {
    id: 4,
    years: "2011~",
    startYear: "2011",
    endYear: "현재",
    title: "새로운 도전",
    subtitle: "끊임없는 도전과 혁신으로 더 나은 미래를 향해 나아가는 한화이글스",
    logo: "/img/history4.png", 
    color: "#DF6D21",
    content: [
      {
        year: "2016년",
        text: "창단 31년 만에 포스트시즌 진출, 팬들에게 기쁨 선사",
        image: "/img/history4_1.jpg"
      },
      {
        year: "2019년",
        text: "대전 한화생명 이글스파크 개장, 새로운 홈구장에서의 출발",
        image: "/img/history4_2.jpg"
      },
      {
        year: "2025년",
        text: "창단 40주년, 새로운 도약을 위한 끊임없는 도전",
        image: "/img/history4_3.jpg"
      }
    ]
  }
];

export default function Ayears() {
  const containerRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState(new Set());

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-timeline-section]');
      const newVisibleSections = new Set();

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        
        if (rect.top < windowHeight * 0.8) {
          newVisibleSections.add(index);
        }
      });

      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#222222] min-h-screen pt-[80vh]">
      <div className="max-w-7xl mx-auto px-4 relative">
        
        {/* 메인 타임라인 선 */}
        <div className="absolute left-48 top-0 bottom-0 w-1 bg-gray-600 hidden md:block">
          <motion.div
            className="w-full bg-[#DF6D21] origin-top"
            style={{
              scaleY: lineProgress,
              transformOrigin: "top"
            }}
          />
        </div>

        {/* 모바일 타임라인 선 */}
        <div className="absolute left-8 top-0 bottom-0 w-1 bg-gray-600 md:hidden">
          <motion.div
            className="w-full bg-[#DF6D21] origin-top"
            style={{
              scaleY: lineProgress,
              transformOrigin: "top"
            }}
          />
        </div>

        {/* 타임라인 아이템들 */}
        {timelineData.map((period, index) => (
          <motion.div
            key={period.id}
            data-timeline-section
            className="relative mb-24 md:mb-32"
            initial={{ opacity: 0, y: 50 }}
            animate={visibleSections.has(index) ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            
            {/* 데스크톱 레이아웃 */}
            <div className="hidden md:flex items-start">
              
              {/* 왼쪽 연도 섹션 */}
              <div className="w-40 flex-shrink-0 text-center">
                <div className="text-right pr-8">
                  <div className="text-4xl font-light text-gray-400 mb-1">
                    {period.startYear}
                  </div>
                  <div className="text-xl text-gray-500 mb-1">~</div>
                  <div className="text-4xl font-light text-gray-400">
                    {period.endYear}
                  </div>
                  <div 
                    className="text-sm font-bold mt-4 tracking-wider"
                    style={{ color: period.color }}
                  >
                    {period.title}
                  </div>
                </div>
              </div>

              {/* 중앙 점 */}
              <div className="flex-shrink-0 relative">
                <div 
                  className="w-6 h-6 rounded-full border-4 border-[#222222] z-10 relative"
                  style={{ backgroundColor: period.color }}
                />
              </div>

              {/* 오른쪽 콘텐츠 섹션 */}
              <div className="flex-1 ml-12">
                
                {/* 제목과 부제목 */}
                <div className="mb-8">
                  <h2 
                    className="text-5xl font-bold mb-4"
                    style={{ color: period.color }}
                  >
                    {period.years}
                  </h2>
                  <h3 className="text-3xl font-bold text-white mb-4">{period.title}</h3>
                  <p className="text-lg text-gray-300 leading-relaxed max-w-3xl">
                    {period.subtitle}
                  </p>
                </div>

                {/* 로고 */}
                <div className="mb-12 flex justify-center">
                  <div className="w-48 h-48 flex items-center justify-center bg-gray-800 rounded-2xl p-8">
                    <img 
                      src={period.logo} 
                      alt={`${period.years} 로고`}
                      className="max-w-full max-h-full object-contain"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden w-full h-full bg-gray-600 flex items-center justify-center text-white text-sm rounded">
                      {period.years} 로고
                    </div>
                  </div>
                </div>

                {/* 세부 내용들 */}
                <div className="space-y-8">
                  {period.content.map((item, itemIndex) => (
                    <motion.div
                      key={itemIndex}
                      className="flex items-start space-x-6 relative"
                      initial={{ opacity: 0, x: 30 }}
                      animate={visibleSections.has(index) ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.6, delay: 0.4 + itemIndex * 0.2 }}
                    >
                      {/* 작은 점 */}
                      <div 
                        className="w-3 h-3 rounded-full flex-shrink-0 mt-2"
                        style={{ backgroundColor: period.color }}
                      />
                      
                      {/* 년도와 설명 */}
                      <div className="flex-1">
                        <div 
                          className="text-lg font-bold mb-2"
                          style={{ color: period.color }}
                        >
                          {item.year}
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                          {item.text}
                        </p>
                      </div>
                      
                      {/* 이미지 */}
                      <div className="w-32 h-20 bg-gray-700 rounded-lg overflow-hidden flex-shrink-0">
                        <img 
                          src={item.image} 
                          alt={item.year}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'flex';
                          }}
                        />
                        <div className="hidden w-full h-full bg-gray-600 flex items-center justify-center text-white text-xs">
                          이미지
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* 모바일 레이아웃 */}
            <div className="block md:hidden">
              
              <div className="flex items-start">
                {/* 모바일 점 */}
                <div className="flex-shrink-0 relative ml-6">
                  <div 
                    className="w-6 h-6 rounded-full border-4 border-[#222222] z-10 relative"
                    style={{ backgroundColor: period.color }}
                  />
                </div>

                {/* 모바일 콘텐츠 */}
                <div className="flex-1 ml-6">
                  
                  <div className="mb-6">
                    <h2 
                      className="text-4xl font-bold mb-2"
                      style={{ color: period.color }}
                    >
                      {period.years}
                    </h2>
                    <h3 className="text-2xl font-bold text-white mb-3">{period.title}</h3>
                    <p className="text-base text-gray-300 leading-relaxed">
                      {period.subtitle}
                    </p>
                  </div>

                  {/* 모바일 로고 */}
                  <div className="mb-8 flex justify-center">
                    <div className="w-32 h-32 flex items-center justify-center bg-gray-800 rounded-xl p-4">
                      <img 
                        src={period.logo} 
                        alt={`${period.years} 로고`}
                        className="max-w-full max-h-full object-contain"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-full bg-gray-600 flex items-center justify-center text-white text-xs rounded">
                        로고
                      </div>
                    </div>
                  </div>

                  {/* 모바일 세부 내용 */}
                  <div className="space-y-6">
                    {period.content.map((item, itemIndex) => (
                      <motion.div
                        key={itemIndex}
                        className="flex flex-col space-y-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={visibleSections.has(index) ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 + itemIndex * 0.2 }}
                      >
                        <div 
                          className="text-lg font-bold"
                          style={{ color: period.color }}
                        >
                          {item.year}
                        </div>
                        <p className="text-gray-300 leading-relaxed text-sm">
                          {item.text}
                        </p>
                        
                        <div className="w-full h-24 bg-gray-700 rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.year}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.nextSibling.style.display = 'flex';
                            }}
                          />
                          <div className="hidden w-full h-full bg-gray-600 flex items-center justify-center text-white text-xs">
                            이미지
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
        
        {/* 타임라인 끝점 */}
        <div className="absolute left-46 md:left-48 bottom-0 w-6 h-6 bg-gray-600 rounded-full border-4 border-[#222222] transform -translate-x-1/2" />
      </div>
    </div>
  );
}