import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules"; 
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import categorisPic from '../images/categories.png'



export default function FirstImageSlider() {

const [categories , setCategories] = useState([]) ;


useEffect(()=>{
    const fetchCategories = async()=> {
    try {
        const res = await fetch("https://localhost:7002/api/Category") ;
        const data = await res.json() ;
        setCategories(data.data) ;
        
    } catch(err) {
        console.log("error getting data first image slider")
    }

}  ; fetchCategories()
} , [])
  




 
 
    return (
    <div className=" pt-[25px] md:p-10  bg-gray-300 h-[450px] md:h-[65vh]   ">



  <div className="flex flex-row mb-4  justify-end items-center  shadow-md shadow-white inset-shadow-2xs inset-shadow-white  border-b border-black/10">
   <p className="text-right font-mono text-[22px] md:text-2xl" >دسته بندی ها</p>
    <img className="h-16 w-16" src={categorisPic} alt="" />
   </div>  





      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 , 
          pauseOnMouseEnter: true
         }}
        speed={3000}
        className="h-full w-full  "
        breakpoints={{
    640: {
      slidesPerView: 1,
      spaceBetween: 40 ,
    },
    1024: {
      slidesPerView: 3,
      slidesPerGroup : 2,
      spaceBetween: 150,
    },
   
  }}
      >
       {categories.map((e) => (
        <SwiperSlide key={e.id} >
  <div  className=" flex items-center  bg-red-500 w-full md:h-[50vh]  relative border-x-3 border-teal-800">
    <Link to={`Products/ByCategory/${e.id}`} >
     <img src={`https://localhost:7002${e.imageUrl}`} 
      alt={e.name}  className=" w-full p-0  md:h-[50vh] object-cover rounded " />
     <p className=" absolute bottom-16 text-teal-600 text-shadow-sm/80 text-shadow-black left-2 underline underline-offset-7 text-2xl" >{e.name}</p>
     </Link>
  </div>
      </SwiperSlide>
))}
      </Swiper>

    </div>

  );
}
