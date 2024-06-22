import { GridBox } from "../GridBox"

export const Skelton = () => {
  return (
    <div className='ImageWithTextTemplate py-10 animate-pulse'>
      <div className="space-y-2">
        <div className='w-full h-[38px] bg-gray-300'></div>
        <div className='w-full h-[38px] bg-gray-300'></div>
        <div className='w-full h-[38px] bg-gray-300'></div>
      </div>
      <GridBox columns={2} gap={10} className='py-5 items-center xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5'>
        <GridBox.GridItem columnMerge={1}>
          <div className='skeleton-slide rounded-[0px_50px_0px_50px] w-full lg:h-[540px] md:h-[540px] h-[300px] bg-gray-300'></div>
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={1}>
          <div className='w-full h-[30px] bg-gray-300 pb-5'></div>
          <div className='space-y-3'>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
            <div className='w-full h-[12px] bg-gray-300'></div>
          </div>
        </GridBox.GridItem>
      </GridBox>
    </div>
  )
}
