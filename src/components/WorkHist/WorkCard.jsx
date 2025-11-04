import userInfo from "../../assets/userInfo";

function WorkCard(props) {
  return (
    <div className="transition-all duration-200 w-72 md:w-96 flex-none p-4 bg-zinc-100 border border-zinc-400 border-solid">
      <h2 className="font-serif text-xl text-zinc-800">{props.employer}</h2>
      <p className="text-md  font-[Montserrat] text-zinc-600">{props.title}</p>
      <p className="text-sm font-[Montserrat] text-zinc-500">{props.startDate} - {props.endDate}</p>
      <hr className="w-3/4 mx-auto font-[Montserrat] text-zinc-400/50 my-2" />
      <ul className="h-auto flex flex-col justify-between">
        {props.description.map(i => <li key={i} className="font-[Montserrat] odd:text-zinc-700 even:text-zinc-900 my-2">{i}</li>)}
      </ul>
    </div>
  )
}

export default WorkCard;
