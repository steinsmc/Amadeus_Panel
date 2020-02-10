/**
 * Amadeus Panel
 * @link https://github.com/steinsmc/Amadeus
 */

import Dashboard from './components/views/single/Dashboard';
import About from './components/views/single/About';
import NotFoundComponent from "./components/views/NotFoundComponent";

export default [
    { path: '/dashboard', component: Dashboard},
    { path: '/about', component: About},
    { path: '*', component: NotFoundComponent }
];