import Image from 'next/image'
import React from 'react'

const HomeCard = ({color,imgURL,imgALT,heading,subheading,handleClicker}:{color:string,imgURL:string,imgALT:string,heading:string,subheading:string,handleClicker:()=>void}) => {
  return (
    <div className={` ${color} cursor-pointer w-full min-h-[230px] xl:max-w-[270px] rounded-md py-4 px-3 flex flex-col justify-between`}
    onClick={()=>{handleClicker()}}
    >
      <div className="glassmorphism size-12 rounded-md flex justify-center items-center">
        <Image src={imgURL} alt={imgALT}  width={26} height={26} />
      </div>
      <div className="content">
        <h2 className="text-xl font-bold">{heading}</h2>
        <p className="text-md font-light text-sky-2">{subheading}</p>
      </div>
    </div>
  )
}

export default HomeCard