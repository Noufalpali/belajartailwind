import { useFadeIn } from '../hooks/useFadeIn'

const timeline = [
  { year:'2021', text:'Tim didirikan, lineup pertama terbentuk', color:'#00f5ff' },
  { year:'2022', text:'Juara debut pertama, debut turnamen warkop', color:'#7b2fff' },
  { year:'2023', text:'Rebranding ke Anomali 2.0, roster baru', color:'#00f5ff' },
  { year:'2024–2026', text:'Ekspansi multi-game & turnamen lokal', color:'#7b2fff' },
]

const games = [
  { name:'MOBILE LEGENDS', status:'ACTIVE',  color:'text-[#00f5ff]' },
  { name:'VALORANT',       status:'ACTIVE',  color:'text-[#00f5ff]' },
  { name:'FREE FIRE',      status:'STANDBY', color:'text-[#7b2fff]' },
  { name:'PUBG MOBILE',    status:'STANDBY', color:'text-[#7b2fff]' },
]

export default function About() {
  const ref1 = useFadeIn()
  const ref2 = useFadeIn()
  const ref3 = useFadeIn()

  return (
    <section id="about" className="py-28 px-6 relative">
      <div className="max-w-5xl mx-auto">

        {/* Judul */}
        <div ref={ref1} className="fade-in mb-16">
          <p className="text-[#00f5ff] text-xs tracking-[0.4em] uppercase mb-3" style={{fontFamily:'Orbitron'}}>
            // 01 — About
          </p>
          <h2 className="font-black text-5xl md:text-6xl leading-tight" style={{fontFamily:'Orbitron'}}>
            Tentang <br/><span className="text-stroke-sm">Anomali 2.0</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* Teks kiri */}
          <div ref={ref2} className="fade-in space-y-6 text-gray-400 leading-relaxed">
            <p>
              <span className="text-white font-semibold">Anomali 2.0</span> didirikan pada tahun{' '}
              <span className="text-[#00f5ff] font-semibold">2021</span> oleh sekelompok gamer ngawur
              yang percaya bahwa esport iseng bisa bersaing di level tertinggi.
            </p>
            <p>
              Nama <em className="text-white">"Anomali"</em> dipilih karena kami berbeda — bukan hanya
              dalam cara bermain, tapi dalam filosofi tim:{' '}
              <strong className="text-white">disiplin, strategi, mental, dan hal aneh lainnya</strong> adalah fondasi segalanya.
            </p>
            <p>
              Versi <span className="text-[#7b2fff] font-semibold">2.0</span> melambangkan regenerasi —
              tim yang terus berevolusi, merekrut talenta terabsurd, dan tidak mudah di tebak.
            </p>

            {/* Timeline */}
            <div className="mt-8 space-y-4">
              {timeline.map(t => (
                <div key={t.year} className="flex gap-4 items-start">
                  <div className="w-2 h-2 rounded-full mt-1.5 shrink-0" style={{backgroundColor:t.color}} />
                  <div>
                    <span className="font-black text-sm" style={{fontFamily:'Orbitron', color:t.color}}>{t.year}</span>
                    {' '}<span className="text-gray-500 text-sm">— {t.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Kartu game kanan */}
          <div ref={ref3} className="fade-in">
            <div className="relative p-8 border border-[#00f5ff22] bg-[#00f5ff04]">
              <div className="corner tl"/><div className="corner tr"/>
              <div className="corner bl"/><div className="corner br"/>
              <p className="text-[#00f5ff] text-xs tracking-widest uppercase mb-6" style={{fontFamily:'Orbitron'}}>
                Game yang dimainkan
              </p>
              <div className="space-y-4">
                {games.map((g, i) => (
                  <div key={g.name}
                    className={`flex items-center justify-between py-3 ${i < games.length-1 ? 'border-b border-[#ffffff08]' : ''}`}>
                    <span className="font-black text-sm tracking-wider" style={{fontFamily:'Orbitron'}}>{g.name}</span>
                    <span className={`text-xs ${g.color}`} style={{fontFamily:'Orbitron'}}>{g.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
