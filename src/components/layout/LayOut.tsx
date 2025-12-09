import { Outlet } from 'react-router-dom';
import StoreAdmin from '../StoreAdmin/StoreAdmin'

const LayOut = () => {
  console.log("test");

  return (
    <>
      <main className="min-h-screen bg-gray-100">
        <StoreAdmin />
        {/* Main Content */}
        <section className="ml-64 p-8 "><Outlet /></section>
      </main>
    </>
  )
}

export default LayOut
