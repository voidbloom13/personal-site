import { useState } from 'react';
import WorkCard from './WorkCard';

export default function Carousel(props) {
  const [activeSlide, setActiveSlide] = useState(0);

  function previous() {
    activeSlide <= 0 ? setActiveSlide(props.array.length - 1) : setActiveSlide(activeSlide - 1);
  }

  function next() {
    activeSlide >= props.array.length - 1 ? setActiveSlide(0) : setActiveSlide(activeSlide + 1);
  }

  function changeSlide(i) {
    setActiveSlide(i);
  }

  // Replace <WorkCard ... /> 4 lines down with whatever card or image you want on the carousel
  return (
    <div className='relative overflow-hidden w-72 md:w-96 mx-auto'>
      <div className="transform-translate duration-200 ease-out flex flex-row" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
        {props.array.map((job, index) => <WorkCard key={job.employer} isActive={activeSlide === index ? true : false} employer={job.employer} title={job.title} startDate={job.startDate} endDate={job.endDate} description={job.description} />)}
      </div>
      <div className='flex flex-row justify-around items-center mt-4'>
        {activeSlide <= 0 ? <i className='fa-solid fa-chevron-left text-zinc-400 text-3xl cursor-pointer' /> : <i onClick={previous} className='fa-solid fa-chevron-left text-3xl cursor-pointer' />}
        <div className='flex flex-row m-4 items-center justify-center gap-4'>
          {props.array.map((_, index) => index === activeSlide
            ? <div key={index} onClick={() => changeSlide(index)} className='transition-all duration-200 cursor-pointer size-4 border border-solid border-zinc-500 rounded-full bg-linear-to-br from-lime-300 to-green-400 shadow-md shadow-green-600' />
            : <div key={index} onClick={() => changeSlide(index)} className='transition-all duration-200 cursor-pointer size-4 border border-solid border-zinc-500 rounded-full bg-linear-to-br from-zinc-300 to-zinc-600' />)}
        </div>
        {activeSlide >= props.array.length - 1 ? <i className='fa-solid fa-chevron-right text-zinc-400 text-3xl cursor-pointer' /> : <i onClick={next} className='fa-solid fa-chevron-right text-3xl cursor-pointer' />}
      </div>
    </div>
  )
}
