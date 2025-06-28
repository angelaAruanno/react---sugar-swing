import { useParams } from "react-router-dom";
import { DONUTS } from "../data";


export default function DonutDetail() {
    const { id } = useParams();
    const donut = DONUTS.find(d => d.id === Number(id)); // 👈 fix qui

    if (!donut) return <p>Donut non trovato</p>;

    return (
        <div>
            <div className="flex max-lg:flex-col font-sans-serif text-brown-300">
                <div className="w-1/2 max-lg:w-full min-h-screen max-lg:order-2" style={{ backgroundImage: `url(${donut.img})`, backgroundSize: `cover` , backgroundPosition: `center` }}>

                </div>
                <div className="flex flex-col justify-center max-lg:order-1 px-4 py-11">
                    <h1 className="text-5xl max-md:text-4xl font-semibold" >{donut.name}</h1>
                    <p className="text-brown-200 my-1">{donut.category}</p>
                    <p className=" w-4/5 max-md:w-full text-brown-300 text-2xl max-lg:text-lg">{donut.description}</p>
                </div>
            </div>
        </div>
    );
}
