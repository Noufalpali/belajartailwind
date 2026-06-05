// ============================================================
// App.jsx — Halaman utama
// Di sini data member disimpan dan MemberCard dipanggil.
// ============================================================

import MemberCard from "./components/MemberCard"

export default function App() {

  // Data semua member — edit di sini untuk ubah isi kartu
  // Untuk tambah member: copy satu baris, paste, ganti isinya
  const members = [
    { inisial: "MK", nama: "MAUL KORVO",    peran: "Captain · ML",      kda: "4.2", winrate: "71" },
    { inisial: "FH", nama: "FARHAN MARTIS", peran: "Carry · ML",        kda: "5.8", winrate: "68" },
    { inisial: "SB", nama: "SYAHBI BIEEE",  peran: "Support · ML",      kda: "3.1", winrate: "65" },
    { inisial: "NP", nama: "NOPAL SHANZIE", peran: "Gold Lane · ML",    kda: "5.2", winrate: "65" },
    { inisial: "ZK", nama: "ZIKRI ZIGGER",  peran: "Duelist · Valorant", kda: "3.8", winrate: "62" },
    { inisial: "YS", nama: "YOSIA PULU",    peran: "Sentinel · Valorant", kda: "3.5", winrate: "64" },
  ]

  return (
    <div className="min-h-screen px-6 py-16 max-w-4xl mx-auto">

      {/* Judul halaman */}
      <div className="text-center mb-12">
        <p className="text-[#00f5ff] text-xs tracking-[0.4em] uppercase mb-2">
          Anomali 2.0 · Est. 2021
        </p>
        <h1 className="text-5xl font-black text-white" style={{ fontFamily: "Orbitron" }}>
          The Squad
        </h1>
        <p className="text-gray-500 mt-3 text-sm">
          {members.length} member aktif
        </p>
      </div>

      {/* Grid kartu */}
      {/*
        .map() = looping otomatis
        untuk setiap data di array "members",
        React akan membuat satu <MemberCard>
      */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {members.map((m) => (
          <MemberCard
            key={m.inisial}     // wajib ada saat pakai .map()
            inisial={m.inisial}
            nama={m.nama}
            peran={m.peran}
            kda={m.kda}
            winrate={m.winrate}
          />
        ))}
      </div>

    </div>
  )
}
