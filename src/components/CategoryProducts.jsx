import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import FavBtn from "./FavBtn";
import AddToCartBtn from "./AddToCartBtn";
import { Link } from "react-router-dom";
import EndLine from './EndLine'

function CategoryProducts( { product } ) {
  
  const { categoryId } = useParams();
  const [products, setProducts] = useState([]);


const sortCheapFirst = () => {
    const sorted = [...products].sort((a, b) => a.price - b.price);
    setProducts(sorted);
  };

  
  const sortExpensiveFirst = () => {
    const sorted = [...products].sort((a, b) => b.price - a.price);
    setProducts(sorted);
  };




  useEffect(() => {
    async function fetchProducts() {
      try {
        const { data } = await axios.get(`https://style-tehran-shirt-nodejs.onrender.com/api/products?category=${categoryId}`);
        setProducts(data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
    window.scrollTo(0,0) ;
  }, []);

  return (
    <div className="px-4 py-38 relative ">
          
          <div className=" absolute top-[6%] md:top-28 w-full pr-[10px] md:pr-46 right-0 font-medium   items-center gap-x-10  bg-teal-700 h-10 text-white  flex flex-row-reverse">
            <p className=" font-bold">: دسته بندی بر اساس </p>
            <button onClick={sortCheapFirst} className="underline underline-offset-6 cursor-pointer hover:text-teal-200 " >ارزان ترین</button>
            <button onClick={sortExpensiveFirst} className=" underline underline-offset-6  cursor-pointer hover:text-teal-200" >گران ترین</button>
          </div>




      {products.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-5 md:gap-x-24 gap-y-14 w-[100%] md:w-5/6 mx-auto mt-[4%] md:mt-30 mb-10   transition   rounded  shadow-md">
          
          {products.map((p) =>  (
            
            <div key={p.id} className=" relative border border-black/30   bg-white cursor-pointer shadow-sm hover:shadow-md hover:border-teal-500 hover:shadow-teal-500 hover:scale-101  shadow-gray-500 ">
               <Link to={`/Products/${p.id}`}>
              <img
                src={`https://style-tehran-shirt-nodejs.onrender.com${p.ImageFile}`}
                alt={p.name}
                className="w-full h-50 object-cover mb-2 "
              />
               </Link>
             <p className="text-right py-4 px-0.5 font-mono text-md">{p.description}</p>
              <p className=" font-bold mt-1 text-center my-14 w-full bg-gray-300 ">قیمت: {p.price} تومان</p>
              <p className=" absolute right-1 bottom-0 text-sm mt-1 border border-black/30 rounded-3xl py-0.5 px-1">موجودی: {p.inventory}</p>
               <div className=" absolute top-0 left-0 hover:scale-108 " > <FavBtn product={p} /></div>
               <div className=" absolute bottom-0 left-0" > <AddToCartBtn product={p} /> </div>
              
            </div>
          ))}
        </div >
      ) : (
        <p className="text-gray-500 text-center mt-10">محصولی برای این دسته‌بندی یافت نشد</p>
      )}

     <div className="mt-[50%] sticky"> <EndLine /></div>
    </div>
    
  );
}

export default CategoryProducts;
