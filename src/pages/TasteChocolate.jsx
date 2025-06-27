import TitleTaste from "../components/atoms/TitleTaste";
import ImgDonutsTastes from "../components/atoms/ImgDonutsTastes";
import Button from "../components/atoms/Button";

export default function TasteChocolate() {
    return (
        <>
            <div className='bg-taste-chocolate flex flex-col justify-end items-center pb-30'>
                <TitleTaste className="pt-36">CIOCCOLATO</TitleTaste>
                <ImgDonutsTastes img="../img/donut cioccolato.svg" />
                <div className="flex gap-2 pt-6">
                    <Button href="/taste-white-chocolate">Cioccolato Bianco</Button>
                    <Button href="/taste-strawberry">Fragola</Button>
                </div>
            </div>
        </>

    )
}
