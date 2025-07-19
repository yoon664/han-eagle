import { useState } from 'react';

export default function VideoSection() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center" style={{backgroundColor: '#222222'}}>
      <div className="max-w-7xl mx-auto px-4 py-16">
        
        {/* CONTENTS 타이틀 */}
        <div className="text-center mb-16">
          <h2 className="text-9xl font-bold text-white tracking-wider">CONTENTS</h2>
        </div>

        {/* 비디오 영역 */}
        <div className="flex justify-center mb-8">
          <div className="relative">
            {!isVideoPlaying ? (
              // 썸네일 + 플레이 버튼
              <div 
                className="relative w-[800px] h-[450px] bg-gray-800 rounded-lg overflow-hidden cursor-pointer group"
                onClick={() => setIsVideoPlaying(true)}
              >
                {/* 썸네일 배경 이미지 */}
                <div 
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: "url('/img/video-thumbnail.jpg')" // 썸네일 이미지
                  }}
                >
                </div>

                {/* 8연승 텍스트 오버레이 */}
                <div className="absolute top-8 left-8 z-10">
                  <div className="text-white text-6xl font-bold">썸네일추가</div>
                </div>

                {/* 플레이 버튼 */}
                <div className="absolute inset-0 flex items-center justify-center z-10">
                  <div className="group-hover:scale-110 transition-transform">
                    <img 
                      src="/img/mdi_youtube.png" 
                      alt="Play Video" 
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                </div>

                {/* 하단 시간 표시 */}
                <div className="absolute bottom-4 right-4 z-10">
                  <div className="bg-black bg-opacity-70 text-white px-3 py-1 rounded text-sm">
                    16:44
                  </div>
                </div>
              </div>
            ) : (
              // 실제 YouTube 비디오
              <div className="w-[800px] h-[450px] rounded-lg overflow-hidden">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/S7sT7M0rFpM?start=757&autoplay=1&rel=0&modestbranding=1"
                  title="한화 이글스 영상"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            )}
          </div>
        </div>

        {/* 비디오 설명 텍스트 */}
        <div className="text-center">
          <div className="text-white text-2xl font-medium">
            8연승, 창단 최초 8경기 연속 선발승
          </div>
        </div>

      </div>
    </section>
  );
}