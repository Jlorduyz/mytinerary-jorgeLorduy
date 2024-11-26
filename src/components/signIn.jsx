import {useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {signIn} from "../store/actions/authActions.js";


function SignIn({setRegister, register}) {
    const dispatch = useDispatch();
    const {error, loading} = useSelector((state) => state.authStore);

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [viewPassword, setViewPassword] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signIn({email,password}))
    };

    return(
        <div className=" mx-4 p-2  ">
            <form onSubmit={handleSubmit}  className='flex flex-col justify-around w-80 h-96  bg-sky-600 gap-5 p-5 rounded-lg shadow-xl shadow-gray-600'>
                <p className="text-center text-3xl font-semibold text-white">Sign In</p>
                <input className="font-semibold font-textBasic shadow-gray-600 rounded-sm pl-2 py-0.5" type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>

                <input className="font-semibold font-textBasic shadow-lg shadow-gray-600 rounded-sm pl-2 py-0.5 " type={viewPassword ? 'text' : 'password'} value={password} placeholder='Password'
                       onChange={(e) => setPassword(e.target.value)}/>{error && <p className="text-center text-lg text-amber-300">{error}</p>}<label className='text-center' ><input type="checkbox" value={viewPassword} onClick={() => setViewPassword(!viewPassword)}/>see password</label>

                {loading ? <p className="text-xl text-white">Loading....</p> :
                    <button className="text-xl text-white  rounded-lg bg-black" type="submit">Sign In</button>}
                <button className="text-sm border-2 rounded-lg bg-white" onClick={() => setRegister(!register)}>Create account</button>

            </form>

        </div>
    )

}

export default SignIn