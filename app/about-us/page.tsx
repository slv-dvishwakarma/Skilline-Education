import { PageBanner } from '@/components/PageBanner'
import React from 'react'
import jsonData from "./jsonData.json"
import { ParentContainer } from '@/components/ParentContainer'
import { ImageWithText } from '@/components/ImageWithText'
import { Blog } from '@/components/Blog'

const Page = () => {
  return (
    <>
    <PageBanner banner={jsonData.banner.content}/>
    <ParentContainer>
      <ImageWithText imagetext={jsonData.imagewithtext.content}/>
    </ParentContainer>
    <ParentContainer>
      <Blog articles={jsonData.blog.content}/>
    </ParentContainer>
    </>
  )
}

export default Page
