import './App.css';
import LearnPropTypes from './components/LearnPropTypes';
//import Greet from './components/Greet';
//import UseTransition from './components/UseTransition';

function App() {
  return (
    <div>
      {/* <UseTransition /> */}
      <LearnPropTypes person={{ name: 'siya', age: '4' }} />
    </div>
  );
}

export default App;
