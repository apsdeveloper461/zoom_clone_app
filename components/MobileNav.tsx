'use client';
import React from "react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { slidebarLink } from "@/constants";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const MobileNav = () => {
    const pathname=usePathname();
  return (
    <section className="w-full max-w-[264px] p-0">
      <Sheet>
        <SheetTrigger asChild>
            <Image
            src='/icons/hamburger.svg'
            width={30}
            height={30}
            alt='hamburger'
            className="sm:hidden cursor-pointer"
            />
        </SheetTrigger >
        <SheetContent side={'left'} className="bg-dark-1 border-none text-white">
          
            <Link href={'/'} className='flex  gap-2 item-start cursor-pointer'>
      <Image src={'/icons/main-Logo.svg'} width={30} height={30} alt={'logo'}   />
      <p className="text-xl font-extrabold  text-white ">Zoom </p>
      </Link>

      <div className="flex flex-1 flex-col h-[calc(100vh-72pxpx)] justify-between gap-3 overflow-y-auto pt-14">
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
                <SheetClose    key={index} asChild>
              <Link
              href={item.route}
              className={cn(`flex  items-center gap-2 justify-start w-full py-4 px-4 rounded-xl `,{'bg-blue-1':isActive })}
              >
                  <Image src={item.imgurl} width={16} height={16} alt={item.label}/>
                  <p className='text-md  text-white '>{item.label}</p>
    
              </Link>
              </SheetClose>
            )
          })
        }
      </div>
     
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
