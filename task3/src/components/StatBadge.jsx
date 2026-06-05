// ============================================================
// COMPONENT 1: StatBadge
// Menampilkan satu kotak statistik kecil (KDA, Win%, dll).
//
// Cara pakai:
//   <StatBadge label="KDA" value="4.2" />
// ============================================================

export default function StatBadge({ label, value }) {
  //                                ^^^^^  ^^^^^
  //                                Nama   Nilai
  //                          (diterima sebagai props dari luar)

  return (
    <div className="border border-white/20 px-3 py-2 text-center rounded">

      {/* Angka besar */}
      <p className="text-[#00f5ff] font-bold text-sm" style={{ fontFamily: "Orbitron" }}>
        {value}
      </p>

      {/* Label kecil */}
      <p className="text-gray-500 text-[10px] uppercase tracking-widest mt-0.5">
        {label}
      </p>

    </div>
  )
}
