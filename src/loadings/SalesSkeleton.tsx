
export default function ProductSalesSkeleton({color}:{color?:string}) {
  return (
    <div className="w-full mx-auto  space-y-2">
      {[1, 2].map((item) => (
        <div key={item} className={`bg-${color}-50 rounded-lg p-2 animate-pulse`}>
          <div className="flex items-start justify-between mb-3">
            <div className="flex items-start gap-3 flex-1">
              {/* Rank number skeleton */}
              <div className={`h-4 w-8 bg-${color}-50 rounded`}></div>
              
              {/* Product name skeleton */}
              <div className={`h-4 bg-${color}-50 rounded flex-1 max-w-xs`}></div>
            </div>
            
            {/* Sales count skeleton */}
            <div className="text-right">
              <div className={`h-5 w-16 bg-${color}-50 rounded mb-2`}></div>
              <div className={`h-4 w-12 bg-${color}-50 rounded ml-auto`}></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}