import { Link } from "react-router-dom";

export default function Button({ children , className, href }){
    return (
        <>
        <div className={className}>
            <Link to={href} className="bg-red-300 text-soft-white-300 text-sm font-sans-serif px-4 py-3 rounded-4xl hover:bg-red-400 hover:scale-105 transition max-md:py-2 max-md:px-3">{ children }</Link>
        </div>
        </>
    )
}