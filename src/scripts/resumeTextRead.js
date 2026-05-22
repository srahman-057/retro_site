export async function resumeTextRead(){
    const apiURL = import.meta.env.VITE_RESUME_API;
    return fetch(apiURL)
        .then(response => {
            // 1. Check if the request was successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // 2. Parse the body as JSON (this returns another promise)
            return response.json(); 
        })
        .then(data => {
            // 3. Use the actual data here
            // console.log(data);
            return data; // Return the parsed JSON data to be used in the main script
        })
        .catch(error => {
            // 4. Handle any errors (network issues or code errors)
            console.error('There was a problem:', error);
            return null; // Return null to indicate an error occurred
    });
}