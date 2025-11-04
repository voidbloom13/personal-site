import userInfo from '../../assets/userInfo';
import WorkCard from './WorkCard';

function WorkHist() {
  return (
    <section id="WorkHistory" className='w-full bg-zinc-200 text-zinc-800 py-6 mx-auto'>
      <div className='w-9/10 max-w-6xl mx-auto'>
        <h1 className='font-serif text-4xl md:text-3xl text-center mb-6'>Work History</h1>
        <div className="flex flex-row flex-wrap justify-center justify-self-center gap-4">
          {userInfo.jobs.map(job => <WorkCard key={job.employer} employer={job.employer} title={job.title} startDate={job.startDate} endDate={job.endDate} description={job.description} />)}
        </div>
      </div>
    </section>
  )
}

export default WorkHist;
