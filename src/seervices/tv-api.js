
const baseURL = 'https://api.themoviedb.org/3/'
const apiKey = '60413e4c0935df0adbee558138220381';

const fetchTrendingMovie = () => {
    return fetch(`${baseURL}trending/movie/day?api_key=${apiKey}`).then(res => res.json()).then(data => data.results);
};

const fetchMoviesWithQuery = searchQuery =>{
    return fetch(`${baseURL}search/movie?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=1&include_adult=false`)
    .then(res => res.json())
    .then(data => data.results)
};

const fetchMovieDetails = movieId => {
    return fetch(`${baseURL}movie/${movieId}?api_key=${apiKey}`).then(res => res.json());
};

const fetchCredits = movieId => {
    return fetch(`${baseURL}movie/${movieId}/credits?api_key=${apiKey}`).then(res => res.json());
};

const fetchReviews = movieId => {
    return fetch(`${baseURL}movie/${movieId}/reviews?api_key=${apiKey}`).then(res => res.json()).then(data => data.results);
};

export default {fetchTrendingMovie, fetchMoviesWithQuery, fetchMovieDetails, fetchCredits, fetchReviews}