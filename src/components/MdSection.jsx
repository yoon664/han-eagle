export default function MdSection() {
  const products = [
    { id: 1, name: '후디(ON)봉제인형', image: 'md1.png' },
    { id: 2, name: '2025 어센틱 유니폼', image: 'md2.png' },
    { id: 3, name: '2025 어센틱 유니폼', image: 'md3.png' },
    { id: 4, name: '2025 어센틱 유니폼', image: 'md4.png' },
    { id: 5, name: '수리 캐릭터 후드', image: 'md5.png' }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-16" style={{backgroundColor: '#222222'}}>
      <div className="max-w-7xl mx-auto px-4 w-full">
        
        {/* MD 타이틀 */}
        <div className="text-center mb-16">
          <h2 className="text-[300px] font-bold text-white tracking-wider leading-none">MD</h2>
        </div>

        {/* MD 상품 그리드 */}
        <div className="flex justify-center items-center space-x-8 mb-16">
          {products.map((product) => (
            <div key={product.id} className="text-center">
              {/* 상품 이미지 */}
              <div className="w-64 h-80 bg-gray-700 rounded-lg overflow-hidden mb-4 group cursor-pointer">
                <img 
                  src={`/img/${product.image}`} 
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden w-full h-full bg-gray-600 flex items-center justify-center text-white">
                  {product.name}
                </div>
              </div>
              
              {/* 상품명 */}
              <div className="text-white text-lg font-medium">
                {product.name}
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL MD 버튼 */}
        <div className="flex justify-center">
          <button className="border-2 border-white px-8 py-4 text-white font-medium hover:bg-[#DF6D21] hover:border-[#DF6D21] transition-all duration-300 tracking-wider">
            VIEW ALL MD
          </button>
        </div>

      </div>
    </section>
  );
}