export default async function GetDataAsLocations() {
    try {
        
        const response = await fetch('../data/logements.json') 
        console.log(response);
        const locations = await response.json()
        console.log(locations);
        // return await locations
    } catch (error) {
        throw new Error(error)
    }
}