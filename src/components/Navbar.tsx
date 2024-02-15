import logo from "/images/logo.svg";
import { data } from "./_navdata";
import { Icon } from "@iconify/react";
import { useState } from "react";


export default function Navbar() {
    const [active, isActive] = useState<number | null>(0);
    const [count, setCount] = useState<number>(0);

    const increaseCount = () => {
        setCount(count + 1);
    }
    
    return(
        <nav role="navigation" className="flex items-center px-16 py-4">
            <img src={logo} width={50} height={50} alt="Logo" />

            <span className="flex items-center gap-5 ml-16">
                {data.map((items, idx) => (
                    <button key={idx} 
                        className={`flex items-center gap-[10px] py-2 px-4 rounded-full transition-all duration-150 hover:bg-white ${active ===  idx ? "bg-white shadow-sm shadow-lt-gray font-semibold" : ""}`}
                        onClick={() => isActive(idx)}
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
                    className="p-2 rounded-full bg-white shadow-sm shadow-lt-gray"
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