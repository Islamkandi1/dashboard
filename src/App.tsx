import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Analytics from './components/pages/Analytics/Analytics';
import HomeOverview from './components/pages/HomeOverview/HomeOverview';
import Inventory from './components/pages/Inventory/Inventory';
import OrdersManagement from './components/pages/OrdersManagement/OrdersManagement';
import ProductsManagement from './components/pages/ProductsManagement/ProductsManagement';
import LayOut from './components/layout/LayOut';
import { Toaster } from 'react-hot-toast';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/signUp/SignUp';




// Main App Component
const App = () => {


  const router = createBrowserRouter([
    {
      path: "", element: <LayOut />, children: [
        { index: true, element: <HomeOverview /> },
        { path: "/Products", element: <ProductsManagement /> },
        { path: "/Orders", element: <OrdersManagement /> },
        { path: "/Inventory", element: <Inventory /> },
        { path: "/Analytics", element: <Analytics /> },
      ]
    },
    { path: "/login", element: <Login /> },
    { path: "/signup", element: <SignUp /> },
  ])

  return (
    <>
      <Toaster />
      <RouterProvider router={router} />
    </>
  );
};

export default App;