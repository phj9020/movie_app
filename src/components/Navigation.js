import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div>
      {/* <a href="/">Home</a> 로 하게 되면 클릭시 페이지가 리프레쉬 되면서 리엑트가 죽는 문제가 있으므로 <Link t0>사용*/}
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
}
export default Navigation;
