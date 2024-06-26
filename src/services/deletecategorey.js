import { baseurl } from "../utils/url";
const deletecatergorey = async ({name}) => {
    console.log("Request is recived with id:", name);
    try {
        const response = await fetch(`${baseurl}/api/deletecatergorey`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json' // Specify content type
            },
            body: JSON.stringify({ 
                categoryName: name 
            })
        });

        if (!response.ok) {
            throw new Error('Failed to Delete Category');
        }

        const data = await response.json();
        return data.videos;
    } catch (error) {
        console.error('Failed to Delete Category:', error);
        throw error;
    }
};
export { deletecatergorey };
