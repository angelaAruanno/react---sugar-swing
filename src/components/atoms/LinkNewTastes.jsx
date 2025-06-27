export default function LinkNewTastes({ children }){
    return (
        <>
            <a href="https://auth.maze.co/login?next=https%3A%2F%2Fapp.maze.co%2Fhome" className="text-soft-white-200 font-bold p-2 max-xl:hidden scroll-text">{ children }</a>
        </>
    )
}