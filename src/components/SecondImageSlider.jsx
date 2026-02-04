import { useState,useEffect } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, Grid } from 'swiper/modules';
import FavBtn from "./FavBtn";
import AddToCartBtn from "./AddToCartBtn";
import { Link } from "react-router-dom";
import discount from '../images/discount.png'





export default function SecondImageSlider({ product }) {

const [allProduct, setAllProduct] = useState([]) ;

useEffect(()=> {
    const fetchData = async()=> {
        const res = await fetch("https://style-tehran-shirt-nodejs.onrender.com/api/products") 
        const data = await res.json() ;
        setAllProduct(data)
        
       
        
        
    } ; 
    fetchData() ;
} , [])

{/*const offProduct = (allProduct ?? []).filter(p => p.price < 800); */}



    return(
        <> 
          <section className=" h-[80%] px-3 md:h-auto bg-gray-300  pt-30 w-full pb-10   mx-auto relative  " >
                            <div className=" my-4 w-[100%] md:w-[96%] mx-auto py-2 pr-1 flex flex-row justify-end items-center gap-x-2 shadow-md shadow-white border-b inset-shadow-2xs inset-shadow-white border-black/10 ">
                            <p className="text-right font-mono text-[22px] md:text-2xl ">محصولات تخفیف دار</p>
                            <img className="h-12 w-12" src={discount} alt="" />
                         </div> 
         <Swiper
  className=""
  modules={[Navigation, Pagination, Autoplay, Grid]}
  navigation={{
     nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  }}
  pagination={{ clickable: true   }}
  autoplay={{ delay: 4000 , pauseOnMouseEnter:true , disableOnInteraction:true }}
  loop={false}
  speed={2000}
  breakpoints={{
    300: {
      slidesPerView: 2,
      spaceBetween: 10 ,
    } ,
   1024:{slidesPerView: 5,
         spaceBetween: 12 ,
         slidesPerGroup : 2, }}}
  grid={{
    rows: 2,
    fill: 'row'
  }}

>
  
         {Array.isArray(allProduct) && allProduct ? allProduct?.map((e)=> {
          
            return(
                <SwiperSlide >
                 
                <div key={e.id} className=" relative  md:w-56 mx-auto mb-10 h-[40vh] md:h-80 bg-white border-1 border-gray-300 hover:shadow-md transition cursor-pointer hover:scale-101 rounded  shadow-md shadow-black inset-shadow-2xs  inset-shadow-teal-500 hover:border-teal-400 hover:shadow-teal-600 overflow-hidden break-words  " >
                    <Link to={`/Products/${e.id}`}>
               <img className="w-full h-[20vh] md:h-50" src={e.ImageFile}
               loading="lazy"  alt={e.Description || "لود نمیشود"} /> 
                   </Link>
                   <p className="text-center p-1 font-mono text-md" >{e.Description}</p>
                    <p className="text-center pt-1 font-bold  bg-black/10"> {` ت ${e.Price}  `} </p>
                    <p className=" absolute right-0  bg-black/20 rounded bottom-0 z-10 px-1" >موجود: {e.Inventory}</p>
                   <div className=" absolute top-0 left-0 hover:scale-108 " > <FavBtn product={e} /></div>
                   <div className=" absolute bottom-0 left-0" > <AddToCartBtn product={e} /> </div>
                  
                </div>
                
                </SwiperSlide>
            )
          }) : <p className="text-center text-2xl" >محصولات در حال بارگذاری</p>}
         
        </Swiper>
        <div className="swiper-button-prev  -left-6 z-10" />
        <div className="swiper-button-next  -right-6 z-10" />
 </section>

        </>
        
    )
    
}
