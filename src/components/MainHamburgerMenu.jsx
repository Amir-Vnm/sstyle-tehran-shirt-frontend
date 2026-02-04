import menupng from '../images/hamburgermenu.png' 
import { use, useEffect, useState } from 'react';
import logo from '../images/logo1.png'
import { Link } from 'react-router-dom';
import SignUpForm from './SignUp';
import LoginForm from './LoginForm'
import userlogin from '../images/userlogin.png'




export default function MainHamburgerMenu() {
const [isOpen , setIsopen] = useState(false) ;
const [openForm , setOpenForm] = useState(false) ;
const [userMessage , setUserMessage] = useState('') ;


const userid = localStorage.getItem('full-name') ;
const userRole = localStorage.getItem('role')


const forms = {
     SignUp : <SignUpForm /> , 
     Login : <LoginForm /> ,
}

useEffect(()=>{
  const name = localStorage.getItem('full-name') ;
  if (name) {
    setUserMessage(name) ;
    const timer = setTimeout(() => {
      setUserMessage('')
    }, 8000);
    return ()=> clearTimeout(timer) ;
  } 

} , [])


    return(
        <>
          {userMessage &&<p className=' tracking-out-contract-bck-top absolute top-8 left-[110px]  md:left-[42%] text-[16px] md:text-2xl font-mono whitespace-nowrap'>  عزیز  <span className='text-teal-600 underline underline-offset-4 italic '>{userMessage}</span> خوش امدید  </p>}
        
        <button onClick={()=> setIsopen(!false)} className= 'w-[32px] md:w-9 ml-[4px] md:ml-10 mt-[10px] md:mt-0 hover:scale-105 transition cursor-pointer ' >
              <img className='bounce-top' src={menupng} alt="meno logo" /> </button>

              
<div className={` hidden md:block absolute w-2/3 h-screen bg-black/10 backdrop-blur-[3px] z-60 transition-transform duration-500 right-0 ${isOpen ? "translate-x-0" : " translate-x-[110%]"} `} >
</div>

    <div className={`  w-[100%] md:w-1/3  absolute h-screen bg-white transition-transform duration-600 z-60 ${isOpen ? "md:translate-x-0 translate-x-[0%]" : "md:-translate-x-[110%] -translate-x-[150%] "}`} >
       <button onClick={()=> setIsopen(false)} className='  absolute right-1 top-2  text-7xl px-6  pb-2 bg-white text-center border-2 rounded-full cursor-pointer hover:bg-teal-800 hover:text-white' >
         ❮ </button>

                  
                    <img className='w-40 ml-44 hidden md:block  ' src={logo} alt="" />
                 
              <nav className=' flex flex-col text-[1.5rem] md:text-3xl gap-y-10  mt-30 font-mono text-right ' >
                <Link to='/' onClick={()=> setIsopen(false)} className='border-b border-black/15 pr-8 hover:text-teal-800 ' > خانه</Link> 
                <Link to='/AboutUs' onClick={()=> setIsopen(false)} className='border-b border-black/15 pr-8 hover:text-teal-800 ' >درباره ما</Link>
                <Link to='/ContactUs' onClick={()=> setIsopen(false)} className='border-b border-black/15 pr-8 hover:text-teal-800 ' >تماس با ما</Link>
             

              </nav>



  {userid &&  <div className=' absolute  top-2 md:mt-22 right-[28%] w-70  flex flex-col justify-center items-center' > 
       <p className=''>{userRole}</p> 
      <div className='flex flex-row-reverse relative items-center rounded-2xl border border-sky-400'>
        <img className='w-10 h-10' src={userlogin} alt="" />
         <p className='text-2xl min-w-40 max-w-60 h-12  text-center overflow-hidden break-words text-sky-300  rounded-4xl px-1 py-2'>  {userid}  </p> </div>
    <button
    onClick={() => {
    localStorage.removeItem('role');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('full-name');
    window.location.href = '/';
  }}
  className="text-red-600 px-4 py-2 mt-1 rounded-4xl border-2 cursor-pointer hover:bg-red-50"
>
  خروج
</button>

                              </div>}

         <div className=' mt-[16px] md:mt-14 flex flex-row px-2 gap-x-20 justify-baseline items-center w-3/4 mx-auto   ' >
            <button onClick={()=> setOpenForm("SignUp")} className={` w-full mx-auto  text-center  shadow-md shadow-teal-500 bg-white
              text-lg hover:bg-black/4 font-semibold border   py-4  cursor-pointer rounded-2xl hover:shadow-xs
                ${openForm === "SignUp" ? "border-teal-100   bg-teal-50 shadow-sm text-teal-600" : "border-teal-200 text-slate-800"} `} >عضویت </button>
            <button onClick={()=> setOpenForm("Login")} className={`  w-full mx-auto  text-center hover:shadow-xs hover:text-sky-500
               text-lg hover:bg-black/4 font-semibold border py-4  cursor-pointer rounded-2xl  shadow-md shadow-sky-400 bg-white
                ${openForm === "Login" ? "border-sky-400   bg-sky-200 shadow-sm text-sky-400 "  : "border-sky-300 text-slate-800"}`} >ورود</button>
         </div>
         <div> {forms[openForm]} </div>


       </div>



        </>
    )
}