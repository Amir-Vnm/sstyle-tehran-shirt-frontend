import { useEffect, useState } from "react";
import CategoriesBtn from "./CategoriesBtn";
import Loading from "./Loading";
import Swal from "sweetalert2";
import ReactPaginate from 'react-paginate';





function ProductsPage() {
    
    const [open , setOpen] = useState(false)
    const [image, setImage] = useState(null);
    const [categories, setCategories] = useState('') ;
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    const [stock, setStock] = useState(0);
    const [loading , setLoading] = useState(true)
    const [allProducts , setAllProducts] = useState([]) ;
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 15; 



 
const fetchAllproducts = async () => {
  setLoading(true);
  try {
    const res = await fetch('https://style-tehran-shirt-backend.onrender.com/api/Products');
    const data = await res.json();
    setAllProducts(data.data);
    setLoading(false);  
  } catch (error) {
    console.error('fetching data admin product page', error);
  }
};

useEffect(() => {
  fetchAllproducts();
}, []);




const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData() ;
    formData.append('ImageFile', image) ;
    formData.append('Price', price) ;
    formData.append('Description', description) ;
    formData.append('inventory' , stock) ;
    formData.append('CategoryId' , categories )

    try {
        const response = await fetch('https://style-tehran-shirt-backend.onrender.com/api/Products' , {
            method:'POST' ,
            body: formData ,
        })
        if(response.ok) {
            
             Swal.fire({
               icon: 'success' ,
               title: 'محصول اضافه شد' ,
               timer: 3000 ,
               confirmButtonColor: '#0f766e',
             });   
             fetchAllproducts() ;
                }else {
                       Swal.fire({
               icon: 'error' ,
               title: 'خطا در اضافه کردن محصول' ,
               text: 'صفحه را رفرش کنید',
               timer: 3000 ,
               confirmButtonColor: '#0f766e',
             }); 
                }
    } catch (error) {
        console.log("error submit") ;
        
    }};



    const handleDelete = async (id) => {
    const result = await Swal.fire({
    icon: 'question',
    title: 'می‌خواهی محصول را حذف کنی؟',
    showCancelButton: true,
    confirmButtonText: 'حذف',
    confirmButtonColor: '#FF0000',
    cancelButtonText: 'منصرف',
  }); 
  if (result.isConfirmed) {
        console.log('محصول حذف شد:', id);
  
    try {
        const res = await fetch(`https://style-tehran-shirt-backend.onrender.com/api/Products/${id}`, {
         method : "DELETE" ,
        }) ;
        if(res.ok ) {
              Swal.fire({
               icon: 'info' ,
               title: 'محصول حذف شد' ,
               timer: 3000 ,
               confirmButtonColor: '#0f766e',
             });   
            fetchAllproducts() ;
            return ;
            
        } else {
              Swal.fire({
               icon: 'error' ,
               title: 'خطا , محصول حذف نشد' ,
               timer: 3000 ,
               confirmButtonColor: '#0f766e',
             });  
        }
    } catch (err) {
        console.log("errorr deleting product") 
        
    } 
}};


const offset = currentPage * itemsPerPage;
const currentItems = allProducts.slice(offset, offset + itemsPerPage);
const pageCount = Math.ceil(allProducts.length / itemsPerPage);

    return(
        <>
                   


{!open && <button onClick={()=> setOpen(prev=> !prev)} className="w-full bg-teal-800 text-center  items-center text-white mt-26 hover:text-teal-200 hover:cursor-pointer " >
     🡢  برای اصافه کردن محصول کلیک کنید  🡠</button> } 
{open && <button onClick={()=> setOpen(prev=> !prev)} className="w-full bg-teal-800 text-center  items-center text-white mt-26 hover:text-teal-200 hover:cursor-pointer " >
     🡣  برای بستن کلیک کنید 🡣</button> }     




<div className= {`h-50 relative z-30 bg-gray-300 w-2/3 mx-auto ease-in-out transition duration-400 ${open ? "opacity-100 max-h-50 " : " opacity-0 max-h-0 overflow-hidden"}`} >
    <form action="" className=" flex  text-xl pt-4  text-center justify-center  gap-x-10 font-mono   ">


        <div className="flex flex-col ">
        <label className="mx-6" >عکس</label>
        <input type="file" placeholder="برای انتخاب عکس کلیک کنید" onChange={handleImageChange} className="bg-white w-66 inset-shadow-sm inset-shadow-teal-800 mt-4 text-black" />
         </div>

         <div className="flex flex-col">
         <label> دسته بندی </label>
        <input type="number" value={categories} onChange={(e)=> setCategories(e.target.value)} className="text-center bg-white w-26 inset-shadow-sm inset-shadow-teal-800 mt-4 text-black" />
         </div>

         <div className="flex flex-col">
        <label >قیمت</label>
        <input type="text" value={price} onChange={(e)=> setPrice(e.target.value)} className="text-center bg-white w-34 inset-shadow-sm inset-shadow-teal-800 mt-4 text-black"  />
         </div>


         <div className="flex flex-col " > 
        <label>موجودی</label>
        <input type="number" value={stock} onChange={(e)=> setStock(e.target.value)} className="w-18 text-center bg-white  inset-shadow-sm inset-shadow-teal-800 mt-4 text-black " />
         </div>
  
        <div className="flex flex-col">
        <label >توضیحات</label>
        <textarea  value={description} onChange={(e)=> setDescription(e.target.value)} className=" text-right px-2 -mb-8 bg-white  inset-shadow-sm inset-shadow-teal-800 mt-4 text-black"  ></textarea>
         </div>
                 <button className="w-60 h-12 bottom-0 absolute  border-teal-400 mt-16 p-2 rounded border-2 hover:cursor-pointer hover:bg-white hover:scale-105 transition " onClick={handleSubmit} > اضافه  کردن +</button>

    </form>
</div>
                       

<div className=" relative flex justify-center mt-10">
<CategoriesBtn />
</div>  


<div className=" relative bg-white mb-28 grid grid-cols-2 place-items-center md:grid-cols-4 pt-16 md:px-6 gap-2 md:gap-2 w-[96%] md:w-5/6 mx-auto mt-10 h-[60vh] border-1 overflow-y-scroll">
               
 <p className=" absolute text-center top-0 right-28 md:right-[45%] bg-teal-700 font-semibold text-white px-2 py-1 ">تمامی محصولات</p>
  {loading && <div > <Loading /> </div>}
    {currentItems.map((p)=>(
        <div key={p.id} className="   relative border-teal-600 text-center h-40 w-full md:w-1/2 border  cursor-pointer bg-white p-1 rounded shadow flex flex-row justify-around  border-b">
            <img className=" w-1/2 h-1/2 md:w-1/2 md:h-1/2  " src={`https://style-tehran-shirt-backend.onrender.com/${p.imageUrl}`} alt={p.description || "لود نمیشود"} /> 
            <p className=" ">{p.inventory} موجودی </p>
            <h3 className="text-md break-words w-2/3 absolute bottom-7 right-0  overflow-hidden ">{p.description}</h3>
            <p className=" absolute right-0 top-12 text-sm text-gray-600">{p.price} تومان</p>
            <button onClick={()=> handleDelete(p.id)} className=" absolute bottom-0 right-2  underline underline-offset-2 text-red-600 font-mono h-6 self-center rounded-2xl pb-1 cursor-pointer px-0.5 text-center ">حذف </button>
            
            

          </div>
          
    ))}
   
 <div className="flex justify-center mt-20 -mb-40 -translate-x-[40%] md:-translate-x-[450px] z-30 bg-gray-300  h-10 p-1 rounded-2xl">
  <ReactPaginate
    previousLabel="قبلی"
    nextLabel="بعدی"
    breakLabel="..."
    pageCount={pageCount}
    onPageChange={({ selected }) => setCurrentPage(selected)}
    containerClassName="flex gap-2"
    pageClassName=" w-4 h-7 cursor-pointer hover:text-red-400 text-center border rounded-md text-teal-700 hover:bg-teal-100"
    activeClassName="bg-teal-700 text-white  "
    previousClassName=" w-12 text-center py-0.5 px-0.5 cursor-pointer border rounded-md text-gray-600 hover:bg-gray-200"
    nextClassName=" w-12 text-center py-0.5 px-0.5 cursor-pointer border rounded-md text-gray-600 hover:bg-gray-200"
  />
</div>
</div>
              
   </>
    )
}

export default ProductsPage ;