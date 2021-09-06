import './App.css';
import {Route} from 'react-router-dom';
import Home from './pages/Home'
import Cart from './pages/Cart'
import AddItem from './pages/AddItem'

function App() {
  return (
    <div ClassName="App">
    <div>
      <Route path="/" exact>
        <Home />
      </Route>
    </div>
    <div>
        <Route path="/" exact>
         <Cart />
       </Route>
    </div>
    <div>
      <Route path="/" exact>
        <AddItem />
      </Route>
    </div>
    </div>
  );
}

export default App;
