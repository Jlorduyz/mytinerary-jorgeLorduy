function SignUp({setRegister, register}) {
    return (
        <div>
            <button onClick={()=>setRegister(!register)}>Sign In</button>
        </div>
    )

}

export default SignUp