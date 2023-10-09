import React, { useEffect, useState } from 'react'
import { fetchData } from '../utills/api';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ADD_USERS } from '../redux/users/actionTypes';

const Login = () => {
    const {users}= useSelector(store=>store.usersReducer);
    const dispatch= useDispatch();
    useEffect(()=>{
      fetchData()
      .then((res)=>{
          dispatch({type:ADD_USERS,payload:res});
      })
    },[])
console.log(users)
  return (
    <div className='bg-[#FFFFFF] '>
        <div className='flex  items-center justify-center h-screen'>
          <div className='max-h-[70vh] shadow-2xl min-w-[35vw]  rounded-3xl bg-[#F6F6F6] py-4'>
          <div >
                    <h3 className="text-xl text-[#636363] font-bold text-center p-7">Select an account</h3>
                   <div className='p-1 bg-white pb-10 rounded-bl-3xl rounded-br-3xl'>
                   <div className='max-h-[50vh] customScroll rounded-3xl  overflow-y-scroll  px-9 '>
                        {
                            users&&users.length>0&&users.map((el,i)=>{
                                return <Link  key={i} to={`/profile/${el.id}`}>
                                <div  className='flex items-center cursor-pointer py-2 gap-4 border-b-[1px] border-[#D8D8D8]'>
                                    <img src={el.profilepicture} className='w-8 h-8 object-contain object-center rounded-full' />
                                    <p className='text-md text-[#636363] font-semibold'>{el.name}</p>
                                </div></Link>
                            })
                        }
                    </div>
                   </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login