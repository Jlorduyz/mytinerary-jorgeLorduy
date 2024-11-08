import { useState } from "react"

function Activities() {
    const [panel, setPanel] = useState(false)
    return (<div className="">
        <button onClick={() => setPanel(!panel)} className="flex justify-center w-full text-2xl text-white">{panel ? "🔽Activities🔽" : "🔼Activities🔼"}</button>
        {panel ? <div className="w-full h-auto p-6 flex justify-center items-center rounded-b-md bg-indigo-500"><p className="text-2xl text-white font-extrabold">Under construction</p></div> : ""}
    </div>)
}

export default Activities