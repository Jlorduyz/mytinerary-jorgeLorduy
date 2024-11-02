import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { getItineraries } from "../store/actions/citiesActions";

function CityDescription() {
    const dispatch = useDispatch()

    const { cities, loading } = useSelector((state) => state.citiesStore)
    const { name } = useParams();
    let cityParam = name
    useEffect(() => {
        dispatch(getItineraries("http://localhost:8080/api/itineraries/city/" + cityParam));
    }, [dispatch]);

    const info = cities.find(res => res.name == cityParam)

    if (loading) {
        return <div className="min-w-full min-h-full flex justify-center pt-10"><p className="text-8xl font-bold text-rose-500">Loading....</p></div>;
    }

    return (
        <div
            className="w-full h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${info.img})` }}
        >
            <div className="bg-black bg-opacity-50 w-full min-h-full flex flex-col gap-3 items-center justify-center p-8">
                <h1 className="text-white text-8xl font-extrabold mb-4">{info.name}</h1>
                <p className="text-white text-4xl">{info.country}</p>
                <p className="text-white text-3xl">language: <span className="bg-rose-500 px-2">{info.language}</span></p>
                <p className="text-white text-2xl">currency: <span className="bg-rose-500 px-2">${info.currency}</span></p>
                <p className="text-white text-lg">{info.description}</p>
                <Link to={"/cities"}><p className="my-9 text-4xl font-bold bg-slate-600 text-white bg-opacity-30 backdrop-blur-sm mt-5 py-2 px-3 rounded-md border-solid border-2 border-slate-400">All cities</p></Link><img className="animate-bounce w-32 mt-10" src="https://parspng.com/wp-content/uploads/2021/11/arrowpng.parspng.com-13.png" alt="" />
            </div>
        </div>
    );
}

export default CityDescription

