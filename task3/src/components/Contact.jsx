import { useState } from 'react'
import { useFadeIn } from '../hooks/useFadeIn'

export default function Contact() {
  const ref = useFadeIn()
  const [form, setForm] = useState({ name:'', email:'', message:'' })
  const [feedback, setFeedback] = useState({ text:'', isError:false, show:false })

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setFeedback({ text:'[ ERROR ] Semua field harus diisi!', isError:true, show:true })
    } else if (!form.email.includes('@')) {
      setFeedback({ text:'[ ERROR ] Format email tidak valid!', isError:true, show:true })
    } else {
      setFeedback({ text:`[ OK ] Pesan dari ${form.name} berhasil dikirim!`, isError:false, show:true })
      setForm({ name:'', email:'', message:'' })
    }
    setTimeout(() => setFeedback(f => ({...f, show:false})), 4000)
  }

  const inputCls = "w-full bg-transparent border border-[#ffffff15] px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#00f5ff] transition-colors duration-300"
  const labelCls = "text-[10px] text-[#00f5ff] tracking-[0.3em] uppercase block mb-2"

  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-[#00f5ff] to-transparent" />

      <div ref={ref} className="fade-in max-w-xl mx-auto text-center">
        <p className="text-[#00f5ff] text-xs tracking-[0.4em] uppercase mb-3" style={{fontFamily:'Orbitron'}}>
          // 03 — Contact
        </p>
        <h2 className="font-black text-5xl md:text-6xl mb-4" style={{fontFamily:'Orbitron'}}>
          Hubungi <span className="text-[#00f5ff]">Kami</span>
        </h2>
        <p className="text-gray-500 text-sm mb-12 leading-relaxed">
          Mau bergabung, kolaborasi sponsor, atau sekadar menyapa? Kirim pesan dan tim kami siap merespons.
        </p>

        <form onSubmit={handleSubmit} className="text-left space-y-5">
          <div>
            <label className={labelCls} style={{fontFamily:'Orbitron'}}>Nama Lengkap</label>
            <input type="text" name="name" value={form.name} onChange={handleChange}
              placeholder="Masukkan nama kamu..." className={inputCls} />
          </div>
          <div>
            <label className={labelCls} style={{fontFamily:'Orbitron'}}>Email</label>
            <input type="email" name="email" value={form.email} onChange={handleChange}
              placeholder="email@kamu.com" className={inputCls} />
          </div>
          <div>
            <label className={labelCls} style={{fontFamily:'Orbitron'}}>Pesan</label>
            <textarea name="message" value={form.message} onChange={handleChange}
              rows="4" placeholder="Tulis pesanmu di sini..."
              className={inputCls + " resize-none"} />
          </div>
          <button type="submit"
            className="w-full bg-[#00f5ff] text-black font-black py-4 text-sm tracking-widest uppercase hover:bg-white transition-colors duration-300 shadow-lg shadow-[#00f5ff22]"
            style={{fontFamily:'Orbitron'}}>
            Kirim Pesan →
          </button>
          {feedback.show && (
            <p className={`text-center text-xs tracking-widest ${feedback.isError ? 'text-red-400' : 'text-[#00f5ff]'}`}
              style={{fontFamily:'Orbitron'}}>
              {feedback.text}
            </p>
          )}
        </form>

        <div className="mt-12 pt-8 border-t border-[#ffffff08] flex justify-center gap-8 text-xs text-gray-600 tracking-widest uppercase"
          style={{fontFamily:'Orbitron'}}>
          {['Instagram','Discord','YouTube','TikTok'].map(s => (
            <a key={s} href="#" className="hover:text-[#00f5ff] transition-colors">{s}</a>
          ))}
        </div>
      </div>
    </section>
  )
}
