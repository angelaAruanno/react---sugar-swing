import { DONUTS } from "../../data";
import Card from "../../components/organisms/Card";
import Button from "../atoms/Button";

export default function SecCards() {
    const selectedCards = [
        DONUTS.find(d => d.category.toLowerCase() === "cioccolato"),
        DONUTS.find(d => d.category.toLowerCase() === "cioccolato bianco"),
        DONUTS.find(d => d.category.toLowerCase() === "fragola")
    ].filter(Boolean);

    return (
        <>
        {/* desktop */}
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="flex justify-center max-lg:hidden">
                {selectedCards.map(({ name, category, description, img }) => (
                    <Card
                        key={name}
                        name={name}
                        category={category}
                        description={description}
                        img={img}
                        className="hidden"
                    />

                ))}
            </div>
            {/* mobile */}
            <div className="min-lg:hidden mobile-scroll">
                <div className="flex scroll-inner">
                    {selectedCards.map(({ name, category, description, img }) => (
                        <Card
                            key={name}
                            name={name}
                            category={category}
                            description={description}
                            img={img}
                            className="hidden"
                        />

                    ))}
                </div>
            </div>
            <div className="flex justify-center my-7">
                <Button href="/donuts">Scopri tutti i nostri donuts</Button>
            </div>
        </>

    );
}
