import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Navigation from "./components/Navigation";
import Detail from "./components/Detail"
import "./App.css";


function App() {
  return (
    <HashRouter>
      {/* Route Prop path가 url : /about 이면 {About 컴포넌트를 보여줘라} */}
      {/* exact={true} 정확히 일치할 때만 해당 컴포넌트를 랜더링해라 */}
      {/* Navigation has to be inside of Router */}
      <Navigation/>
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie/:id" component={Detail} />
    </HashRouter>
  );
}

export default App;
