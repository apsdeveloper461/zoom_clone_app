"use client"

import  React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LayoutList } from "lucide-react"

export function Dropdown({value,setValues}:{value:any,setValues:(value:any)=>void}) {   

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
         <LayoutList size={38} className="bg-[#19232D] cursor-pointer hover:bg-[#323B44] rounded-2xl border border-dark-1 p-2"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-48 text-white bg-dark-1">
        <DropdownMenuLabel>Change Layout</DropdownMenuLabel>
        <DropdownMenuSeparator className=" bg-blue-1" />
        <DropdownMenuRadioGroup className="cursor-pointer" value={value} onValueChange={setValues}>
          <DropdownMenuRadioItem value="grid">Grid </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="speaker-left">Speaker Left</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="speaker-right">Speaker Right</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
