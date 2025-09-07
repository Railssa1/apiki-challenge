import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { DetailPost } from './components/detail-post/detail-post';

export const routes: Routes = [
  {
    path: '',
    component: Home
  },
  {
    path: 'detail-post/:slug',
    component: DetailPost
  }
];
