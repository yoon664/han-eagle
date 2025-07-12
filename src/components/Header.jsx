export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
      >
        <source src="/img/HanwhaEagles_BrandFilm.webm" type="video/webm" />
      </video>


      <h1 className="text-xl font-bold">HANHWA EAGLES</h1>
      <nav className="space-x-8">
        <a href="#" className="hover:text-orange-400">EAGLES</a>
        <a href="#" className="hover:text-orange-400">PLAYERS</a>
        <a href="#" className="hover:text-orange-400">GAME</a>
        <a href="#" className="hover:text-orange-400">SHOP</a>
      </nav>

      <div className="">
        <img src="/img/ticket.png" alt="img" />
        <img src="/img/login.png" alt="img" />
      </div>
      
    </header>
  );
}
