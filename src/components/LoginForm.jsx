import { useState } from 'react';
import { supabase } from './supabaseClient';
import { useNavigate } from 'react-router-dom';
import bgform from '../images/bgform.webp'

export default function LoginForm() {

  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('full-name', fullName)
      .eq('password', password)
      .single();

    if (error || !data) {
      setMessage('❌ ورود ناموفق. اطلاعات اشتباه است');
    } else {
      localStorage.setItem('role', data.role);
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('full-name', data['full-name']);

      setMessage('✅ ورود موفق');

      if (data.role === 'admin') {
        navigate('/admin');
      } else {
        window.location.href = '/';
      }
    }
    setFullName('') ;
    setPassword('') ;
  };
  
     

  return (
    <>
   
    
    <div className=" w-[96%] relative max-w-md mx-auto mt-4 pt-[20px] pb-[50px] md:pb-10 md:pt-10 md:p-10 bg-white rounded-lg shadow-sm shadow-black tracking-in-contract-bck-bottom">
         <img className=' absolute w-full h-full z-10 top-0 left-0 rounded blur-[2px] opacity-90  ' src={bgform} alt="" />


      <form onSubmit={handleLogin} className=" w-[80%] mx-auto relative space-y-4 z-50 rounded bg-white  p-4">

        <input
          type="text"
          name='userName'
          placeholder="نام کامل"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="  w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <input
          type="password"
          placeholder="رمز عبور"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-sky-500"
        />

        <button
          
          type="submit"
          className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-700 transition cursor-pointer"
          
          
        >
          
          ورود
        </button>
      </form>

      {message && (
        <p className=" relative z-50 bg-white/40 border  border-red-500 h-10 pt-2 rounded-3xl text-md mt-4 text-center  text-black ">{message}</p>
      )}
    </div>
    </>
  ); 
}
