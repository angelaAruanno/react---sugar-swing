import LogoNav from "../atoms/LogoNav";
import LinksNav from "../molecules/LinksNav";



export default function Navbar() {
    return (
        <>
            <nav className="bg-soft-white-200 border-red-300 border-b-2 justify-between px-4 flex py-5 ">
                <LogoNav />
                <LinksNav />
            </nav>
        </>
    )
}