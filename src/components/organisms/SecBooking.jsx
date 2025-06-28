import Form from "../molecules/Form";

export default function SecBooking() {
    return (
        <>
            <section className="flex justify-center mb-24">
                <div className="booking flex  max-lg:flex-col w-4/5  max-xl:w-full px-32 max-lg:px-1 max-lg:p-4 justify-around items-center rounded-2xl">
                    <div className="font-sans-serif text-soft-white-200 max-lg:hidden">
                        <h3 className="text-4xl my-3 font-bold">Prenota un tavolo</h3>
                        <p className="text-md mb-2"> <strong className="text-lg">I posti vanno a ruba!</strong> Compila il form e <br /> <strong className="text-lg">prenota subito  il tuo tavolo</strong> per non rischiare <br /> di restare senza.</p>
                    </div>
                    <Form className="p-3"/>
                </div>
            </section>
        </>
    )
}