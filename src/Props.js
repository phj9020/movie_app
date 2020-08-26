import React from "react";
import PropTypes from "prop-types";
// npm i prop-types 설치 필요
const foodILike = [
  {
    id: 1,
    name: "Kimbab",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fstatic.inikpop.com%2Fuploads%2F2017%2F02%2Fkimbab.jpg&f=1&nofb=1",
    rating: 4,
  },
  {
    id: 2,
    name: "Kimchi",
    image:
      "https://www.maangchi.com/wp-content/uploads/2015/07/tongbaechu-kimchi-590x402.jpg",
    rating: 3,
  },
  {
    id: 3,
    name: "Samyepsal",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2F8shotsofsoju.files.wordpress.com%2F2014%2F03%2Fkorean-bbq-samgyeopsal.jpg&f=1&nofb=1",
    rating: 5,
  },
  {
    id: 4,
    name: "Bibimbab",
    image:
      "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fchichilicious.com%2Fwp-content%2Fuploads%2Fbibimbap-recipe.jpg&f=1&nofb=1",
    rating: 2,
  },
  {
    id: 5,
    name: "Gopchang",
    image:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fcommons%2F3%2F37%2FGopchang_2.jpg&f=1&nofb=1",
    rating: 1.8,
  },
];

// function renderFood(dish){
//   return <Food name={dish.name} picture={dish.image} />
// }

function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} alt={name} />
    </div>
  );
}

// propTypes 체크
Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired,
};

// function component
function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          name={dish.name}
          picture={dish.image}
          rating={dish.rating}
        />
      ))}
      {/* array.map(함수) */}
      {/* Food 컴포넌트에 name 이라는 prop (property)에 dish.name  값을 준거다 */}
    </div>
  );
}

export default App;
