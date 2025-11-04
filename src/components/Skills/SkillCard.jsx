function SkillCard(props) {
  return (
    <div className="transition-all duration-200 p-2 bg-zinc-100 hover:bg-zinc-50 border border-zinc-400 border-solid rounded-xl shadow-sm hover:shadow-lg shadow-indigo-950 inset-shadow-sm inset-shadow-zinc-50 hover:inset-shadow-white">
      <span className="font-lg md:font-md font-[Montserrat]">{props.skill}</span>
    </div>
  )
}

export default SkillCard;
