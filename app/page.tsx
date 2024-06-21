import { HeroSlider } from '@/components/HeroSlider'
import React from 'react'
import jsonData from "./jsonData.json"
import { ParentContainer } from '@/components/ParentContainer'
import { Cardwithimage } from '@/components/Cardwithimage'

const Page = () => {
  return (
    <ParentContainer>
    <HeroSlider images={jsonData.slider.content}/>
    <Cardwithimage topbar={jsonData.cardwithimage.content.topbar} card={jsonData.cardwithimage.content.card} staticcontent={jsonData.cardwithimage.content.staticcontent}/>
    </ParentContainer>
  )
}

export default Page
