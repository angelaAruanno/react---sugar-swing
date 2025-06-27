import { NavLink } from 'react-router-dom';

export default function LogoNav({text, href, className}){
    return (
        <>
            <NavLink className={className} to={href}>{text}</NavLink>
        </>
    )
}