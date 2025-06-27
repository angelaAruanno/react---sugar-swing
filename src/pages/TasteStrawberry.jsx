import TitleTaste from "../components/atoms/TitleTaste";
import ImgDonutsTastes from "../components/atoms/ImgDonutsTastes";
import Button from "../components/atoms/Button";

export default function TasteStrawberry() {
    return (
        <>
            <div className='bg-taste-strawberry flex flex-col justify-end items-center pb-30'>
                <TitleTaste className="pt-36">FRAGOLA</TitleTaste>
                <ImgDonutsTastes img="../img/donut strawberry.svg" />
                <div className="flex gap-2 pt-6">
                    <Button href="/taste-chocolate">Cioccolato</Button>
                    <Button href="/taste-white-chocolate">Cioccolato Bianco</Button>
                </div>
            </div>
        </>

    )
}
