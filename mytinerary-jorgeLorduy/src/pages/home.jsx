import { Link } from "react-router-dom"
import { ciudades } from "../info"
import { useState,useEffect } from "react"



export function Home() {
    return(
        <>
        <HeroSection />
        <CarrouselSection items={ciudades} />
        </>
    )
    
}

function HeroSection() {
    return(
    <div className='w-full h-screen bg-heroimg bg-cover flex justify-around items-center flex-wrap'>
        <div className="w-full flex justify-center relative"><p className="font-extrabold font-bebas text-7xl  text-white absolute self-center">My Tinerary</p><p className="font-extrabold  font-bebas text-8xl text-rose-500">My Tinerary</p></div>
       <Link to="/cities"> <p  className="text-white group relative font-semibold font-bebas text-3xl rounded-sm px-2 py-1 hover:bg-rose-500 bg-gradient-to-r from-rose-500 to-transparent "><span className="animate-ping absolute opacity-75 scale-110 group-hover:animate-none group-hover:opacity-0">Start</span>Start Your Journey Now 🧭</p></Link>
       <div className="w-2/5"><p className="text-white text-4xl "><span className="bg-rose-500 text-5xl"> "Find your perfect trip,</span> designed by insiders who know and love their cities!"</p></div>
    </div>)
}

function CarrouselSection({items}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const siguiente = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
    };
  
    const previa = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + 3) % 3); 
    };
  
    useEffect(() => {
      const intervalId = setInterval(siguiente, 3000);
      return () => clearInterval(intervalId);
    }, []);
  
    const slides = [
      items.slice(0, 4),  
      items.slice(4, 8),  
      items.slice(8, 12), 
    ];
  
    return (
      <div className="flex justify-center"><div className="relative w-2/3 overflow-hidden ">
        <p className="flex justify-center text-2xl ">Popular my tinerary 🔥</p>
        <div className="grid grid-cols-2 gap-4">
          {slides[currentIndex].map((item, index) => (
            <div key={index} className="p-2">
              <div className="flex flex-col items-center">
                <img src={item.imagen} alt={item.nombre} className="w-full h-auto object-cover" />
                <p className="mt-2 text-center">{item.nombre}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={previa}
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          &lt;
        </button>
        <button
          onClick={siguiente}
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg"
        >
          &gt;
        </button>
      </div></div>
    );
  };
  