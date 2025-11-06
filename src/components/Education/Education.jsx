import Edu from './Edu';
import userInfo from "../../assets/userInfo";

function Education() {
  return (
    <section id="Education" className='w-full text-zinc-200 py-12'>
      <div className='w-9/10 max-w-6xl mx-auto'>
        <h1 className='font-serif text-4xl text-center mb-6'>Education</h1>
        {userInfo.education.map(e => <Edu key={e} education={e} />)}
      </div>
    </section>
  )
}

export default Education;
