import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-800 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="font-bold text-xl text-blue-600 dark:text-blue-400">Mukul Singh</div>
        <ul className="flex gap-6 text-md font-medium">
          <li><Link href="#home" className="hover:text-blue-500 transition">Home</Link></li>
          <li><Link href="#about" className="hover:text-blue-500 transition">About</Link></li>
          <li><Link href="#projects" className="hover:text-blue-500 transition">Projects</Link></li>
          <li><Link href="#skills" className="hover:text-blue-500 transition">Skills</Link></li>
          <li><Link href="#contact" className="hover:text-blue-500 transition">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
