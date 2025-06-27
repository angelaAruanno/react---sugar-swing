import CardLocation from "../molecules/CardLocation";

export default function SecLocations() {
    return (
        <>
            <section className="flex justify-center">
                <div className="location w-4/5 flex max-xl:w-full justify-center items-center my-28 rounded-2xl">
                    <CardLocation />
                </div>
            </section>
        </>
    )
}