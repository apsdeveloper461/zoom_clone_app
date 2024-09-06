import React from 'react'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
import Image from 'next/image'
import { Button } from './ui/button'
import { HeightIcon } from '@radix-ui/react-icons'

  
interface MeetingModalInterface {
    isOpen:boolean,
    isClose:()=>void,
    title:string,
    buttonText:string,
    buttonIcon?:string,
    Styles:string,
    handleClick:()=>void,
    image?:string
    children?:React.ReactNode
}
const Meetingmodal = ({isOpen,isClose,title,buttonText,buttonIcon,Styles,handleClick,image, children}:MeetingModalInterface) => {
  return (
 <>
 <Dialog open={isOpen}  onOpenChange={isClose} >
  <DialogContent className='text-white bg-dark-2 flex flex-col gap-6 w-full  max-[520px]:max-w-[95vw] max-h-[550px] border-none px-5 py-7 rounded-lg '>
<DialogTitle>
{image &&
    <div className='flex justify-center items-center w-full'>
     <Image
    src={image}
    alt='image'
    width={72}
    height={72}
    className='flex '
    />
    </div>
    }
    <h2 className="text-xl  font-bold leading-10 text-sky-2 ">{title}</h2>
</DialogTitle>
    {children}

    <Button className='bg-blue-1  hover:bg-blue-500' onClick={()=> handleClick()}> {buttonIcon && <Image src={buttonIcon} width={15} height={15} alt='button icon' />} &nbsp;
    {buttonText}</Button>

  </DialogContent>
</Dialog>

 </>
  )
}

export default Meetingmodal