
import CardBody from "../molecules/CardBody";

export default function Card({id, name, category, description, img, className, href}) {

    return (
        <>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" Key={id} className="flex flex-col items-center justify-between w-80 max-lg:w-48 bg-white p-4 max-lg:p-2 m-1 text-brown-300 rounded-2xl">
                <div className="w-full  h-62 max-lg:h-42 m-1 rounded-xl bg-center bg-cover" style={{ backgroundImage: `url(${img})` }}></div>
                <CardBody href={href} className={className} name={name} category={category} description={description}/>
            </div>

        </>
    )
}