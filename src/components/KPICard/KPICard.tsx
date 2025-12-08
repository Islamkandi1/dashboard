import { TrendingDown, TrendingUp } from "lucide-react";

// KPI Card Component
const KPICard = ({ title, value, icon: Icon, trend, color }:{title:string,value:number|null|string,icon:React.FC<React.SVGProps<SVGSVGElement>>,trend:number,color:string}) => (
  <main className="bg-white rounded-lg shadow p-6">
    <section className="flex items-center justify-between">
      <section>
        <p className="text-sm text-gray-600">{title}</p>
        <p className="text-2xl font-bold mt-2">{value}</p>
        {trend && (
          <p className={`text-sm mt-2 flex items-center ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
            {Math.abs(trend)}% from last month
          </p>
        )}
      </section>
      <section className={`p-3 rounded-full ${color}`}>
        <Icon className="w-6 h-6 text-white" />
      </section>
    </section>
  </main>
);
export default KPICard