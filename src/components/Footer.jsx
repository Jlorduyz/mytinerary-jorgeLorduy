function Footer() {
    return(<div className="flex flex-wrap flex-col justify-between gap-5 p-5 min-h-32 w-full bg-gradient-to-tr from-sky-400 to-indigo-600">
        <div className="w-full flex flex-wrap justify-around gap-5"><div><p className="text-2xl text-rose-600">Contact Us:</p>
        <p>Email: <a href="mailto:info@laughfactory.com" >info@mytinerary.com</a></p>
        <p>Phone: +57 123 456 7890</p>
        <p>Address: 123 Main St, Bogotá, Colombia</p></div>
        <div><p className="text-2xl text-rose-600">Follow us on social media:</p>
        <p className="flex flex-col">
            <a href="https://www.facebook.com/laughfactory" >Facebook</a> 
            <a href="https://www.instagram.com/laughfactory" >Instagram</a> 
            <a href="https://twitter.com/laughfactory">Twitter</a>
        </p></div></div>
    
        <p className="self-center"> 2024 My Tinerary. All rights reserved.</p></div>)
}

export default Footer

