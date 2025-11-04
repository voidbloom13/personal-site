import { useState } from 'react';
import userInfo from '../../assets/userInfo';
import WorkCard from './WorkCard';

function WorkHist() {
  const [activeSlide, setActiveSlide] = useState(0);

  function previous() {
    activeSlide <= 0 ? setActiveSlide(userInfo.jobs.length - 1) : setActiveSlide(activeSlide - 1);
  }

  function next() {
    activeSlide >= userInfo.jobs.length - 1 ? setActiveSlide(0) : setActiveSlide(activeSlide + 1);
  }

  return (
    <section id="WorkHistory" className='w-full bg-zinc-200 text-zinc-800 py-6 mx-auto z-0'>
      <div className='w-9/10 max-w-6xl mx-auto'>
        <h1 className='font-serif text-4xl md:text-3xl text-center mb-6'>Work History</h1>
        <div className='relative overflow-hidden w-72 md:w-96 mx-auto'>
          <div className="transform-translate duration-500 flex flex-row row-start-1 col-span-3 md:col-auto" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {userInfo.jobs.map((job, index) => <WorkCard key={job.employer} activeSlide={index} employer={job.employer} title={job.title} startDate={job.startDate} endDate={job.endDate} description={job.description} />)}
          </div>
          <div className='flex flex-row justify-between mt-4'>
            <i onClick={previous} className='fa-solid fa-chevron-left text-3xl justify-self-end row-start-2 md:row-start-1 col-start-1 z-1' />
            <div className='flex flex-row items-center justify-center gap-4'>
              {userInfo.jobs.map((_, index) => index === activeSlide
                ? <div key={index} className='transition-all duration-200 size-4 border border-solid border-zinc-500 rounded-full bg-linear-to-br from-sky-400 to-purple-400' />
                : <div key={index} className='transition-all duration-200 size-3 border border-solid border-zinc-500 rounded-full bg-linear-to-br from-zinc-50 to-zinc-200' />)}
            </div>
            <i onClick={next} className='fa-solid fa-chevron-right text-3xl justify-self-start row-start-2 md:row-start-1 col-start-3 z-1' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkHist;
