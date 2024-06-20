import { HeroSlider } from '@/components/HeroSlider'
import React from 'react'
import jsonData from "./jsonData.json"
import { ParentContainer } from '@/components/ParentContainer'

const Page = () => {
  return (
    <ParentContainer>
    <HeroSlider images={jsonData.content}/>
    </ParentContainer>
  )
}

export default Page
