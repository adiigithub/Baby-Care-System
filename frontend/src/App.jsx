import './App.css';
import {BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './pages/home';
import About from './pages/about';
import Care from './pages/care';
import Login from './pages/login';
import Navbar from './components/navbar';

function App() {
  // Define the router outside of the JSX
  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>
        <Navbar />
        <Home />
      </div>
      
    },
    {
      path: "/about",
      element: <div>
         <Navbar />
         <About />,
      </div>
     
    },
    {
      path: "/care",
      element: <div>
      <Navbar />
       <Care />  
      </div>
     
    },
    {
      path: "/login",
      element: <div>
        <Navbar/>
        <Login/>
      </div>
    },
  ]);

  // Return JSX with RouterProvider wrapping the router
  return (
    <RouterProvider router={router} />
  );
}

export default App;
