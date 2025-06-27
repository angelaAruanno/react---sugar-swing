export default function SubtitleHeader({ children }){
    return (
        <>
            <h2 className="text-brown-300 font-sans-serif font-bold text-2xl max-lg:hidden">{ children }</h2>
        </>

    )
}