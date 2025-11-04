function Edu(props) {
  return (
    <div className="transition-all duration-200 max-w-lg p-4 mx-auto flex items-center justify-between gap-3 border border-amber-300 border-solid rounded-full bg-amber-200 shadow-md hover:shadow-lg shadow-indigo-950 inset-shadow-sm inset-shadow-amber-100">
      <span className="size-3 border border-amber-400 border-solid rounded-full bg-amber-300 shadow-md shadow-indigo-950 inset-shadow-sm inset-shadow-amber-100"></span>
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl text-center font-serif text-zinc-800/80">{props.education.name}</h2>
        <p className="text-zinc-800/80 font-[Montserrat]">{props.education.location}</p>
        <p className="text-zinc-600/80 text-center font-[Montserrat]">Graduated <b>{props.education.graduated}</b> with a <b>{props.education.degree}</b>.</p>
      </div>
      <span className="size-3 border border-amber-400 border-solid rounded-full bg-amber-300 shadow-md shadow-indigo-950 inset-shadow-sm inset-shadow-amber-100"></span>
    </div>
  )
}

export default Edu;
