"use client"
import Card from '@/components/Card'
import CardContainer from '@/components/CardContainer'
import Container from '@/components/Container'
import React from 'react'

function Page() {
  return (
    <Container>
      <CardContainer>
        <Card
          price={'$1.99/Month'}
          title={'Basic'}
          subTitle={'100Gb'}
          buttonTitle={'Purchase'}
          bottomText1={'100 GB storage'}
          bottomText2={'Option to add member'}
          bottonText3={'Extra member benefits'}
        />
        <Card
          price={'$1.99/Month'}
          title={'Basic'}
          subTitle={'100Gb'}
          buttonTitle={'Purchase'}
          bottomText1={'100 GB storage'}
          bottomText2={'Option to add member'}
          bottonText3={'Extra member benefits'}
        />
        <Card
          price={'$1.99/Month'}
          title={'Basic'}
          subTitle={'100Gb'}
          buttonTitle={'Purchase'}
          bottomText1={'100 GB storage'}
          bottomText2={'Option to add member'}
          bottonText3={'Extra member benefits'}
        />
      </CardContainer>
    </Container>

  )
}

export default Page
