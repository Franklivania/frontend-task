import { Icon } from "@iconify/react";
import { data } from "./_navdata"

type SideNavProps = {
    active: number | null;
    setActive: (active: number | null) => void;
    className: string
}

export default function SideNav({active, setActive, className}:SideNavProps) {
    return(
        <menu role="menu" className={`w-full h-screen fixed top-0 left-0 z-20 bg-tr-white ${className}`}>
            <nav className="w-[60%] h-full bg-white flex flex-col gap-4 pt-28">
                {data.map((items, idx) => (
                    <button type="button"
                        key={idx}
                        className={`w-full flex flex-row-reverse justify-end gap-[10px] py-2 px-4 ${active ===  idx ? "bg-lt-gray shadow-sm font-semibold text-black" : ""}`}
                        onClick={() => setActive(idx)}
                        aria-label={items.title}
                        aria-labelledby={items.title}
                        title={items.title}
                    >
                        {items.title}
                        <Icon icon={items.icon} className={`text-2xl ${active ===  idx ? "text-blue" : ""}`} />
                    </button>
                ))}
            </nav>
        </menu>
    )
}