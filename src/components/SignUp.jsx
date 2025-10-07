import { useState } from 'react';
import { supabase } from './supabaseClient'
import bgsign from '../images/bgsign.webp'




export default function SignUpForm() {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('user');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!fullName || !password) {
      setMessage('❌ نام کامل و رمز عبور الزامی است');
      return;
    }

    const { data, error } = await supabase
      .from('profiles')
      .insert([
        {
          'full-name': fullName,
          password: password,
          role: role
        }
      ]);

    if (error) {
      setMessage(`❌ خطا در ثبت‌نام: ${error.message}`);
    } else {
      setMessage('   روی دکمه ی ورود کلیک کنید و اطلاعات خود را وارد کنید ✅    ثبت‌ نام با موفقیت انجام شد'  );
      setFullName('');
      setPassword('');
      setRole('user');
    }
  };

  return (


    <div className="max-w-md w-[96%] mx-auto mt-4  relative p-6 bg-white rounded-lg shadow-sm shadow-black tracking-in-contract-bck-bottom">
            <img className=' absolute w-full h-full top-0 left-0 z-10 rounded blur-[4px] opacity-90 ' src={bgsign} alt="" />


      <form onSubmit={handleSubmit} className=" relative w-[80%] mx-auto z-50 space-y-4 bg-white p-4 rounded ">
        <input
          type="text"
          placeholder="نام کامل"
          name='fullName'
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
        />

        <input
          type="password"
          placeholder="رمز عبور"
          name='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
        />

        <select
          value={role}
          onChange={(e) => setRole(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-teal-300"
        >
          <option className=' hover:bg-teal-200' value="user">user</option>
          <option value="admin">admin</option>
        </select>

        <button
          type="submit"
          className="w-full bg-teal-800 text-white py-2 rounded hover:bg-teal-500 cursor-pointer transition"
        >
          ثبت‌نام
        </button>
      </form>

      {message && (
        <p className=" relative z-30 text-md bg-white/40 mt-4 text-center  text-gray-700 border border-red-400 p-1 rounded-2xl ">{message}</p>
      )}
    </div>
  );
}
