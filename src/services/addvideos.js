import { baseurl } from "../utils/url";

const addvideos = async ({videoUrl,videoCategory,videoName}) => {
    console.log("Request is recived",videoUrl)
    try {
        const response = await fetch(`${baseurl}/api/videoupload/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if required
            },
            // Add body data if required
            body: JSON.stringify({
                videoUrl: videoUrl,
                videoName:  videoName,
                videoCategory: videoCategory,
            }),
        });

        if (!response.ok) {
            throw new Error('Failed to add video');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding video:', error);
        throw error;
    }
};
const getvideos = async () => {
    console.log("Request is recived")
    try {
        const response = await fetch(`${baseurl}/api/fetchvideo/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
               
            },
           
        });

        if (!response.ok) {
            throw new Error('Failed to add video');
        }

        const data = await response.json();
        return data.videos;
    } catch (error) {
        console.error('Error adding video:', error);
        throw error;
    }
};
const deletevideo = async (id) => {
    console.log("Request is recived with id:", id);
    try {
        const response = await fetch(`${baseurl}/api/deletevideo/`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: id })
        });

        if (!response.ok) {
            throw new Error('Failed to add video');
        }

        const data = await response.json();
        return data.videos;
    } catch (error) {
        console.error('Error adding video:', error);
        throw error;
    }
};
export { addvideos,getvideos,deletevideo };
