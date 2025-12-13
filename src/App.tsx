import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeOverview from './components/pages/HomeOverview/HomeOverview';
import Inventory from './components/pages/Inventory/Inventory';
import OrdersManagement from './components/pages/OrdersManagement/OrdersManagement';
import ProductsManagement from './components/pages/ProductsManagement/ProductsManagement';
import LayOut from './components/layout/LayOut';
import { Toaster } from 'react-hot-toast';
import Login from './components/Auth/Login/Login';
import SignUp from './components/Auth/signUp/SignUp';
import UserSession from './context/userSession/UserSession';
import ForgetPassword from './components/pages/resetPassword/ForgetPassword';
import ResetPassword from './components/Auth/resetPassword/ResetPassword';
import ProjectProtected from './protectedRoutes/ProjectProtected';
import AuthProtected from './protectedRoutes/AuthProtected';
import NotFound from './components/notFound/NotFound';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';


const queryClient = new QueryClient()

// Main App Component
const App = () => {


  const router = createBrowserRouter([
    {
      path: "", element: <LayOut />, children: [
        { index: true, element: <ProjectProtected><HomeOverview /></ProjectProtected> },
        { path: "/Products", element: <ProjectProtected><ProductsManagement /></ProjectProtected> },
        { path: "/Orders", element: <ProjectProtected><OrdersManagement /></ProjectProtected> },
        { path: "/Inventory", element: <ProjectProtected><Inventory /></ProjectProtected> },
        { path: "*", element: <NotFound /> },
      ]
    },
    { path: "/login", element: <AuthProtected><Login /> </AuthProtected> },
    { path: "/signup", element: <AuthProtected><SignUp /></AuthProtected> },
    { path: "/forgetPassword", element: <AuthProtected><ForgetPassword /></AuthProtected> },
    { path: "/resetPassword", element: <AuthProtected> <ResetPassword /></AuthProtected> },
  ])

  return (
    <>

      <Toaster />
    <QueryClientProvider client={queryClient}>
      <UserSession>
        <RouterProvider router={router} />
      </UserSession>
    </QueryClientProvider> 
    </>
  );
};

export default App;