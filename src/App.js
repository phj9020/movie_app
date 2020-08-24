import React from "react";

function Food({fav}) {
  return <h1>I like {fav}</h1>;
}

function App() {
  return (
    <div>
      <h1>Hello1</h1>
      <Food fav="kimchi" />
      <Food fav="ramen" />
      <Food fav="sangiosal" />
      <Food fav="chukkumi" />
      {/* Food 컴포넌트에 fav 이라는 prop (property) 을 kimchi라는 값을 준거다 */}
    </div>
  );
}

export default App;
