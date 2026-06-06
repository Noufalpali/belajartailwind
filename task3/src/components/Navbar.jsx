import { useState, useEffect } from 'react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  // Deteksi scroll untuk efek blur navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Tutup menu saat link diklik
  const closeMenu = () => setMenuOpen(false)

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${scrolled ? 'scrolled' : ''}`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#7b2fff] flex items-center justify-center font-black text-sm text-black shadow-lg shadow-[#00f5ff44] group-hover:shadow-[#00f5ff88] transition-all duration-300"
            style={{fontFamily:'Orbitron'}}>A</div>
          <span className="font-black text-lg text-white tracking-widest" style={{fontFamily:'Orbitron'}}>
            ANOMALI<span className="text-[#00f5ff]"> 2.0</span>
          </span>
        </a>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-8 font-semibold text-sm tracking-wider text-gray-400 uppercase">
          {['home','about','member','contact'].map(id => (
            <li key={id}>
              <a href={`#${id}`} className="hover:text-[#00f5ff] transition-colors duration-300 capitalize">
                {id}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Join Us */}
        <a href="#contact"
          className="hidden md:inline-flex border border-[#00f5ff] text-[#00f5ff] font-black px-5 py-2 text-xs tracking-widest uppercase hover:bg-[#00f5ff] hover:text-black transition-all duration-300 clip-btn"
          style={{fontFamily:'Orbitron'}}>
          Join Us
        </a>

        {/* Tombol hamburger mobile */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`md:hidden flex flex-col gap-1.5 cursor-pointer ${menuOpen ? 'ham-open' : ''}`}
          aria-label="Menu">
          <span className="ham-bar w-6 h-0.5 bg-white transition-all duration-300 block"></span>
          <span className="ham-bar w-6 h-0.5 bg-[#00f5ff] transition-all duration-300 block"></span>
          <span className="ham-bar w-6 h-0.5 bg-white transition-all duration-300 block"></span>
        </button>
      </div>

      {/* Menu mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-[#060610]/95 backdrop-blur-md border-t border-[#00f5ff22] px-6 py-6 flex flex-col gap-5 text-sm font-semibold tracking-widest uppercase text-gray-400">
          {['home','about','member','contact'].map(id => (
            <a key={id} href={`#${id}`} onClick={closeMenu}
              className="hover:text-[#00f5ff] transition capitalize">{id}</a>
          ))}
        </div>
      )}
    </nav>
  )
}
