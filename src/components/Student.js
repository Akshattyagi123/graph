import React from 'react';

const Student = () => {
    const summaryItems = [
        { color: 'bg-blue-300', label: 'Photography' },
        { color: 'bg-green-300', label: 'Photography' },
        { color: 'bg-orange-300', label: 'Photography' },
        { color: 'bg-purple-300', label: 'Photography' },
        { color: 'bg-indigo-300', label: 'Photography' },
    ];

    return (
        <div className="relative border border-black-500 flex flex-col w-2/3 h-auto mx-auto p-4 space-y-8 justify-center">
            {/* First Section */}
            <div className="border border-green-500 rounded-lg p-4 w-full h-auto">
                <h2 className="text-lg font-semibold mb-4 text-center">QUICK SUMMARY</h2>
                <div className="grid grid-cols-2 gap-4">
                    {summaryItems.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${item.color} rounded-md`}></div>
                            <div className="flex-grow">
                                <p className="font-medium">{item.label}</p>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <div className="bg-gray-200 h-2 flex-grow rounded-full">
                                        <div className="bg-gray-400 h-2 w-0 rounded-full"></div>
                                    </div>
                                    <span className="text-sm">0%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                    {[37, 37, 37].map((value, index) => (
                        <div key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Correct: {value}
                        </div>
                    ))}
                </div>
            </div>

            {/* Second Section */}
            <div className="border border-green-500 rounded-lg p-4 w-full h-auto">
                <h2 className="text-lg font-semibold mb-4 text-center">QUICK SUMMARY</h2>
                <div className="grid grid-cols-2 gap-4">
                    {summaryItems.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${item.color} rounded-md`}></div>
                            <div className="flex-grow">
                                <p className="font-medium">{item.label}</p>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <div className="bg-gray-200 h-2 flex-grow rounded-full">
                                        <div className="bg-gray-400 h-2 w-0 rounded-full"></div>
                                    </div>
                                    <span className="text-sm">0%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                    {[37, 37, 37].map((value, index) => (
                        <div key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Correct: {value}
                        </div>
                    ))}
                </div>
            </div>

            {/* Third Section */}
            <div className="border border-green-500 rounded-lg p-4 w-full h-auto">
                <h2 className="text-lg font-semibold mb-4 text-center">QUICK SUMMARY</h2>
                <div className="grid grid-cols-2 gap-4">
                    {summaryItems.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${item.color} rounded-md`}></div>
                            <div className="flex-grow">
                                <p className="font-medium">{item.label}</p>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <div className="bg-gray-200 h-2 flex-grow rounded-full">
                                        <div className="bg-gray-400 h-2 w-0 rounded-full"></div>
                                    </div>
                                    <span className="text-sm">0%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                    {[37, 37, 37].map((value, index) => (
                        <div key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Correct: {value}
                        </div>
                    ))}
                </div>
            </div>

            {/* Fourth Section */}
            <div className="border border-green-500 rounded-lg p-4 w-full h-auto">
                <h2 className="text-lg font-semibold mb-4 text-center">QUICK SUMMARY</h2>
                <div className="grid grid-cols-2 gap-4">
                    {summaryItems.map((item, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <div className={`w-10 h-10 ${item.color} rounded-md`}></div>
                            <div className="flex-grow">
                                <p className="font-medium">{item.label}</p>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                                    <div className="bg-gray-200 h-2 flex-grow rounded-full">
                                        <div className="bg-gray-400 h-2 w-0 rounded-full"></div>
                                    </div>
                                    <span className="text-sm">0%</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="mt-4 flex justify-end space-x-2">
                    {[37, 37, 37].map((value, index) => (
                        <div key={index} className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                            Correct: {value}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Student;












