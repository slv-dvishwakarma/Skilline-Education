import { PageBanner } from '@/components/PageBanner'
import React from 'react'
import jsonData from "./jsonData.json"

const Page = () => {
  return (
    <PageBanner banner={jsonData.banner.content}/>
  )
}

export default Page
