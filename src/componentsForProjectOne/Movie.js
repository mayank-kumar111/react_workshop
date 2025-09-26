import React, { useEffect, useState } from "react";

const Movie = () => {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovie = async () => {
            const apiKey = process.env.REACT_APP_OMDB_API_KEY;
            const response = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`);
            const data = await response.json();
            console.log(data);
            setMovie(data);
        };
        fetchMovie();
    }, []);

    return (
        <div>
            <h1>Movie Info</h1>
            {movie && (
                <div>
                    <p>Title: {movie.Title}</p>
                    <p>Year: {movie.Year}</p>
                    <p>Genre: {movie.Genre}</p>
                </div>
            )}
        </div>
    );
};

export default Movie;