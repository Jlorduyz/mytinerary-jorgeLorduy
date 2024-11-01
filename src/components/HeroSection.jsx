import { Link } from "react-router-dom"

function HeroSection() {
    return(
    <div className='w-full h-screen bg-heroimg bg-cover flex justify-around items-center flex-wrap'>
        <div className="w-full flex justify-center relative"><p className="font-extrabold font-bebas text-7xl  text-white absolute self-center">My Tinerary</p><p className="font-extrabold  font-bebas text-8xl text-rose-500">My Tinerary</p></div>
       <Link to="/cities"> <p  className="text-white group relative font-semibold font-bebas text-3xl rounded-sm px-2 py-1 hover:bg-rose-500 bg-gradient-to-r from-rose-500 to-transparent "><span className="animate-ping absolute opacity-75 scale-110 group-hover:animate-none group-hover:opacity-0">Start</span>Start Your Journey Now 🧭</p></Link>
       <div className="w-2/5"><p className="text-white text-4xl "><span className="bg-rose-500 text-5xl"> "Find your perfect trip,</span> designed by insiders who know and love their cities!"</p></div>
    </div>)
}

export default HeroSection