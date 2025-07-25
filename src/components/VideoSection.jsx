import { useState } from 'react';

export default function VideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center">
      <div className="w-full px-4 py-16">
        
        {/* CONTENTS 타이틀 */}
        <div className="flex justify-center mb-12 md:mb-16">
          <h2 className="text-[120px] md:text-[300px] font-bold text-white tracking-wider leading-none">
            CONTENTS
          </h2>
        </div>

        {/* 비디오 영역  */}
        <div className="flex justify-center mb-6 md:mb-8">
          <div className="relative">
            {!isVideoPlaying ? (
              // 썸네일 + 플레이 버튼
              <div 
                className="relative w-[580px] h-[326px] md:w-[1200px] md:h-[675px] rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                {/* 썸네일 배경 이미지 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/img/Thum.png')"
                  }}
                />

                {/* 플레이 버튼 */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="group-hover:scale-110 transition-transform">
                    <img 
                      src="/img/mdi_youtube.png" 
                      alt="Play Video" 
                      className="w-12 h-12 md:w-20 md:h-20 object-contain"
                      onError={(e) => {
                        // 이미지 로딩 실패 시 기본 플레이 버튼 표시
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    {/* 대체 플레이 버튼 */}
                    <div className="hidden w-12 h-12 md:w-20 md:h-20 bg-red-600 rounded-full items-center justify-center">
                      <svg className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                  </div>
                </div>


              </div>
            ) : (
              // 유툽 비디오
              <div className="w-[580px] h-[326px] md:w-[1200px] md:h-[675px] rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/S7sT7M0rFpM?start=757&autoplay=1&rel=0&modestbranding=1"
                  title="한화 이글스 영상"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            )}
          </div>
        </div>

        <div className="text-center">
          <div className="text-white text-xl md:text-4xl font-medium">
            8연승, 창단 최초 8경기 연속 선발승
          </div>
        </div>



      </div>
    </section>
  );
}
