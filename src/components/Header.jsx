import { Link } from "react-router-dom"
import logo from '/images/logo.png'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getCities } from "../store/actions/citiesActions";
function Header() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCities());
    }, [dispatch]);

    return (<div className="min-h-16 w-full bg-gradient-to-tr from-sky-400 to-indigo-600 gap-8 flex items-center justify-between px-5 flex-wrap pb-3">
        <Link to='/' ><p className="flex items-center text-3xl w-auto font-bold text-white"><span><img className="h-16" src={logo} alt="" /></span>My Tinerary</p></Link>
        <Link to='/cities'><p className="text-white font-bebas text-3xl hover:text-rose-400">Cities</p></Link> <Login />
    </div>)
}


function Login() {
    return (
        <> <button className="shadow-xl hover:shadow-lg transition duration-300 h-10 w-auto px-2 p-1 rounded-lg border 2 border-indigo-700"><p className="flex items-center gap-3 font-semibold text-2xl text-white hover:text-rose-400">LOGIN<span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
            <path d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
        </svg></span></p></button></>)
}

export default Header