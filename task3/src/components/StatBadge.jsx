export default function StatBadge({ label, value }) {

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
