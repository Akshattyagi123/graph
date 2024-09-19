import React from 'react';
import { FaChevronRight } from 'react-icons/fa';

const Table = () => {
    return (
        <>
            <div className="overflow-x-auto bg-white shadow-lg rounded-lg border-2 border-blue-400">
                <table className="min-w-full bg-white">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="px-4 py-2 text-left">Student Name</th>
                            <th className="px-4 py-2 text-left">Email ID</th>
                            <th className="px-4 py-2 text-left">Contact No</th>
                            <th className="px-4 py-2 text-left">College</th>
                            <th className="px-4 py-2 text-left">Year of Passing</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="border-t px-4 py-2">John Doe</td>
                            <td className="border-t px-4 py-2">john.doe@example.com</td>
                            <td className="border-t px-4 py-2">123-456-7890</td>
                            <td className="border-t px-4 py-2">ABC University</td>
                            <td className="border-t px-4 py-2">2024</td>
                        </tr>
                        <tr className="bg-gray-50">
                            <td className="border-t px-4 py-2">Jane Smith</td>
                            <td className="border-t px-4 py-2">jane.smith@example.com</td>
                            <td className="border-t px-4 py-2">098-765-4321</td>
                            <td className="border-t px-4 py-2">XYZ College</td>
                            <td className="border-t px-4 py-2">2025</td>
                        </tr>
                        {/* Add more rows as needed */}
                    </tbody>
                </table>
            </div>

            <div className="flex justify-end mt-4">
                <button className="flex items-center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none">
                    Next
                    <FaChevronRight className="ml-2" /> {/* Chevron icon with margin on the left */}
                </button>
            </div>
        </>

    );
};

export default Table;


