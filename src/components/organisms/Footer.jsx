import LinksFooter from "../molecules/LinksFooter";
import Copyright from "../atoms/Copyright";

export default function Footer() {
    return (
        <>
            <footer className="p-5 max-lg:p-1 border-t-2 border-red-300 bg-soft-white-200">
                <div className="flex">
                    <div className="mx-3">
                        <LinksFooter />
                    </div>
                    <div className="mx-3">
                        <LinksFooter />
                    </div>
                </div>
                    <Copyright />
            </footer>
        </>
    )
}