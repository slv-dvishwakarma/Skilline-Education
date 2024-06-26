import { HeroSlider } from '@/components/HeroSlider'
import React from 'react'
import jsonData from "./jsonData.json"
import { ParentContainer } from '@/components/ParentContainer'
import { Cardwithimage } from '@/components/Cardwithimage'
import { Client } from '@/components/Client'
import { CaseStories } from '@/components/CaseStories'
import { States } from '@/components/States'
import { TwoSideLayout } from '@/components/TwoSideLayout'

const Page = () => {
  return (
    <>
      <ParentContainer >
        <HeroSlider images={jsonData.slider.content} />
      </ParentContainer>
      <Client title={jsonData.client.content.title} logo={jsonData.client.content.logo} />
      <ParentContainer className='bg-primary'>
        <Cardwithimage topbar={jsonData.cardwithimage.content.topbar} card={jsonData.cardwithimage.content.card} staticcontent={jsonData.cardwithimage.content.staticcontent} />
      </ParentContainer>
      <ParentContainer>
        <CaseStories successtitle={jsonData.success_stories.content.successtitle} stories={jsonData.success_stories.content.stories} />
      </ParentContainer>
      <ParentContainer>
        <TwoSideLayout topbar={jsonData.Team_Member.content.topbar} member={jsonData.Team_Member.content.member} />
      </ParentContainer>
      <ParentContainer>
        <States states={jsonData.states.content}/>
      </ParentContainer>
    </>
  )
}

export default Page
