import React, { useState, useEffect, useRef } from 'react';
// useScroll을 framer-motion에서 추가로 import 합니다.
import { motion, useTransform, useScroll } from 'framer-motion';

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
            text: "대전구장 12,000석의 만원 관중 앞에서",
            continuation: "MBC청룡을 상대로 치른 역사적인 첫 경기 시작",
            continuation2: "",
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
            continuation2: "다승과 구원왕 타이틀 동시 석권 ",
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
            text: <><br /></>,
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
            text: <><br /><strong>한국시리즈 준우승</strong></>,
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
            continuation: <><br /><br /></>,
            continuation2: "송진우 은퇴경기(LG전), 등번호 21번은 영구결번으로 지정",
            image: "/img/2009.png"
          },
          {
            text: <><br /></>,
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
            text: <><br /></>,
            continuation: "박찬호 은퇴 발표",
          },
          {
            text: <><br /></>,
            continuation: "류현진의 메이저리그 LA 다저스 입단 확정",
            image: "/img/2012.png"
          },
          {
            text: <><br /></>,
            continuation: "2군 전용 훈련시설 서산연습장 준공"
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
            text: <><br /></>,
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
            text: <><br /></>,
            continuation: "제 13대 최원호 감독 선임",
            image: "/img/2023b.png"
          },
          {
            text: <><br /></>,
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
            text: <><br /></>,
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
  // useScroll의 대상으로 사용될 ref
  const containerRef = useRef(null);
  
  // 1. useScroll 훅을 사용하여 스크롤 진행률을 추적
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"] // 요소가 화면에 보이기 시작할 때부터 완전히 사라질 때까지를 추적
  });
  
  // 2. IntersectionObserver는 현재 활성화된 항목 하이라이트에만 사용
  const [activeYearIndices, setActiveYearIndices] = useState(new Set());

  // 3. 라인 색상은 scrollYProgress 값에 따라 결정
  const lineColor = useTransform(scrollYProgress, [0, 0.05], ['#393939', '#FF6B35']);

  const getPointColor = (yearIndex) => {
    return activeYearIndices.has(yearIndex) ? '#FF6B35' : '#393939';
  };

  const getYearColor = (yearIndex) => {
    return activeYearIndices.has(yearIndex) ? '#FF6B35' : '#393939';
  };

  // 4. IntersectionObserver 설정 (하이라이트 기능 담당)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const yearIndex = parseInt(entry.target.dataset.yearIndex, 10);
          if (entry.isIntersecting) {
            // 화면에 들어오면 active set에 추가
            setActiveYearIndices((prev) => new Set(prev).add(yearIndex));
          } else {
            // 화면에서 나가면 active set에서 제거
            setActiveYearIndices((prev) => {
              const next = new Set(prev);
              next.delete(yearIndex);
              return next;
            });
          }
        });
      },
      {
        // 화면의 상하단 45%를 제외한 중앙 10% 영역을 기준으로 감지
        rootMargin: "-45% 0px -45% 0px",
        threshold: 0,
      }
    );

    const yearElements = containerRef.current?.querySelectorAll('[data-year-index]');
    yearElements?.forEach((el) => observer.observe(el));

    return () => {
      yearElements?.forEach((el) => observer.unobserve(el));
    };
  }, [period.id]);

  return (
    <motion.div
      ref={containerRef} // useScroll의 대상 ref를 여기에 연결
      data-timeline-section
      className="relative mb-32 md:mb-48"
      initial={{ opacity: 0, y: 50 }}
      animate={visibleSections.has(periodIndex) ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="hidden lg:block absolute top-0 -left-[12vw] w-80 h-full pointer-events-none z-10">
        <div className="sticky top-1/3 transform -translate-y-1/2">
          <div className="history-section__sticky-wrap">
            <p className="history-section__sticky-year text-4xl font-bold mb-2" style={{ color: '#FFFFFF', lineHeight: '1.2' }}>
              {period.startYear} ~<br />
              {period.endYear}
            </p>
            <p className="history-section__sticky-title text-base font-medium" style={{ color: '#FFFFFF', lineHeight: '2.3' }}>
              {period.title}
            </p>
          </div>
        </div>
      </div>

      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-7xl font-bold mb-4 md:mb-10" style={{ color: period.color }}>
          {period.years}
        </h2>
        <h3 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6">{period.title}</h3>
        <p className="text-sm md:text-base text-white leading-relaxed max-w-4xl mx-auto px-4 whitespace-pre-line">
          {period.subtitle}
        </p>
      </div>

      <div className="mb-24 flex justify-center">
        <div className="h-36 md:w-96 md:h-64 flex items-center justify-center">
          <img
            src={period.logo}
            alt={`${period.years} 로고`}
            className="max-w-full max-h-full object-contain"
          />
        </div>
      </div>

      <div className="space-y-16 max-w-7xl mx-auto relative">
        <div className="hidden md:block absolute left-1/2 w-1 transform -translate-x-1/2 top-2 bottom-0">
          <div className="w-full h-full bg-[#FFFFFF1A]" />
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{ 
              // 5. 라인의 scaleY(세로 길이)를 scrollYProgress에 직접 연결
              scaleY: scrollYProgress, 
              transformOrigin: 'top',
              backgroundColor: lineColor
            }}
          />
        </div>

        <div className="md:hidden absolute left-4 w-1 top-2 bottom-0">
          <div className="w-full h-full bg-[#FFFFFF1A]" />
          <motion.div
            className="absolute top-0 left-0 w-full"
            style={{ 
              scaleY: scrollYProgress, 
              transformOrigin: 'top',
              backgroundColor: lineColor
            }}
          />
        </div>

        {period.content.map((yearContent, yearIndex) => {
          const isLeft = yearIndex % 2 === 1;

          return (
            <motion.div
              key={yearIndex}
              data-year-index={yearIndex}
              className="relative flex items-center"
              initial={{ opacity: 0, y: 30 }}
              animate={visibleSections.has(periodIndex) ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 + yearIndex * 0.2 }}
            >
              <div className="hidden md:flex w-full items-start">
                {isLeft ? (
                  <>
                    <div className="w-5/12 text-right pr-8">
                      <div className="text-2xl font-bold mb-5 transition-colors duration-300" style={{ color: getYearColor(yearIndex) }}>
                        {yearContent.year}
                      </div>
                      <div className="space-y-6">
                        {yearContent.items.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            <div className="text-white text-xl leading-relaxed mb-4">
                              <div>{item.text}</div>
                              {item.continuation && <div>{item.continuation}</div>}
                              {item.continuation2 && <div>{item.continuation2}</div>}
                            </div>
                            {item.image && (
                              <div className="flex justify-end">
                                <div className="w-[535px] h-60 overflow-hidden">
                                  <img src={item.image} alt={yearContent.year} className="w-full h-full object-cover" />
                                </div>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center items-start w-2/12 pt-2">
                      <div className="w-4 h-4 rounded-full border transition-colors duration-300 z-10 relative" style={{ backgroundColor: getPointColor(yearIndex), borderColor: getPointColor(yearIndex) }} />
                    </div>
                    <div className="w-5/12"></div>
                  </>
                ) : (
                  <>
                    <div className="w-5/12"></div>
                    <div className="flex justify-center items-start w-2/12 pt-2">
                      <div className="w-4 h-4 rounded-full border transition-colors duration-300 z-10 relative" style={{ backgroundColor: getPointColor(yearIndex), borderColor: getPointColor(yearIndex) }} />
                    </div>
                    <div className="w-5/12 text-left pl-8">
                      <div className="text-2xl font-bold mb-5 transition-colors duration-300" style={{ color: getYearColor(yearIndex) }}>
                        {yearContent.year}
                      </div>
                      <div className="space-y-6">
                        {yearContent.items.map((item, itemIndex) => (
                          <div key={itemIndex}>
                            <div className="text-white text-xl leading-relaxed mb-4">
                              <div>{item.text}</div>
                              {item.continuation && <div>{item.continuation}</div>}
                              {item.continuation2 && <div>{item.continuation2}</div>}
                            </div>
                            {item.image && (
                              <div className="flex justify-start">
                                <div className="w-[535px] h-60 overflow-hidden">
                                  <img src={item.image} alt={yearContent.year} className="w-full h-full object-cover" />
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

              <div className="md:hidden w-full flex">
                <div className="flex items-start w-4 flex-shrink-0 pt-2 justify-center">
                  <div className="w-4 h-4 rounded-full border transition-colors duration-300 z-10 relative" style={{ backgroundColor: getPointColor(yearIndex), borderColor: getPointColor(yearIndex) }} />
                </div>
                <div className="flex-1 pl-8">
                  <div className="text-xl font-bold mb-4 transition-colors duration-300" style={{ color: getYearColor(yearIndex) }}>
                    {yearContent.year}
                  </div>
                  <div className="space-y-6">
                    {yearContent.items.map((item, itemIndex) => (
                      <div key={itemIndex}>
                        <div className="text-white text-base leading-relaxed mb-4">
                          <div>{item.text}</div>
                          {item.continuation && <div>{item.continuation}</div>}
                          {item.continuation2 && <div>{item.continuation2}</div>}
                        </div>
                        {item.image && (
                          <div className="flex justify-start">
                            <div className="w-full max-w-sm h-40 overflow-hidden">
                              <img src={item.image} alt={yearContent.year} className="w-full h-full object-cover" />
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
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
      const windowHeight = window.innerHeight;

      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < windowHeight * 0.8) {
          newVisibleSections.add(index);
        }
      });
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div ref={containerRef} className="bg-[#222222] min-h-screen pt-[100vh]">
      <div className="max-w-7xl mx-auto px-4 relative">
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