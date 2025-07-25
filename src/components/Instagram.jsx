export default function Instagram() {
  const images = [
    { id: 1, src: 'in1.png' },
    { id: 2, src: 'in2.png' },
    { id: 3, src: 'in3.png' },
    { id: 4, src: 'in4.png' },
    { id: 5, src: 'in5.png' },
    { id: 6, src: 'in6.png' }
  ];


  const duplicatedImages = [...images, ...images];

  return (
    <section className="relative py-16 overflow-hidden" style={{backgroundColor: '#222222'}}>
      <div className="w-full">
        
        {/* 무한 스크롤 컨테이너 */}
        <div className="overflow-hidden">
          <div 
            className="flex"
            style={{
              animation: 'slide 25s linear infinite',
              width: 'calc(310px * 12 + 24px * 12)' // 이미지랑 마진 계산
            }}
          >
            {duplicatedImages.map((image, index) => (
              <div key={`${image.id}-${index}`} className="flex-shrink-0 mx-3 hover:pause">
                <div 
                  className="relative group cursor-pointer overflow-hidden" 
                  style={{
                    marginTop: index % 2 === 0 ? '0px' : '100px'
                  }}
                >
                  <img 
                    src={`/img/${image.src}`} 
                    alt="Instagram post"
                    className="object-cover transition-all duration-300 group-hover:scale-105"
                    style={{width: '310px', height: '413px'}}
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  <div className="hidden bg-gray-600 flex items-center justify-center text-white" style={{width: '310px', height: '413px'}}>
                    Instagram Post
                  </div>
                  
                  {/* 호버 오버레이 */}
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center">
                    <img 
                      src="/img/inslogo.png" 
                      alt="Instagram Logo"
                      className="w-12 h-12 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CSS 애니메이션 */}
      <style>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .hover\\:pause:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}