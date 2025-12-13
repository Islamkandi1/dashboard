import React from 'react';

export default function DashboardSkeleton() {
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                    <div key={item} className="bg-white rounded-2xl p-6 shadow-sm flex items-center justify-between">
                        <div>
                            {/* Header text skeleton */}
                            <div className="h-4 bg-gray-200 rounded w-24 mb-3 animate-pulse"></div>
                            <div >
                                <div >
                                    {/* Large number skeleton */}
                                    <div className="h-6 bg-gray-200 rounded w-10 mb-4 animate-pulse"></div>

                                    {/* Percentage text skeleton */}
                                    <div className="">
                                        <div className="h-3 mb-1 bg-gray-200 rounded w-28 animate-pulse"></div>
                                        <div className="h-3 w-6 bg-gray-200 rounded animate-pulse"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* Circle icon skeleton */}
                        <div className="w-12 h-12 bg-gray-200 rounded-full animate-pulse"></div>
                    </div>
                ))}
            </div>
        </>
    );
}