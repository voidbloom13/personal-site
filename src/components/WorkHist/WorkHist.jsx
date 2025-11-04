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

  function changeSlide(i) {
    setActiveSlide(i);
  }

  return (
    <section id="WorkHistory" className='w-full bg-zinc-200 text-zinc-800 py-6 mx-auto z-0'>
      <div className='w-9/10 max-w-6xl mx-auto'>
        <h1 className='font-serif text-4xl text-center mb-6'>Work History</h1>
        <div className='relative overflow-hidden w-72 md:w-96 mx-auto'>
          <div className="transform-translate duration-200 ease-out flex flex-row" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {userInfo.jobs.map((job, index) => <WorkCard key={job.employer} isActive={activeSlide === index ? true : false} employer={job.employer} title={job.title} startDate={job.startDate} endDate={job.endDate} description={job.description} />)}
          </div>
          <div className='flex flex-row justify-around items-center mt-4'>
            <i onClick={previous} className='fa-solid fa-chevron-left text-3xl cursor-pointer' />
            <div className='flex flex-row m-4 items-center justify-center gap-4'>
              {userInfo.jobs.map((_, index) => index === activeSlide
                ? <div key={index} onClick={() => changeSlide(index)} className='transition-all duration-200 cursor-pointer size-4 border border-solid border-zinc-500 rounded-full bg-linear-to-br from-lime-300 to-green-400 shadow-md shadow-green-600' />
                : <div key={index} onClick={() => changeSlide(index)} className='transition-all duration-200 cursor-pointer size-4 border border-solid border-zinc-500 rounded-full bg-linear-to-br from-zinc-300 to-zinc-600' />)}
            </div>
            <i onClick={next} className='fa-solid fa-chevron-right text-3xl cursor-pointer' />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WorkHist;
