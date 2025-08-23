import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

const timelineData = [
  {
    id: 1,
    years: "1985~1987",
    startYear: "1985",
    endYear: "1987",
    title: "프로야구 출범",
    subtitle: "KBO 이사회에서 한화그룹의 창단신청 승인이 결정되었고,\n대국민 공모를 통한 구단 이름은 '빙그레 이글스'로 결정되었다.",
    logo: "/img/hislogo.png",
    color: "#FF6B35",
    content: [
      {
        year: "1985",
        items: [
          {
            text: "1985년 한화그룹이 대전을 연고지로 삼은",
            continuation: "제7구단으로 창단 준비 시작"
          },
          {
            text: <>팀 명칭 공모 결과 <strong>"빙그레이글스"</strong>로 결정</>,
            image: "/img/1985.png"
          }
        ]
      },
      {
        year: "1986",
        items: [
          {
            text: "대전지역 빙그레이글스 창단식",
            continuation: "(베성사 초대감독) 진행"
          },
          {
            text: "대전구장 12,000석의 만원 관중 앞에서 MBC청룡을",
            continuation: "상대로 치른",
            continuation2: "역사적인 첫 경기 시작",
            image: "/img/1986.png"
          }
        ]
      },
      {
        year: "1987",
        items: [
          {
            text: "제2대 김영덕 감독 선임",
            image: "/img/1987.png"
          }
        ]
      }
    ]
  },
  {
    id: 2,
    years: "1991~1999", 
    startYear: "1991",
    endYear: "1999",
    title: "돌풍의 신생팀",
    subtitle: "20세기 최후의 승자! 한국시리즈 우승\n 돌풍의 신생팀에서 20세기 최후의 승자가 되기까지",
    logo: "/img/hislogo2.png",
    color: "#FF6B35",
    content: [
      {
        year: "1991",
        items: [
          {
            text: "장종훈 타격 4관왕(홈런, 타점, 장타율, 최다안타)",
            continuation: "송진우는 1990년 구원왕에 이어 1992년 19승과 17세이브로",
            continuation2:"다승과 구원왕 타이틀 동시 석권 ",
            image: "/img/1991.png"
          }
        ]
      },
      {
        year: "1993",
        items: [
          {
            text: "구단 명칭 한화이글스로 변경",
            image: "/img/1993.png"
          }
        ]
      },
      {
        year: "1997",
        items: [
          {
            text: "정민철 프로통산 9번째 노히트노런 기록 수립",
            image: "/img/1997.png"
          }
        ]
      },
      {
        year: "1999",
        items: [
          {
            text: <><strong>1999년 한국시리즈 우승 (롯데전 4승 1패)</strong></>,
            continuation: "한국시리즈 MVP 구대성 (1승 3세이브)",
            image: "/img/1999.png"
          }
        ]
      }
    ]
  },
  {
    id: 3,
    years: "2001~2009",
    startYear: "2001", 
    endYear: "2009",
    title: "레전드의 세대교체",
    subtitle: "한국 프로야구를 상징하던 레전드들과의 아름다운 이별\n그리고 혜성처럼 등장한 새로운 레전드",
    logo: "/img/hislogo3.png",
    color: "#FF6B35",
    content: [
      {
        year: "2001",
        items: [
          {
            text: "김태균 2001년 신인왕 수상",
            image: "/img/2001.png"
          }
        ]
      },
      {
        year: "2002",
        items: [
          {
            text: "창단멤버 유승안 수석코치를 제6대 감독으로 선임"
          }
        ]
      },
      {
        year: "2003",
        items: [
          {
            text: "장종훈(프로 통산 첫 번째 1,700안타),",
            continuation: "송진우(프로 통산 첫 번째로 22,000이닝 돌파",
            continuation2: "좌완 최초 1,600 탈삼진) 대기록 수립"
          }
        ]
      },
      {
        year: "2004",
        items: [
          {
            text: "제7대 감독 김인식 선임",
            image: "/img/2004.png"
          }
        ]
      },
      {
        year: "2005",
        items: [
          {
            text: "장종훈 은퇴경기 (기아전),",
            continuation: "등번호 35번 구단 최초 영구결번 지정",
            image: "/img/2005.png"
          },
          {
            text:<><br/></>,
            continuation: "2005년 정규리그를 4위로 마친 뒤 준플레이오프 승리로",
            continuation2: "플레이오프 진출 4년만의 포스트시즌 복귀 ",
          }
        ]
      },
      {
        year: "2006",
        items: [
          {
            text: "송진우 프로 통산 첫 번째 200승 2,800이닝 투구 (기아전)",
            image: "/img/2006.png"
          },
          {
            text:<><br/><strong>한국시리즈 준우승</strong></>,
          }
        ]
      },
      {
        year: "2006",
        items: [
          {
            text: "류현진 2006년 신인왕, 시즌 MVP 동시 석권",
            image: "/img/2006b.png"
          }
        ]
      },
      {
        year: "2009",
        items: [
          {
            text: <>정민철 은퇴경기(히어로즈전), <strong>등번호 23번은 영구결번으로 지정</strong></>,
            continuation:<><br/><br/></>,
            continuation2: "송진우 은퇴경기(LG전), 등번호 21번은 영구결번으로 지정",
            image: "/img/2009.png"
          },
          {
            text:<><br/></>,
            continuation: "제8대 감독으로 한대화 선임"
          }
        ]
      }
    ]
  },
  {
    id: 4,
    years: "2011~",
    startYear: "2011",
    endYear: "",
    title: "새로운 도약을 위한 바닥 다지기",
    subtitle: "바닥이 탄탄해야 더 높이 날아오를 수 있는 법\n팬과 함께 새로운 이글스로 도약하기 위한 시간들",
    logo: "/img/hislogo4.png", 
    color: "#FF6B35",
    content: [
      {
        year: "2011",
        items: [
          {
            text: "김태균 입단(연봉 15억), 박찬호 입단(연봉 2,400만원)",
            image: "/img/2011.png"
          }
        ]
      },
      {
        year: "2012",
        items: [
          {
            text: "제9대 감독으로 김응룡 선임",
          },
          {
            text:<><br/></>,
            continuation:"박찬호 은퇴 발표",
          },
          {
            text:<><br/></>,
            continuation: "류현진의 메이저리그 LA 다저스 입단 확정",
            image: "/img/2012.png"
          },
          {
            text:<><br/></>,
            continuation:"2군 전용 훈련시설 서산연습장 준공"
          }
        ]
      },
      {
        year: "2014",
        items: [
          {
            text: "제10대 감독 김성근 영입"
          }
        ]
      },
      {
        year: "2015",
        items: [
          {
            text: "창단 30주년 신규유니폼 4종 출시, 홈 관중 60만 돌파"
          }
        ]
      },
      {
        year: "2017",
        items: [
          {
            text: "김태균 86경기 연속 출루 기록 경신,",
            continuation: "제11대 한용덕 감독 선임",
            image: "/img/2017.png"
          }
        ]
      },
      {
        year: "2018",
        items: [
          {
            text: "홈경기 역대 최다 관중 73만 기록",
            continuation: <><strong>11년 만의 포스트시즌 진출(정규리그 3위 달성)</strong></>
          }
        ]
      },
      {
        year: "2019",
        items: [
          {
            text: "김태균 KBO 통산 첫 번째 우타자 최다안타 2,160개 달성 (對 두산, 잠실 9/28)",
            continuation: "제10대 정민철 단장 선임",
            image: "/img/2019.png"
          },
          {
            text:<><br/></>,
            continuation: "제12대 수베로 감독 선임",
            image: "/img/2019b.png"
          }
        ]
      },
      {
        year: "2023",
        items: [
          {
            text: "정우람, KBO 투수 최초 1,000경기 출장",
            image: "/img/2023.png"
          },
          {
            text:<><br/></>,
            continuation: "제 13대 최원호 감독 선임",
            image: "/img/2023b.png"
          },
          {
            text:<><br/></>,
            continuation: "노시환 홈런, 타점 2관왕 / 문동주 신인왕 수상",
            image: "/img/2023c.png"
          }
        ]
      },
      {
        year: "2024",
        items: [
          {
            text: "류현진, 12년만의 국내 복귀",
            image: "/img/2024.png"
          },
          {
            text:<><br/></>,
            continuation: "제14대 김경문 감독 선임",
            image: "/img/2024b.png"
          }
        ]
      }
    ]
  }
];

// 개별 period 컴포넌트
const TimelinePeriod = ({ period, periodIndex, visibleSections }) => {
  const periodRef = useRef(null);
  const [activeYears, setActiveYears] = useState(new Set());
  const [yearProgresses, setYearProgresses] = useState({});
  const [currentProgress, setCurrentProgress] = useState(0);
  
  const { scrollYProgress } = useScroll({
    target: periodRef,
    offset: ["start 0.8", "end 0.2"]
  });

  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // 스크롤 진행률에 따른 year 활성화 상태 및 개별 진행률 업데이트
  useEffect(() => {
    const unsubscribe = scrollYProgress.onChange((progress) => {
      setCurrentProgress(progress);
      const newActiveYears = new Set();
      const newYearProgresses = {};
      
      // 각 항목의 실제 위치 기반으로 진행률 계산
      period.content.forEach((yearContent, yearIndex) => {
        // 더 선형적인 진행률 계산 - 각 항목을 동일하게 취급
        const itemStart = yearIndex / period.content.length;
        const itemEnd = (yearIndex + 1) / period.content.length;
        
        // 진행률을 더 빠르게 만들기 위해 지수 함수 적용
        const adjustedProgress = Math.pow(progress, 0.7); // 0.7승을 적용해서 초반에 더 빠르게
        
        // 개별 year 진행률 계산
        let yearProgress = 0;
        if (adjustedProgress > itemStart) {
          if (adjustedProgress >= itemEnd) {
            yearProgress = 1;
          } else {
            yearProgress = (adjustedProgress - itemStart) / (itemEnd - itemStart);
          }
        }
        newYearProgresses[yearIndex] = yearProgress;
        
        // 30% 이상 진행되면 활성화로 간주 (더 빠른 반응)
        if (yearProgress >= 0.3) {
          newActiveYears.add(yearIndex);
        }
      });
      
      setActiveYears(newActiveYears);
      setYearProgresses(newYearProgresses);
    });

    return unsubscribe;
  }, [scrollYProgress, period.content]);

  // 중앙점 색상 계산
  const getPointColor = (yearIndex) => {
    const progress = yearProgresses[yearIndex] || 0;
    return progress >= 0.5 ? '#FF6600' : '#393939';
  };

  // 년도 색상 계산 (중앙점과 동일한 로직)
  const getYearColor = (yearIndex) => {
    const progress = yearProgresses[yearIndex] || 0;
    return progress >= 0.5 ? '#FF6600' : '#393939';
  };

  return (
    <motion.div
      ref={periodRef}
      data-timeline-section
      className="relative mb-32 md:mb-48"
      initial={{ opacity: 0, y: 50 }}
      animate={visibleSections.has(periodIndex) ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {/* 구간별 연도 sticky */}
      <div className="hidden lg:block absolute top-0 -left-36 w-80 h-full pointer-events-none z-10">
        <div className="sticky top-1/3 transform -translate-y-1/2">
          <div className="history-section__sticky-wrap">
            <p className="history-section__sticky-year text-4xl font-bold mb-2" style={{
              color: '#FFFFFF',
              lineHeight: '1.2',
              letterSpacing: '-0.035em',
              wordBreak: 'keep-all'
            }}>
              {period.startYear} ~<br />
              {period.endYear}
            </p>
            <p className="history-section__sticky-title text-base font-medium" style={{
              color: '#FFFFFF',
              lineHeight: '2.3',
              letterSpacing: '-0.035em',
              wordBreak: 'keep-all',
              overflowWrap: 'break-word',
              maxWidth: '220px'
            }}>
              {period.title}
            </p>
          </div>
        </div>
      </div>

      {/* 이 period만의 중앙선 - 개선된 진행률 애니메이션 */}
      <div className="absolute left-1/2 w-1 transform -translate-x-1/2" style={{
        top: '600px',
        bottom: '0px'
      }}>
        {/* 회색 배경 선 */}
        <div className="w-full h-full bg-[#FFFFFF1A]" />
        {/* 주황색 진행률 선 */}
        <motion.div
          className="absolute top-0 left-0 w-full bg-[#FF6600]"
          style={{
            height: `${currentProgress * 100}%`,
            transition: 'height 0.1s ease-out'
          }}
        />
      </div>
      
      {/* 제목 부제목 */}
      <div className="text-center mb-12">
        <h2 
          className="text-5xl md:text-7xl font-bold mb-4 md:mb-10"
          style={{ color: period.color }}
        >
          {period.years}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6">{period.title}</h3>
        <p className="text-lg md:text-base text-white leading-relaxed max-w-4xl mx-auto px-4 whitespace-pre-line">
          {period.subtitle}
        </p>
      </div>

      {/* 로고 */}
      <div className="mb-12 flex justify-center">
        <div className="w-40 h-40 md:w-96 md:h-64 flex items-center justify-center">
          <img 
            src={period.logo} 
            alt={`${period.years} 로고`}
            className="max-w-full max-h-full object-contain"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="hidden w-full h-full flex items-center justify-center text-white text-lg">
            {period.years} 로고
          </div>
        </div>
      </div>

      {/* 세부 내용들 - 지그재그 레이아웃 */}
      <div className="space-y-16 max-w-7xl mx-auto">
        {period.content.map((yearContent, yearIndex) => {
          const isLeft = yearIndex % 2 === 1;
          
          return (
            <motion.div
              key={yearIndex}
              className="relative flex items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={visibleSections.has(periodIndex) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + yearIndex * 0.2 }}
            >
              {/* 데스크탑 지그재그 레이아웃 */}
              <div className="hidden md:flex w-full items-start">
                {isLeft ? (
                  // 왼쪽 배치
                  <>
                    {/* 왼쪽 콘텐츠 */}
                    <div className="w-5/12 text-right pr-8">
                      {/* 년도 - 색상 변화 적용 */}
                      <div 
                        className="text-2xl font-bold mb-4 transition-colors duration-300"
                        style={{ color: getYearColor(yearIndex) }}
                      >
                        {yearContent.year}
                      </div>
                      
                      {/* 텍스트와 이미지들 */}
                      <div className="space-y-6">
                        {yearContent.items.map((item, itemIndex) => (
                           <div key={itemIndex}>
                            {/* 텍스트 라인들 */}
                            <div className="text-white text-lg leading-relaxed mb-4">
                              <div>{item.text}</div>
                              {item.continuation && <div>{item.continuation}</div>}
                              {item.continuation2 && <div>{item.continuation2}</div>}
                            </div>
                            
                            {/* 이미지 */}
                            {item.image && (
                              <div className="flex justify-end">
                                <div className="w-96 h-52 overflow-hidden">
                                  <img 
                                    src={item.image} 
                                    alt={yearContent.year}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.nextSibling.style.display = 'flex';
                                    }}
                                  />
                                  <div className="hidden w-full h-full bg-gray-600 flex items-center justify-center text-white text-sm">
                                    이미지
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    {/* 중앙 점 */}
                    <div className="flex justify-center items-start w-2/12 pt-2">
                      <div 
                        className="w-4 h-4 rounded-full border transition-colors duration-300 z-10 relative"
                        style={{ 
                          backgroundColor: getPointColor(yearIndex),
                          borderColor: getPointColor(yearIndex)
                        }}
                      />
                    </div>
                    
                    {/* 오른쪽 빈 공간 */}
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  // 오른쪽 배치
                  <>
                    {/* 왼쪽 빈 공간 */}
                    <div className="w-5/12"></div>
                    
                    {/* 중앙 점 */}
                    <div className="flex justify-center items-start w-2/12 pt-2">
                      <div 
                        className="w-4 h-4 rounded-full border transition-colors duration-300 z-10 relative"
                        style={{ 
                          backgroundColor: getPointColor(yearIndex),
                          borderColor: getPointColor(yearIndex)
                        }}
                      />
                    </div>
                    
                    {/* 오른쪽 콘텐츠 */}
                    <div className="w-5/12 text-left pl-8">
                      {/* 년도 - 색상 변화 적용 */}
                      <div 
                        className="text-2xl font-bold mb-4 transition-colors duration-300"
                        style={{ color: getYearColor(yearIndex) }}
                      >
                        {yearContent.year}
                      </div>
                      
                      {/* 텍스트와 이미지들 */}
                      <div className="space-y-6">
                        {yearContent.items.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            {/* 텍스트 라인들 */}
                            <div className="text-white text-lg leading-relaxed mb-4">
                              <div>{item.text}</div>
                              {item.continuation && <div>{item.continuation}</div>}
                              {item.continuation2 && <div>{item.continuation2}</div>}
                            </div>
                            
                            {/* 이미지 */}
                            {item.image && (
                              <div className="flex justify-start">
                                <div className="w-96 h-52 overflow-hidden">
                                  <img 
                                    src={item.image} 
                                    alt={yearContent.year}
                                    className="w-full h-full object-cover"
                                    onError={(e) => {
                                      e.target.style.display = 'none';
                                      e.target.nextSibling.style.display = 'flex';
                                    }}
                                  />
                                  <div className="hidden w-full h-full bg-gray-600 flex items-center justify-center text-white text-sm">
                                    이미지
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </div>

              {/* 모바일 중앙 정렬 */}
              <div className="md:hidden w-full">
                {/* 년도와 선 연결점 */}
                <div className="flex items-center justify-center mb-8">
                  <div 
                    className="w-4 h-4 rounded-full border transition-colors duration-300 z-10 relative"
                    style={{ 
                      backgroundColor: getPointColor(yearIndex),
                      borderColor: getPointColor(yearIndex)
                    }}
                  />
                  <div 
                    className="ml-4 text-2xl font-bold transition-colors duration-300"
                    style={{ color: getYearColor(yearIndex) }}
                  >
                    {yearContent.year}
                  </div>
                </div>

                {/* 텍스트와 이미지들 */}
                <div className="space-y-6 px-4">
                  {yearContent.items.map((item, itemIndex) => (
                    <div key={itemIndex} className={`text-center`}>
                      {/* 텍스트 라인들 */}
                      <div className="text-white text-lg leading-relaxed mb-4">
                        <div>{item.text}</div>
                        {item.continuation && <div>{item.continuation}</div>}
                        {item.continuation2 && <div>{item.continuation2}</div>}
                      </div>
                      
                      {/* 이미지 */}
                      {item.image && (
                        <div className="flex justify-center">
                          <div className="w-80 h-52 overflow-hidden">
                            <img 
                              src={item.image} 
                              alt={yearContent.year}
                              className="w-full h-full object-cover"
                              onError={(e) => {
                                e.target.style.display = 'none';
                                e.target.nextSibling.style.display = 'flex';
                              }}
                            />
                            <div className="hidden w-full h-full bg-gray-600 flex items-center justify-center text-white text-sm">
                              이미지
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default function Ayears() {
  const containerRef = useRef(null);
  const [visibleSections, setVisibleSections] = useState(new Set());

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
    <div ref={containerRef} className="bg-[#222222] min-h-screen pt-[100vh]">
      <div className="max-w-7xl mx-auto px-4 relative">
        {/* 각 period를 개별 컴포넌트로 렌더링 */}
        {timelineData.map((period, periodIndex) => (
          <TimelinePeriod 
            key={period.id}
            period={period}
            periodIndex={periodIndex}
            visibleSections={visibleSections}
          />
        ))}
      </div>
    </div>
  );
}