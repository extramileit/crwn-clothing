import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';

import {Route} from 'react-router-dom';



function App() {
  return (
    <div>
      <Route path="/" exact component={HomePage}/>
      <Route path="/shop" component={ShopPage}/>
    </div>
  );
}

export default App;
