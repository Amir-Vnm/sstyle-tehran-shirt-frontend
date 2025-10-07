import logo from '../images/logo1.png'
import SearchBtn from './SearchBtn';
import MainHamburgerMenu from './MainHamburgerMenu';
import Cart from './Cart'
import Wishlist from './Wishlist';



function Header() {

    

    return(
        <>
           
 <header className=' bg-white w-full h-[30px] pb-[55px]  md:pb-0 md:h-26 flex flex-row justify-between fixed z-50 border-b-2 border-black/10 '>

<div className='flex gap-x-4  '>
<MainHamburgerMenu />   
<SearchBtn />   
</div>
 <a href='/'><img className='w-[85px] h-[60px] md:w-36 md:h-25 text-focus-in' src={logo} alt="logo" /></a>



<div className='flex gap-x-4  '>
<Cart />
<Wishlist />

</div>
       </header>
        </>
    )
}


export default Header ;