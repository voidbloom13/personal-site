import userInfo from "../../assets/userInfo";
import Carousel from "./Carousel";

function WorkHist() {

  return (
    <section id="WorkHistory" className='w-full bg-zinc-200 text-zinc-800 py-6 mx-auto z-0'>
      <div className='w-9/10 max-w-6xl mx-auto'>
        <h1 className='font-serif text-4xl text-center mb-6'>Work History</h1>
      </div>
      <Carousel array={userInfo.jobs} />
    </section>
  )
}

export default WorkHist;
