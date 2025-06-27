import IconCategory from "../atoms/IconCategory";
import TitleCategory from "../atoms/TitleCategory";


export default function SecCategory({ children, img }) {
    return (
        <>
            <div className="flex items-center my-4">
                <IconCategory img={img} />
                <TitleCategory>{ children }</TitleCategory>
            </div>
        </>
    )
}