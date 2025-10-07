import useShopStore from "./Store"




export default function FavBtn( {product} ) {

const wishlist = useShopStore((state)=> state.wishlist  ) ;
const toggleWishlist = useShopStore((state)=> state.toggleWishlist) ;

const isFav = wishlist.some((item)=> item.id === product.id) ;



    return(
        <>
             <button onClick={()=> toggleWishlist(product)}  >
                {isFav ? "❤️" : "🤍"}
                 </button>
    
        
        
        
        
        
        </>
    )
}