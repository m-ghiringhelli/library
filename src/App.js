import BookList from './views/Books/BookList';
import BookDetail from './views/Books/BookDetail';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path='/'>
            <p>check out our sick-ass <a href='/books'>books</a></p>
          </Route>
          <Route exact path='/books/:id'>
            <a href='../'>&lt;&lt;&lt; go back to the books</a>
            <BookDetail />
          </Route>
          <Route path='/books'>
            <a href='../'>&lt;&lt;&lt; go back to the homepage</a>
            <BookList />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
