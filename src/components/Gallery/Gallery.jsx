import React from 'react'
import SubHeader from './SubHeader'
import Img from './Img'

const Gallery = () => {
  return (
    <>
    <div>
      <SubHeader/>
    </div>
    <div className='gap-8 columns-3 px-10 py-5'>
      <Img/>
    </div>
    </>
  )
}

export default Gallery