import { useState } from "react";
import { Outlet, NavLink  } from "react-router-dom";
import categorydashboard from '../images/categorydashboard.png'
import dashboardhome from '../images/dashboardhome.png'
import productdashboard from '../images/productdashboard.png'
import userlistdashboard from '../images/userlistdashboard.png'



export default function AdminDashboard( {hamburger,  } ) {


 const [menu , setMenu] = useState(false) 
 




    return(
        <>
 <section className="relative z-30 w-full overflow-x-hidden md:w-auto " >    
<div className="  absolute right-2 top-[60px] md:top-38 z-50 " onClick={()=> setMenu(prev => !prev)} role="button" >{hamburger}</div>
{menu && (
        <div
          className=" absolute w-screen h-32 -top-31 backdrop-blur-[2px]  bg-black/10 z-20"></div>
          )}
<div className={` z-30 pt-6 absolute  w-64 bg-white h-[80vh] right-0 top-36   transition-transform duration-400  rounded inset-shadow-sm inset-shadow-teal-600 ${menu ? " translate-x-0 " : " translate-x-full" } `} >



 
  <aside className=" flex flex-col  mx-4 gap-y-9 text-[19px] pt-20 text-right   ">
    
          <div className="flex flex-row gap-x-2 pb-0.5 font-serif shadow-sm shadow-black w-full rounded p-1  justify-end items-center" ><NavLink to="dashboardpage" className={({isActive})=> isActive ? "text-teal-600  border-b w-full text-center inset-shadow-2xs inset-shadow-teal-400 rounded-2xl px-1 py-0.5 transition  " : "text-black w-full "}>داشبورد  </NavLink> 
          <img className="w-6 h-6 " src={dashboardhome} alt="" /> </div> 
          <div className="flex flex-row gap-x-2 pb-0.5 font-serif shadow-sm shadow-black w-full rounded p-1  justify-end items-center" > <NavLink to="categorispage" className={({isActive})=> isActive ? "text-teal-600 border-b w-full text-center inset-shadow-2xs inset-shadow-teal-400   rounded-2xl px-1 py-0.5 transition" : "text-black w-full "}>مدیریت دسته بندی ها</NavLink>
          <img className="w-6 h-6 " src={categorydashboard} alt="" /> </div>
          <div className="flex flex-row gap-x-2 pb-0.5 font-serif shadow-sm shadow-black w-full rounded p-1  justify-end items-center" > <NavLink to="productpages" className={({isActive})=> isActive ? "text-teal-600  border-b w-full text-center inset-shadow-2xs inset-shadow-teal-400  rounded-2xl px-1 py-0.5 transition" : "text-black w-full "}>مدیریت محصولات</NavLink>
          <img className="w-6 h-6 " src={productdashboard} alt="" /> </div>
          <div className="flex flex-row gap-x-2 pb-0.5 font-serif shadow-sm shadow-black w-full rounded p-1  justify-end items-center" > <NavLink to="userlistpage" className={({isActive})=> isActive ? "text-teal-600  border-b w-full text-center inset-shadow-2xs inset-shadow-teal-400  rounded-2xl px-1 py-0.5 transition" : "text-black w-full "}> مدیریت لیست کاربران</NavLink>
          <img className="w-6 h-6 " src={userlistdashboard} alt="" /> </div>
  
   </aside>
          
</div>

                   <main > <Outlet /> </main>

        
      </section>   
        </>
    )}