import { AlertTriangle, BarChart3, Menu, Package, ShoppingBag, ShoppingCart, X } from "lucide-react";
import { NavLink } from "react-router-dom";
import Logout from "../Auth/logout/LogOut";
import { useState } from "react";

const StoreAdmin = () => {
  const [open, setOpen] = useState("w-0")
  // --------------------------open slider------------------------------
  function openSlide() {
    setOpen("w-64")
  }
  // --------------------------close slider---------------------------
  function closeSlide() {
    setOpen("w-0")
  }
  return (
    <>
      {/* Sidebar */}
      <main className={`fixed left-0 top-0 h-full  ${open} md:w-64  overflow-hidden bg-gray-900  text-white z-20 transition-all duration-300`}>
        <button type="button" className="mt-3 flex justify-end ms-auto px-2 bg-[#155DFC] rounded-lg py-1 mr-3 cursor-pointer  md:hidden" onClick={closeSlide}>
          <X />
        </button>
        <section className={` flex flex-col justify-between  h-[90%] md:h-full  md:w-64  p-6 pt-2 md:py-6`}>
          <section>
            <section className="mb-8">
              <h1 className="text-2xl font-bold flex items-center ">
                <ShoppingBag className="w-6 h-8 mr-2" />
                Shop.co Admin
              </h1>
            </section>

            <nav className="space-y-2 border-b border-gray-700">
              <NavLink
    
      onClick={closeSlide}to="/"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition`}
              >
                <BarChart3 className="w-5 h-5 mr-3" />
                Dashboard
              </NavLink>

              <NavLink
                onClick={closeSlide}
                to="/Products"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition `}
              >
                <Package className="w-5 h-5 mr-3" />
                Products
              </NavLink>

              <NavLink
                onClick={closeSlide}
                to="/Orders"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition `}
              >
                <ShoppingCart className="w-5 h-5 mr-3" />
                Orders
              </NavLink>

              <NavLink
                onClick={closeSlide}
                to="/Inventory"
                className={`w-full flex items-center px-4 py-3 rounded-lg transition `}
              >
                <AlertTriangle className="w-5 h-5 mr-3" />
                Inventory
              </NavLink>
            </nav>
          </section>
          <Logout />
        </section>

      </main>
      <button type="button" onClick={openSlide} className=" mt-4 flex justify-end px-2 bg-[#155DFC] rounded-lg py-1 ml-5 cursor-pointer  md:hidden text-white"><Menu className="w-7  h-7"/></button>
    </>
  );
};

export default StoreAdmin;
