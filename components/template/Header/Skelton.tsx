export const Skelton = () => {
    return (
        <>
        <header className="mt-4 xl:flex md:flex lg:flex hidden inset-x-0  flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
            <nav className="flex items-center justify-between bg-primary rounded-[28px] py-3 px-5 max-w-[70rem] w-full mx-auto animate-pulse">
                <div className="flex items-center justify-between ">
                    <div className="bg-slate-700 h-[22px] w-[90px]"></div> 
                </div>
                <div className="flex items-center justify-between w-[574px]">
                    <div className="bg-slate-700 h-[10px] w-[90px]"></div>
                    <div className="bg-slate-700 h-[10px] w-[90px]"></div>
                    <div className="bg-slate-700 h-[10px] w-[90px]"></div>
                    <div className="bg-slate-700 h-[10px] w-[90px]"></div>
                    <div className="bg-slate-700 h-[10px] w-[90px]"></div>
                    <div className="bg-slate-700 h-[10px] w-[90px]"></div>
                </div>
            </nav>
        </header>
        <div className="mt-4 h-[45px] px-2 xl:hidden md:hidden lg:hidden flex inset-x-0  flex-wrap md:justify-start md:flex-nowrap z-50 w-full">
            <div className="flex items-center justify-between bg-primary rounded-[28px] py-3 px-5 max-w-[70rem] w-full mx-auto animate-pulse">
            <div className="bg-slate-700 h-[22px] w-[90px] rounded-[28px]"></div> 
            <div className="bg-slate-700 h-[22px] w-[20px] "></div> 
            </div>
        </div>
        </>
    )
}