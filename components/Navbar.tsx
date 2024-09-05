import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from './MobileNav'
import { SignedIn, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className="fixed top-0 z-10 min-w-full  w-screen bg-dark-1 px-4 py-3 flex gap-3 items-center  justify-between">
      <Link href={'/'} className='flex  gap-2 items-center cursor-pointer'>
      <Image src={'/icons/main-Logo.svg'} width={30} height={30} alt={'logo'}   />
      <p className="text-xl font-extrabold  text-white max-sm:hidden">Zoom </p>
      </Link>

      {/* nav for mobile devices */}
      <div className="flex-between gap-5 items-center">
      <SignedIn>
              <UserButton />
            </SignedIn>
        <MobileNav/>
      </div>
    </nav>
  )
}

export default Navbar