import {
  Container,
  Divider,
  Heading,
  Center,
  Box,
  Button
} from '@chakra-ui/react'
import { ArrowLeftIcon } from '@chakra-ui/icons'

import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import { useRouter } from 'next/router'
import { AnimationChildren } from '../../../../data/animationListChildren'

export default function Home() {
  const router = useRouter()
  const [contentsData, setContentsData] = useState<any>({})
  const baseUrl1 = 'https://codepen.io/qnamigoi/embed/'
  const baseUrl2 = '?default-tab=html%2Cresult'

  // get path
  const animationId = router.query.id

  useEffect(() => {
    AnimationChildren.forEach(item => {
      item.data.forEach(data => {
        if(data.path === animationId) {
          setContentsData(data)
        }
      })
    })
  }, [animationId])

  return(
    <>
      <Container maxW='container.lg'>

        <Box
          textAlign='center'
          my='3rem'
        >
          <Image
            src={'/images/presentation/animation/' + contentsData.path + '.svg'}
            alt="main"
            width="300px"
            height="100%"
          />
        <Heading size='lg'>{ contentsData.name }</Heading>
        </Box>

        <Box
          mb='3rem'
        >
          <iframe
            height="450"
            style={{width: "100%"}}
            scrolling="no"
            title={contentsData.path}
            src={baseUrl1 + contentsData.id + baseUrl2}
            loading="lazy"
          ></iframe>
        </Box>

        <Button onClick={() => router.back()}>
          <ArrowLeftIcon fontSize='.75rem' />
          &nbsp;もどる
        </Button>
      </Container>
    </>
  )
}

function contentsData(contentsData: any) {
  throw new Error('Function not implemented.')
}
