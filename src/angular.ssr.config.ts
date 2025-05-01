import { Routes } from '@angular/router';
import { provideRoutes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'food/:id',
    data: {
      renderMode: 'server'
    }
  },
  {
    path: 'search/:searchItem',
    data: {
      renderMode: 'server'
    }
  }
];

export default provideRoutes(routes);
