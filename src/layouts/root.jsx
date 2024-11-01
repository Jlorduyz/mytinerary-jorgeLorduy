import { Outlet} from "react-router-dom";
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

export function Root() {
    return (
        <div className="max-w-screen min-h-screen flex flex-col font-bebas">
            <Header />
            <div className="grow bg-gradient-to-t from-sky-300 to-sky-400"><Outlet /></div>
            <Footer />
        </div>
    )
    
}






