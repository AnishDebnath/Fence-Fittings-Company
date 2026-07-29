import React, { useState } from 'react';
import { SpecTableData, SpecRow } from '../../data/products';

interface PackagingSpecChartProps {
    specData: SpecTableData;
    productName?: string;
}

export const PackagingSpecChart: React.FC<PackagingSpecChartProps> = ({ specData }) => {
    const [selectedRow, setSelectedRow] = useState<number | null>(0);

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden my-6">
            <div className="overflow-x-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-slate-100 hover:scrollbar-thumb-slate-400">
                <table className="w-full text-center border-collapse min-w-[500px]">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-sm sm:text-base font-bold uppercase tracking-wider border-b border-blue-950">
                            <th className="py-2 px-2 sm:py-3 sm:px-3 border-r border-blue-700/50 whitespace-nowrap">CODE</th>
                            <th className="py-2 px-2 sm:py-3 sm:px-3 border-r border-blue-700/50 whitespace-nowrap">SIZE</th>
                            <th className="py-2 px-2 sm:py-3 sm:px-3 border-r border-blue-700/50 whitespace-nowrap">PCS PER BAG</th>
                            <th className="py-2 px-2 sm:py-3 sm:px-3 border-r border-blue-700/50 whitespace-nowrap">BAG PER PALLET</th>
                            <th className="py-2 px-2 sm:py-3 sm:px-3 whitespace-nowrap">PCS PER PALLET</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-800 text-sm sm:text-base font-semibold divide-y divide-slate-100">
                        {specData.rows.map((row: SpecRow, idx: number) => {
                            const isSelected = selectedRow === idx;
                            return (
                                <tr
                                    key={row.code || idx}
                                    onClick={() => setSelectedRow(idx)}
                                    className={`cursor-pointer transition-colors ${isSelected
                                        ? 'bg-blue-50/90 font-bold text-blue-950'
                                        : idx % 2 === 0
                                            ? 'bg-white hover:bg-slate-50'
                                            : 'bg-slate-50/50 hover:bg-slate-100/70'
                                        }`}
                                >
                                    <td className="py-2 px-2 sm:py-3 sm:px-3 border-r border-slate-200 font-bold text-slate-900 whitespace-nowrap">{row.code}</td>
                                    <td className="py-2 px-2 sm:py-3 sm:px-3 border-r border-slate-200 font-bold text-blue-700 whitespace-nowrap">{row.size}</td>
                                    <td className="py-2 px-2 sm:py-3 sm:px-3 border-r border-slate-200 text-slate-700 whitespace-nowrap">{row.pcsPerBag}</td>
                                    <td className="py-2 px-2 sm:py-3 sm:px-3 border-r border-slate-200 text-slate-700 whitespace-nowrap">{row.bagPerPallet}</td>
                                    <td className="py-2 px-2 sm:py-3 sm:px-3 font-bold text-slate-900 whitespace-nowrap">{row.pcsPerPallet}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

