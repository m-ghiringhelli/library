import BookList from './views/Books/BookList';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

function App() {
  // TODO: Add routes to books & views
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Library Catalog</h1>
        <Switch>
          <Route exact path='/'>
            <p>check out our sick-ass <a href='/books'>books</a></p>
          </Route>
          <Route path='/books'>
            <BookList />
          </Route>
        </Switch>
      </main>
    </BrowserRouter>
  );
}

export default App;
