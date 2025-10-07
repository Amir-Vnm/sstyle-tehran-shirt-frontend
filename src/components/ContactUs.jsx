import EndLine from "./EndLine";

export default function ContactUs() {
  return (
    <>
    <section className="bg-gray-50 pt-36 py-20 px-6 md:px-20 lg:px-32 text-gray-800 font-sans">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-teal-700 text-center mb-10">تماس با ما</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-bold text-teal-600 mb-4">راه‌های ارتباطی</h3>
            <p className="text-base text-gray-600 mb-2">
              📧 ایمیل:{" "}
              <a
                href="mailto:info@styletehran.com"
                className="text-teal-700 font-medium hover:underline"
              >
                amir.davarzannii@gmail.com
              </a>
            </p>
            <p className="text-base text-gray-600 mb-2">
              📞 تلفن:{" "}
              <a
                href="tel:+989931496400"
                className="text-teal-700 font-medium hover:underline"
              >
                09931496400
              </a>
            </p>
            <p className="text-base text-gray-600 mb-6">⏰ ساعات پاسخگویی: همه‌روزه از ۹ صبح تا ۷ عصر</p>

            <h4 className="text-xl font-semibold text-teal-600 mb-3">دفاتر مرکزی (نمونه)</h4>
            <ul className="space-y-2 text-gray-600 text-sm">
              <li>🏢 زعفرانیه: خیابان آصف، پلاک ۱۲، واحد ۳</li>
              <li>🏢 نیاوران: بلوار باهنر، کوچه گلستان، پلاک ۸</li>
              <li>🏢 الهیه: خیابان فرشته، برج آسمان، طبقه ۵</li>
              <li>🏢 ولنجک: خیابان یمن، مجتمع نگین، واحد ۱۰۲</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md hover:shadow-lg transition">
            <h3 className="text-xl font-bold text-teal-600 mb-6 text-center">ارسال پیام</h3>
            <form className="space-y-5 ">
              <input
                type="text"
                placeholder="نام شما"
                className="w-full border text-right  border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="email"
                placeholder="ایمیل شما"
                className="w-full border text-right border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <textarea
                rows="4"
                placeholder="پیام شما"
                className="w-full border text-right border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-teal-600 cursor-pointer text-white py-3 rounded-xl font-semibold hover:bg-teal-700 transition"
              >
                ارسال پیام
              </button>
            </form>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>ما همیشه آماده شنیدن نظرات، پیشنهادات و سوالات شما هستیم. با ما در ارتباط باشید ❤️</p>
        </div>
      </div>
    </section>
<EndLine />
    </>
  );
};


