import SkillCard from './SkillCard';

function SkillsContainer(props) {
  return (
    <div className='flex flex-col gap-4 items-center justify-center flex-wrap pb-2'>
      <h2 className='text-xl tracking-tight md:tracking-normal font-serif'>{props.label}</h2>
      <div className='flex flex-row flex-wrap gap-4 items-center justify-center'>
        {props.skills.map(skill => <SkillCard key={skill} skill={skill} />)}
      </div>
    </div>
  )
}

export default SkillsContainer;
