import React from 'react'
import { GridBox } from '../GridBox'
import Image from 'next/image';

interface LableItem {
  heading?: string;
  label: string[];
}

interface ImageWithTextItem {
  image: string;
  title?: string;
  text: LableItem;
}

interface ImageWithTextProps {
  imagetext: ImageWithTextItem;
  order: number
}

export const ImageWithTextTemplate: React.FC<ImageWithTextProps> = ({ imagetext, order }) => {
  return (
    <div className='ImageWithTextTemplate py-10'>
      {imagetext.title && <h1 className='mb-6 md:text-[40px] text-[30px] capitalize lg:text-[46px] xl:text-[46px] text-center text-tertiary font-medium'>{imagetext?.title}</h1>}
      <GridBox columns={2} gap={10} className='py-5 items-center xl:space-y-0 lg:space-y-0 md:space-y-0 space-y-5'>
        <GridBox.GridItem columnMerge={1} className={`order-${order}`}>
          <Image className='border-neutral-800 rounded-[0px_50px_0px_50px] border-[15px] border-solid' src={imagetext.image} alt="" width={500} height={500} />
        </GridBox.GridItem>
        <GridBox.GridItem columnMerge={1}>
          {imagetext.text.heading && <h2 className='text-3xl leading-9 text-tertiary font-medium pb-4'>{imagetext.text.heading}</h2>}
          <div className='space-y-3'>
            {imagetext.text.label.map((item, index) => (
              <p key={index} className='text-tertiary text-[18px]'>{item}</p>
            ))}
          </div>
        </GridBox.GridItem>
      </GridBox>
    </div>
  )
}
