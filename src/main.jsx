import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Dashboard from './pages/dashboard/Dashboard'; 
import Services from './pages/services/Services';
import Action from './pages/action/Action';
import Users from './pages/users/Users';
import Settings from './pages/settings/Settings';
import Integration from './pages/integration/Integration';
import Agent from './pages/agent/Agent';
import App from './App';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={
    <App/>}>
      <Route index element={<Dashboard/>} />
      <Route path='Dashboard' element={<Dashboard/>} />
      <Route path='Services' element={<Services/>} />
      <Route path='Action' element={<Action/>} />
      <Route path='Users' element={<Users/>} />
      <Route path='Settings' element={<Settings/>} />
      <Route path='Integration' element={<Integration/>} />
      <Route path='Agent' element={<Agent/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);