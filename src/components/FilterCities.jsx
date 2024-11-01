import { useDispatch, useSelector } from "react-redux"
import { setSearch } from "../store/actions/citiesActions"

function FilterCities() {
    const { search } = useSelector((state) => state.citiesStore)
    const dispatch = useDispatch()
    return (
        <div className="w-full h-18 flex justify-center py-5">
            <label className=" w-56 text-xl ">Find your perfect destination<input value={search} type="text" onChange={(e) => dispatch(setSearch(e.target.value))} placeholder="Search in cities" className="pl-2 text-lg rounded-sm" /><button onClick={() => dispatch(setSearch(""))}>❌</button></label>
        </div>
    )
}

export default FilterCities