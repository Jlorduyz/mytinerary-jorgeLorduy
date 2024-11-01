import { useState,useEffect } from "react"

function CarrouselSection({items}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const siguiente = () => {
      setCurrentIndex((indexB) => (indexB + 1) % 3);
    };
  
    const previa = () => {
      setCurrentIndex((indexB) => (indexB - 1 + 3) % 3); 
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
      <div className="flex justify-center"><div className="relative w-2/3 ">
        <p className="flex justify-center text-2xl ">Popular my tinerary 🔥</p>
        <div className="grid grid-cols-2 gap-4">
          {slides[currentIndex].map((item, index) => (
            <div key={index} className="p-2">
              <div className="flex flex-col items-center">
                <img src={item.img} alt={item.name} className="w-full max-h-1/3 object-cover" />
                <p className="mt-2 text-center">{item.name}</p>
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

  export default CarrouselSection