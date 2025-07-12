export default function Header() {
  return (
    <header className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">HANHWA EAGLES</h1>
      <nav className="space-x-4">
        <a href="#" className="hover:text-orange-400">EAGLES</a>
        <a href="#" className="hover:text-orange-400">PLAYERS</a>
        <a href="#" className="hover:text-orange-400">GAME</a>
        <a href="#" className="hover:text-orange-400">SHOP</a>
      </nav>
    </header>
  );
}
