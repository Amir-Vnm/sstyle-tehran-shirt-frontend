import { useEffect, useState } from "react"
import searchGif from '../images/search.gif'
import search1 from '../images/search1.png'
import axios from "axios";
import { Link } from "react-router-dom";




export default function SearchBtn() {

const [isOpen , setIsopen] = useState(false) ;
const [products ,setProducts] = useState([]) ;
const [searchTerm, setSearchTerm] = useState('');
const [filteredProducts , setFilteredProducts] = useState([]) ;


 
useEffect(()=> {
     const fetchProducts = async ()=> {
      try {
        const res = await axios.get("https://style-tehran-shirt-backend.onrender.com/api/Products") ;
        setProducts(res.data.data) ;

      } catch (error) {
        console.error('error getting products for search btn')
      } 
     }; fetchProducts() ;
} , [])



const handleSearch = (e)=> { 
  e.preventDefault() ;
  
 const result =  products.filter(product => typeof product.description === 'string')
  .filter(product => product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  setFilteredProducts(result) ;
  

}



    return(
        <>

        <button onClick={()=> setIsopen(true) } className=" w-[40px] md:w-12 ml-[1px] md:ml-4 md:mb-2 mt-[3px] md:mt-0 hover:scale-105 transition cursor-pointer " >
          <img className="bounce-top" src={search1} alt="" />
           </button>
        
         <div className= {` z-20 absolute  bg-white w-screen h-32 text-center items-center transition-transform duration-700 ${isOpen ? "translate-y-0" : " -translate-y-full"} `} >
            

            <form onSubmit={handleSearch}>

           <button onClick={()=> setIsopen(false)  } type="button"
           className="  hover:scale-106 cursor-pointer transition w-10 ring-2 rounded-full bg-white text-red-400 mr-1 " >X</button>
           <input className="w-2/3 h-12 focus:outline-none rounded focus:ring-teal-700 focus:ring-2 border-black/30 text-center md:text-2xl  text-w mt-6 caret-black"
            value={searchTerm || ''} 
            onChange={(e)=> setSearchTerm(e.target.value)} 
            type="text" name="" id="" placeholder="...لباس مورد نظر را جستجو کنید"
             />
              <button className="bg-teal-500 border border-white absolute flex flex-row rounded px-1 py-0.5 font-mono cursor-pointer hover:scale-102 right-[32%] top-[80px] md:right-[18%] md:top-8  "
              type="submit"> جستجو <img className=" w-[25px] md:w-6  " src={searchGif} alt="" />
             </button>
          
            </form>


           
           

      {filteredProducts.length > 0 && <div className={` relative grid grid-cols-3 gap-0.5 bg-teal-700 overflow-x-hidden overflow-y-scroll w-2/4 h-[20vh]   mx-auto border-2 rounded  border-teal-700  mt-  z-50 transition-transform ${isOpen ? "translate-y-4" : "-translate-y-150"}`}>
          {filteredProducts.map(p => (
           <Link to={`/Products/${p.id}`} key={p.id}>
           <div className="border border-white p-1 mr-1 text-center cursor-pointer bg-white rounded shadow flex flex-row justify-center border-b">
           <h3 className="text-md break-words w-2/3 h-20 overflow-hidden ">{p.description}</h3>
           <p className="text-sm text-gray-600">{p.price} تومان</p>
          <img className="w-20 h-20 " src={`https://style-tehran-shirt-backend.onrender.com/${p.imageUrl}`} alt={p.description || "لود نمیشود"} /> 
            

          </div>
          </Link>
        ))}
      </div>}

            
              </div>
        
                           
                           

        </>
    )
}