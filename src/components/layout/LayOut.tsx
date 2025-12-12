import { Outlet } from 'react-router-dom';
import StoreAdmin from '../StoreAdmin/StoreAdmin'

const LayOut = () => {
  console.log("test");

  return (
    <>
      <main className="min-h-screen overflow-auto bg-gray-100">
        <StoreAdmin />
        {/* Main Content */}
        <section className="md:ml-64 p-3 md:p-8 "><Outlet /></section>
      </main>
    </>
  )
}

export default LayOut
