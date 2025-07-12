export default function HeroSection() {
  return (
    <section className="relative h-[80vh] bg-black text-white flex flex-col justify-center items-center">

        {/* Team Photo */}
        <div className="flex justify-center mb-8">
            <div className="w-96 h-48 bg-gray-800 bg-opacity-70 rounded-lg flex items-center justify-center">
            <span className="text-gray-400 text-lg">7명 선수 단체사진</span>
            </div>
        </div>

        <div className="flex justify-end mb-4">
                <p className="text-white text-lg leading-relaxed drop-shadow-lg">
                  독수리는 추진력을 얻어<br />
                  더욱 더 높이 비상한다
                </p>
              </div>

        <h2 className="text-5xl font-extrabold">RIDE THE STORM</h2>

        <button className="mt-6 px-6 py-2 border border-white hover:bg-[#DF6D21] transition">
            VIEW ALL ABOUT
        </button>
    </section>
  );
}
