import EndLine from "./EndLine";

export default function AboutUs() {


  return (
    <>
    <section className="pt-50 bg-white py-16 px-6 md:px-20 lg:px-32 text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-teal-700">درباره ما</h2>
        <p className="text-lg leading-relaxed text-gray-600 mb-10">
          فروشگاه  با هدف ارائه‌ی پوشاک مردانه‌ی باکیفیت، مدرن و مقرون‌به‌صرفه راه‌اندازی شده. ما باور داریم که لباس فقط یک پوشش نیست ,بلکه بیانگر شخصیت، سلیقه و سبک زندگی شماست. از تیشرت‌های ساده تا هودی‌های خاص، هر محصول با دقت انتخاب شده تا هم راحتی داشته باشه، هم استایل.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-teal-600 mb-2">کیفیت تضمینی</h3>
            <p className="text-sm text-gray-500">تمام محصولات با پارچه‌های درجه‌یک و دوخت حرفه‌ای عرضه می‌شن تا ماندگاری بالا داشته باشن.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-teal-600 mb-2">تنوع بی‌نظیر</h3>
            <p className="text-sm text-gray-500">از تیشرت‌های مینیمال تا پولیورهای خاص، برای هر سلیقه‌ای انتخاب داریم.</p>
          </div>
          <div className="bg-gray-50 p-6 rounded-2xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-teal-600 mb-2">ارسال سریع</h3>
            <p className="text-sm text-gray-500">تحویل سریع به سراسر کشور با بسته‌بندی شیک و مطمئن، بدون دردسر.</p>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h4 className="text-2xl font-bold text-teal-700 mb-4">چرا ما رو انتخاب کنید؟</h4>
          <p className="text-base text-gray-600 leading-relaxed max-w-3xl mx-auto">
            ما فقط فروشنده لباس نیستیم—ما همراه استایل شما هستیم. با پشتیبانی حرفه‌ای، تجربه خرید آنلاین راحت، و احترام به سلیقه‌ی مشتری، تلاش می‌کنیم تا هر خرید تبدیل به یک تجربه‌ی لذت‌بخش بشه. اگر دنبال لباس‌هایی هستی که هم خاص باشن، هم باکیفیت، جای درستی اومدی.
          </p>
        </div>
      </div>
      
    </section>
    <EndLine />  
    </>
    
  );
};


