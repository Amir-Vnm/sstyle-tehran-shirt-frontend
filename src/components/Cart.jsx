import cardpng from '../images/card.png' 
import { useState,useEffect, useRef } from 'react';
import useShopStore from './Store';



export default function Cart() {
const [isOpen , setIsopen] = useState(false) ;
const [showMessages , setShowMessages] = useState(false) ;

const myCart = useShopStore ((state)=> state.myCart) ;

const removeFromCart = useShopStore((state)=> state.removeFromCart) ;
const increaseCount = useShopStore((state) => state.increaseCount);
const decreaseCount = useShopStore((state) => state.decreaseCount);

const totalPrice = myCart.reduce((sum, item) => {
  const price = Number(item.price) || 0;
  const count = Number(item.count) || 0;
  return sum + price * count;
}, 0);



const prevCart = useRef(myCart.length)

useEffect(()=> {
     if(myCart.length > prevCart.current ) {
      setShowMessages(true) 
      const timer = setTimeout(()=>{
         setShowMessages(false)
      }, 2500)
      prevCart.current = myCart.length
      return ()=> clearTimeout(timer)

     } else {
      setShowMessages(false)
     }
     prevCart.current = myCart.length
} , [myCart])




    return(
        <>
       
       {showMessages && ( <p className=' absolute top-10 left-60 z-[100] slide-in-elliptic-right-fwd bg-teal-700 text-md px-2 py-1 text-white rounded-3xl  ' > 😍محصول به سبد خرید اضافه شد</p> )}
        <button onClick={()=> setIsopen(prev => !prev)} className=' relative bounce-top w-[35px] md:w-10 mt-[10px] md:mt-0 md:mr-4 hover:scale-105 transition cursor-pointer ' >
           <span className='absolute bottom-2 text-teal-500 right-0 font-bold text-center w-10' > {myCart.length > 0 && (myCart.length)} </span>
             <img src={cardpng} alt="meno logo" className='bounce-top' />  </button>
             

<div className={` hidden md:block absolute w-2/3 h-screen bg-black/10 backdrop-blur-[3px] z-60 transition-transform duration-500 left-0 ${isOpen ? "translate-x-0" : " -translate-x-full"} `} >
</div>

    <div className={`w-[100%] md:w-1/3 h-screen absolute right-0 overflow-x-visible overflow-y-scroll bg-white transition-transform duration-700 z-60 ${isOpen ? " -translate-x-0 " : " translate-x-[110%]"}`} >
       <button onClick={()=> setIsopen(false)} className='text-7xl px-6  pb-2 bg-white text-center border-2 rounded-full absolute ml-[4px] md:ml-0 mt-[4px] md:mt-0 -left-0 cursor-pointer hover:bg-teal-800 hover:text-white' >     
         ❯ </button>



              <div className='text-center' >
                <p className='text-center mt-8 text-[35px] md:text-5xl font-mono text-black/70'> سبد خرید </p>
                   { myCart.length >= 1 && <button onClick={()=> setIsopen(false)} className=' mt-4 border-black text-center border-2  py-2 rounded-lg bg-teal-800 text-white cursor-pointer hover:scale-103 hover:bg-teal-900 transition px-6 text-xl ' >
                     ادامه خرید</button> }

{ myCart.length >= 1 && <p className=" top-[1%] md:top-30 right-[5px] md:right-4  text-[16px] md:text-xl    text-teal-700 absolute">
 <span>: جمع کل </span> <br /> تومان  {totalPrice.toLocaleString()} </p>}


                 {myCart.length === 0 ? (<p className='mt-20 text-xl underline underline-offset-6 text-black/50' > سبد خالی  </p>)
                  : myCart.map((e)=> (
                     <div key={e.id} className=' relative flex flex-row-reverse justify-around items-center mr-4 mt-[20px] md:mt-16 pl-0.5 border-y md:bg-gray-100 border-black/30 overflow-hidden hover:scale-101 transition shadow-sm shadow-black/30 hover:shadow-md ' >
                     <button onClick={()=> removeFromCart(e.id)  } className='border rounded-4xl bg-red-200 border-white hover:scale-110 cursor-pointer' >❌</button>
                     <img className="w-24 h-22 " src={e.imageUrl} alt={e.description || "لود نمیشود"} />
                    <p className="text-right p-1 text-md w-2/4 break-words  " >{e.description}</p>
                    <p className="  text-center pt-1 font-bold underline underline-offset-5"> {` تومان ${e.price}  `} </p>
                    <p className=' absolute left-12 top-0'> : تعداد</p> 
                     <p className='absolute left-3 top-0 px-1 underline underline-offset-2 font-semibold rounded-3xl bg-amber-100 '> {e.count} </p>
                    <button className='rounded-full cursor-pointer hover:bg-teal-400 bg-teal-200 text-2xl text-center px-0.5 border border-black/10 pb-1 mr-2 '
                     onClick={()=> increaseCount(e.id)} >+</button>
                    <button className='rounded-full cursor-pointer hover:bg-teal-400 bg-teal-200 text-2xl text-center px-1 mx-1 border border-black/10 pb-1 '
                       disabled={e.count === 0} onClick={()=> decreaseCount(e.id)}>-</button>
                   
                </div>
               ))  
               }

              </div> 
               
       </div>

        </>
    )}