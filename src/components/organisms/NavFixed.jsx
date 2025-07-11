import { useState, useEffect } from "react";
import LinksNav from "../molecules/LinksNav";
import ButtonNavFixedHome from "../atoms/ButtonNavFixedHome";
import NewTastesFixed from "../atoms/NewTastesFixed";

export default function NavFixed() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const threshold = window.innerHeight * 0.3; // 30% della viewport

            setIsVisible(scrollPosition > threshold);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {isVisible ? (
                <div className="flex justify-center">
                    <div className="bg-white flex items-center p-2 fixed bottom-2 rounded-2xl border-4 border-red-300 transition-normal">
                        <ButtonNavFixedHome />
                        <LinksNav />
                        <NewTastesFixed />
                    </div>
                </div>
            ) : null}
        </>
    );
}
