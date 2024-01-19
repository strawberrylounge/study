import logo from './logo.svg';
import './App.css';

import ChildComponent, { Child } from './Child.js';
import TimerComponent from './Timer.js';

function App() {
  const text = "Cynthia";
  const sayHello = function () {
    return <h3>강의 너무 재밌다. test</h3>;
  }
  const sayHello2 = function() {
    alert('hi');
  }
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>{text}</h2>
      {sayHello()}
      <button onClick={sayHello2}>Click!</button>
      <ChildComponent name="Cynthia" age={30} />
      <ChildComponent name="Jason" age={26} />
      <ChildComponent name="MinSoo" age={35 }/>
      <ChildComponent name="YeongHee" age={24} />
      <TimerComponent />
    </div>
  );
}

export default App;
