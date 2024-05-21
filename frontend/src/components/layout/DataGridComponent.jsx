import React from 'react';
import { FaRegEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const DataGridComponent = ({ rows, columns, deleteOrderHandler }) => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
                <thead>
                    <tr>
                        {columns.map((column) => (
                            <th
                                key={column.field}
                                className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700"
                            >
                                {column.headerName}
                            </th>
                        ))}
                        <th className="py-2 px-4 border-b border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-700">
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row) => (
                        <tr key={row.id} className="hover:bg-gray-50">
                            {columns.map((column) => (
                                <td
                                    key={column.field}
                                    className={`py-2 px-4 border-b border-gray-200 text-sm ${row[column.field] === 'Delivered' ? 'text-green-600' :
                                            row[column.field] === 'Pending' ? 'text-red-600' :
                                                'text-slate-600'
                                        }`}                                >
                                    {row[column.field]}
                                </td>
                            ))}
                            <td className="py-2 px-4 border-b border-gray-200 text-sm text-gray-700">
                                <Link to={`/admin/order/${row.id}`} className="mr-2">
                                    <FaRegEdit className="inline-block" />
                                </Link>
                                <button
                                    onClick={() => deleteOrderHandler(row.id)}
                                    className="text-red-500"
                                >
                                    <MdDelete className="inline-block" />
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataGridComponent;
