import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../../MovieDetails/MovieDetails';
import AddMovie from '../AddMovie/AddMovie';
import Header from '../Header/Header.jsx';

function App() {
  return (
    <div className="App">
      <Router>    
        <Header />    
        <Route path="/" exact>
          <MovieList />
        </Route>
        <Route exact path="/details">
          <MovieDetails />
        </Route>
        <Route exact path="/add">
          <AddMovie />
        </Route>
      </Router>
    </div>
  );
}


export default App;
