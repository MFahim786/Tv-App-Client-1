import { baseurl } from "../utils/url";

const addCategorey = async (categoreyname) => {
    console.log("Request is recived",categoreyname)
    try {
        const response = await fetch(`${baseurl}/api/addcatergorey/`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if required
            },
            // Add body data if required
            body: JSON.stringify({
                categorey: categoreyname,
               
            }),
        });

        if (!response.ok) {
            throw new Error('Categorey Save Failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding Categorey:', error);
        throw error;
    }
};
const categoreylist = async () => {
    console.log("Request is recived")
    try {
        const response = await fetch(`${baseurl}/api/catergoreylist/`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // Add any additional headers if required
            },
            // Add body data if required
           
        });

        if (!response.ok) {
            throw new Error('Categorey Save Failed');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error adding Categorey:', error);
        throw error;
    }
};
export {addCategorey,categoreylist};