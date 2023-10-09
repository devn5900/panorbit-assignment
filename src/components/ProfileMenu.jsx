import React from 'react'
import Header from './Header'
import { useSelector } from 'react-redux'
import GoogleMapComponent from './GoogleMapComponent';

const ProfileMenu = () => {
    const {profile}= useSelector(store=>store.profileReducer);
    console.log(profile)
  return (
    <div className='px-8 '>
        <Header/>
        <div className='flex'>
        <div className='w-[40%] my-10 border-r-[1px] '>
        <div className=' p-6 flex flex-col items-center'>
            <div className=' flex flex-col items-center justify-center'>
                <img src={profile?.profilepicture} className=' w-48 h-48 rounded-full' alt="" />
                <h1 className='text-2xl font-semibold'>{profile?.name}</h1>
            </div>
           <div className='flex justify-center'>
           <div className='flex gap-5 pt-2'>
               <div className='flex flex-col items-end'>
                <span className='text-xl font-semibold text-[#ACACAC]'>Username</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>e-mail</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>Phone</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>Website</span>
               </div>
               <div className='flex flex-col '>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
               </div>
               <div className=' flex flex-col items-start'>
                <span className='text-xl font-semibold text-black'>{profile?.username}</span>
                <span className='text-xl font-semibold text-black'>{profile?.email}</span>
                <span className='text-xl font-semibold text-black'>{profile?.phone}</span>
                <span className='text-xl font-semibold text-black'>{profile?.website}</span>
               </div>
            </div>
           </div>
           <div >
                <h1 className='py-2 text-xl font-semibold text-center text-[#ACACAC]'>Company</h1>
                <div className='flex gap-5'>
               <div className='flex flex-col items-end'>
                <span className='text-xl font-semibold text-[#ACACAC]'>Name</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>catchphrase</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>bs</span>
               </div>
               <div className='flex flex-col '>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
               </div>
               <div className=' flex flex-col items-start'>
                <span className='text-xl font-semibold text-black'>{profile?.company?.name}</span>
                <span className='text-xl font-semibold text-black'>{profile?.company?.catchphrase}</span>
                <span className='text-xl font-semibold text-black'>{profile?.company?.bs}</span>
               </div>
            </div>
            </div>
        </div>
        </div>

        <div className='my-10 px-8'>
        <div >
                <h1 className='py-2 text-xl font-semibold  text-[#ACACAC]'>Address :</h1>
                <div className='flex gap-5'>
               <div className='flex flex-col items-end'>
                <span className='text-xl font-semibold text-[#ACACAC]'>Street</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>Suite</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>City</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>Zipcode</span>
               </div>
               <div className='flex flex-col '>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
                <span className='text-xl font-semibold text-[#ACACAC]'>:</span>
               </div>
               <div className=' flex flex-col items-start'>
                <span className='text-xl font-semibold text-black'>{profile?.address?.street}</span>
                <span className='text-xl font-semibold text-black'>{profile?.address?.suite}</span>
                <span className='text-xl font-semibold text-black'>{profile?.address?.city}</span>
                <span className='text-xl font-semibold text-black'>{profile?.address?.zipcode}</span>
               </div>
            </div>
            </div>
        <GoogleMapComponent geo={profile?.address?.geo} />
        </div>
        </div>
    </div>
  )
}

export default ProfileMenu