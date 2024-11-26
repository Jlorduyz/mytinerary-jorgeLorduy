import {useState} from "react";
import countries from '../assets/extras/countries.js'
import {signUp} from "../store/actions/authActions.js";
import {useDispatch, useSelector} from "react-redux";
function SignUp({setRegister, register}) {
    const dispatch = useDispatch()
    const {errorReg} = useSelector((state)=> state.authStore)

    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [photoURL, setPhotoURL] = useState('');
    const [country, setCountry] = useState('');
    const [password, setPassword] = useState('');

    const [viewPassword, setViewPassword] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp({email, password,name ,lastname, country, photoURL}))
    }


    return (
        <div className=" mx-4 p-2  ">
            <form onSubmit={handleSubmit}
                  className='flex flex-col justify-around w-80 h-auto  bg-sky-600 gap-5 p-5 rounded-lg shadow-xl shadow-gray-600'>
                <p className="text-center text-3xl font-semibold text-white">Sign Up</p>
                <input
                    className="font-semibold font-textBasic shadow-gray-600 rounded-sm pl-2 py-0.5"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input
                    className="font-semibold font-textBasic shadow-gray-600 rounded-sm pl-2 py-0.5"
                    type="text"
                    placeholder="Last Name"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <input
                    className="font-semibold font-textBasic shadow-gray-600 rounded-sm pl-2 py-0.5"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    className="font-semibold font-textBasic shadow-gray-600 rounded-sm pl-2 py-0.5"
                    type="text"
                    placeholder="Photo URL"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                />
                <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                >
                    <option value="" disabled>Choose a country</option>
                    {countries.map((country, index) => (
                        <option key={index} value={country}>
                            {country}
                        </option>
                    ))}
                </select>
                <input className="font-semibold font-textBasic shadow-lg shadow-gray-600 rounded-sm pl-2 py-0.5 "
                       value={password}
                       onChange={(e) => setPassword(e.target.value)} type={viewPassword ? 'text' : 'password'} placeholder='Password'
                />
                <label className='text-center'><input type="checkbox" value={viewPassword}
                                                      onClick={() => setViewPassword(!viewPassword)}/>see
                    password</label>
                {errorReg && <p className="text-center text-lg text-amber-300">{errorReg}</p>}
                <button className="text-xl text-white  rounded-lg bg-black" type="submit">Sign Up</button>
                <button className=" border-2 rounded-lg bg-white" onClick={() => setRegister(!register)}>Sign In
                </button>
            </form>
        </div>
    )

}

export default SignUp
