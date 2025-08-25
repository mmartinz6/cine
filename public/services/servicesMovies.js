async function getMovies() {
    try {
        
        const response = await fetch ('http://localhost:3001/peliculas',{
           
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        })

        //espere ese response y conviertala en .json
        const users = await response.json()

        return users

    } catch (error) {
        console.error("Hay un error al obtener la pelicula", error)

        throw error
    }
}

export{getMovies}