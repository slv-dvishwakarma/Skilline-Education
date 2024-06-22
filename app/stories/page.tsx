import React from 'react'
import jsonData from "./jsonData.json"
import { PageBanner } from '@/components/PageBanner'

const Page = () => {
  return (
    <PageBanner banner={jsonData.banner.content}/>
  )
}

export default Page
