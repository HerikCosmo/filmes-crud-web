import axios from 'axios'

const baseUrl = 'http://localhost:8080/movies'

export async function getMovies() {
    let movies = []

    const response = await axios.get(`${baseUrl}`)

    movies = response.data

    return movies
}

export async function getMovie(id) {
    let movie = {}

    const response = await axios.get(`${baseUrl}/${id}`)

    movie = response.data

    return movie
}

export async function createMovie(movie) {
    await axios.post(`${baseUrl}`, movie)
}

export async function updateMovie(id, movie) {
    await axios.put(`${baseUrl}/${id}`, movie)
}

export async function deleteMovie(id) {
    await axios.delete(`${baseUrl}/${id}`)
}

