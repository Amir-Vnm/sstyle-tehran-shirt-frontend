import { useState,useEffect } from "react"
import {supabase} from './supabaseClient'
import usernamebg from '../images/usernamebg.webp'
import Loading from "./Loading";


export default function UserListPage() {

    const [users, setUsers] = useState([]) ;
    const [loading , setLoading] = useState(true)

    const fetchUser = async ()=> {
        setLoading(true)
        const {data, error} = await supabase.from('profiles').select('*') 
        if (error) {
          console.error('error fetchimg users supabase', error)
         }else {
          setUsers(data) 
         }
           setLoading(false) ;
    } 

    const deleteUser = async (id)=> {
        const {error} = await supabase.from('profiles').delete().eq('id',id) 
        if (error) console.error('error deleting user:' , error) 
            else fetchUser()
    } 
useEffect(()=>{
    fetchUser()
} , [])

    return(
         <>
   {loading && <div> <Loading /> </div>}

      <div className=" pt-[100px] md:pt-30 w-[97%] md:w-4/5 text-center mx-auto leading-relaxed z-10 ">
      <p className=" border-1 rounded-3xl border-black/30 md:w-1/3 py-0.5 mx-auto text-center ">  لیست کاربرانی که در سایت عضو شدند  </p>
      <div className=" relative flex flex-col   md:p-10   text-md w-[100%]  md:w-4/5  overflow-y-scroll mb-[90px] md:mb-0 md:pt-15 mt-5 text-center border-white mx-auto border rounded bg-sky-700">
           <img className= " hidden md:block absolute z-10 top-0 left-0 w-full h-full blur-[20px] " src={usernamebg} alt="" />
       
      <table className=" relative z-20 bg-white  table-auto w-full border-collapse border-2 rounded-2xl  ">

      <thead>
      <tr className="bg-gray-900  text-md text-white ">
      <th className="border border-gray-300 px-4 py-2">شناسه</th>
      <th className="border border-gray-300 px-4 py-2">نام کامل</th>
      <th className="border border-gray-300 px-4 py-2">نقش</th>
      <th className="border border-gray-300 px-4 py-2">عملیات</th>
       </tr>
       </thead>
  <tbody>
    {users.map((user) => (
      <tr key={user.id}>
        <td className="border border-gray-300 px-4 py-2">{user.id}</td>
        <td className="border border-gray-300 px-4 py-2">{user['full-name']}</td>
        <td className="border border-gray-300 px-4 py-2">{user.role}</td>
        <td className="border border-gray-300 px-4 py-2">
          <button
            className=" cursor-pointer font-mono font-semibold hover:scale-102 transition   text-red-500 text-xl "
            onClick={() => deleteUser(user.id)}
          >
            حذف
          </button>
        </td>
      </tr>
    ))}
  </tbody>
</table>

                 </div>
                 </div>
                
        
        
        </>
    )}