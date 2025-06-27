import Button from "../atoms/Button";

export default function CardBody({ name, category, description, className, href}) {
    return (
        <>
            <div className="w-full py-2 font-sans-serif">
                <h3 className="font-bold text-xl max-lg:text-sm text-brown-300 pb-1.5">{name}</h3>
                <p className="text-soft-white-400 max-lg:text-sm">{category}</p>
                <p className="text-brown-400 truncate max-lg:text-sm">{description}</p>
            </div>
            <div className="flex justify-end py-2 w-full">
                <Button href={href} className={className}>Scopri di più</Button>
            </div>
        </>
    )
}