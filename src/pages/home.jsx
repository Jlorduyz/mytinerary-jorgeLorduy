import { cities } from "../info"
import CarrouselSection from '../components/Carrousel.jsx'
import HeroSection from '../components/HeroSection.jsx'



export function Home() {
    return(
        <>
        <HeroSection />
        <CarrouselSection items={cities} />
        </>
    )
    
}



  