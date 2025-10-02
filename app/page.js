"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [stamps, setStamps] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("/stamps.json")
      .then((res) => res.json())
      .then((data) => setStamps(data));
  }, []);

  useEffect(() => {
    fetch("/other_services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  console.log(services);


  return (
    <>
      <main
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/stampsmaker_home.svg')",
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
      <main className="w-full max-h-max flex  flex-col items-center gap-8">
        <h1 className="text-3xl font-black">
          POPULAR STAMPS
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          {stamps.map((stamp, idx) => (
            <div key={idx} className="">
              <img src={stamp.image} alt={stamp.name} className="w-[250px] h-[250px] border rounded-md p-4 mb-4" />
              <div className="">
                <h2 className="text-xl font-semibold">{stamp.name}</h2>
                <p className="text-gray-600">Type: {stamp.type}</p>
                <p className="text-gray-600">Size: {stamp.size}</p>
                <p className="text-green-700 font-bold">Price: AED {stamp.price}</p>
              </div>
            </div>
          ))}

        </div>

      </main>

      {/* other services section  */}
      <main
        style={{
          backgroundImage: " url('/dubai_bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }} 
        className="w-full h-screen flex  flex-col items-center gap-8 text-center">
        <h1 className="text-3xl font-black">
          OTHER SERVICES
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 justify-center  gap-20">
          {services.map((service, idx) => (
            <div className="reletaive" key={idx}>
              <div
                style={{ backgroundColor: service.color_code, marginLeft: "-10px", marginTop: "-10px"
                }}
                className="service_card_behind -z-10 w-10 h-10  absolute rounded-md"></div>
              <div key={idx} className="service_card flex bg-white items-center gap-5 p-2 rounded-md shadow-xl " >
                <div style={{ backgroundColor: service.color_code }} className="w-8 h-8 rounded-md text-white font-black flex items-center justify-center">{idx+1}</div>
                <h3 key={idx} className="text-xl font-semibold">{service.service_name}</h3>
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  );
}
