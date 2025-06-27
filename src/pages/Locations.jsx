import Header from "../components/organisms/Header";
import Form from "../components/molecules/Form";
import CardLocations from "../components/organisms/CardLocations";

export default function Locations() {
  const LOCATIONS = [
  {
    name: "Oxford Street",
    description:
      "La nostra bakery offre un'ampia selezione di prodotti da forno artigianali, realizzati con ingredienti freschi e di alta qualità, garantendo un'esperienza gustativa unica e autentica per ogni cliente.",
    img: "../img/location.webp",
  },
  {
    name: "Liverpool Street",
    description:
      "La nostra bakery offre un'ampia selezione di prodotti da forno artigianali, realizzati con ingredienti freschi e di alta qualità, garantendo un'esperienza gustativa unica e autentica per ogni cliente.",
    img: "../img/location.webp",
  },
  {
    name: "James Street",
    description:
      "La nostra bakery offre un'ampia selezione di prodotti da forno artigianali, realizzati con ingredienti freschi e di alta qualità, garantendo un'esperienza gustativa unica e autentica per ogni cliente.",
    img: "../img/location.webp",
  },
];
  return (
    <>
      <Header className="hidden">Locations</Header>

      <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="flex justify-around items-center flex-wrap gap-6">
        {LOCATIONS.map(({ name, description, img }) => (
          <CardLocations
            key={name}
            name={name}
            description={description}
            img={img}
          />
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <Form className="border-4 border-red-300 rounded-2xl p-6 w-full mb-11" />
      </div>
    </>
  );
}