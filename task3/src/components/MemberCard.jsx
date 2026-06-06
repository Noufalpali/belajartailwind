export default function MemberCard({ initials, name, role, badge, stat1, stat2, avatarClass, isCaptain, isCoach }) {
  const borderCls = isCoach   ? 'border-[#7b2fff44] hover:border-[#7b2fff]'
                  : isCaptain ? 'border-[#00f5ff33] hover:border-[#00f5ff]'
                  :             'border-[#ffffff11] hover:border-[#00f5ff]'
  const bgCls     = isCoach   ? 'bg-[#7b2fff04]' : isCaptain ? 'bg-[#00f5ff04]' : 'bg-[#ffffff02]'
  const badgeCls  = isCoach   ? 'border-[#7b2fff] text-[#7b2fff]'
                  : isCaptain ? 'border-[#00f5ff] text-[#00f5ff]'
                  :             'border-[#ffffff22] text-gray-400'
  const hoverName = isCoach ? 'group-hover:text-[#7b2fff]' : 'group-hover:text-[#00f5ff]'
  const cornerType = isCoach ? 'corner-purple' : 'corner'

  return (
    <div className={`member-card relative p-6 border ${borderCls} ${bgCls} group transition-all duration-300`}>
      <div className={`${cornerType} tl`}/><div className={`${cornerType} tr`}/>
      <div className={`${cornerType} bl`}/><div className={`${cornerType} br`}/>

      {/* Avatar + Badge */}
      <div className="flex items-start justify-between mb-5">
        <div className={`avatar w-16 h-16 rounded flex items-center justify-center font-black text-2xl ${avatarClass}`}
          style={{fontFamily:'Orbitron'}}>
          {initials}
        </div>
        <span className={`text-[9px] font-black tracking-widest uppercase px-3 py-1 border ${badgeCls}`}
          style={{fontFamily:'Orbitron'}}>
          {badge}
        </span>
      </div>

      {/* Nama */}
      <h3 className={`font-black text-lg tracking-wider ${hoverName} transition-colors`} style={{fontFamily:'Orbitron'}}>
        {name}
      </h3>

      {/* Peran */}
      <p className="text-gray-500 text-xs tracking-widest uppercase mt-1 mb-4">{role}</p>

      {/* Stat */}
      <div className="flex gap-3 text-xs text-gray-500">
        <span className="px-2 py-1 border border-[#ffffff11]">{stat1}</span>
        <span className="px-2 py-1 border border-[#ffffff11]">{stat2}</span>
      </div>
    </div>
  )
}
