import React from "react";
import PropTypes from "prop-types";

function Movie({ id, year, title, summary, poster, genres}) {    
    return <div className="movie__card">
        <div className="movie__img">
            <img src={poster} title={title} alt={title}/>        
        </div>
        <div className="movie__card__data">
            <h3 className="movie__title">{title}</h3>
            <ul className="genres">
                {genres.map((genre, ix) => {
                    return <li key={ix}>{genre},</li>                
                })}
            </ul>
            <h5 className="movie__year">{year}</h5>
            <p className="movie__summary">{summary.slice(0, 140)}...</p>
        </div>
    </div>
}

Movie.propTypes = {
    id: PropTypes.number.isRequired,
    year: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired
}

export default Movie;