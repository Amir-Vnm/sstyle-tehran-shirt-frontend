import t1 from '../post images/t1.webp' ;
import h1 from '../post images/h1.webp' ;
import ChartComponent from './ChartComponent';



export default function DashboardPage() {


    return(
        <>
        
        <section className="flex flex-col justify-center gap-x-40 pt-30 w-4/5 mx-auto  ">

<div className=" w-full md:h-80 bg-black/80  shadow-md shadow-teal-800 border-4 border-white flex flex-col items-center  space-y-4 p-4">
  <p className="text-white text-2xl  border-b w-full text-center pb-1 ">پر بازدیدترین دسته‌بندی‌ها</p>

           <div className=" grid grid-cols-2 place-items-center gap-x-10 md:gap-x-40 gap-y-2  ">   
            <p className="text-white font-[cursive] text-xl ">هودی</p>
            <p className="text-white font-[cursive] text-xl" >تی شرت</p>
            <img className='w-40 h-40 rounded-3xl' src={h1} alt="" />         
            <img className=' w-40 h-40 rounded-3xl' src={t1} alt="" />
            
           </div>


  <p className="text-white text-sm mt-2">.این دسته‌بندی‌ها بر اساس بازدید کاربران در ماه گذشته انتخاب شده‌اند</p>   
</div>

<div className="w-full  md:h-80 bg-black/80 shadow-md shadow-teal-800 border-4 border-white flex flex-col items-center  space-y-4 p-4" >
     
   <div className="grid grid-cols-2 gap-4 mt-6">
  <div className="bg-white p-6 rounded shadow text-center">
    <h3 className="text-gray-700 text-lg font-semibold">بازدید امروز</h3>
    <p className="text-3xl text-blue-600 font-bold mt-2">134</p>
    <span className="text-sm text-gray-500">بر اساس داده‌ی دمو</span>
  </div>

  <div className="bg-white p-6 rounded shadow text-center">
    <h3 className="text-gray-700 text-lg font-semibold">بازدید این هفته</h3>
    <p className="text-3xl text-green-600 font-bold mt-2">792</p>
    <span className="text-sm text-gray-500">نمایش گراف تستی</span>
  </div>
</div>


</div>

            </section>



 <section className="flex flex-row justify-center  mt-10   mx-auto">



    <ChartComponent />

    
  </section>

        
        
        </>
    )}