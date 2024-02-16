import { Icon } from "@iconify/react";
import { useImage } from "../utils/addImage";
import { useState } from "react";

export default function Home() {
    const {images, addImage, removeImage} = useImage();
    
    const [tasks, setTasks] = useState([
        {
            id: 0,
            title: 'Worked with <span style="color: #5D84E8;">@Solomon C.</span> drafting townhall invitation letter',
            status: false,
        },
        {
            id: 1,
            title: '<span style="color: #5D84E8;">@Elijah B.</span> has blockers related to withdrawals and local transfers, so I started working on a fix to get the app up and running ASAP',
            status: false,
        }
    ]);

    const handleAddImage = (event: React.ChangeEvent<HTMLInputElement>, taskId: number) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = (e) => {
                const newImage = { data: e.target!.result as string, name: file.name, taskId: taskId };
                addImage(newImage);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleRemoveImage = (imageName: string) => {
        removeImage(imageName);
    };

    const handleChecked = (index: number) => {
        
        const updatedTasks = tasks.map((task, idx) => {
            if (idx === index) {
                return { ...task, status: !task.status };
            }
            return task;
        });

        setTasks(updatedTasks);
    };

    return(
        <section className="relative">
            <header className="relative my-4 flex items-center justify-between">
                <h2 className="text-3xl font-semibold">
                    Tick the tasks you completed yesterday
                </h2>
            </header>

            <span className="text-gray flex items-center gap-3 p-2 border border-lt-gray rounded-lg">
                <Icon icon="mdi:warning-circle-outline" className="text-3xl text-blue max-md:text-8xl" />
                <p className="max-md:text-[0.75em]">You can optionally add images to prove completion of the tasks you worked on. Images also help you earn more points</p>
            </span>

            <section className="relative w-full h-max my-3 flex flex-col gap-3">
                {tasks.map((item, idx) => (
                    <div className=" relative w-full h-max flex items-center gap-2" key={idx}>
                        <div
                            className={`w-full bg-lt-white rounded-2xl p-4 flex items-start before:absolute before:top-2 before:h-[90%] before:p-[0.1em] before:rounded-lg ${item.status ? "before:bg-orange" : "before:bg-pink"}`}
                        >
                            <div className="w-[98%]">
                                <p className="ml-2" dangerouslySetInnerHTML={{__html: item.title}}></p>

                                <span className="flex items-center gap-3 overflow-y-hidden my-2 ml-3">
                                    {images.filter(image => image.taskId === item.id).map((image, imageIdx) => (
                                        <div className="relative">
                                            <img key={imageIdx} src={image.data} alt={image.name} width={100} height={100} className="rounded-lg object-cover" title={image.name} />
                                            <button type="button" className="absolute top-1 right-2 p-1 rounded-full bg-white" onClick={() => handleRemoveImage(image.name)}>
                                                <Icon icon="solar:trash-bin-2-linear" className="text-black" />
                                            </button>
                                        </div>
                                    ))}
                                </span>
                                <span>
                                    <input type="file" name="image" id={`image-${item.id}`} className="hidden" onChange={(e) => handleAddImage(e, item.id)} />
                                    <label htmlFor={`image-${item.id}`} className="w-max flex items-center gap-1 bg-white my-3 ml-auto cursor-pointer p-2 rounded-lg shadow-sm shadow-lt-gray">
                                        Add Image
                                        <Icon icon="bi:image-alt" className="text-2xl" />
                                    </label>
                                </span>
                            </div>
                        </div>

                        <span className="relative">
                            <input type="checkbox" 
                                name={item.title} 
                                id={item.title} 
                                checked={item.status} 
                                onChange={() => handleChecked(idx)}
                                className="relative appearance-none w-7 h-7 outline-none border-none bg-lt-gray rounded-md checked:bg-green"
                            />
                            {item.status && <Icon icon="iconamoon:check" className={`absolute top-0.5 left-0.5 text-2xl text-white`} onClick={() => handleChecked(idx)}/>}
                        </span>
                    </div>
                ))}
                <button type="button" className="bg-lt-green text-white px-8 py-2 rounded-lg ml-auto my-4">
                    Proceed
                </button>
            </section>
        </section>
    )
}
