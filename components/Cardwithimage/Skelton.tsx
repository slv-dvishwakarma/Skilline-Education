export const Skelton = () => {
    return (
        <>
            <div className="py-10 lg:pt-20 animate-pulse">
                <div className="max-w-3xl mb-10 lg:mb-14 space-y-5">
                    <div className="bg-slate-700 h-[22px] xl:w-[240px] lg:w-[240px] md:w-[240px] w-full"></div>
                    <div className="space-y-2">
                        <div className="bg-slate-700 h-[22px] xl:w-[764px] lg:w-[764px] md:w-full w-full"></div>
                        <div className="bg-slate-700 h-[22px] xl:w-[726px] lg:w-[726px] md:w-full w-full"></div>
                        <div className="bg-slate-700 h-[22px] xl:w-[80px] lg:w-[80px] md:w-[80px] w-full"></div>
                    </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 lg:items-center">
                    <div className="aspect-w-16 aspect-h-9 lg:aspect-none">
                        <div className='skeleton-slide rounded-[30px] w-full xl:h-[650px] lg:h-[600px] md:h-[540px] h-[355px] bg-gray-300'></div>
                    </div>
                    <div>
                        <div className="mb-4">
                            <div className="bg-slate-700 h-[22px] w-[40px]"></div>
                        </div>
                        <div className="flex gap-x-5 ms-1">
                            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                <div className="relative z-10 size-8 flex justify-center items-center">
                                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                                        <div className="bg-slate-700 h-[33px] w-[33px] rounded-full"></div>
                                    </span>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8 sm:pb-12 space-y-2">
                                <div className="bg-slate-700 h-[15px] xl:w-[450px] lg:w-full md:w-full w-full"></div>
                                <div className="bg-slate-700 h-[15px] xl:w-[450px] lg:w-full md:w-full w-full"></div>
                            </div>
                        </div>
                        <div className="flex gap-x-5 ms-1">
                            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                <div className="relative z-10 size-8 flex justify-center items-center">
                                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                                        <div className="bg-slate-700 h-[33px] w-[33px] rounded-full"></div>
                                    </span>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8 sm:pb-12 space-y-2">
                                <div className="bg-slate-700 h-[15px] xl:w-[450px] lg:w-full md:w-full w-full"></div>
                                <div className="bg-slate-700 h-[15px] xl:w-[450px] lg:w-full md:w-full w-full"></div>
                            </div>
                        </div>
                        <div className="flex gap-x-5 ms-1">
                            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                <div className="relative z-10 size-8 flex justify-center items-center">
                                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                                        <div className="bg-slate-700 h-[33px] w-[33px] rounded-full"></div>
                                    </span>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8 sm:pb-12 space-y-2">
                                <div className="bg-slate-700 h-[15px] xl:w-[450px] lg:w-full md:w-full w-full"></div>
                                <div className="bg-slate-700 h-[15px] xl:w-[450px] lg:w-full md:w-full w-full"></div>
                            </div>
                        </div>
                        <div className="flex gap-x-5 ms-1">
                            <div className="relative last:after:hidden after:absolute after:top-8 after:bottom-0 after:start-4 after:w-px after:-translate-x-[0.5px] after:bg-neutral-800">
                                <div className="relative z-10 size-8 flex justify-center items-center">
                                    <span className="flex flex-shrink-0 justify-center items-center size-8 border border-neutral-800 text-[#ff0] font-semibold text-xs uppercase rounded-full">
                                        <div className="bg-slate-700 h-[33px] w-[33px] rounded-full"></div>
                                    </span>
                                </div>
                            </div>
                            <div className="grow pt-0.5 pb-8 sm:pb-12 space-y-2">
                                <div className="bg-slate-700 h-[15px] xl:w-[450px] lg:w-full md:w-full w-full"></div>
                                <div className="bg-slate-700 h-[15px] xl:w-[450px] lg:w-full md:w-full w-full"></div>
                            </div>
                        </div>
                        <div className="bg-slate-700 h-[39px] w-[155px] rounded-full" ></div>
                    </div>
                </div>
            </div>
        </>
    )
}