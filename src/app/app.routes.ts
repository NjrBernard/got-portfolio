import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { NotFound } from './core/not-found/not-found';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'home', redirectTo: 'toto', pathMatch: 'full' },
    {
        path: 'countries',
        loadComponent: () => import('./components/countries/countries')
            .then((component) => component.Countries),
        title: 'Countries',
        data: {
            countries: [
                { id: 1, name: 'France' },
                { id: 2, name: 'Belgique' },
                { id: 3, name: 'Italie' }

            ]
        },
        children: [
            {
                path: ':id',
                loadComponent: () => import('./components/country-details/country-details')
                    .then((component) => component.CountryDetails), title: 'Country Details'
            }
        ]
    }, // Lazy-loading - Charger dynamiquement le composant. Si la route n'est pas acctivée, le composant n'est pas chargé.
    { path: '**', component: NotFound, title: '404 - Not Found' }
];
