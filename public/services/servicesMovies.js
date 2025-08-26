async function getMovies() {
    try {
        const response = await fetch ('http://localhost:3001/peliculas',{
           
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        //espera ese response y conviertala en .json
        const movies = await response.json()

        return movies;

    } catch (error) {
        console.error("Hay un error al obtener la pelicula", error);

        throw error;
    }
}

async function postMovies(movie) {
    try {
        
        const response = await fetch ('http://localhost:3001/peliculas',{
           
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body:JSON.stringify(movie)
        })

        const movies = await response.json();

        return movies;

    } catch (error) {
        console.error("Hay un error al crear la pelicula", error);

        throw error
    }
}

export{getMovies, postMovies};