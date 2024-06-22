import { PageBanner } from '@/components/PageBanner'
import React from 'react'
import jsonData from "./jsonData.json"
import { ParentContainer } from '@/components/ParentContainer'
import { ImageWithText } from '@/components/ImageWithText'

const Page = () => {
  return (
    <>
    <PageBanner banner={jsonData.banner.content}/>
    <ParentContainer >
      <ImageWithText imagetext={jsonData.imagewithtext_economy.content} order={jsonData.imagewithtext_economy.props.order} />
      {/* <ImageWithText imagetext={jsonData.imagewithtext_infrastructure.content} order={jsonData.imagewithtext_infrastructure.props.order} />
      <ImageWithText imagetext={jsonData.imagewithtext_economy.content} order={jsonData.imagewithtext_economy.props.order} />
      <ImageWithText imagetext={jsonData.imagewithtext_economy.content} order={jsonData.imagewithtext_economy.props.order} />
      <ImageWithText imagetext={jsonData.imagewithtext_economy.content} order={jsonData.imagewithtext_economy.props.order} /> */}
    </ParentContainer>
    </>
  )
}

export default Page
