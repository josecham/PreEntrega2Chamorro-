import React from 'react'
import { CircularProgress } from '@chakra-ui/react'

const Loading = () => {
  return (
    
    <CircularProgress value={90} size='120px' className="margin"/>
   
  )
}

export default Loading