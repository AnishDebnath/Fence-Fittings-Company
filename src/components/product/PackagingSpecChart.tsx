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
            <div className="overflow-x-auto">
                <table className="w-full text-center border-collapse">
                    <thead>
                        <tr className="bg-gradient-to-r from-blue-900 via-blue-800 to-indigo-900 text-white text-xs sm:text-sm font-bold uppercase tracking-wider border-b border-blue-950">
                            <th className="py-3 px-3 border-r border-blue-700/50">CODE</th>
                            <th className="py-3 px-3 border-r border-blue-700/50">SIZE</th>
                            <th className="py-3 px-3 border-r border-blue-700/50 whitespace-nowrap">PCS PER BAG</th>
                            <th className="py-3 px-3 border-r border-blue-700/50 whitespace-nowrap">BAG PER PALLET</th>
                            <th className="py-3 px-3 whitespace-nowrap">PCS PER PALLET</th>
                        </tr>
                    </thead>
                    <tbody className="text-slate-800 text-xs sm:text-sm font-semibold divide-y divide-slate-100">
                        {specData.rows.map((row: SpecRow, idx: number) => {
                            const isSelected = selectedRow === idx;
                            return (
                                <tr
                                    key={row.code || idx}
                                    onClick={() => setSelectedRow(idx)}
                                    className={`cursor-pointer transition-colors ${
                                        isSelected
                                            ? 'bg-blue-50/90 font-bold text-blue-950'
                                            : idx % 2 === 0
                                            ? 'bg-white hover:bg-slate-50'
                                            : 'bg-slate-50/50 hover:bg-slate-100/70'
                                    }`}
                                >
                                    <td className="py-3 px-3 border-r border-slate-200 font-bold text-slate-900">
                                        {row.code}
                                    </td>
                                    <td className="py-3 px-3 border-r border-slate-200 font-bold text-blue-700">
                                        {row.size}
                                    </td>
                                    <td className="py-3 px-3 border-r border-slate-200 text-slate-700">
                                        {row.pcsPerBag}
                                    </td>
                                    <td className="py-3 px-3 border-r border-slate-200 text-slate-700">
                                        {row.bagPerPallet}
                                    </td>
                                    <td className="py-3 px-3 font-bold text-slate-900">
                                        {row.pcsPerPallet}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

