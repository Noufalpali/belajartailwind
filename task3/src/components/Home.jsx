import { useEffect, useRef, useState } from 'react'

// Counter animasi naik dari 0 ke target
function Counter({ target, color }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const started = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true
        const step = target / (1500 / 16)
        let current = 0
        const tick = () => {
          current = Math.min(current + step, target)
          setCount(Math.floor(current))
          if (current < target) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      }
    }, { threshold: 0.5 })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [target])

  return <div ref={ref} className={`font-black text-3xl ${color}`} style={{fontFamily:'Orbitron'}}>{count}</div>
}

export default function Home() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative overflow-hidden">

      {/* Background */}
      <div className="grid-bg absolute inset-0 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#00f5ff0d] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-[#7b2fff0d] blur-[100px] pointer-events-none" />

      <div className="text-center max-w-4xl relative z-10 fade-in visible">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 border border-[#00f5ff33] bg-[#00f5ff0a] text-[#00f5ff] text-xs font-black px-5 py-2 tracking-[0.3em] uppercase mb-8"
          style={{fontFamily:'Orbitron'}}>
          <span className="w-1.5 h-1.5 rounded-full bg-[#00f5ff] blink" />
          Est. 2021 · Indonesian Esport Team
        </div>

        {/* Judul glitch */}
        <h1 className="font-black text-6xl md:text-8xl leading-none mb-4 tracking-tight" style={{fontFamily:'Orbitron'}}>
          <span className="glitch-text" data-text="ANOMALI">ANOMALI</span><br/>
          <span className="text-stroke text-8xl md:text-9xl">2.0</span>
        </h1>

        {/* Deskripsi */}
        <p className="text-gray-400 text-lg md:text-xl leading-relaxed mb-10 max-w-xl mx-auto">
          Kami bukan sekadar tim. Kami adalah <span className="text-white font-semibold">anomali</span> di dunia esport — bermain dengan strategi, menang dengan kekeluargaan.
        </p>

        {/* Tombol */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#member"
            className="bg-[#00f5ff] text-black font-black px-10 py-3.5 text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300 clip-btn shadow-xl shadow-[#00f5ff33]"
            style={{fontFamily:'Orbitron'}}>
            Lihat Tim
          </a>
          <a href="#about"
            className="border border-[#ffffff22] text-gray-400 font-black px-10 py-3.5 text-sm tracking-widest uppercase hover:border-[#00f5ff] hover:text-[#00f5ff] transition-all duration-300"
            style={{fontFamily:'Orbitron'}}>
            Tentang Kami
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-3 gap-px bg-[#ffffff08] border border-[#ffffff08]">
          <div className="bg-[#060610] py-6 px-4 text-center">
            <Counter target={5} color="text-[#00f5ff]" />
            <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">Tahun Berdiri</div>
          </div>
          <div className="bg-[#060610] py-6 px-4 text-center border-x border-[#ffffff08]">
            <Counter target={12} color="text-[#7b2fff]" />
            <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">Member Aktif</div>
          </div>
          <div className="bg-[#060610] py-6 px-4 text-center">
            <Counter target={47} color="text-[#00f5ff]" />
            <div className="text-xs text-gray-500 tracking-widest uppercase mt-1">Tournament Win</div>
          </div>
        </div>

      </div>
    </section>
  )
}
