import { Button } from "@/components/ui/button"
import Image from 'next/image';
export default function Home() {
  return (
    <>
      <main
        style={{
          backgroundImage: "url('/stampsmaker_home.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",

        }}
        className="w-full h-screen flex justify-center flex-col items-center gap-8 text-center"
      >
        <h1 className="w-5/6 text-3xl lg:text-8xl font-black text-[#FAFAFA]">
          Custom Stamp Designe for Your businesses.
        </h1>
        <h5 className="w-5/6 lg:w-2/3 text-sm lg:text-2xl text-white">
          “We create exclusive stamp collections tailored to your requirements.
          From consultation to delivery, we help businesses and collectors across
          the UAE get unique, handpicked stamps.”
        </h5>
        <div className="flex gap-6 flex-wrap items-center justify-center">

          <a href="https://api.whatsapp.com/send?phone=971504761587" target="_blank" className="btn-primary flex items-center gap-2 bg-[#FAFAFA] text-green-600 px-4 py-[4px] rounded-md text-md lg:text-xl text-center">
            <img src="/whatsapp.png" alt="WhatsApp" className="w-8 lg:w-10 h-8 lg:h-10" />
            WhatsApp
          </a>

          <a href="tel:+971504761587" className='flex justify-center items-center'>
            <button className='relative bg-blue-100 w-10 lg:w-12 h-10 lg:h-12 flex justify-center items-center rounded-full text-white 
     shadow-lg transform hover:scale-105 transition-transform duration-200'>
              <span className="absolute inset-0 rounded-full bg-blue-100 opacity-50 animate-ping"></span>
              <span className='relative z-20 p-0'> <img src='/call_icon.png' alt="call" /> </span>
            </button>
          </a>
        </div>
      </main>

      {/* products section */}
      <main className="w-full h-screen flex  flex-col items-center gap-8 text-center">
        <h1 className="text-3xl font-black">
          POPULAR STAMPS
        </h1>
        <div className="grid grid-cols-3 gap-4">
          <div className="border rounded-md p-4">

            <img src="/stampsmaker_coverphoto.png" alt="Stamp 1" className="w-full h-auto mb-4" />
            <h2 className="text-xl font-semibold">Stamp Title 1</h2>
            <p className="text-gray-600">Brief description of Stamp 1.</p>
          </div>

        </div>

      </main>
    </>
  );
}
