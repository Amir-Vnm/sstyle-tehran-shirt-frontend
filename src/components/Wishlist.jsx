import heart from '../images/heart.png' 
import { useState } from 'react';
import useShopStore from './Store';
import { Link } from "react-router-dom";





export default function Wishlist() {
const [isOpen , setIsopen] = useState(false) ;
const { wishlist , toggleWishlist  } = useShopStore() ;



    return(
        <>
       
      
        <button onClick={()=> setIsopen(!false)} className=' w-[33px] md:w-10 mt-[12px] md:mt-0 mr-[4px] md:mr-10 hover:scale-105 relative transition cursor-pointer ' >
          <span className=' absolute bottom-2 text-red-500 right-0 font-bold text-center w-10' > {wishlist.length > 0 ? (wishlist.length) : '' }
              </span>   <img className='bounce-top' src={heart} alt="menu logo" />  </button>
             
             
<div className={`absolute hidden md:block w-2/3 h-screen bg-black/10 backdrop-blur-[3px] z-60 transition-transform duration-500 left-0 ${isOpen ? "translate-x-0" : " -translate-x-full"} `} >
</div>

    <div className={` w-[100%] md:w-1/3 h-screen absolute right-0 overflow-x-visible overflow-y-scroll  bg-white transition-transform duration-700 z-60 ${isOpen ? " -translate-x-0 " : " translate-x-[110%]"}`} >
     
       <button onClick={()=> setIsopen(false)} className='text-7xl px-6  pb-2 bg-white text-center border-2 rounded-full absolute -left-0 mt-[10px] md:mt-0 ml-[5px] md:ml-0 cursor-pointer hover:bg-teal-800 hover:text-white' >
         ❯   </button>
      
           <div className='text-center '>
             <p className='text-center mt-8 text-[27px] md:text-5xl font-mono text-black/70' >علاقه مندی ها</p>
               <div className='mt-[60px] md:mt-0 '>  
               
               {wishlist.map((e)=> (
                <Link key={e.id} to={`/Products/${e.id}`}> 
              
                <div className=' w-full h-full relative flex flex-row  items-center justify-around   mr-4 mt-[10px] md:mt-10 border-y bg-gray-100 border-black/30 overflow-hidden hover:scale-101 transition shadow-sm shadow-black/30 hover:shadow-md ' >
                  
                  
                      <img className=" h-[60px] md:h-22   " src={`https://style-tehran-shirt-nodejs.onrender.com${e.imageUrl}`} alt={e.description || "لود نمیشود"} />
                      <p className="text-right p-1 text-md  font-mono w-2/4 break-words  " >{e.description}</p>
                      <p className="text-center pt-1 font-bold underline underline-offset-5"> {` تومان ${e.price}  `} </p>
                     <button onClick={()=> toggleWishlist(e)  } className='border rounded-4xl bg-red-200 border-white hover:scale-110 cursor-pointer' >❌</button>
                   
                
                </div>
                
                
            
            </Link>   ))  } 
               </div> 


               <button onClick={()=> setIsopen(false)} className='mt-6 text-center border-2  py-2 rounded-lg bg-teal-800 text-white cursor-pointer hover:scale-103 hover:bg-teal-900 transition px-20 text-3xl ' >ادامه خرید</button>

           </div>
       </div>
        </>
    )
}