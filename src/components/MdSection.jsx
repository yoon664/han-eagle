import { useState, useRef, useEffect } from 'react';
import { motion, useSpring, useMotionValue } from "framer-motion";
import { throttle } from "lodash";
import BigTitle from './Bigtitle';

export default function MdSection() {
  const bgChangeRef = useRef();
  const scrollRef = useRef();
  const slideWrapRef = useRef();
  const slideBoxRef = useRef();
  const slideRef = useRef([]);

  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const [active, setActive] = useState(false);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startPos, setStartPos] = useState(0);
  const [endPos, setEndPos] = useState(0);
  const [translateZ, setTranslateZ] = useState(0);

  const products = [
    { id: 1, name: '후디(ON)봉제인형', image: 'md1.png' },
    { id: 2, name: '2025 어센틱 유니폼', image: 'md2.png' },
    { id: 3, name: '2025 어센틱 유니폼', image: 'md3.png' },
    { id: 4, name: '2025 어센틱 유니폼', image: 'md4.png' },
    { id: 5, name: '수리 캐릭터 후드', image: 'md5.png' },
    { id: 6, name: '한화 이글스 모자', image: 'md1.png' },
    { id: 7, name: '팀 키링', image: 'md2.png' },
    { id: 8, name: '응원 타올', image: 'md3.png' }
  ];

  const handleMouseMove = throttle((e) => {
    e.stopPropagation();
    setEndPos(e.clientX);
  }, 0);

  const handleMouseDown = (e) => {
    setIsMouseDown(true);
    setStartPos(e.clientX);
  };

  const motionVal = useMotionValue(0);
  const slideScroll = useSpring(motionVal, {
    bounce: 0,
    damping: 25,
    velocity: 2,
  });

  useEffect(() => {
    function setSlide() {
      const slide = slideRef.current.filter(el => el !== null);
      if (slide.length === 0) return;
      
      const z = Math.round(
        scrollRef.current.offsetHeight / 2 / Math.tan(Math.PI / slide.length) 
      );
      const adjustedZ = z * 1;

      setTranslateZ(adjustedZ);

      // setTranslateZ(z);
      slide.forEach((el, idx) => {
        if (el) {
          el.style.transform =
            "rotateY(" +
            (360 / slide.length) * idx +
            "deg) translateZ(" +
            z +
            "px)";
        }
      });
    }
    
    const timer = setTimeout(() => {
      setSlide();
    }, 100);
    
    if (slideBoxRef.current) {
      slideBoxRef.current.addEventListener("mousedown", handleMouseDown);
    }

    window.addEventListener("resize", setSlide);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", setSlide);
      if (slideBoxRef.current) {
        slideBoxRef.current.removeEventListener("mousedown", handleMouseDown);
      }
    };
  }, []);

  useEffect(() => {
    let timer;
    let mousePos = startPos - endPos;
    clearTimeout(timer);
    motionVal.set(motionVal.get() + mousePos * 0.05);

    timer = setTimeout(() => {
      const event = new MouseEvent("mouseup", {
        view: window,
        bubbles: true,
        cancelable: true,
      });
      window.dispatchEvent(event);
    }, 200);

    return () => clearTimeout(timer);
  }, [endPos]);

  useEffect(() => {
    const handleMouseUp = (e) => {
      setIsMouseDown(false);
      if (slideBoxRef.current) {
        slideBoxRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
    
    if (isMouseDown) {
      if (slideBoxRef.current) {
        slideBoxRef.current.addEventListener("mousemove", handleMouseMove);
      }
      window.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      window.removeEventListener("mouseup", handleMouseUp);
      if (slideBoxRef.current) {
        slideBoxRef.current.removeEventListener("mousemove", handleMouseMove);
      }
    };
  }, [isMouseDown]);

  return (
    <motion.section
      ref={bgChangeRef}
      className="relative min-h-screen flex flex-col items-center justify-center py-16 overflow-hidden"
      onMouseMove={(e) => {
        setActive(true);
        if (bgChangeRef.current) {
          const bounds = bgChangeRef.current.getBoundingClientRect();
          const posX = e.clientX - bounds.left;
          const posY = e.clientY - bounds.top;
          setMousePosition({ left: posX, top: posY });
        }
      }}
      onMouseLeave={() => {
        setActive(false);
      }}
    >
      <div className="w-full">
        
        {/* MD 타이틀 */}
       <BigTitle 
        initialSize={800} 
        finalSize={300}
        containerHeight="150vh"
      >
        MD
      </BigTitle>

        {/* 3D 슬라이드 컨테이너 */}
        <div 
          ref={slideBoxRef}
          className="relative mb-16 h-[500px] flex items-center justify-center"
          style={{ cursor: isMouseDown ? 'grabbing' : 'grab' }}
          onTouchStart={(e) => {
            setIsMouseDown(true);
            setStartPos(e.touches[0].clientX);
          }}
          onTouchMove={(e) => {
            if (isMouseDown) {
              e.stopPropagation();
              setEndPos(e.touches[0].clientX);
            }
          }}
          onTouchEnd={() => {
            setIsMouseDown(false);
          }}
        >
          <div
            ref={scrollRef}
            className="relative w-[280px] h-[280px] flex items-center justify-center"
            style={{ 
              perspective: translateZ * 1 + "px",
              transform: 'scale(1.8)'
            }}
          >
            <motion.ul
              ref={slideWrapRef}
              className="relative w-full h-full"
              style={{
                transformStyle: 'preserve-3d',
                rotateY: slideScroll,
                willChange: 'transform'
              }}
            >
              {products.map((product, idx) => (
                <li
                  key={product.id}
                  ref={(el) => (slideRef.current[idx] = el)}
                  className="absolute w-full h-full"
                  style={{
                    padding: '8px',
                    userSelect: 'none'
                  }}
                >
                  <div
                    className="relative w-full h-full rounded-lg overflow-hidden shadow-2xl cursor-pointer group"
                    style={{
                      background: '#454444',
                      // transform: 'scaleX(-1)'
                    }}
                  >
                    {/* 상품 이미지 */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[160px] pointer-events-none">
                      <img 
                        src={`/img/${product.image}`} 
                        alt={product.name}
                        className="w-full object-contain pointer-events-none"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      <div className="hidden w-full h-[200px] bg-gray-600 flex items-center justify-center text-white text-sm">
                        {product.name}
                      </div>
                    </div>

                    {/* 상품명 */}
                    <div 
                      className="absolute top-3 left-3 text-white font-bold text-xs"
                      style={{ transform: 'scaleX(-1)' }} // 텍스트 반전
                    >
                      {product.name}
                    </div>

                    {/* 호버 효과 */}
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300" />
                  </div>
                </li>
              ))}
            </motion.ul>
          </div>
        </div>

        {/* VIEW ALL MD 버튼 */}
        <div className="flex justify-center">
          <button className="relative group cursor-pointer transition-all duration-300">
            <svg xmlns="http://www.w3.org/2000/svg" width="200" height="59" viewBox="0 0 326 96" fill="none">
              <path d="M1 95V1H325V63.3654L298 95H1Z" 
                    stroke="white" 
                    strokeWidth="2" 
                    fill="transparent" 
                    className="group-hover:stroke-[#DF6D21] group-hover:fill-[#DF6D21] transition-all duration-300"/>
            </svg>
            
            <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-[14px] font-bold tracking-wider whitespace-nowrap">
              VIEW ALL MD
            </span>
          </button>
        </div>

      </div>
    </motion.section>
  );
}