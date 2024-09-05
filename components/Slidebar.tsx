"use client";
import { slidebarLink } from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react'

const Slidebar = () => {
  const pathname=usePathname();
  return (
    <section className='sticky top-0 left-0 h-screen w-fit max-sm:hidden lg:w-[268px] px-6 max-lg:px-4 pt-24  bg-dark-1 text-white'>
      <div className="flex flex-1 flex-col">
        {
          slidebarLink.map((item, index) => {
            // console.log(pathname);
            let isActive=false;
            if(item.route==='/') {
              isActive= item.route===pathname;
            }else{
            isActive= item.route===pathname || pathname.includes(item.route);
            }
            return(
              <Link
              href={item.route}
              key={index}
              className={cn(`flex items-center gap-2 justify-start w-full py-4 px-4 rounded-xl `,{'bg-blue-1':isActive })}
              >
                  <Image src={item.imgurl} width={20} height={20} alt={item.label}/>
                  <p className='text-lg max-lg:hidden '>{item.label}</p>  
              </Link>
            )
          })
        }
      </div>
    </section>
  )
}

export default Slidebar