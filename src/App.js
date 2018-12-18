import React, { Component } from 'react';
import Header from './components/Site/Header';
import Footer from './components/Site/Footer';
import Sidebar from './components/Site/Sidebar';
import routes from './routes';
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <main className="men">
                    <div className="container">
                        <div className="row">
                            <Sidebar />
                            <Router>
                                {this.contentRoutes(routes)}
                            </Router>
                        </div>
                    </div>
                </main >
                <Footer />
            </div >
        );
    }

    contentRoutes = (routes) => {
        var result = null;
        if (routes.length > 0) {
            result = routes.map((route, index) => {
                return (
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main}
                    />
                );
            });
        }
        return <Switch>{result}</Switch>;
    }
}

export default App;
