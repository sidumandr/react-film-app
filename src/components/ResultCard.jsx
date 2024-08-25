import React, { useContext, useState } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { GlobalContext } from "../context/GlobalState";

const ResultCard = ({ movie }) => {
  const { watchlist, addMovieToWatchList } = useContext(GlobalContext);
  const storedMovie = watchlist.find((o) => o.id === movie.id);
  const [isOverviewVisible, setIsOverviewVisible] = useState(false);
  const toggleOverviewVisibility = () => {
    setIsOverviewVisible(!isOverviewVisible);
  };

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        {movie.poster_path ? (
          <img
            src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
            alt={`${movie.poster_path}`}
          />
        ) : (
          <div className="filler-poster"></div>
        )}
        <div className="info">
          <h3
            className="title"
            onClick={toggleOverviewVisibility}
            style={{ cursor: "pointer", display: "flex", alignItems: "center" }}
          >
            {movie.original_title}
            <span style={{ marginLeft: "10px" }}>
              {isOverviewVisible ? (
                <i className="fas fa-chevron-up"></i>
              ) : (
                <i className="fas fa-chevron-down"></i>
              )}
            </span>
          </h3>
          {isOverviewVisible && <p>{movie.overview}</p>}
          <h4 className="release-date">Çıkış Tarihi: {movie.release_date}</h4>
          <h3>IMDB: {movie.vote_average}</h3>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={storedMovie}
            onClick={() => addMovieToWatchList(movie)}
          >
            <p>Add To Watchlist</p>
            <i className="fas fa-plus" style={{ marginLeft: "5px" }}></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
