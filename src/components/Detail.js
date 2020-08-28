import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    // url에 movie-detail쳐서 들어가면 홈으로 리다이렉트 되게 만듦

    const { location, history } = this.props;
    console.log(this.props);
    if (location.state === undefined) {
      history.push("/");
    }
  }
  render() {
    const { location } = this.props;
    if (location.state) {
      return (
        <div className="detail__container">
          <img
            src={location.state.poster}
            alt={location.state.title}
            title={location.state.title}
          />
          <div className="detail__data">
            <div className="detail__title">{location.state.title}</div>
            <div className="detail__year">{location.state.year}</div>   
            <ul className="detail__genre">
            {location.state.genres.map((genre, index) => (
              <li key={index} className="genres__genre">
                {genre}
              </li>
            ))}
          </ul>
            <div className="detail__summary">{location.state.summary}</div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
