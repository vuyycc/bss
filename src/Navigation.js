import React from 'react'


import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";

import Home from './components/Home'

export default function Navigation() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}
