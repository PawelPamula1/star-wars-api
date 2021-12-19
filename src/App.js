import './App.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { CharacterDetail, FavouriteCharactersListing, Footer, Header, Home, PageNotFound } from './components/index';

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/character/:id" component={CharacterDetail} />
            <Route path="/favourites" component={FavouriteCharactersListing} />
            <Route component={PageNotFound} />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
