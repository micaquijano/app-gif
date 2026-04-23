import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'dashboard',
    loadComponent: () =>
      import('./gifs/page/dashboard-page/dashboard-page'),

    children: [
      {
        path: 'trending',
        loadComponent: () =>
          import('./gifs/page/trending-page/trending-page'),
      },
      {
        path: 'search',
        loadComponent: () =>
          import('./gifs/page/search-page/search-page'),

      },
      {
        path: '**',
        redirectTo: 'trending',
      },
    ],
  },

  {
    path: '**',
    redirectTo: 'dashboard',
  },
];
