export const Skelton = () => {
  return (
    <div className='banner px-3 pt-[150px] pb-[100px] xl:max-w-[50%] lg:max-w-[70%] md:max-w-[80%] w-full mx-auto animate-pulse'>
      <div className="bg-slate-700 xl:h-[59px] lg:h-[50px] md:h-[45px] h-[30px] xl:w-[424px] lg:w-[424px] md:w-[300px] w-full mx-auto"></div>
      <ul className="breadcrumb flex items-center gap-[20px] justify-center text-xl py-6">
        <li className="breadcrumb-list-item text-tertiary hover:text-secondary">
        <div className="bg-slate-700 h-[22px] xl:w-[90px] lg:w-[90px] md:w-[90px] w-[90px] mx-auto"></div>
        </li>
        <li className="breadcrumb-list-item pl-4 ">
        <div className="bg-slate-700 h-[22px] xl:w-[90px] lg:w-[90px] md:w-[90px] w-[90px] mx-auto"></div>
        </li>
      </ul>
      <hr className="border-slate-700 mx-auto mb-6 h-[1px] w-[100px] border-0 border-b border-t border-opacity-50 bg-transparent"></hr>
      <div className='label text-center text-tertiary space-y-2.5'>
      <div className="bg-slate-700 h-[12px] w-full"></div>
      <div className="bg-slate-700 h-[12px] w-full"></div>
      <div className="bg-slate-700 h-[12px] w-full"></div>
      <div className="bg-slate-700 h-[12px] w-full"></div>
      <div className="bg-slate-700 h-[12px] w-full"></div>
      </div>
      <div className='social pt-10'>
        <ul className='flex xl:w-[30%] lg:w-[30%] md:w-[30%] w-[50%] justify-between m-auto'>
        <div className="bg-slate-700 h-[35px] w-[35px] rounded-full"></div>
        <div className="bg-slate-700 h-[35px] w-[35px] rounded-full"></div>
        <div className="bg-slate-700 h-[35px] w-[35px] rounded-full"></div>
        </ul>
      </div>
    </div>
  )
}
