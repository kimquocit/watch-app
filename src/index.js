import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import appReducers from './reducers/index';
import { Provider } from 'react-redux';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import Admin from './pages/Admin/HomePage';
import Login from './pages/Admin/LoginPage';
import Categories from './pages/Admin/CategoriesPage';
import * as serviceWorker from './serviceWorker';

const store = createStore(
    appReducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <Provider store={store}>
        <Router>
        <div>
            <Route exact path="/" component={App} />
            <Route exact path="/admin/login" component={Login} />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/admin/categories" component={Categories} />
        </div>
    </Router>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
