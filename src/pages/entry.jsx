import {useState} from 'react'
import SignIn from "../components/signIn.jsx";
import SignUp from "../components/signUp.jsx";
function Entry(){
    const[register, setRegister] = useState(false)
    return (<div className='w-full flex grow justify-center p-10 '>
        {register ? (<SignUp setRegister={setRegister} register={register}></SignUp>) : (<SignIn setRegister={setRegister} register={register}></SignIn>)}
    </div>)
}

export default Entry