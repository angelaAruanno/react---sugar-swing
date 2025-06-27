import { Link } from "react-router-dom"


export default function NewTastesFixed(){
    return(
        <>
        <Link to="./taste-chocolate">
           <h4 className="font-bold text-red-300 p-4 rounded-2xl hover:scale-105 hover:bg-white transition border-4 border-red-300">NEW TASTES</h4>
        </Link>
        </>
    )
}