import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FavBtn from "./FavBtn";
import AddToCartBtn from "./AddToCartBtn";
import sunicon from '../images/sunicon.png'
import colorp from '../images/colorp.png'
import iconsize from '../images/iconsize.png'
import leather from '../images/leather.png'
import whatsapp from '../images/whatsapp.png' 
import telegram from '../images/telegram.png'
import instagram from '../images/instagram.png'
import shareicon from '../images/share.png'
import Loading from "./Loading";





function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isOpen , setIsOpen] = useState(false) ;

 const productUrl = `${window.location.origin}/Products/${id}` ;
 const whatsappLink = `https://wa.me/?text=${encodeURIComponent(productUrl)}`;
 const telegramLink = `https://t.me/share/url?url=${encodeURIComponent(productUrl)}&text=${encodeURIComponent('مشخصات محصول')}`;
 const instagramLink = `https://www.instagram.com/?url=${encodeURIComponent(productUrl)}`;




  useEffect(() => {
    async function fetchProduct() {
      try {
        const { data } = await axios.get(`https://style-tehran-shirt-nodejs.onrender.com/api/products/${id}`);
        setProduct(data); 
      } catch (error) {
        console.error("Error fetching product:", err);
        setError("خطا در دریافت اطلاعات محصول");
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <Loading />;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;
  if (!product) return <p className="text-center text-gray-500 mt-10">محصولی یافت نشد</p>;

  return (
   <section className="px-6 pt-[16%] md:pt-30 relative flex flex-row-reverse justify-between ">
         <p className=" w-[90%] mx-auto md:mx-auto md:w-1/3 md:right-1/5 absolute text-center py-2 px-1 font-mono text-2xl border-b-1 mb-2 font-semibold text-gray-800 border-black/40 ">{product.Description}  </p>
                                   
           <article className=" absolute bottom-60 md:bottom-0 left-[3%] md:left-0 md:relative bg-white mt-30 mr-48 border w-[94%] md:w-2/4 min-h-80 md:h-[30vh] rounded-4xl border-black/10 shadow-sm shadow-teal-500 overflow-hidden " >
            <p className="text-center border-b pr-4 pt-1 pb-1 border-black/30 text-2xl md:text-lg font-mono " > مشخصات</p>
              <div className="grid grid-cols-2  place-items-center text-center gap-x-5 md:gap-x-10 gap-y-6  pt-5  align-middle text-black/70 font-semibold italic " >
                      <div className=" relative w-[150px] md:w-60 min-h-[14vh] md:min-h-20 md:h-20 border-1 text-center rounded-2xl shadow-sm/60 flex justify-center items-center  shadow-amber-300 border-black/10" >
                     <p className="pt-2"> جنس : نخ</p> <img className=" absolute top-0 right-0 w-10" src={leather} alt="" />
                      </div>
                      <div className=" relative w-[150px] md:w-60 min-h-[14vh] md:min-h-20 md:h-20  border-1 text-center rounded-2xl shadow-sm/60 flex justify-center items-center  shadow-amber-300 border-black/10">
                      <p className="pt-2"> مناسب فصل : تابستان </p><img className=" absolute top-0 right-0 w-10" src={sunicon} alt="" />
                      </div>
                      <div className=" relative w-[150px] md:w-60 min-h-[14vh] md:min-h-20 md:h-20 border-1 text-center rounded-2xl shadow-sm/60 flex justify-center items-center  shadow-amber-300 border-black/10">
                       <p className="pt-2"> xl - md - sm - xx : سایز </p><img className=" absolute top-0 right-0 w-9" src={iconsize} alt="" />
                       </div>
                      <div className=" relative w-[150px] md:w-60 min-h-[14vh] md:min-h-20 md:h-20 border-1 text-center rounded-2xl shadow-sm/60 flex justify-center items-center  shadow-amber-300 border-black/10">
                     <p className="pt-2"> رنگبندی : قرمز-سفید-آبی </p><img className=" absolute top-0 right-0 w-8" src={colorp} alt="" />
                     </div>


              </div>
           </article>
           
             <div className=" absolute bottom-[8%] md:-bottom-16 left-10 md:left-[54%]   flex flex-row gap-x-6 ">
                 <img src={shareicon} alt="" className="w-8 h-8" /> 
                 <p className="pr-2 text-center text-sky-600">share on</p>
                  
                    <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                       <img src={whatsapp} alt="" className="w-8 h-8 hover:scale-103" />
                    </a>
                    <a href={telegramLink} target="_blank" rel="noopener noreferrer">
                    <img src={telegram} alt="" className="w-8 h-8 hover:scale-103" />
                    </a>
                    <a href={instagramLink}  target="_blank"   rel="noopener noreferrer"
                   > <img src={instagram} alt="" className="w-8 h-8 hover:scale-103" /> </a>

              </div>


    
    <div className=" absolute  right-[5%] md:right-50 top-[85%] w-[90%] md:w-1/2  shadow-sm shadow-black/40 bg-white  inset-shadow-xs inset-shadow-teal-500 border-black/20 rounded-4xl text-right py-2 px-1  " >
      <button onClick={()=> setIsOpen(prev=> !prev)} className="text-center w-full border-b border-black/30 font-mono text-lg cursor-pointer " >《   نظرات کاربران   》</button>
      {isOpen && < div className="h-50 overflow-scroll mt-6 px-6 py-4 flex mx-4 rounded-4xl flex-col gap-y-4 bg-gray-500">  
             <p className="text-white" > ★  بسیار عالی »»» امتیاز :5/5  »»»  soheil </p>
             <p className="text-white" >★ خیلی جنسشونو دوست داشتم »»» امتیاز :5/4   »»»  amir</p>
             <p className="text-white">★ سلام  لطفا رنگبندی های بیشتری بذارید »»» امتیاز :5/4  »»»  mahshid </p>
             <p className="text-white">★   اصلا بدرد این فصل نمیخوردن و خیلی نازک بودن »»» امتیاز :5/2  »»»  mostafa</p>
             <p className="text-white">★ سلام خواهش میکنم رنگ بنفش رو هم اضافه کنید ممنون میشم  »»» امتیاز :5/4  »»»  reza</p>
             <p className="text-white">★  خیلی خفن و خوب  »»» امتیاز :5/5  »»»  jalili</p>
       </div>}
    </div>
          






       <div className= " w-[94%] mx-auto md:w-1/4 md:pl-4 mt-[90px] md:mt-0 mb-[80vh] md:mb-0 "  >
      <div className="relative border  border-black/30 bg-white shadow-md    max-w-3xl mx-auto">

        <img
          src={product.ImageFile}
          alt={product.Name}
          className="w-full h-80 object-cover mb-4 "
        />
        <p className="font-bold text-center my-4 bg-gray-200 py-2 rounded">قیمت: {product.Price} تومان</p>        
      </div>
            <div className=" text-md text-center hover:scale-101 transition mt-6 rounded-4xl hover:shadow-md font-mono font-semibold border-red-300 border-1 shadow-sm shadow-red-300"><FavBtn product={product} />  افزودن به لیست علاقه مندی ها </div>
            <div className=" text-lg flex flex-row justify-center items-center gap-x-14 hover:scale-101 hover:shadow-md transition font-mono font-semibold mt-6 rounded-4xl  border-teal-600 border-1 shadow-sm shadow-teal-500">
            <AddToCartBtn product={product} /> افزودن به سبد خرید </div>
            <div className="flex flex-row justify-center gap-x-10 mt-4   text-lg  border border-black/30  shadow-md font-mono font-semibold shadow-black/50 h rounded-3xl py-1 px-2 bg-white"  >   {product.inventory}  <p>: موجودی</p> </div>

      </div>
 </section>
  );
}

export default ProductDetails;
