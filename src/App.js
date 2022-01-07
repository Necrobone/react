import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchMoviesHandler() {
        setIsLoading(true);
        setError(null);

        try {
            const response = await fetch('https://swapi.dev/api/films');

            if (!response.ok) {
                throw new Error('Something went wrong!');
            }

            const data = await response.json();

            const transformedMovies = data.results.map(movie => {
                return {
                    id: movie.episode_id,
                    title: movie.title,
                    openingText: movie.opening_crawl,
                    releaseDate: movie.release_date,
                };
            });
            setMovies(transformedMovies);
        } catch (responseError) {
            setError(responseError.message);
        }

        setIsLoading(false);
    }

    let content;

    switch (true) {
        case movies.length > 0:
            content = <MoviesList movies={movies} />;
            break;
        case error:
            content = <p>{error}</p>;
            break;
        case isLoading:
            content = <p>Loading</p>;
            break;
        default:
            content = <p>Found no movies.</p>;
            break;
    }

    return (
        <React.Fragment>
            <section>
                <button onClick={fetchMoviesHandler}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
