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
              const res = await axios.get("https://localhost:7002/api/Category") ;
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
      const response = await fetch("https://localhost:7002/api/Category", {
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
    const res = await fetch(`https://localhost:7002/api/Category/${id}`, {
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
    const res = await fetch(`https://localhost:7002/api/Category/${editId}`, {
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
        className={` relative z-30 w-full bg-teal-800 text-center items-center  text-white mt-26 hover:text-teal-200 hover:cursor-pointer `
           } > 🡢  برای اضافه کردن دسته بندی کلیک کنید   🡠
     </button>}
       {open && <button
        onClick={() => setOpen(prev => !prev)}
        className={` relative z-30 w-full bg-teal-800 text-center items-center  text-white mt-26 hover:text-teal-200 hover:cursor-pointer `
           } > 🡣  برای بستن کلیک کنید   🡣
     </button>}

      
        <form
          onSubmit={handleSubmit}
          className={` w-1/3 rounded mx-auto flex text-xl pt-4 relative text-right justify-center gap-x-10 font-mono bg-gray-300 transition  duration-300 ${open ? "  h-50 opacity-100  overflow-visible ease-in " : " opacity-0 h-0 ease-in-out transition  overflow-hidden " }`}
        >
          <div className="flex flex-col">
            <label className="mx-6">عکس</label>
            <input
              type="file"
              onChange={handleImageChange}
              className="bg-white w-80 mt-4 text-black inset-shadow-sm inset-shadow-teal-600"
            />
          </div>

          <div className="flex flex-col gap-y-4 ml-10">
            <label  >نام دسته‌بندی</label>
            <input
              className="w-30 h-8 inset-shadow-sm inset-shadow-teal-600"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <button
            type="submit"
            className="w-60 h-12  bottom-4 font-bold absolute border-teal-400 mt-16 p-2 rounded border-2 hover:cursor-pointer hover:bg-white hover:scale-105 transition"
          >
            اضافه کردن +
          </button>
        </form>
                                   {loading && <div> <Loading /> </div>}
          
    <div className={` absolute top-32 inline bg-sky-300 w-[30%] h-34 pl-10 transition-transform duration-600 rounded ${editOpen ? " translate-x-4 " : " -translate-x-[140%] "} ` } >
                <h2 className="text-xl text-white left-[10%] bottom-4  absolute ">   شماره {editId}</h2>
               
                 <form  onSubmit={handleChange} className=" relative flex flex-row " >
                    
                   <div className="">
                   <label className="pl-10">عکس</label>
                   <input
                      type="file"
                     onChange={handleImageChange}
                      className="bg-white w-60 mt-4 text-black inset-shadow-sm inset-shadow-teal-600"
                                                                  />
                      </div>

                       <div className=" pt-1 ">
                       <label className="" >نام دسته‌بندی</label>
                       <input
                        className="w-30 h-8 mt-4 inset-shadow-sm inset-shadow-teal-600"
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

      <div className="  p-4 grid grid-cols-5 items-center  mx-auto mt-32 w-[90%] max-h-screen border border-black/40 rounded-2xl  overflow-y-scroll   ">
        {allCategories.length > 0 ? (
          allCategories.map((e, i) => (
            <div key={i} className="border-2 bg-gray-300 border-teal-600 rounded-2xl  mb-4 w-60 h-56 flex flex-col text-center">
              <img src={`https://localhost:7002${e.imageUrl}`} alt="تصویر دسته‌بندی" className=" w-full  rounded-t-2xl  object-center overflow-hidden" />
              <p className="text-2xl text-gray-700 ">{e.name}</p>
              <p  >{e.id} : شماره</p>


                   <div className="flex gap-x-4 justify-between pb-0.5 mx-0.5 font-mono mt-3" >
                    <button onClick={()=> handleDelete(e.id)} className="border hover:scale-104 hover:cursor-pointer hover:bg-white transition  text-red-600 w-1/3 rounded-2xl text-lg font-semibold ">حذف</button>
                    <button onClick={()=> {setEditOpen(prev=> !prev) ; setEditId(e.id) ; setName(e.name) }  } className="border hover:scale-104 hover:cursor-pointer hover:bg-white transition text-sky-400 w-1/3 rounded-2xl text-lg font-semibold  ">تغییر</button>           
        
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
