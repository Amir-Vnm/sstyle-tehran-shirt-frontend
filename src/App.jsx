import { lazy, Suspense } from 'react';


import { BrowserRouter, Route ,Routes } from 'react-router-dom'
import Header from './components/Header';
const MainContent = lazy(() => import('./components/MainContent'));
const AdminDashboard = lazy(() => import('./components/AdminDashboard'));
const CategoryProducts = lazy(() => import('./components/CategoryProducts'));
const ProductDetails = lazy(() => import('./components/ProductDetails'));
const AboutUs = lazy(() => import('./components/AboutUs'));
const ContactUs = lazy(() => import('./components/ContactUs'));
const EndLine =  lazy(() => import('./components/EndLine'));

import ProtectedRoute from './components/ProtectedRoute';
import HamburgerMenu from './components/HamburgerMenu';
import DashboardPage from './components/DashboardPage';
import CategoriesPage from './components/CategoriesPage';
import ProductsPage from './components/ProductsPage';
import UserListPage from './components/UserListPage';








function App() {
  

  return (
   <>
<BrowserRouter>

<Header />
  

<Suspense fallback={<div>در حال بارگذاری...</div>}>
 
<Routes>


   <Route path='/' element={ <MainContent />} />


               <Route path="/admin" element={

                   <ProtectedRoute>  <AdminDashboard hamburger={<HamburgerMenu />}/> </ProtectedRoute> }>
                       <Route index element={ <DashboardPage /> } />
                       <Route path='dashboardPage' element={<DashboardPage />} />
                       <Route path='categorispage' element={<CategoriesPage />} />
                       <Route path='productpages' element={<ProductsPage />} />
                       <Route path='userlistpage' element={<UserListPage />} />
                 </Route>     
       


   <Route path="/Products/ByCategory/:categoryId" element={<CategoryProducts />} />
   <Route path='/Products/:id' element={<ProductDetails/>  } />
   <Route path='/AboutUs' element={<AboutUs />} />
   <Route path='/ContactUs' element={<ContactUs />} />
          
        
      </Routes>
      
 </Suspense>    
</BrowserRouter>

</>
  ) ;
}

export default App
