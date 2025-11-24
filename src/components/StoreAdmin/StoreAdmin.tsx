import { AlertTriangle, BarChart3, Package, ShoppingBag, ShoppingCart, TrendingUp } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";
import Logout from "../Auth/logout/LogOut";

const StoreAdmin = () => {
  return (
    <>
      <main className="min-h-screen bg-gray-100">
        {/* Sidebar */}
        <section className="fixed flex flex-col justify-between  left-0 top-0 h-full w-64 bg-gray-900 text-white p-6">

          <section>
            <section className="mb-8">
              <h1 className="text-2xl font-bold flex items-center ">
                <ShoppingBag className="w-8 h-8 mr-2" />
                E-Store Admin
              </h1>
            </section>

            <nav className="space-y-2 border-b border-gray-700">
              <NavLink
                to="/"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition`}
              >
                <BarChart3 className="w-5 h-5 mr-3" />
                Dashboard
              </NavLink>

              <NavLink
                to="/Products"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition `}
              >
                <Package className="w-5 h-5 mr-3" />
                Products
              </NavLink>

              <NavLink
                to="/Orders"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition `}
              >
                <ShoppingCart className="w-5 h-5 mr-3" />
                Orders
              </NavLink>

              <NavLink
                to="/Inventory"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition `}
              >
                <AlertTriangle className="w-5 h-5 mr-3" />
                Inventory
              </NavLink>

              <NavLink
                to="/Analytics"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition `}
              >
                <TrendingUp className="w-5 h-5 mr-3" />
                Analytics
              </NavLink>
            </nav>
          </section>



          <Logout />



        </section>

        {/* Main Content */}
        <section className="ml-64 p-8"><Outlet /></section>
      </main>
    </>
  );
};

export default StoreAdmin;
