function SkillCard(props) {
  return (
    <div className="transition-all duration-200 ease-out py-2 px-4 font-medium hover:text-black bg-linear-to-br from-zinc-50 to-zinc-100 hover:from-sky-400 hover:to-purple-400 border border-zinc-400 border-solid rounded-xl shadow-sm hover:shadow-lg shadow-indigo-950 inset-shadow-sm inset-shadow-zinc-50 hover:inset-shadow-white">
      <span className="font-lg md:font-md font-[Montserrat]">{props.skill}</span>
    </div>
  )
}

export default SkillCard;
