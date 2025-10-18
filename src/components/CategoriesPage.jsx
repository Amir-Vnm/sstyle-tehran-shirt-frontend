import { useState, useEffect } from "react";
import axios from "axios";
import Loading from "./Loading";
import Swal from "sweetalert2";




export default function CategoriesPage() {
  const [open, setOpen] = useState(false);
  const [allCategories, setAllCategories] = useState([]);
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [editOpen , setEditOpen] = useState(false) ;
  const [editId, setEditId] = useState(null);
  const [loading, setLoading] = useState(true) ;


  const fetchCategories = async()=> {
          setLoading(true)
            try{
              const res = await axios.get("https://style-tehran-shirt-backend.onrender.com/api/Category") ;
              setAllCategories(res.data.data) ;
              setLoading(false)
            } catch (err) {
              console.log("error getting category from category page")
            }
          } ;

useEffect(()=>{     
    fetchCategories() ;
 } , [])




  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("ImageFile", image);
    formData.append("Name", name);

    try {
      const response = await fetch("https://style-tehran-shirt-backend.onrender.com/api/Category", {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
       Swal.fire({
         icon: 'success',
         title: 'دسته بندی اضافه شد',
         timer: 3000 ,
         confirmButtonColor: '#0f766e',
       });   ;
        setName('');
        setImage(null);
        fetchCategories();
        
      } else {
        Swal.fire({
          icon: 'error',
          title: 'خطا در اضافه کردن دسته بندی',
          timer: 3000 ,
          confirmButtonColor: '#0f766e',
        });   ;
      }
    } catch (error) {
      console.log("error submit");
        ;
    }
  };

 

const handleDelete = async (id) => {
  const result = await Swal.fire({     
    icon: 'question',
    title: 'می‌خواهی دسته‌بندی را حذف کنی؟',
    confirmButtonText: 'حذف',
    cancelButtonText: 'منصرف',
    confirmButtonColor: '#ff0000',
    showCancelButton: true,
  });

  if (!result.isConfirmed) return; // اگر کاربر منصرف شد، خروج

  try {
    const res = await fetch(`https://style-tehran-shirt-backend.onrender.com/api/Category/${id}`, {
      method: "DELETE",
    });

    if (res.ok) {
      await Swal.fire({
        icon: 'info',
        title: 'دسته‌بندی حذف شد',
        text: 'صفحه را رفرش کنید',
        timer: 3000,
        confirmButtonColor: '#0f766e',
      });
      fetchCategories(); // اگر این تابع بالا تعریف شده باشه
    } else {
      Swal.fire({
        icon: 'error',
        title: 'خطا در حذف دسته‌بندی',
        timer: 3000,
        confirmButtonColor: '#0f766e',
      });
    }
  } catch (err) {
    console.log("خطا در حذف دسته‌بندی:", err);
  }
};


   

    const handleChange = async (id) => {
      id.preventDefault() ;
    if (!editId) {
     Swal.fire({
       icon: 'error',
       title: 'شماره مشخص نیست' ,
       timer: 3000 ,
       confirmButtonColor: '#0f766e',
     });    
      return ;
    }
    const formData = new FormData();
       
  formData.append("ImageFile", image);
  formData.append("Name", name);

  try {
    const res = await fetch(`https://style-tehran-shirt-backend.onrender.com//api/Category/${editId}`, {
      method: "PUT",
      body: formData,
    });
    if (res.ok) {
      Swal.fire({
        icon: 'success',
        title: 'تغییرات انجام شد' ,
        text: 'صفحه را رفرش کنید' ,
        timer: 3000 ,
        confirmButtonColor: '#0f766e',
      });   ;
      setName('');
      setImage(null);
      setEditId(null)
      setEditOpen(false)
      fetchCategories();
    } else {
      Swal.fire({
        icon: 'warning',
        title: 'خطا در تغییرات',
        timer: 3000 ,
        confirmButtonColor: '#0f766e',
      });   ;
    }
  } catch (err) {
    console.log("error updating category");;
  }
};




  return (
    <>
                         
     {!open && <button
        onClick={() => setOpen(prev => !prev)}
        className={` relative mt-[104px] md:mt-26 z-30 h-[30px] md:h-auto  w-full text-lg md:text-md bg-teal-800 text-center items-center  text-white  hover:text-teal-200 hover:cursor-pointer `
           } > 🡢  برای اضافه کردن دسته بندی کلیک کنید   🡠
     </button>}
       {open && <button
        onClick={() => setOpen(prev => !prev)}
        className={` relative mt-[104px] md:mt-26 z-30 w-full h-[30px] md:h-auto text-lg md:text-md bg-teal-800  text-center items-center  text-white  hover:text-teal-200 hover:cursor-pointer `
           } > 🡣  برای بستن کلیک کنید   🡣
     </button>}

      
        <form
          onSubmit={handleSubmit}
          className={` w-[96%] md:w-1/3 rounded mx-auto flex text-xl pt-4 relative text-right justify-center md:gap-x-10 font-mono bg-gray-300 transition  duration-300 ${open ? " h-[120px] md:h-44 opacity-100  overflow-visible ease-in " : " opacity-0 h-0 ease-in-out transition  overflow-hidden " }`}
        >
          <div className="flex flex-col -mt-4 md:-mt-0">
            <label className="mr-18 md:mr-36 font-semibold mb-2 md:mb-0">عکس</label>
            <input
              type="file"
              
              onChange={handleImageChange}
              className="bg-white w-[170px] h-8 md:h-6 md:w-68  md:mt-4  text-black inset-shadow-sm inset-shadow-teal-600"
            /> 
          </div>

          <div className="flex flex-col gap-y-4 ml-10 -mt-4 md:-mt-0 font-semibold">
            <label className="" >نام دسته‌بندی</label>
            <input
              className="w-36 h-8 -mt-2 md:-mt-0 inset-shadow-sm inset-shadow-teal-600"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className= "absolute bottom-0  md:w-60 h-12 text-sm md:text-lg    md:bottom-4 font-bold border-teal-400  p-2 rounded border-2 hover:cursor-pointer hover:bg-white hover:scale-103 transition"
          >
            اضافه کردن +
          </button>
        </form>
                                   {loading && <div> <Loading /> </div>}
          
    <div className={` absolute md:top-32 inline bg-sky-200 w-[34%] h-34 pl-10 transition-transform duration-600 rounded ${editOpen ? " translate-x-1 w-full md:w-auto md:translate-x-4 " : " w-0 -translate-x-[1000px] md:-translate-x-[140%] "} ` } >
                <h2 className="text-xl text-black left-[10%] bottom-4  absolute ">   شماره {editId}</h2>
               
                 <form  onSubmit={handleChange} className=" relative flex flex-row " >
                    
                   <div className="flex flex-col">
                   <label className="md:pl-10 font-semibold underline underline-offset-4 mt-1">انتخاب عکس</label>
                   <input
                      type="file"
                     onChange={handleImageChange}
                      className="bg-white w-[190px] md:w-60 -ml-12 md:-ml-0 mr-2 mt-2 md:mt-4 text-black inset-shadow-sm inset-shadow-teal-600"
                                                                  />
                      </div>

                       <div className=" pt-1 flex flex-col ml-12 pr-6  ">
                       <label className="ml-6 font-bold underline underline-offset-4" >نام دسته‌بندی</label>
                       <input
                        className=" w-[140px] md:w-30  -ml-6 md:-ml-0 h-8 mt-3 md:mt-4 inset-shadow-sm inset-shadow-teal-600"
                         type="text"
                         value={name}
                         onChange={(e) => setName(e.target.value)}
                           />
                          </div>
                          <button
                            type="submit"
                             className="w-40 h-10 absolute -bottom-12 left-1/3  font-bold  border-white p-2 rounded border-2 hover:cursor-pointer hover:bg-white hover:scale-105 transition"
                                                                                                         >
                              تغییر دسته بندی
                               </button>                           
                                </form>
                                     </div>   

      <div className="  p-4 flex flex-row  md:grid grid-cols-6 md:items-center  mx-auto mt-32   h-[100%] w-full  md:w-[90%] gap-x-1 md:max-h-screen  md:border  border-black/40 rounded-2xl overflow-x-auto md:overflow-x-hidden overflow-y-scroll   ">
        {allCategories.length > 0 ? (
          allCategories.map((e, i) => (
            <div key={i} className="border-1 bg-gray-300 border-teal-600 rounded-2xl  mb-4  min-w-[160px] h-[240px]   md:w-60 md:h-56 flex flex-col text-center">
              <img src={`https://style-tehran-shirt-backend.onrender.com/${e.imageUrl}`} alt="تصویر دسته‌بندی" className=" w-full  rounded-t-2xl  object-center overflow-hidden" />
              <p className="text-2xl text-gray-700 ">{e.name}</p>
              <p  >{e.id} : شماره</p>


                   <div className="flex gap-x-4 justify-between pb-0.5 mx-0.5 font-mono mt-3" >
                    <button onClick={()=> handleDelete(e.id)} className=" hover:scale-104 hover:cursor-pointer bg-gray-200 hover:bg-white transition  text-red-600  md:w-1/3 rounded-2xl text-2xl md:text-lg font-semibold ">حذف</button>
                    <button onClick={()=> {setEditOpen(prev=> !prev) ; setEditId(e.id) ; setName(e.name) }  } className=" hover:scale-104 hover:cursor-pointer bg-gray-200 hover:bg-white transition text-sky-400  md:w-1/3 rounded-2xl text-2xl md:text-lg font-semibold  ">تغییر</button>           
        
                    </div>
               
          </div>
          
          ))
          
        ) : (
          <p className="text-gray-500">دسته‌بندی‌ای یافت نشد</p>
        )}
      </div>

     
                            
    </>  
  );
}
