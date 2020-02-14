/**
 * Amadeus Panel
 * @link https://github.com/steinsmc/Amadeus
 */

import Dashboard from './components/views/single/Dashboard';
import About from './components/views/single/About';
import NotFoundComponent from "./components/views/NotFoundComponent";
import ServerLayout from "./components/layouts/ServerLayout";
import SinglePage from "./components/layouts/SinglePage";
import ServerList from "./components/views/server/ServerList";
import Server from "./components/views/server/Server";

export default [
    { path: '/', component: SinglePage,
        children: [
            { path: '/dashboard', component: Dashboard},
            { path: '/about', component: About},
            { path: '/server', component: ServerList},
        ]
    },
    { path: '/server/:id', component: ServerLayout,
        children: [
            { path: '/', component: Server},
        ]
    },
    { path: '*', component: NotFoundComponent },
];