// ============================================================
// COMPONENT 2: MemberCard
// Menampilkan kartu profil satu anggota tim.
//
// Cara pakai:
//   <MemberCard
//     inisial="MK"
//     nama="MAUL KORVO"
//     peran="Captain · ML"
//     kda="4.2"
//     winrate="71"
//   />
// ============================================================

// Kita pakai StatBadge di dalam kartu ini
import StatBadge from "./StatBadge"

export default function MemberCard({ inisial, nama, peran, kda, winrate }) {
  //                                  ^^^^^^   ^^^^   ^^^^^  ^^^  ^^^^^^^
  //                              Props yang diterima dari App.jsx

  return (
    <div className="border border-white/10 bg-white/5 p-6 rounded-xl hover:border-[#00f5ff] transition-all duration-300">

      {/* Baris atas: Avatar + Nama */}
      <div className="flex items-center gap-4 mb-4">

        {/* Kotak inisial */}
        <div
          className="w-14 h-14 rounded-lg bg-gradient-to-br from-[#00f5ff] to-[#7b2fff] flex items-center justify-center text-black font-bold text-lg shrink-0"
          style={{ fontFamily: "Orbitron" }}
        >
          {inisial}
        </div>

        {/* Nama dan peran */}
        <div>
          <h3 className="text-white font-bold text-sm leading-tight" style={{ fontFamily: "Orbitron" }}>
            {nama}
          </h3>
          <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
            {peran}
          </p>
        </div>

      </div>

      {/* Garis pemisah */}
      <div className="border-t border-white/10 my-4" />

      {/* Statistik — StatBadge menerima props label dan value */}
      <div className="flex gap-3">
        <StatBadge label="KDA"  value={kda} />
        <StatBadge label="Win%" value={winrate + "%"} />
      </div>

    </div>
  )
}
