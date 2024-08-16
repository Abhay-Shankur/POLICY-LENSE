import React from 'react';
import { Link } from 'react-router-dom';

const MovieList = ({ movies}) => {
  return (
    <div className="container">
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <div>
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
              <Link to={`/movies/${movie.id}`}>View Details</Link>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default MovieList;