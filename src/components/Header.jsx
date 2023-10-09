import React, { useContext, useState } from 'react'
import { ProfileContext } from '../context/ProfileContextProvider'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const {activeMenu}= useContext(ProfileContext);
    const {profile}= useSelector(store=>store.profileReducer);
    const {users}= useSelector(store=>store.usersReducer);
    const [toggle,setToggle]= useState(false);
    const navigate= useNavigate();
    const handleLogout=()=>{
      navigate("/");
    }
  return (
    <div className='flex items-center justify-between px-6 py-8 border-b-[1px] border-[#e8e6e6]'>
        <h1 className='text-3xl font-semibold text-[#707070]'>{activeMenu}</h1>
        <div className='flex items-center gap-4'>
          <div className='relative'>
            <img onClick={()=>setToggle(!toggle)} src={profile?.profilepicture} alt="" className='w-8 h-8 rounded-full cursor-pointer' />
          
           {toggle&& <div className='absolute  top-10 w-[16rem] -right-20 '>
              <div className='rounded-3xl bg-white  shadow-lg border-[1px] border-gray-100 p-6'>
              <div className='  flex flex-col items-center justify-center  gap-2  '>
                <img src={profile.profilepicture} className='w-16 h-16 rounded-full' alt="" />
               <div className='text-center'>
               <h2 className='text-md font-semibold'>{profile?.name}</h2>
                <h2 className='text-sm font-semibold text-[#A7A7A7]'>{profile?.email}</h2>
               </div>
              </div>
              <div className='flex flex-col gap-2 py-4'>
               {
                users&&users.length>0&&users.slice(0,2).map((el)=>{
                  return  <div className='flex items-center justify-center gap-3 border-t-[1px] border-gray-200 p-2'>
                  <img src={el.profilepicture} className='w-8 h-8 rounded-full' alt="" />
                  <p>{el.name}</p>
                </div>
                })
               }
              </div>
              <div className='flex items-center justify-center'>
                <button onClick={handleLogout} className='bg-[#D55151] text-white py-2 px-4 rounded-full'>Sign out</button>
              </div>
              </div>
            </div>}


          </div>
            <h2 className='text-[#707070]'>{profile?.name}</h2>
        </div>
    </div>
  )
}

export default Header