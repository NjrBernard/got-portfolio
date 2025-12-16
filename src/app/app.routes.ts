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
        path: 'cities',
        loadComponent: () => import('./components/cities/cities')
            .then((component) => component.Cities),
        title: 'Cities',
        data: {
            cities: [
                { id: 1, name: 'Paris', inhabitants: 2161000, typicalDish: 'Croissant', currency: 'EUR', flag: '🇫🇷' },
                { id: 2, name: 'Lyon', inhabitants: 522000, typicalDish: 'Quenelles', currency: 'EUR', flag: '🇫🇷' },
                { id: 3, name: 'Marseille', inhabitants: 873000, typicalDish: 'Bouillabaisse', currency: 'EUR', flag: '🇫🇷' },
                { id: 4, name: 'New York', inhabitants: 8336000, typicalDish: 'New York-style pizza', currency: 'USD', flag: '🇺🇸' },
                { id: 5, name: 'Los Angeles', inhabitants: 3899000, typicalDish: 'Tacos', currency: 'USD', flag: '🇺🇸' },
                { id: 6, name: 'Chicago', inhabitants: 2660000, typicalDish: 'Deep-dish pizza', currency: 'USD', flag: '🇺🇸' },
                { id: 7, name: 'Berlin', inhabitants: 3755000, typicalDish: 'Currywurst', currency: 'EUR', flag: '🇩🇪' },
                { id: 8, name: 'Munich', inhabitants: 1510000, typicalDish: 'Weißwurst', currency: 'EUR', flag: '🇩🇪' },
                { id: 9, name: 'Madrid', inhabitants: 3223000, typicalDish: 'Cocido madrileño', currency: 'EUR', flag: '🇪🇸' },
                { id: 10, name: 'Barcelona', inhabitants: 1620000, typicalDish: 'Pa amb tomàquet', currency: 'EUR', flag: '🇪🇸' }
            ]
        }
        },
        
            {
                path: ':id', loadComponent: () => import('./components/country-details/country-details')
                    .then((component) => component.CountryDetails), title: 'City Details'
            }
        ]
    }
        ,
     // Lazy-loading - Charger dynamiquement le composant. Si la route n'est pas acctivée, le composant n'est pas chargé.

    
    { path: '**', component: NotFound, title: '404 - Not Found' }
];
