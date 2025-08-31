import { useState } from "react";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function useImageUpload() {
    const [isUploading, setIsUploading] = useState(false);
    const [error, setError] = useState(null);


    const uploadImage = async (imageFile) => {
        if (!imageFile) return;
        setIsUploading(true);
        setError(null);

        const formData = new FormData();
        formData.append('image', imageFile);

        try{
            const response = await fetch(image_hosting_api, {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            if(data.success){
                
                return data.data.url;
            } else {
                setError('Image upload failed');
            }
        }catch(error){
            console.error('Error uploading image:', error);
            setError('Error uploading image');
        }
};

    return {uploadImage, isUploading, error};
}

