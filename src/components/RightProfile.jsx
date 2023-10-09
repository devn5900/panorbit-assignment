import React, { useContext } from 'react'
import { ProfileContext } from '../context/ProfileContextProvider'
import ProfileMenu from './ProfileMenu';
import CommingSoon from './CommingSoon';

const RightProfile = () => {
    const {activeMenu}= useContext(ProfileContext);
  return (
    <div className=' '>
        <div className='w-[84vw]'>
        {activeMenu=="Profile"&&<ProfileMenu/>}
        {activeMenu=="Post"&&<CommingSoon/>}
        {activeMenu=="Gallery"&&<CommingSoon/>}
        {activeMenu=="ToDo"&&<CommingSoon/>}

        </div>

    </div>
  )
}

export default RightProfile