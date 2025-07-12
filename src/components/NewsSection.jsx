
export default function NewsSection() {
  const news = [
    { id: 1, title: '한화이글스, 창단 40주년 기념 레거시 유니폼 화보 공개', date: '2025.04.06' },
    { id: 2, title: '한화이글스, 에스앤케이병원과 후원 협약', date: '2025.04.04' },
    { id: 3, title: '한화이글스, 정한방병원과 후원 협약', date: '2025.04.03' },
    { id: 4, title: '개인정보처리방침 변경 고지', date: '2025.03.28' },
    { id: 5, title: '대전 한화생명 볼파크, 시즌 개막 준비 완료', date: '2025.03.27' },
  ];

  return (
    <section className="bg-black text-white py-10 px-4">
      <h3 className="text-2xl font-bold mb-6 text-center">NEWS</h3>
      <ul className="space-y-4 max-w-md mx-auto">
        {news.map(item => (
          <li key={item.id} className="flex justify-between border-b border-gray-700 pb-2">
            <span>{item.title}</span>
            <span className="text-gray-400 text-sm">{item.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
