import { Routes } from '@angular/router';
import { BooksComponent } from './books';
import { ListComponent } from './pages/list.component';
import { StatsComponent } from './pages/stats.component';
export const BOOK_ROUTES: Routes = [
  {
    path: '',
    component: BooksComponent,
    children: [
      {
        path: 'list',
        component: ListComponent,
      },
      {
        path: 'stats',
        component: StatsComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];
