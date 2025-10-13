import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";


import photo1 from "../images/photo1.webp";
import photo2 from "../images/photo2.webp";
import photo3 from "../images/photo3.webp";
import photo4 from "../images/photo4.webp";
import photo5 from "../images/photo5.webp";
import photo6 from "../images/photo6.webp";
import newcollection from '../images/newcollection.png'

export default function NewCollection() {
  return (
<>



    <div className="w-full pt-3 pb-10  bg-white relative  md:mb-0  ">

           <div className="bg-gray-300 px-1 md:mx-8 border border-white my-4 flex flex-row justify-end items-center  shadow-lg shadow-gray-500 inset-shadow-2xs inset-shadow-gray-300 ">
              <p className="text-right  font-mono text-[23px] md:text-2xl" >  محصول جدید ما</p>
               <img className="h-16 w-16" src={newcollection} alt="" />
              </div>  



            
      <div className="  grid grid-cols-2 md:grid-cols-3 gap-x-[4px] md:gap-x-4 gap-y-2 w-[100%] md:w-4/5 h-[520px] overflow-hidden md:h-[70vh]  mx-auto text-right  p-2">
        


        <div className="h-full relative">
          <Swiper
            modules={[Autoplay]}
            
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            className="h-full  relative z-10 cursor-grab "
          >
            <SwiperSlide><img loading="lazy" className="h-[250px]  md:h-auto" src={photo1} alt="1" /></SwiperSlide>
            <SwiperSlide><img loading="lazy" className="h-[250px]  md:h-auto" src={photo2} alt="2" /></SwiperSlide>
            <SwiperSlide><img loading="lazy" className="h-[250px]  md:h-auto" src={photo3} alt="3" /></SwiperSlide>
          </Swiper>
        </div>




        <div className="w-full   md:h-[88%] relative     flex flex-col  items-center border-x border-teal-800">
          <p className=" text-[20px] md:text-3xl text-center font-mono font-semibold leading-relaxed px-2 mt-[40px] md:mt-14  tracking-wide">
             پولیور جدید ما بسیار زیبا و خوش پوش
          </p>
          <p className="px-2 text-lg mt-16 leading-relaxed hidden md:block  h-26    border-black/30 ">
            با پولیور جدید ما آشنا شوید طراحی تازه‌ای با فرم اورسایز و راحت
            که ظاهری شیک و بی‌دردسر را به شما هدیه می‌دهد. این مدل، نسخه‌ای
            آزادتر از مدل معروف قبلی است که با فرم جذب و برش دقیق شناخته
            می‌شود. پولیور جدید ما با پارچه‌های باکیفیت، و دوخت حرفه‌ای تولید
            شده و انتخابی همه‌کاره و خوش‌استایل برای هوای پاییز، ناهار یا یک
            شب خاص است
          </p>
          <div className="flex flex-row rounded md:px-3  py-1 w-[120px] md:w-50 absolute   bottom-10 md:static text-[14px] md:text-lg whitespace-nowrap overflow-hidden text items-center gap-x-1 bg-teal-700 text-white  md:mt-8 cursor-pointer hover:scale-105 transition hover:text-black hover:bg-teal-500 justify-center">
            خرید محصول جدید
          </div>
        </div>
              


            <p className=" md:hidden text-right text-sm leading-relaxed  pr-1 overflow-scroll border-teal-800  ">
            طراحی جدید  اورسایز و راحت  
            که ظاهری شیک و بی‌دردسر را به شما هدیه می‌دهد. این مدل، نسخه‌ای
            آزادتر از مدل معروف قبلی است که با فرم جذب و برش دقیق شناخته
            می‌شود. با پارچه‌های باکیفیت، و دوخت حرفه‌ای تولید
            شده و انتخابی همه‌کاره و خوش‌استایل برای هوای پاییز، ناهار یا یک
            شب خاص است
          </p>



        <div className="relative h-full">
          <Swiper
            modules={[Autoplay, ]}
            
            autoplay={{ delay: 3700, disableOnInteraction: false }}
            loop={true}
            className="h-full  relative z-10 cursor-grab"
          >
            <SwiperSlide><img loading="lazy" className="h-[242px]  md:h-auto" src={photo4} alt="4" /></SwiperSlide>
            <SwiperSlide><img loading="lazy" className="h-[250px]  md:h-auto" src={photo5} alt="5" /></SwiperSlide>
            <SwiperSlide><img loading="lazy" className="h-[250px]  md:h-auto" src={photo6} alt="6" /></SwiperSlide>
          </Swiper>
        </div>     
      </div>
       
    </div>
  </>);
}
