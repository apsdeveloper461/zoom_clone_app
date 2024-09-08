import Image from 'next/image'
import React from 'react'

const Loader = () => {
  return (
    <div className='flex h-screen w-screen justify-center items-center'>
        <Image
        src={'/icons/loading-circle.svg'}
        alt='loading'
        width={100}
        height={100}
        priority
        />
    </div>
  )
}

export default Loader