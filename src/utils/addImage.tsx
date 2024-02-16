import { createContext, useContext, useState } from "react";

type imageInfo = {
    data: string;
    name: string;
    taskId: number;
};

type AddImageProps = {
    images: imageInfo[];
    addImage: (newImage: imageInfo) => void;
    removeImage: (imageName: string) => void;
}

export const UploadImage = createContext<AddImageProps | undefined>(undefined)

export const useImage = ():AddImageProps => {
    const context = useContext(UploadImage);
    if (!context) {
        throw new Error ("useImage must be used withing the UploadImage provider")
    }
    return context;
}

export const UseImageProvider: React.FC<{children: React.ReactNode}> = ({children}) => {
    const [images, setImages] = useState<imageInfo[]>([]);

    const addImage = (newImage: imageInfo) => {
        setImages((prevImages) => [...prevImages, newImage]);
    }

    const removeImage = (imageName: string) => {
        setImages((prevImages) => prevImages.filter(image => image.name !== imageName));
    }

    const contextValue: AddImageProps = {
        images,
        addImage, 
        removeImage
    }

    return(
        <UploadImage.Provider value={contextValue}>
            {children}
        </UploadImage.Provider>
    )
};