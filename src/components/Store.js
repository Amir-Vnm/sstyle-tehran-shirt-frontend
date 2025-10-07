import { create } from "zustand";
import Swal from 'sweetalert2';


const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

// گرفتن نام کاربر از localStorage قبل از ساخت استور
const fullName = localStorage.getItem('full-name') || 'guest';

const useShopStore = create((set) => ({



  // مقداردهی اولیه با کلید اختصاصی کاربر
  wishlist: JSON.parse(localStorage.getItem(`${fullName}-wishlist`) || "[]"),
  myCart: JSON.parse(localStorage.getItem(`${fullName}-myCart`) || "[]"),


  // افزودن یا حذف از wishlist
  toggleWishlist: (product) =>
    set((state) => {
      const fullName = localStorage.getItem('full-name') || 'guest';
          if (!isLoggedIn) {
           Swal.fire({
  icon: 'warning',
  title: 'ابتدا وارد حساب کاربری شوید',
  text: 'از منوی سمت چپ صفحه',
  timer: 3000 ,
  confirmButtonColor: '#0f766e',
});
            return state;
}
      const exist = state.wishlist.find((item) => item.id === product.id);
      const updatedWishlist = exist
        ? state.wishlist.filter((item) => item.id !== product.id)
        : [...state.wishlist, product];

      localStorage.setItem(`${fullName}-wishlist`, JSON.stringify(updatedWishlist));
      return { wishlist: updatedWishlist };
    }),




  // افزودن به سبد خرید
 addToCart: (product) =>
  set((state) => {
    const fullName = localStorage.getItem('full-name') || 'guest';

    if (!isLoggedIn) {
      Swal.fire({
        icon: 'warning',
        title: 'ابتدا وارد حساب کاربری شوید',
        text: 'از منوی سمت چپ صفحه',
        timer: 3000,
        confirmButtonColor: '#0f766e',
      });
      return state;
    }

    const alreadyInCart = state.myCart.some((item) => item.id === product.id);
    if (alreadyInCart) return { myCart: state.myCart };

    const updatedCart = [
      ...state.myCart,
      {
        ...product,
        count: 1,
      },
    ];

    localStorage.setItem(`${fullName}-myCart`, JSON.stringify(updatedCart));
    return { myCart: updatedCart };
  }),




  // حذف از سبد خرید
  removeFromCart: (productId) =>
    set((state) => {
      const fullName = localStorage.getItem('full-name') || 'guest';
      const updatedCart = state.myCart.filter((item) => item.id !== productId);
      localStorage.setItem(`${fullName}-myCart`, JSON.stringify(updatedCart));
      return { myCart: updatedCart };
    }),
    increaseCount: (id) =>
    set((state) => ({
      myCart: state.myCart.map((item) =>
        item.id === id ? {...item, count: Number(item.count || 0) + 1} : item
      ),
    })),
  decreaseCount: (id) =>
    set((state) => ({
      myCart: state.myCart.map((item) =>
        item.id === id && item.count > 1
          ? { ...item, count: Number(item.count || 0) - 1}
          : item
      ),
    })),

  // پاک‌سازی سبد خرید
  clearCart: () =>
    set(() => {
      const fullName = localStorage.getItem('full-name') || 'guest';
      localStorage.removeItem(`${fullName}-myCart`);
      return { myCart: [] };
    }),
}));

export default useShopStore;
