import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Edit from './pages/Edit';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/pessoa/edit" component={Edit} />
            </Switch>
        </BrowserRouter>
    );
};