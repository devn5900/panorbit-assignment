import React, { useContext } from 'react'
import { ProfileContext } from '../context/ProfileContextProvider'

const LeftProfile = () => {
    const {activeMenu,setActiveMenu}= useContext(ProfileContext);

console.log(activeMenu)

  return (
    <div className='bg-[#3C58C8] w-[16vw] min-h-screen max-h-full flex items-center'>
        
            <div className='px-6 text-lg text-white font-semibold w-full flex flex-col gap-4'>
                <p onClick={()=>setActiveMenu("Profile")} className={`${activeMenu=="Profile"?"":"text-[#A5A4E4]"} cursor-pointer py-2 border-b-[1px] border-[#DFDFDF]`}>Profile</p>
                <p onClick={()=>setActiveMenu("Post")} className={`${activeMenu=="Post"?"":"text-[#A5A4E4]"} cursor-pointer py-2 border-b-[1px] border-[#DFDFDF]`}>Post</p>
                <p onClick={()=>setActiveMenu("Gallery")} className={`${activeMenu=="Gallery"?"":"text-[#A5A4E4]"} cursor-pointer py-2 border-b-[1px] border-[#DFDFDF]`}>Gallery</p>
                <p onClick={()=>setActiveMenu("ToDo")} className={`${activeMenu=="ToDo"?"":"text-[#A5A4E4]"} cursor-pointer py-2 border-b-[1px] border-[#DFDFDF]`}>ToDo</p>
            </div>
    </div>
  )
}

export default LeftProfile