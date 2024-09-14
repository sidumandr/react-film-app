import React from "react";
import { useMovies } from "../store/MovieStore"; // 'useMovies' kısayolunu içe aktar
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const MovieCarousel = () => {
  const { movies } = useMovies(); // MovieContext'ten filmleri al

  return (
    <Carousel className="carousel">
      {movies.map((movie) => {
        const imgUrl = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
        return (
          <Carousel.Item key={movie.id}>
            <img
              className="d-block w-100"
              src={imgUrl}
              alt={movie.title}
              style={{ height: "400px", objectFit: "cover" }}
            />
            <Carousel.Caption className="caption">
              <h3>{movie.title}</h3>
              <p>{movie.overview}</p>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default MovieCarousel;
