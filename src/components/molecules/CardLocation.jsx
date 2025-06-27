import Button from "../atoms/Button"


export default function CardLocation() {

    return (
        <>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center" className="card-locations w-4/12 p-6 rounded-2xl font-sans-serif max-xl:w-5/6">
                <div>
                    <h2 className="text-2xl max-lg:text-xl font-semibold text-brown-300">Scopri le nostre locations</h2>
                    <p className="text-brown-200 max-lg:text-sm pt-1 mb-2">Ogni location è progettata per <strong>offrire ai nostri clienti</strong> un ambiente <strong>accogliente e stimolante</strong>.</p>
                    <div className="flex justify-end mt-3.5">
                        <Button href="/locations" className="mt-3">Maggiori dettagli</Button>
                    </div>
                </div>
            </div>
        </>
    )
}
