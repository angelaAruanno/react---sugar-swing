import LinkFooter from "../atoms/LinkFooter";

export default function LinksFooter(){
     const count = 5;
    return(
        <>
             {[...Array(count)].map(() => (
                <LinkFooter href="https://www.figma.com/design/wzXFUxlNUTQDNSkZBInU6V/Sugar---Swing---Prototype?node-id=1-481&p=f&t=Sb8DlD5OkpPnTcKK-0">Prototype Figma</LinkFooter>
            ))}
        </>
    )
}

