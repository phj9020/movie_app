import React from "react";


// class component has render method, not return method
// 리엑트는 자동적으로 class component의 render method를 자동으로 실행한다
class App extends React.Component {

  //state is object and component의 data를 넣을 공간이 있고 이 데이터는 변한다
  state = {
    count: 0,
  };

  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };
  minus = () => {
    this.setState(current => ({count:current.count -1}));
  };

  // render()가 끝난 이후 완료 
  componentDidMount(){
    console.log("component rendered")
  }

  // 이벤트로 인해 state가 바뀌어서 update 되었을 때
  componentDidUpdate(){
    console.log("component updated");
  }
  // component가 떠날때(다른 페이지로 가거나 등등) 호출 
  componentWillUnmount(){
    console.log("good bye");
  }
  render() {
    console.log("I am rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
