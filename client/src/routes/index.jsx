import { createBrowserRouter } from 'react-router-dom';
import UiTest from '../pages/UiTest';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <UiTest />,
  },
]);
