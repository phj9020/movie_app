import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./Movie.css";

//state 가 필요없으면 class component일 필요가 없다
function Movie({ id, year, title, summary, poster, genres }) {
  return (
    // 영화 클릭 시 디테일 페이지 이동 시 state 데이터를 보내기 위해
    // 링크로 html영역을 감싸서 정보를 라우터로 보낸다 (App.js의 component={Detail}) 그러므로 Detail.js에서 해당 정보 사용을 할 수 있다.
    <div className="movie">
      <Link
        to={{
          pathname: `/movie/${id}`,
          state: {
            year: year,
            title: title,
            summary: summary,
            poster: poster,
            genres: genres,
          },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genre">
            {/* genres 어레이에 key를 넣어줘야해서 2번째로 index argument를 넣어줌 */}
            {genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
