export async function portfolioTextRead(){
    try{
        const apiURL = import.meta.env.VITE_PORTFOLIO_API;

        // API fetch
        const response = await fetch(apiURL);
        const responseJSON = await response.json();
        
        // Return API response as string
        return responseJSON.data;
    }
    catch(error){
        console.log("Error accessing portfolio API:");
        console.error(error);
    }

}