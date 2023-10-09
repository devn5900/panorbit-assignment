import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useSearchParams } from 'react-router-dom'
import { ADD_PROFILE } from '../redux/profile/actionTypes';
import LeftProfile from '../components/LeftProfile';
import RightProfile from '../components/RightProfile';
import ProfileContextProvider from '../context/ProfileContextProvider';
import Chat from '../components/Chat';

const Profile = () => {
    const {userId}= useParams();
    const dispatch=useDispatch();
    const {users}=useSelector(store=>store.usersReducer);
    const {profile}= useSelector(store=>store.profileReducer);
    useEffect(()=>{
        const userData= users.find((el)=>el.id==userId);
        dispatch({type:ADD_PROFILE,payload:userData});
    },[users,userId])
  return (
    <div className=' h-screen overflow-hidden'>
        <ProfileContextProvider>
       <div className='flex'>
        <LeftProfile/>
        <RightProfile/>
       </div>
       <Chat/>
        </ProfileContextProvider>
    </div>
  )
}

export default Profile