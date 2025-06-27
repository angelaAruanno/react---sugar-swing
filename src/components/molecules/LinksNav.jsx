import LinkNav from '../atoms/LinkNav';
import { useLocation } from 'react-router-dom';

export default function LinksNav() {
    const location = useLocation()
    return (
        <>
        <div className='flex gap-1.5 text-red-300 font-semibold max-lg:text-sm mx-1
        '>
            <LinkNav href='/Donuts' text= 'All Donuts' className={({ isActive }) =>
          ` ${isActive ? 'border-b-2 border-red-400 font-bold' : ''}`
        }/>
            <LinkNav href='/Locations' text='Locations' className={({ isActive }) =>
          ` ${isActive ? 'border-b-2 border-red-400 font-bold' : ''}`
        }/>
        </div>
        </>
    )
}