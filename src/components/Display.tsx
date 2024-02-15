import { Icon } from "@iconify/react";


export default function Display() {
    return(
        <section className="relative w-full h-full flex items-center justify-center">
            <button type="button"
                className="absolute top-7 max-md:left-3 left-44 flex items-center gap-2 text-gray rounded-md bg-white shadow-sm shadow-lt-gray px-4 py-2"
            >
                <Icon icon="ci:chevron-left" className="text-black text-2xl" />
                Back
            </button>
            <section className="w-[60em] max-md:w-[95%] h-[70%] bg-white rounded-lg">

            </section>
        </section>
    )
}