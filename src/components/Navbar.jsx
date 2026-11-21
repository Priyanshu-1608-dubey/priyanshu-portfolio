import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo.png';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Offer Letters', path: '/offer-letters' },
  { name: 'Certificates', path: '/certificates' },
  { name: 'Achievements', path: '/achievements' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/75 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <img
            src={logo}
            alt="Logo"
            className="w-11 h-11 rounded-xl object-cover shadow-lg border border-white/15 group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                  isActive
                    ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/30'
                    : 'text-zinc-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 rounded-xl text-zinc-300 hover:bg-white/10"
          aria-label="Toggle Menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-zinc-950/95 backdrop-blur-xl border-b border-white/10 px-6 py-4 space-y-2">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-semibold ${
                  isActive
                    ? 'bg-indigo-600 text-white'
                    : 'text-zinc-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}