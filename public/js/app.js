import { getMovies, postMovies } from "../services/servicesMovies.js"; 


const poster = document.getElementById("poster");
const nameMovie = document.getElementById("nameMovie");
const anhoLanzamiento = document.getElementById("anhoLanzamiento");
const movGenero = document.getElementById("movGenero");
const btnGuardarMovie = document.getElementById("btnGuardarMovie");
const mostrarPeli = document.getElementById("mostrarPeli");

btnGuardarMovie.addEventListener("click", async function() {

    if(!poster.value.trim() || !nameMovie.value.trim() || !anhoLanzamiento.value.trim() || !movGenero.value.trim()){
        alert("❌Complete todos los campos❌")
        return;
    }

    const movie={
        poster:poster.value,
        titulo:nameMovie.value,
        anho:anhoLanzamiento.value,
        genero:movGenero.value
    };
    
    const respuestaConfirmada = await postMovies(movie);

    console.log(respuestaConfirmada);
    
})

//MUESTRA PELICULAS
async function datosMovies() {

    const datosMoviesRecibidos = await getMovies();

    //map filter
    datosMoviesRecibidos.map(movie=>{

        let contenedorMovie = document.createElement("div");
        contenedorMovie.classList.add("movieDiv");

        let imgPoster = document.createElement("img");
        imgPoster.src = movie.poster;
        imgPoster.classList.add("moviePoster");

        let titulo = document.createElement("h2");
        titulo.textContent = movie.titulo;
        titulo.classList.add("movieTitulo");

        let genero = document.createElement("h3")
        genero.textContent = movie.genero;
        genero.classList.add("movieGenero");

        let anho = document.createElement("h3")
        anho.textContent = movie.anhoLanzamiento;
        anho.classList.add("movieAhno");

        mostrarPeli.appendChild(imgPoster);
        mostrarPeli.appendChild(titulo);
        mostrarPeli.appendChild(genero);
        mostrarPeli.appendChild(anho);

        mostrarPeli.appendChild(contenedorMovie);

    });
}
datosMovies();