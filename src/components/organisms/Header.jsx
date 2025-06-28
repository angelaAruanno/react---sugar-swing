import TitleHeader from "../atoms/TitleHeader";
import SubtitlesHeader from "../molecules/SubtitlesHeader";

export default function Header({ children, className }) {

    return (
        <>
            <header className="flex justify-center my-36 max-2xl:my-20">
                <div className="flex flex-col w-4/5 items-center">
                    <TitleHeader>{ children }</TitleHeader>
                    <SubtitlesHeader className={className} />
                </div>
            </header>
        </>
    )
}