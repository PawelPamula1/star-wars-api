import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CharacterDetail, FavouriteCharactersListing, Header, Home, PageNotFound } from './components/index';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/character" component={CharacterDetail} />
            <Route path="/favourites" component={FavouriteCharactersListing} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
