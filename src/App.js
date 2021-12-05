import './App.css';
import Tweets from './Tweets'
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Tweets />}/>
     </Routes>
      


    </div>
  );
}

export default App;
