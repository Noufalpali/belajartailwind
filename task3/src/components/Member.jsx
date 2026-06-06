import { useFadeIn } from '../hooks/useFadeIn'
import MemberCard from './MemberCard'

const ROSTER = [
  { initials:'MK',  name:'MAUL "KORVO"',       role:'In-Game Leader · ML',    badge:'Captain',    stat1:'KDA 4.2',   stat2:'Win% 71', avatarClass:'bg-gradient-to-br from-[#00f5ff] to-[#7b2fff] text-black', isCaptain:true },
  { initials:'JSR', name:'JEFRI "SIR MARTIS"', role:'Hyper Carry · ML',       badge:'Carry',      stat1:'KDA 5.8',   stat2:'Win% 68', avatarClass:'bg-gradient-to-br from-[#7b2fff] to-[#ff2fa0] text-white' },
  { initials:'SB',  name:'SYAHBI "BIEEE"',     role:'Support/Roam · ML',      badge:'Support',    stat1:'Assist 89%',stat2:'Win% 65', avatarClass:'bg-gradient-to-br from-[#00f5ff] to-[#0080ff] text-black' },
  { initials:'NS',  name:'NOPAL "SHANZIE"',    role:'Gold Laner · ML',        badge:'Gold Laner', stat1:'KDA 5.2',   stat2:'Win% 65', avatarClass:'bg-gradient-to-br from-[#00f5ff] to-[#0080ff] text-black' },
  { initials:'ZZ',  name:'ZIKRI "ZIGGER"',     role:'Duelist · Valorant',     badge:'Duelist',    stat1:'HS% 42',    stat2:'Win% 62', avatarClass:'bg-gradient-to-br from-[#ff6b00] to-[#ff2fa0] text-white' },
  { initials:'YP',  name:'YOSIA "PULU"',       role:'Sentinel · Valorant',    badge:'Sentinel',   stat1:'ACS 220',   stat2:'Win% 64', avatarClass:'bg-gradient-to-br from-[#00ff88] to-[#00f5ff] text-black' },
  { initials:'RR',  name:'ROKKY "ROCK"',       role:'Head Coach · All Games', badge:'Coach',      stat1:'Exp 8yr',   stat2:'WR 74%',  avatarClass:'bg-gradient-to-br from-[#7b2fff] to-[#2f00ff] text-white',  isCoach:true  },
]

export default function Member() {
  const titleRef = useFadeIn()

  return (
    <section id="member" className="py-28 px-6 bg-[#03030d] relative">
      <div className="scanline absolute inset-0 pointer-events-none" />
      <div className="max-w-5xl mx-auto relative z-10">

        {/* Judul */}
        <div ref={titleRef} className="fade-in mb-16 text-center">
          <p className="text-[#00f5ff] text-xs tracking-[0.4em] uppercase mb-3" style={{fontFamily:'Orbitron'}}>
            // 02 — Roster
          </p>
          <h2 className="font-black text-5xl md:text-6xl" style={{fontFamily:'Orbitron'}}>
            The <span className="text-[#00f5ff]">Squad</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-lg mx-auto text-sm">
            Para pemain terbaik yang membawa nama Anomali 2.0 ke pentas kompetitif.
          </p>
        </div>

        {/* Grid kartu */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {ROSTER.map(m => (
            <MemberCard key={m.initials} {...m} />
          ))}
        </div>

      </div>
    </section>
  )
}
