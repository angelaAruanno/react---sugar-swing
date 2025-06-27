import Header from '../components/organisms/Header.jsx';
import { DONUTS } from '../data';
import Card from '../components/organisms/Card.jsx';
import SecCategory from '../components/molecules/SecCategory.jsx';

const categories = [
  {
    label: 'Cioccolato',
    value: 'cioccolato',
    img: '../img/ciambella-cioccolato.webp'
  },
  {
    label: 'Fragola',
    value: 'fragola',
    img: '../img/ciambella-fragola.webp'
  },
  {
    label: 'Cioccolato Bianco',
    value: 'cioccolato bianco',
    img: '../img/ciambella-bianca.webp'
  }
];

export default function Donuts() {
  return (
    <>
      <Header className="hidden">ALL DONUTS</Header>

      {categories.map(({ label, value, img }) => {
        const filteredDonuts = DONUTS.filter(donut => donut.category === value);
        return (
          <div key={value} className='mb-7'>
            <SecCategory img={img}>{label}</SecCategory>
            <div className="grid grid-cols-4 max-xl:grid-cols-3 max-md:grid-cols-2 gap-6 max-md:gap-2">
              {filteredDonuts.map(({id, name, category, description, img}) => (
                <Card
                  key={id} 
                  name={name}
                  category={category}
                  description={description}
                  img={img}
                  href={`/donuts/${id}`}
                />
              ))}
            </div>
          </div>
        );
      })}
    </>
  );
}
