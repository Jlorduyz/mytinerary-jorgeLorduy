import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setLastView } from "../store/actions/citiesActions";



function Cards() {
 const dispatch = useDispatch()
 const { cities, search, loading, error, lastView } = useSelector(
  (state) => state.citiesStore
 );




 if (loading) {
  return (
   <div className="w-full p-8 flex justify-center">
    <p className="text-4xl font-bold text-sky-900 animate-pulse">
     Wait while we find your next destination . . . . . ⏳
    </p>
   </div>
  );
 }
 if (error) {
  return (
   <div className="w-full p-8 flex justify-center">
    <p className="text-4xl font-bold text-rose-500">
     Sorry our plane took a while to take off, try again!
    </p>
   </div>
  );
 }

 const searchCities = cities.filter(res => {
  const src = res.name.toLowerCase().includes(search.toLowerCase())
  return src
 })
 if (searchCities.length == 0) {
  return (
   <div className="w-full p-8 flex justify-center">
    <p className="text-6xl font-bold text-rose-500">
     City not found, but there are many options.
    </p>
   </div>
  );
 }


 return (
  <div className="w-full flex flex-wrap justify-center gap-6 py-4 px-6">
   {searchCities.map((res) => (
    <div
     key={res._id}
     className="w-72 h-96 flex flex-col rounded-lg group bg-black"
    >
     <img
      src={res.img}
      alt=""
      className=" group-hover:h-52 duration-500 object-cover w-72 h-80  rounded-lg group-hover:rounded-t-lg group-hover:rounded-b-none"
     />
     <div className="grow flex flex-col justify-center relative ">
      <Link to={`/cities/${res.name}`} onClick={() => dispatch(setLastView(res.name))} >
       <p className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 rounded-r-full py-2 px-5 text-2xl text-white bg-rose-500">
        More Details
       </p>
      </Link>
     </div>
     <p className="text-4xl py-1 px-3 text-white max-w-full flex justify-between">
      {lastView == res.name ? <>{res.name}<span className="text-2xl text-rose-400">
       Last reviewed</span> </> : res.name}
     </p>
     <p className="text-white px-3 py-1">{res.country}</p>
    </div>
   ))}
  </div>
 );
}

export default Cards;
