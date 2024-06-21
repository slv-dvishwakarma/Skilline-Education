export const Skelton = () => {
    return (
        <>
            <div className="px-4 xl:px-0 py-10 lg:py-20 mx-auto animate-pulse">
                <div className="mb-10 lg:mb-14">
                    <div className="max-w-3xl mb-10 lg:mb-14 space-y-5">
                        <div className="bg-slate-700 h-[22px] xl:w-[240px] lg:w-[240px] md:w-[240px] w-full"></div>
                        <div className="space-y-2">
                            <div className="bg-slate-700 h-[10px] xl:w-[726px] lg:w-[764px] md:w-full w-full"></div>
                            <div className="bg-slate-700 h-[10px] xl:w-[726px] lg:w-[726px] md:w-full w-full"></div>
                            <div className="bg-slate-700 h-[10px] xl:w-[726px] lg:w-[726px] md:w-full w-full"></div>
                            <div className="bg-slate-700 h-[10px] xl:w-[726px] lg:w-[726px] md:w-full w-full"></div>
                        </div>
                    </div>
                </div>

                <div className='xl:flex lg:flex md:flex items-center gap-10'>
                    <div className='xl:w-6/12 lg:w-6/12 md:w-6/12 w-full'>
                        <blockquote>
                            <div className="space-y-3">
                                <div className="bg-slate-700 h-[20px] w-full"></div>
                                <div className="bg-slate-700 h-[20px] w-full"></div>
                                <div className="bg-slate-700 h-[20px] w-full"></div>
                                <div className="bg-slate-700 h-[20px] w-full"></div>
                                <div className="bg-slate-700 h-[20px] w-full"></div>
                            </div>
                            <footer className="mt-6">
                                <div className="flex items-center">
                                    <div className="xl:hidden lg:hidden md:hidden block flex-shrink-0">
                                        <div className="bg-slate-700 h-[33px] w-[30px] rounded-full"></div>
                                    </div>
                                    <div className="mt-4 md:ms-0 space-y-3">
                                        <div className="bg-slate-700 h-[20px] w-[300px]"></div>
                                        <div className="bg-slate-700 h-[10px] w-[300px]"></div>
                                    </div>
                                </div>
                            </footer>
                        </blockquote>
                    </div>
                    <div className="xl:block lg:block md:block hidden mb-24 md:mb-0 xl:w-6/12 lg:w-6/12 md:w-6/12 w-full">
                        <div className="bg-slate-700 h-[400px] w-[400px] float-right rounded-[30px]"></div>
                    </div>
                </div>
            </div>
        </>
    )
}