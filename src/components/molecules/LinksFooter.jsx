import LinkFooter from "../atoms/LinkFooter";

export default function LinksFooter(){
     const count = 5;
    return(
        <>
             {[...Array(count)].map(() => (
                <LinkFooter href="https://www.figma.com/design/JlgoRyqrKBdvBEzKM4jgQs/Sugar---Swing?node-id=71-126&t=v4BCPV7epAFKZvmW-1">Prototype Figma</LinkFooter>
            ))}
        </>
    )
}

