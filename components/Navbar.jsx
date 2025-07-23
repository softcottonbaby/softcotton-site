// components/Navbar.jsx
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-[0_2px_10px_rgba(255,255,255,0.05)]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="/logonavbar/logonavbar.png"
            alt="SoftCotton Logo"
            className="h-10 w-auto brightness-140"
          />
        </Link>

        {/* Navigation Links */}
        <div className="flex items-center gap-6">
          <Link
            href="/leaderboard"
            className="text-white/90 hover:text-white transition-colors duration-200 font-medium text-sm tracking-wide"
          >
            LEADERBOARD
          </Link>
        </div>
      </div>
    </nav>
  );
}
