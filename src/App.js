import './App.css';
import HomePage from './pages/homepage/homepage.component';
import {Route} from 'react-router-dom';

const HatsPage = () => (
  <div>
      <h1>Hats page</h1>
  </div>
);


function App() {
  return (
    <div>
      <Route path="/" exact component={HomePage}/>
      <Route path="/shop/hats" component={HatsPage}/>
    </div>
  );
}

export default App;
