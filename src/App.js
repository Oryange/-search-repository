import './App.css';
import Dash from './components/dash';
import Details from './components/details';
import Favorites from './components/favorites';
import Footer from './components/footer';
import './index.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter basename="/hubbusters">
    <Switch>
      <Route exact path="/" component={ Dash } />
      <Route path="/detalhes" component={ Details } />
      <Route path="/favoritos" component={ Favorites } />
    </Switch>
    <Footer/>
  </BrowserRouter>
    
  );
}

export default App;
