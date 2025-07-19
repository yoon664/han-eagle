export default function Instagram() {
  const images = [
    { id: 1, src: 'in1.png' },
    { id: 2, src: 'in2.png' },
    { id: 3, src: 'in3.png' },
    { id: 4, src: 'in4.png' },
    { id: 5, src: 'in5.png' },
    { id: 6, src: 'in6.png' }
  ];

  return (
    <section className="relative py-16" style={{backgroundColor: '#222222'}}>
      <div className="max-w-7xl mx-auto px-4">
        
        {/* 인스타그램 지그재그 그리드 */}
        <div className="flex justify-center items-start space-x-6">
          
          {/* 첫 번째 컬럼 - 위 */}
          <div className="relative group cursor-pointer overflow-hidden" style={{marginTop: '0px'}}>
            <img 
              src={`/img/${images[0].src}`} 
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

          {/* 두 번째 컬럼 - 아래 */}
          <div className="relative group cursor-pointer overflow-hidden" style={{marginTop: '100px'}}>
            <img 
              src={`/img/${images[1].src}`} 
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

          {/* 세 번째 컬럼 - 위 */}
          <div className="relative group cursor-pointer overflow-hidden" style={{marginTop: '0px'}}>
            <img 
              src={`/img/${images[2].src}`} 
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

          {/* 네 번째 컬럼 - 아래 */}
          <div className="relative group cursor-pointer overflow-hidden" style={{marginTop: '100px'}}>
            <img 
              src={`/img/${images[3].src}`} 
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

          {/* 다섯 번째 컬럼 - 위 */}
          <div className="relative group cursor-pointer overflow-hidden" style={{marginTop: '0px'}}>
            <img 
              src={`/img/${images[4].src}`} 
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

          {/* 여섯 번째 컬럼 - 아래 */}
          <div className="relative group cursor-pointer overflow-hidden" style={{marginTop: '100px'}}>
            <img 
              src={`/img/${images[5].src}`} 
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
      </div>
    </section>
  );
}