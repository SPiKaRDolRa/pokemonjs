import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './Header'
import Form from './Form'
import Pokemon from './Pokemon'
import Stock from './Stock'
import Datetime from './Datetime'
import Array from './Array'
import Footer from './Footer'

const App = () => {
    return (
        <Router>
            <background />
            <Header />
                <Switch>
                <Route path="/" exact>
                    <Form />
                </Route>
                <Route path="/pokemon" exact>
                    <Pokemon />
                </Route>
                <Route path="/stock" exact>
                    <Stock />
                </Route>
                <Route path="/datetime" exact>
                    <Datetime />
                </Route>
                <Route path="/array" exact>
                    <Array />
                </Route>
                </Switch>
            <Footer /> 
        </Router>
    );
}

export default App
