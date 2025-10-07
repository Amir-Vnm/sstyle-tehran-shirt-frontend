import useShopStore from "./Store"
import cart from '../images/cartBtn.png'


export default function AddToCartBtn( {product} ) {
    
    const addToCart = useShopStore((state)=> state.addToCart) ;




    return(
        <>
           <button onClick={()=> addToCart(product)} 
         className=" hover:scale-103 hover:bg-teal-300 bg-teal-200 rounded-2xl p-1 cursor-pointer   "
           > <img className="w-10 h-10" src={cart} alt="" /> </button>
        
        
        
        </>
    )
}