import SkillsContainer from './SkillsContainer';
import userInfo from '../../assets/userInfo';

function Skills() {
  return (
    <section id="Skills" className='w-full bg-zinc-200 text-zinc-800 py-6'>
      <div className='w-9/10 max-w-6xl mx-auto'>
        <div className="flex flex-col items-center justify-center gap-4">
          <h1 className='font-serif text-4xl md:text-3xl text-center'>Skills</h1>
          <SkillsContainer label="Soft Skills" skills={userInfo.skills.soft} />
          <SkillsContainer label="Technical Skills" skills={userInfo.skills.technical} />
        </div>
      </div>
    </section>
  )
}

export default Skills;
