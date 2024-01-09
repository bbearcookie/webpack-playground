import { createBrowserRouter } from 'react-router-dom';
import One from '@/pages/One';
import Two from '@/pages/Two';
import App from './App';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/one',
        element: <One />,
      },
      {
        path: '/two',
        element: <Two />,
      },
    ],
  },
]);

export default router;
