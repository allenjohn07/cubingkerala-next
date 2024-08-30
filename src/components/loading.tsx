'use client'

import React from 'react'
import LottieComponent from './lottie'

const LoadingComponent = () => {
  return (
    <div className='w-[100px] md:w-[200px]'>
      <LottieComponent path='/rounds-spinning.json' />
    </div>
  )
}

export default LoadingComponent