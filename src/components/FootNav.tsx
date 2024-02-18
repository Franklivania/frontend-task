import { Icon } from "@iconify/react";
import { data } from "./_navdata"

type FootNavProps = {
    active: number | null;
    setActive: (active: number | null) => void;
}

export default function FootNav({active, setActive}:FootNavProps) {
    return(
        <menu className="relative w-full flex items-center justify-between -mt-36 px-14 lg:hidden">
            {data.map((items, idx) => (
                <button type="button"
                    key={idx}
                    className={`w-max py-2 px-4 rounded-full ${active ===  idx ? "bg-white shadow-sm font-semibold text-black" : ""}`}
                    onClick={() => setActive(idx)}
                    aria-label={items.title}
                    aria-labelledby={items.title}
                    title={items.title}
                >
                    <Icon icon={items.icon} className={`text-3xl ${active ===  idx ? "text-blue" : ""}`} />
                </button>
            ))}
        </menu>
    )
}