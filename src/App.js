import React from "react";
import axios from "axios";
import Movie from "./Movie";
import "./App.css";

//fetch data from https://yts.mx/api#list_movies endpoint json file

// class component has render method, not return method
// 리엑트는 자동적으로 class component의 render method를 자동으로 실행한다
class App extends React.Component {
  state = {
    isLoading: true,
    movies: [],
  };

  // axios is layer on the top of fetch() = 사전 설치 (npm install axios) axios.get을 이용하여  API movie 리스트를 가져온다
  // async함수를 써야 await을 쓸 수 있다  = axios.get으로 접근이 끝날때까지 기다려라
  // getmovie 함수
  getMovies = async () => {
    // const movies = await axios.get("https://yts-proxy.now.sh/list_movies.json");
    // console.log(movies.data.data.movies)  <<  movies 안에 data 안에 data 안에 movies 가지고 와야 해서
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    // data 안에 있는 movies 를 state 의 movies array안에 넣는다
    // state의  movie : movies from axios
    // this.setState({movie : movies})
    // 위의 short cut은 아래 & modifying state
    this.setState({ movies, isLoading: false });
  };

  // 랜더링 후 마운트되면 getmovie 함수 호출
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader__text">Loading...</span>
          </div>
        ) : (
          <div className="movies">
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default App;
