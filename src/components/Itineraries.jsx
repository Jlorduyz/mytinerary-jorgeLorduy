import { useSelector } from "react-redux";
import Activities from "./Activities.jsx";


function Itineraries() {


    const { itineraries, loadingItineraries } = useSelector(
        (state) => state.citiesStore
    );
    if (loadingItineraries) {
        return (
            <div className="w-full p-8 flex justify-center">
                <p className="text-4xl font-bold text-sky-900 animate-pulse">
                    {" "}
                    Loading . . . .
                </p>
            </div>
        );
    }
    if (itineraries.length == 0) {
        return (
            <div className="w-full p-8 flex justify-center">
                <p className="text-4xl font-bold text-sky-900 animate-pulse">
                    no itineraries available for now, return later
                </p>
            </div>
        );
    }

    return (
        <div className="w-full flex flex-col items-center gap-16 py-10">
            {itineraries.map((res) => (
                <div
                    className="w-80 rounded-md min-h-72 relative bg-gradient-to-tl from-indigo-700 to-sky-600"
                    key={res._id}
                >
                    {" "}
                    <div className="min-w-full flex flex-col justify-center items-center pt-3">
                        <img
                            className="w-24 bg-indigo-200 rounded-full"
                            src={res.travelAgent.photo}
                            alt=""
                        />
                        <p className="text-gray-300 pt-3">
                            Posted By{" "}
                            <span className="text-white font-semibold text-2xl">
                                {res.travelAgent.name}
                            </span>
                        </p>
                        <p className="text-gray-900">{res.hashtags}</p>
                    </div>
                    <div className="flex justify-between text-white pt-2 px-20">
                        <p className="text-xl">Price:{"💲".repeat(res.price)}</p>
                        <p>🕞 {res.duration}</p>
                    </div>
                    <div className="flex justify-center">
                        <button className=" text-xl text-white">
                            <p className="translate-y-8">{res.likes} </p>
                            <img
                                className="w-10 pb-8"
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Liked.svg/1200px-Liked.svg.png"
                                alt=""
                            />
                        </button>
                    </div>
                    <Activities></Activities>
                </div>
            ))}
        </div>
    );
}

export default Itineraries;
