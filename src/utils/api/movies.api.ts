
const baseURL = "http://localhost:3000"

const moviesApi = {
    getAllMovies: async () => {
        try {
            const data = await fetch(`${baseURL}/movies`);
            const response = await data.json()
            return response
        } catch (err) {
            console.log(err)
        }
    }
    
}

export default moviesApi