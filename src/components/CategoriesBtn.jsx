
import { useState, useEffect } from "react";
import Select from "react-select";
import axios from "axios";
import Swal from "sweetalert2";






export default function CategoriesBtn() {

const [categories , setCategories] = useState([]) ;
const [products , setProducts] = useState([]) ;




useEffect(()=> {
    const fetchCategoris = async ()=> {
        try{
            const res = await axios.get("https://style-tehran-shirt-backend.onrender.com/api/Category") ;
            const formatted = res.data.data.map((e)=> ({
                value: e.id ,
                label: e.name ,
            })) ;
            setCategories(formatted) ;
        } catch(err) {
            console.log("error get categoriesBtn")
        }}
        fetchCategoris() ;
} , [])


 const handleCategories = async (selectOption) => {
    if(!selectOption) return ;
    try{
        const res = await axios.get(`https://style-tehran-shirt-backend.onrender.com/api/Products/ByCategory/${selectOption.value}`)
        setProducts(res.data.data)
       
    } catch(err) {
        console.log("error get products (categoriesBtn)") 
 }};
         
const handleDelete = async (id) => {
    const confrimDelete = window.confirm("آیا مایلید محصول را حذف کنید ؟") ;
    if (!confrimDelete) return ;
    try {
        const res = await fetch(`https://style-tehran-shirt-backend.onrender.com/api/Products/${id}`, {
         method : "DELETE" ,
        }) ;
        if(res.ok ) {
            alert("محصول حذف شد") ;
            
        } else {
            alert("خطا در حذف !!!");
        }
    } catch (err) {
        console.log("errorr deleting product") 
    }};


  


               
    return(
        <>
           <div className=" overflow-x-hidden">
      <Select
        options={categories}
        onChange={handleCategories}
        placeholder="... جستجو دسته‌بندی  🔍" 
        isSearchable 
        
        className="text-center text-md font-semibold text-shadow-2xs text-shadow-teal-400  rounded-2xl w-80 mx-auto pb-2 focus:ring-1 focus:ring-black caret-amber-700  "
      />

      <div className="p-4   bg-gray-300" >
        {products.length > 0 ? (
         <div className=" flex flex-row md:grid md:grid-cols-6 gap-x-2 py-4 md:py-0 md:gap-x-10 gap-y-4 overflow-x-auto md:overflow-x-hidden  ">
            {products.map((p) => (
              <div
                key={p.id}
                className="rounded-lg min-w-[170px] md:w-58 relative h-40 border-teal-600/70 border-1  bg-white flex flex-col "
              >
             
                <img
                  src={`https://style-tehran-shirt-backend.onrender.com${p.imageUrl}`}
                  alt={p.Name}
                  className="  object-center rounded-md w-1/2 h-1/2"
                />
                <h3 className="font-bold mt-2">{p.Name}</h3>
                <p className="text-md absolute right-1 top-10 text-right">  قیمت  : {p.price}</p>
                <p className="text-right break-words px-1">  {p.description}</p>
                <p className=" absolute right-1 top-2"> موجودی : {p.inventory}</p>
                <button onClick={()=> handleDelete(p.id)} className=" absolute left-1 bottom-1 hover:scale-101  hover:cursor-pointer  hover:bg-gray-400 bg-gray-300 transition  text-red-600 w-1/3 rounded text-md font-semibold  font-mono ">حذف</button>


              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500 text-center">هنوز دسته بندی انتخاب نشده</p>
        )}
      </div>
    </div>
 
        </>
    )
}