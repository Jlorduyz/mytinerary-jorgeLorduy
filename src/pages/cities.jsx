
import Cards from "../components/Cards.jsx"
import FilterCities from "../components/FilterCities.jsx"




export function Cities() {




    return (
        <div className="w-full min-h-full flex flex-col">
            <FilterCities></FilterCities>
            <Cards></Cards>
        </div>
    )

}

