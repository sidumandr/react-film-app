import React, { useState, useEffect, useContext } from "react";
import ResultCard from "./ResultCard";
import { GlobalContext } from "../context/GlobalState";

const Add = () => {
  const { safa } = useContext(GlobalContext);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    setLoading(true);
    setError(null);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${
        process.env.REACT_APP_TMDB_KEY
      }&query=${encodeURIComponent(query)}&include_adult=false&language=en-US`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setResults(data.results || []);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [query]);

  function onChange(e) {
    setQuery(e.target.value);
  }

  return (
    <div className="add-page">
      <img src="https://i.pinimg.com/originals/b4/57/0f/b4570f86fed3521225a0d11a38a55e40.jpg" />
      <div className="titles">
        <h1>Hoş Geldiniz</h1> <br />
        <h3>{safa}</h3>
        <h2>
          Sınırsız film, dizi ve şovları listele, izlediysen izlediklerine ekle,
          <br />
          izlemediysen izleyeceklerine ekle.
        </h2>
      </div>
      <div className="input-wrapper">
        <input
          type="text"
          value={query || ""}
          onChange={onChange}
          placeholder="Film, Dizi ve Kişileri Keşfedin... "
        />
      </div>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {query.trim() !== "" && results.length > 0 ? (
        <ul className="main-results">
          {results.map((movie) => (
            <li key={movie.id}>
              <ResultCard movie={movie} />
            </li>
          ))}
        </ul>
      ) : (
        query.trim() !== "" && <p>No results found</p>
      )}
    </div>
  );
};

export default Add;
