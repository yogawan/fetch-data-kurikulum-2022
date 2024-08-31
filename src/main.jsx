import React from 'react';
import ReactDOM from 'react-dom/client';
import './sass/main.scss';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import OnePages from './components/pages/OnePages';
import TwoPages from './components/pages/TwoPages';
import TreePages from './components/pages/TreePages';
import FourPages from './components/pages/FourPages';
import FivePages from './components/pages/FivePages';
import SixPages from './components/pages/SixPages';
import SevenPages from './components/pages/SevenPages';
import EightPages from './components/pages/EightPages';

const router = createBrowserRouter([
  {
    path: '/1',
    element: <OnePages></OnePages>
  },
  {
    path: '/2',
    element: <TwoPages></TwoPages>
  },
  {
    path: '/3',
    element: <TreePages></TreePages>
  },
  {
    path: '/4',
    element: <FourPages></FourPages>
  },
  {
    path: '/',
    element: <FivePages></FivePages>
  },
  {
    path: '/6',
    element: <SixPages></SixPages>
  },
  {
    path: '/7',
    element: <SevenPages></SevenPages>
  },
  {
    path: '/8',
    element: <EightPages></EightPages>
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);