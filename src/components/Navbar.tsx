import logo from "/images/logo.svg";
import { data } from "./_navdata";
import { Icon } from "@iconify/react";
import { useState } from "react";

type NavbarProps = {
    active: number | null;
    setActive: (active: number | null) => void
}


export default function Navbar({active, setActive}:NavbarProps) {
    const [count, setCount] = useState<number>(0);

    const increaseCount = () => {
        setCount(count + 1);
    }
    
    return(
        <nav role="navigation" className="flex items-center px-16 max-md:px-4 py-4">
            <img src={logo} width={50} height={50} alt="Logo" className="cursor-pointer z-40"/>

            <span className="flex items-center gap-5 ml-16 max-lg:hidden">
                {data.map((items, idx) => (
                    <button key={idx} 
                        className={`flex items-center gap-[10px] py-2 px-4 rounded-full transition-all duration-150 hover:bg-white ${active ===  idx ? "bg-white shadow-sm shadow-lt-gray font-semibold" : ""}`}
                        onClick={() => setActive(idx)}
                        type="button"
                        aria-label={items.title}
                        aria-labelledby={items.title}
                        title={items.title}
                    >
                        {items.title}
                        <Icon icon={items.icon} className={`text-2xl ${active ===  idx ? "text-blue" : ""}`} />
                    </button>
                ))}
            </span>

            <aside className="ml-auto flex items-center gap-4">
                <button type="button" 
                    className="p-2 rounded-full bg-lt-white shadow-sm shadow-gray"
                    aria-label="Notifications"
                    aria-labelledby="Notifications"
                    title="Notifications"
                >
                    <Icon icon="lucide:bell" className="text-2xl text-gray" />
                </button>

                <button type="button" 
                    className="rounded-full flex items-center gap-3 text-white bg-gradient-to-r from-lt-orange from-10% to-orange py-2 px-4"
                    onClick={increaseCount}
                    title="count button"
                    aria-label="count button"
                    aria-labelledby="count button"
                >
                    <Icon icon="ep:coin" className="text-2xl text-white" />                    
                    {count}
                </button>
            </aside>
        </nav>
    )
}