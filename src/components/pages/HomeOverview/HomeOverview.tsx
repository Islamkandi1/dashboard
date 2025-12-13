
import TopSelling from "../../topSelling/TopSelling";
import LeastSelling from "../../lessSelling/LessSelling";
import AboutProject from "../../aboutProject/AboutProject";
// Home Overview Component
const HomeOverview = () => {
  return (
    <>
    <main className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-800">Dashboard Overview</h1>

      <AboutProject/>
      <section className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <TopSelling />
        <LeastSelling />
      </section>

    </main>
    {/* --------------------title------------------------- */}
    <title>Dashboard Overview</title>
    </>
  );
};
export default HomeOverview