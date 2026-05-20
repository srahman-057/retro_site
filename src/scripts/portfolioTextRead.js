export async function portfolioTextRead(){
    const apiURL = import.meta.env.VITE_PORTFOLIO_API;
    try {
        const response = await fetch(apiURL);
        if (!response.ok) {
        throw new Error(`Response not OK. Response status: ${response.status}`);
        }

        const result = await response.json();
        // console.log(result.data);
        return result;
    } catch (error) {
        console.error(error.message);
    }
}