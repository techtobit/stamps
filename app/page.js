"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card"
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

  const sendToWhatsApp = (image, name, size, type, price) => {
    const phone = "971504761587";
    const message = `Hello, I am interested in:
  Image: ${image}
  Name: ${name}
  Size: ${size}
  Type: ${type}
  Price: ${price}
  Please provide more details.`;
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };


  return (
    <>

    {/* stamps maker home page  */}
      <main
        style={{
          backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/stampsmaker_home.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full h-screen flex justify-center flex-col items-center gap-8 text-center"
      >
        {/* Stylish Titles */}
        <div className="w-5/6">
          <h1 className="text-3xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg mb-2">
            Elevate Your Brand with Custom Stamps
          </h1>
          <h4 className="text-2xl lg:text-6xl font-extrabold text-white drop-shadow-xl mb-2 tracking-wide italic">
            Make Your Mark, Make It Unique!
          </h4>
        </div>
        <h5 className="w-5/6 lg:w-2/3 text-sm lg:text-2xl text-white">
          “We create exclusive stamp collections tailored to your requirements.
          From consultation to delivery, we help businesses and collectors across
          the UAE get unique, handpicked stamps.”
        </h5>
        <div className="flex gap-6 flex-wrap items-center justify-center">

          <a
            href="https://api.whatsapp.com/send?phone=971504761587"
            target="_blank"
            className="flex items-center gap-2 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white px-6 py-2 rounded-md text-md lg:text-xl shadow-lg transition duration-200"
          >
            <img src="/whatsapp.png" alt="WhatsApp" className="w-8 lg:w-10 h-8 lg:h-10" />
            WhatsApp
          </a>

          <a
            href="/Profile of SAKIB .pdf"
            download
            className="flex items-center cursor-pointer"
          >
            <button
              className="flex items-center gap-2 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white px-6 py-2 rounded-md text-md lg:text-xl shadow-lg transition duration-200"
            >
              <img src="/download-icon.png" alt="Download Brochure" className="w-8 lg:w-10 h-8 lg:h-10" />
              Brochure
            </button>
          </a>
        </div>
      </main>

      {/* Stamps Products Section */}
      <main className="">
      <section className="w-full max-h-max bg-cyan-200 py-16 bg-white flex flex-col items-center gap-8">
        <div className="w-full max-w-7xl px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 justify-center">
            {stamps.map((stamp, idx) => (
              <Card key={idx} className="w-full shadow-lg border border-gray-100 rounded-xl transition hover:scale-105 hover:shadow-2xl duration-200">
                <CardContent className="p-4 flex flex-col items-center">
                  <img
                    src={stamp.image}
                    alt={stamp.name}
                    className="rounded-lg aspect-square bg-gray-100 mb-3 w-40 h-40 object-cover"
                  />
                  <CardTitle className="text-lg font-semibold mb-1 text-gray-800">{stamp.name}</CardTitle>
                  <CardDescription className="text-sm mb-2 text-gray-500 text-center">
                    Size: {stamp.size} | Type: {stamp.type}
                  </CardDescription>
    
                    <Button
                      onClick={() => sendToWhatsApp(stamp.image, stamp.name, stamp.size, stamp.type, stamp.price)}
                      size="sm"
                      className="text-xs w-full px-3 py-1 h-8 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-md shadow transition duration-200"
                    >
                      Order / Inquiry
                    </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      </main>
      


      {/* Stamps Maker Other Services Section */}
      <main
        style={{
          backgroundImage: "linear-gradient(rgba(116, 192, 211, 0.25), rgba(95, 212, 144, 0.29)), url('/dubai_bg.svg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="w-full max-h-max flex  flex-col items-center gap-8 text-center">
        {/* Stylish Other Services Titles */}
        <div className="w-full flex flex-col items-center gap-2 pt-4 pb-10">
          <h1 className="text-xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-lg mb-2">
            Discover Our Other Services
          </h1>
          <h4 className="text-[10px] lg:text-xl font-extrabold italic text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-green-500 to-green-600">
            Beyond Stamps: Creative Solutions for Your Business
          </h4>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center gap-6 lg:gap-20">
          {services.map((service, idx) => (
            <div className="reletaive" key={idx}>
              <div
                style={{
                  backgroundColor: service.color_code, marginLeft: "-0px", marginTop: "-0px"
                }}
                className="service_card_behind  -z-10 w-8 lg:w-10 h-8 lg:h-10  absolute rounded-md"></div>
              <div key={idx} className="service_card flex bg-white items-center gap-2 lg:gap-5 p-2 rounded-md shadow-xl translate-2 transition hover:scale-103 hover:shadow-2xl duration-200" >
                <div style={{ backgroundColor: service.color_code }} className="w-5 lg:w-8 h-5 lg:h-8 rounded-md text-white text-[10px] lg:text-base font-black flex items-center justify-center">{idx + 1}</div>
                <h3 key={idx} className="text-[10px] lg:text-sm lg:font-semibold">{service.service_name}</h3>
              </div>
            </div>
          ))}
        </div>

      </main>
    </>
  );
}
