import axios from "axios";

export const fetchData=async()=>{
    try {
        const res= await axios(`https://panorbit.in/api/users.json`);
        return res.data.users;
    } catch (error) {
        console.log(error);
    }
}