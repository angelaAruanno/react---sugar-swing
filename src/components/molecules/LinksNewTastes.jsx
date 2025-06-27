import LinkNewTastes from "../atoms/LinkNewTastes";

export default function LinksNewTastes() {
    const count = 25;
    return (
        <>
            {[...Array(count)].map(() => (
                <LinkNewTastes>NEW TASTES</LinkNewTastes>
            ))}
        </>
    )
}