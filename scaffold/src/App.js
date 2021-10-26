// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React,{Component} from 'react'
//创建类组件
// export default class App extends Component{
//   constructor(){
//     super();
//     this.state={

//     }
//   }
//   render(){
//     return <h2>hello scaffold!</h2>
//   }
// }
//创建函数组件
// export default function App(params) {
//   return <h2>this is function Component!</h2>
// }

//测试所有生命周期函数：
class HYTestCpn extends Component{
  render(){
    return <h2>HYTestCpn</h2>
  }
  componentWillUnmount(){
    console.log("HYTestCpn componentWillUnmount");
  }
}

export default class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      count: 4
    }
    console.log('调用constructor函数');
  }
  render(){
    console.log('调用render函数');
    return(
      <div>
        <h2>当前计数：{this.state.count}</h2>
        {this.state.count <= 5 && <HYTestCpn/>}
        <button onClick={e=> this.increment()}>+ 1</button>
        <button onClick={e=> this.decreament()}>- 1</button>
      </div>
    )
  }
  increment(){
    this.setState({
      count: this.state.count + 1
    })
  }
  decreament(){
    this.setState({
      count: this.state.count - 1
    })
  }
  componentDidMount(){
    console.log("调用componentDidMount方法");
  }
  componentDidUpdate(){
    console.log("调用componentDidUpdate方法");
  }
  componentWillUnmount(){
    console.log("调用componentWillUnmount方法");
  }
}
