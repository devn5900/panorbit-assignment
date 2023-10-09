import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {PiChatBold} from 'react-icons/pi'
import {IoIosArrowDown,IoIosArrowUp} from 'react-icons/io'
import {BsDot} from 'react-icons/bs'
const Chat = () => {
    const [isOpen,setIsOpen]= useState(false);
    const {users}= useSelector(store=>store.usersReducer);
  return (
    <div className={`border-[1px] rounded-xl  border-blue-700 fixed ${isOpen?"-bottom-3":"-bottom-[45%]"} right-10`}>
        <div className='bg-[#2C65C8] rounded-tl-xl  rounded-tr-xl flex items-center justify-between p-2'>
            <div className='flex items-center gap-2 '>
                <PiChatBold className='text-white text-2xl' />
                <span className=' text-white'>Chat</span>
            </div>
            <div>
               {isOpen? <IoIosArrowDown onClick={()=>setIsOpen(!isOpen)} className='text-sm text-white cursor-pointer'/>
                :<IoIosArrowUp onClick={()=>setIsOpen(!isOpen)} className='text-sm text-white cursor-pointer'/>}
            </div>
        </div>
    <div className='p-2'>
    <div className='overflow-scroll customScroll h-[20rem] overflow-x-hidden flex flex-col gap-2'>
       {
        users&&users.length>0&&users.map((el,i)=>{
            return <div className=' cursor-pointer flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                <img src={el.profilepicture} className='w-8 h-8 rounded-full' alt="" />
                <p>{el.name}</p>
            </div>
            <div className={`${i==0?"text-green-700":"text-gray-300"} text-3xl`}><BsDot/></div>
            </div>
        })
       }
       </div>
    </div>
    </div>
  )
}

export default Chat