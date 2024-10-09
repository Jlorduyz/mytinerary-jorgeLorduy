import { Outlet,Link} from "react-router-dom";
import logo from '../assets/images/logo.png'

export function Root() {
    return (
        <div className="max-w-screen min-h-screen flex flex-col font-bebas">
            <Header />
            <div className="grow bg-gradient-to-t from-sky-300 to-sky-400"><Outlet /></div>
            <Footer />
        </div>
    )
    
}

function Header() {
    return(<div className="min-h-16 w-full bg-gradient-to-tr from-sky-400 to-indigo-600 gap-8 flex items-center justify-between px-5 flex-wrap pb-3">
    <Link to='/' ><p className="flex items-center text-3xl w-auto font-bold text-white"><span><img className="h-16" src={logo} alt="" /></span>My Tinerary</p></Link>
    <Link to='/cities'><p className="text-white font-bebas text-3xl hover:text-rose-400">Cities</p></Link> <Login /> 
    </div>)
}
function Footer() {
    return(<div className="flex flex-wrap  gap-4 items-center justify-center min-h-32 w-full bg-gradient-to-tr from-sky-400 to-indigo-600">
        <div><p className="text-2xl text-rose-600">Contact Us:</p>
        <p>Email: <a href="mailto:info@laughfactory.com" >info@mytinerary.com</a></p>
        <p>Phone: +57 123 456 7890</p>
        <p>Address: 123 Main St, Bogotá, Colombia</p></div>
        <p>Hours: Monday to Friday, 9 AM - 5 PM</p>
        <div><p className="text-2xl text-rose-600">Follow us on social media:</p>
        <p>
            <a href="https://www.facebook.com/laughfactory" >Facebook</a> |
            <a href="https://www.instagram.com/laughfactory" >Instagram</a> |
            <a href="https://twitter.com/laughfactory">Twitter</a>
        </p></div>
    
        <p> 2024 My Tinerary. All rights reserved.</p></div>)
}

function Login() {
    return(
   <> <button className="shadow-xl hover:shadow-lg transition duration-300 h-10 w-auto px-2 p-1 rounded-lg border 2 border-indigo-700"><p className="flex items-center gap-3 font-semibold text-2xl text-white hover:text-rose-400">LOGIN<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"  viewBox="0 0 16 16">
    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0"/>
    <path  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1"/>
  </svg></span></p></button></>)
}

