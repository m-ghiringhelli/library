import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';
import './App.css';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path='/'>
            <p>check out our super sick <Link to='/books'>books</Link></p>
          </Route>
          <Route exact path='/books/:id'>
            <Link to='../books'>&lt;&lt;&lt; go back to the books</Link>
            <BookDetail />
          </Route>
          <Route path='/books'>
            <Link to='../'>&lt;&lt;&lt; go back to the homepage</Link>
            <BookList />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
