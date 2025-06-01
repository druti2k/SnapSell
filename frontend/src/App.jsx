import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import ProjectsPage from './pages/ProjectsPage';
import ProductsPage from './pages/ProductsPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';

const App = () => {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/profile" component={ProfilePage} />
                <Route path="/projects" component={ProjectsPage} />
                <Route path="/products" component={ProductsPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </Router>
    );
};

export default App;