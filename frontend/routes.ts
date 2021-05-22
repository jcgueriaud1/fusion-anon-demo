import { Route } from '@vaadin/router';
import './views/helloworld/hello-world-view';

export type ViewRoute = Route & { title?: string; children?: ViewRoute[] };

export const views: ViewRoute[] = [
  // for client-side, place routes below (more info https://vaadin.com/docs/v19/flow/typescript/creating-routes.html)
  {
    path: '',
    component: 'hello-world-view',
    title: '',
  },
  {
    path: 'hello',
    component: 'hello-world-view',
    title: 'Hello World',
  },
];
export const routes: ViewRoute[] = [...views];
