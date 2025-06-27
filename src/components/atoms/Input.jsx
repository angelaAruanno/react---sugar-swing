export default function Input({placeholder, type }){
    return(
        <>
            <input className="bg-soft-white-200 m-1 rounded-2xl w-4/5 p-2 pl-4 my-2" placeholder={placeholder} type={type}/>
        </>
    )
}