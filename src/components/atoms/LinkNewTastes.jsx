import { Link } from "react-router-dom";

export default function LinkNewTastes({ children }){
    return (
        <>
            <Link to="/taste-chocolate" className="text-soft-white-200 font-bold p-2 max-xl:hidden scroll-text">{ children }</Link>
        </>
    )
}