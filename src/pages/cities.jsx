import { useState, useEffect } from "react"
import { Link } from "react-router-dom"

export function Cities() {
    const [cities, setCities] = useState([])
    const [search, setSearch] = useState("")
    function searchHandler(input) {
       setSearch(input) 
    }
let querys = `?name=${search}`
useEffect(() => {
    const fetchData = async () => {
        try {
            const mongoRes = await fetch('http://localhost:8080/api/cities/all'+querys)
            const data = await mongoRes.json()
            setCities(data.response)

        } catch (error) {
            console.error("Error",error);
            
            
        }
    }
    fetchData()
},[search])
    return(
        <div className="w-full min-h-full flex flex-col">
<FilterCities searchHandler={searchHandler}></FilterCities>
<Cards data={cities}></Cards>
        </div>
    )
    
}

function FilterCities({searchHandler}){
    return(
        <div className="w-full h-18 flex justify-center py-5">
            <label className="flex flex-col w-56 text-xl ">Find your perfect destination<input type="text" placeholder="Search in cities" className="pl-2 text-lg rounded-sm"  onChange={(res) => searchHandler(res.target.value)}/></label>
        </div>
    )
}

function Cards({data}) {
if (data.length == 0) {
    return(<div className="w-full p-8">
        <p className="text-6xl font-bold text-rose-500">
        City not found, but there are many options.</p>
    </div>)
    
}else{

return(<div className="w-full flex flex-wrap justify-center gap-6 py-4 px-6">
    {data.map(res => (<div key={res._id} className="w-72 h-96 flex flex-col rounded-lg group bg-black"><img src={res.img} alt="" className=" group-hover:h-52 duration-500 object-cover w-72 h-80  rounded-lg group-hover:rounded-t-lg group-hover:rounded-b-none" /><div className="grow flex flex-col justify-center relative "><Link to={`/cities/${res.name}`}><p className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-opacity duration-500 rounded-r-full py-2 px-5 text-2xl text-white bg-rose-500">More Details</p></Link></div><p className="text-4xl py-1 px-3 text-white max-w-full ">{res.name}</p><p className="text-white px-3 py-1">{res.country}</p>

    </div>))}
</div>)}
}