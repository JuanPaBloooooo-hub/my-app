import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('./pages/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'talk-list',
    pathMatch: 'full',
  },
  {
    path: 'list',
    loadComponent: () =>
      import('./pages/list/list.page').then((m) => m.ListPage),
  },
  {
    path: 'talk-list',
    loadComponent: () =>
      import('./pages/talk-list/talk-list.page').then((m) => m.TalkListPage),
  },
];
