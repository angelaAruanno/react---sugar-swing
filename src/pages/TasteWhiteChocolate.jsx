import TitleTaste from "../components/atoms/TitleTaste";
import ImgDonutsTastes from "../components/atoms/ImgDonutsTastes";
import Button from "../components/atoms/Button";

export default function TasteWhiteChocolate() {
    return (
        <>
            <div className='bg-taste-white-chocolate flex flex-col justify-end items-center pb-30'>
                <TitleTaste className="pt-36 text-brown-300">CIOCCOLATO BIANCO</TitleTaste>
                <ImgDonutsTastes img="../img/donut cioccolato white.svg" />
                <div className="flex gap-2 pt-6">
                    <Button href="/taste-chocolate">Cioccolato</Button>
                    <Button href="/taste-strawberry">Fragola</Button>
                </div>
            </div>
        </>

    )
}