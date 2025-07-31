import React from 'react'
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { MdAccessTime } from "react-icons/md";

export const Approved = ({label}) => {
  return (
    <div className='flex gap-2 items-center border border-zinc-300 dark:border-zinc-800 px-4 py-1 rounded-lg text-xs '>
     <div className='text-white bg-green-500 rounded-full text-xs'><TiTick /></div> {label}
    </div>
  )
}
export const Rejected = ({label}) => {
  return (
    <div className='flex gap-2 items-center border border-zinc-300 dark:border-zinc-800 px-4 py-1 rounded-lg text-xs '>
     <div className='text-white bg-red-500 rounded-full text-xs '><RxCross2 /></div> {label}
    </div>
  )
}
export const Pending = ({label}) => {
  return (
    <div className='flex gap-2 items-center border border-zinc-300 dark:border-zinc-800 px-4 py-1 rounded-lg text-xs '>
     <div className='text-white bg-yellow-500 rounded-full text-[10px] p-[2px] '><MdAccessTime /></div> {label}
    </div>
  )
}

