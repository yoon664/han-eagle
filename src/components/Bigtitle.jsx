import React, { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const AnimatedChar = ({ char, index, scrollYProgress }) => {
  const charProgress = useTransform(
    scrollYProgress,
    [
      Math.max(0, (index * 0.12) - 0.1),
      (index * 0.12) + 0.15,
      0.7,
      1
    ],
    [0, 1, 1, 0.9]
  );

  // Y 위치
  const yPos = useTransform(
    charProgress,
    [0, 1],
    [80, 0]
  );

  // 투명도
  const opacity = useTransform(
    charProgress,
    [0, 0.6, 1],
    [0, 1, 1]
  );

  return (
    <motion.span
      className="inline-block"
      style={{
        opacity: opacity,
        y: yPos,
        willChange: 'transform',
      }}
    >
      {char}
    </motion.span>
  );
};

// 메인 타이틀 컴포넌트
const BigTitle = ({
  children,
  initialSize = 800,
  finalSize = 300,
  mobileInitialSize = 400,
  mobileFinalSize = 100,  // 100으로 설정
  containerHeight = '150vh',
  mobileContainerHeight = '100vh',
  className = '',
  style = {}
}) => {
  const containerRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);

  // 데스크탑용 스크롤 (통합 구조 방식)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end start"]
  });

  // 모바일용 스크롤
  const { scrollYProgress: mobileScrollYProgress } = useScroll({
    target: mobileContainerRef,
    offset: ["start 0.8", "end start"]
  });

  const chars = children.toString().split('');

  // 데스크탑용 스케일 (통합 구조 방식)
  const scale = useTransform(
    scrollYProgress,
    [0, 0.5, 0.7, 1],
    [1, finalSize / initialSize, finalSize / initialSize, finalSize / initialSize]
  );

  // 모바일용 스케일
  const mobileScale = useTransform(
    mobileScrollYProgress,
    [0, 0.5, 0.7, 1],
    [1, mobileFinalSize / mobileInitialSize, mobileFinalSize / mobileInitialSize, mobileFinalSize / mobileInitialSize]
  );

  useEffect(() => {
    const handleScroll = () => {
      if (containerRef.current) {
        const containerRect = containerRef.current.getBoundingClientRect();
        const containerBottom = containerRect.bottom + window.scrollY;
        const windowHeight = window.innerHeight;
        const currentScroll = window.scrollY;

        if (containerBottom - currentScroll <= windowHeight + 100) {
          setIsSticky(true);
        } else {
          setIsSticky(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // 초기 실행
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* 데스크탑 버전 - 통합 구조 방식 */}
      <div
        ref={containerRef}
        className="hidden md:flex relative overflow-x-clip items-center justify-center"
        style={{
          height: containerHeight,
          ...style
        }}
      >
        <motion.div
          className={`anim_line whitespace-nowrap font-bold text-white tracking-wider leading-none ${className}`}
          style={{
            display: 'block',
            textAlign: 'center',
            position:'sticky',
            top:0, 
            scale: scale,
            fontSize: `${initialSize}px`,
            willChange: 'transform, font-size',
            zIndex: 10,
          }}
        >
          {chars.map((char, index) => (
            <AnimatedChar
              key={index}
              char={char}
              index={index}
              scrollYProgress={scrollYProgress}
            />
          ))}
        </motion.div>

        {/* 오버플로우 마스크 */}
        <motion.div
          className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#222222] to-transparent pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0])
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#222222] to-transparent pointer-events-none"
          style={{
            opacity: useTransform(scrollYProgress, [0.8, 1], [0, 1])
          }}
        />
      </div>

      {/* 모바일 버전 - 분리 구조 방식 */}
      <div
        ref={mobileContainerRef}
        className="flex md:hidden relative overflow-x-clip items-center justify-center"
        style={{
          height: mobileContainerHeight,
          ...style
        }}
      >
        <motion.div
          className={`anim_line whitespace-nowrap font-bold text-white tracking-wider leading-none ${className}`}
          style={{
            display: 'block',
            textAlign: 'center',
            position:'sticky',
            top:0, 
            scale: mobileScale,
            fontSize: `${mobileInitialSize}px`,
            willChange: 'transform, font-size',
            zIndex: 10,
          }}
        >
          {chars.map((char, index) => (
            <AnimatedChar
              key={`mobile-${index}`}
              char={char}
              index={index}
              scrollYProgress={mobileScrollYProgress}
            />
          ))}
        </motion.div>

        {/* 오버플로우 마스크 */}
        <motion.div
          className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[#222222] to-transparent pointer-events-none"
          style={{
            opacity: useTransform(mobileScrollYProgress, [0, 0.2], [1, 0])
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-[#222222] to-transparent pointer-events-none"
          style={{
            opacity: useTransform(mobileScrollYProgress, [0.8, 1], [0, 1])
          }}
        />
      </div>
    </>
  );
};

export default BigTitle;