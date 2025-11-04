import userInfo from '../../assets/userInfo';

function Intro() {
  return (
    <section id="Introduction" className='w-full bg-zinc-100 text-zinc-800 pt-24 pb-6'>
      <div className='w-9/10 max-w-6xl mx-auto flex flex-col items-center'>
        <div className='flex flex-col gap-4 md:flex-row items-center justify-center '>
          <img className='max-w-48 h-auto rounded-full md:justify-self-end border border-zinc-800 border-solid text-center align-middle' src={userInfo.info.profilePicture} alt={`${userInfo.info.name}'s profile picture`} />
          <div className='flex flex-col md:justify-self-start'>
            <h1 className="text-4xl md:text-4xl tracking-tight font-serif text-center md:text-left">{userInfo.info.name}</h1>
            <h2 className='text-xl font-[Montserrat] text-center md:text-left'>{userInfo.info.phone} | {userInfo.info.address}</h2>
            <h2 className='transition-all duration-200 text-blue-500 hover:text-purple-700 text-xl tracking-tight font-[Montserrat] font-medium text-center md:text-left'><a href={`mailto:${userInfo.info.email}`}>{userInfo.info.email}</a></h2>
          </div>
        </div>
        <p className='max-w-4xl text-lg text-left font-[Montserrat] self-center justify-self-center py-9' dangerouslySetInnerHTML={{ __html: userInfo.info.summary }} />
        <div className='flex flex-col sm:flex-row gap-4 w-full max-w-xl'>
          <a className='w-full' href="/resume.pdf" download="dakota_huyghe_resume.pdf">
            <button className='transition-all duration-200 w-full bg-linear-to-br from-green-400 to-emerald-600 hover:gl-linear-to-br hover:from-green-200 hover:to-emerald-400 font-[Montserrat] font-medium text-zinc-200 hover:text-emerald-700 shadow-sm hover:shadow-lg shadow-indigo-950 inset-shadow-sm inset-shadow-emerald-50 rounded-full cursor-pointer'>
              <span className="py-4 pr-2">Download My Resume</span>
              <i className="fa-solid fa-download py-4"></i>
            </button>
          </a>
          <a className='w-full' href={`mailto:${userInfo.info.email}`}>
            <button className='transition-all duration-200 w-full bg-linear-to-br from-sky-400 to-purple-400 hover:gl-linear-to-br hover:from-sky-300 hover:to-purple-300 hover:border-purple-300 hover:*:border-purple-300 font-[Montserrat] font-medium text-zinc-200 hover:text-purple-700 shadow-sm hover:shadow-lg shadow-indigo-950 inset-shadow-sm inset-shadow-sky-50 rounded-full cursor-pointer'>
              <i className="fa-solid fa-envelope py-4"></i>
              <span className="py-4 pl-2">Send Me An Email</span>
            </button>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Intro;
