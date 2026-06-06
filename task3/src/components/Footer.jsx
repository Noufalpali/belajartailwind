export default function Footer() {
  return (
    <footer className="border-t border-[#ffffff08] bg-[#03030d] py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">

        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded bg-gradient-to-br from-[#00f5ff] to-[#7b2fff] flex items-center justify-center font-black text-xs text-black"
            style={{fontFamily:'Orbitron'}}>A</div>
          <span className="font-black text-sm tracking-widest" style={{fontFamily:'Orbitron'}}>
            ANOMALI <span className="text-[#00f5ff]">2.0</span>
          </span>
        </div>

        <p className="text-xs text-gray-600 tracking-wide">
          © 2021–2026 Anomali 2.0 Esport Team · All Rights Reserved
        </p>

        <div className="flex gap-6 text-xs text-gray-600 tracking-widest uppercase" style={{fontFamily:'Orbitron'}}>
          {['home','about','member','contact'].map(id => (
            <a key={id} href={`#${id}`} className="hover:text-white transition capitalize">{id}</a>
          ))}
        </div>

      </div>
    </footer>
  )
}
