export default function CardLocations({ name, description, img, className }) {
    return (
        <>
            <section className="w-1/4 max-lg:w-2/3">
                <img className={className} src={img} alt="location" />
                <div className="p-3.5 rounded-2xl bg-white font-sans-serif text-brown-300 w-96 max-2xl:w-full max-2xl:p-6 relative bottom-20 -z-10">
                    <h3 className="text-4xl max-lg:text-2xl font-semibold">{name}</h3>
                    <p>{description}</p>
                </div>
            </section>
        </>
    )
}