import { Icon } from "@iconify/react";
import Home from "./Home";
import Team from "./Team";
import Accounts from "./Accounts";

type DisplayProps = {
    active: number | null;
    goBack: () => void;
}


export default function Display({active, goBack}:DisplayProps) {
    const renderComponent = () => {
        switch(active) {
            case 0:
                return <Home />;
            case 1:
                return <Team />;
            case 2:
                return <Accounts />
            default:
                return <Home />
        }
    }

    return(
        <section className="relative w-full h-full flex items-center justify-center">
            <button type="button"
                className="absolute top-7 max-lg:left-3 left-[16.5em] flex items-center gap-2 text-gray rounded-md bg-white shadow-sm shadow-lt-gray px-4 py-2"
                onClick={goBack}
            >
                <Icon icon="ci:chevron-left" className="text-black text-2xl" />
                Back
            </button>
            <section className="w-[52em] max-md:w-[95%] h-[70%] bg-white rounded-lg overflow-x-hidden py-4 px-8">
                {renderComponent()}
            </section>
        </section>
    )
}