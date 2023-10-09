import React, { createContext, useState } from 'react'


export const ProfileContext= createContext();

const ProfileContextProvider = ({children}) => {
  const [activeMenu,setActiveMenu]= useState("Profile");
  return (
    <ProfileContext.Provider value={{activeMenu,setActiveMenu}}>
      {children}
    </ProfileContext.Provider>
  )
}

export default ProfileContextProvider