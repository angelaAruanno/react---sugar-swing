import { Link } from "react-router-dom";


export default function ButtonNavFixedHome(){
    return(
        <>
            <Link className="bg-red-300 font-sans-serif p-5 max-md:p-3 text-soft-white-300 rounded-2xl transition hover:bg-red-400 hover:scale-110 max-md:text-sm" to="/">Home</Link>
        </>
    )

}