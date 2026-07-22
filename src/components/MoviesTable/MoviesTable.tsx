import { useMemo } from "react";
import { movies } from "../../Movies";
import "./MoviesTable.css"

interface MoviesTableProps {
  searching: string;
}

function MoviesTable({ searching }: MoviesTableProps) {

  const filteredMovies = useMemo(() => {
    return movies.filter((movie) =>
      movie.name.toLowerCase().includes(searching.toLowerCase())
    );
  }, [searching]);

  return (
    <table className="moviesTable">
      <thead>
        <tr>
          <th className="theadTh"></th>
          <th className="theadTh">Título</th>
          <th className="theadTh">Gênero</th>
        </tr>
      </thead>
      <tbody>
        {filteredMovies.length === 0 ? (
          <tr className="tbodyTr">
            <td className="notFound" colSpan={3}>Filme não encontrado.</td>
          </tr>
        ) : (
          filteredMovies.map((movie) => (
            <tr className="tbodyTr">
              <td className="movieImage"><img className="movieImageImg" src={movie.image} alt="Imagem do filme" /></td>
              <td className="movieName">{movie.name}</td>
              <td className="movieGenre">{movie.genre}</td>
            </tr>
          ))
        )}
      </tbody>
    </table>
  )
}

export default MoviesTable;