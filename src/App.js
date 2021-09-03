import './App.css';
import Lottery from './Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title="Quina" maxBalls={5} maxNum={80}/>
    </div>
  );
}

export default App;
