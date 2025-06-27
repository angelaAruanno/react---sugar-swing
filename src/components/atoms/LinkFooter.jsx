export default function LinkFooter({ children, href }){
    return(
        <>
            <a target="_blank" className="text-xl max-lg:text-sm font-sans-serif text-red-400 block hover:text-red-200 transition" href={href}>{children}</a>
        </>
    )
}