export default function TitleTaste({ children, className }){
    return (
        <>
        <div className="text-soft-white-300 font-script text-8xl text-center max-md:text-4xl max-2xl:text-7xl" >
            <h1 className={className}>{children}</h1>
        </div>
        </>
    )
}