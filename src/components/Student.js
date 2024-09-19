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
            <div className="border border-green-500 rounded-lg p-6 w-full h-auto">
                <h2 className="text-lg font-semibold mb-6 text-center">SECTIONAL SUMMARY</h2>
                <div className="flex justify-center space-x-4 mb-8">
                    <button className="border border-green-400 py-2 px-6 h-[38px] w-[177px] rounded-full text-green-500 font-semibold">
                        Button
                    </button>
                    <button className="border border-green-400 py-2 px-6 h-[38px] w-[177px] rounded-full text-green-500 font-semibold">
                        Button
                    </button>
                    <button className="border border-green-400 py-2 px-6 rounded-full h-[38px] w-[177px] text-green-500 font-semibold">
                        Button
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-4 w-[415px] h-[62px] flex-row">
                        <div className="border border-green-400 rounded-lg p-4 h-[62px] w-[415px]">
                            <h3 className="font-semibold mb-2">Reasoning Ability</h3>
                            <input type="range" min="0" max="15" value="12" className="w-full" />
                            <p className="text-right text-xs">12/15</p>
                        </div>
                        <div className="border border-green-400 rounded-lg p-4 h-[62px] w-[415px]">
                            <h3 className="font-semibold mb-2">Reasoning Ability</h3>
                            <input type="range" min="0" max="15" value="12" className="w-full" />
                            <p className="text-right text-xs">12/15</p>
                        </div>

                        <div className="border border-green-400 rounded-lg p-4 h-[62px] w-[415px]">
                            <h3 className="font-semibold mb-2">Reasoning Ability</h3>
                            <input type="range" min="0" max="15" value="12" className="w-full" />
                            <p className="text-right text-xs">12/15</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col space-y-4">
                        <div className="border border-green-400 rounded-lg p-4 h-[62px] w-[415px]">
                            <h3 className="font-semibold mb-2">Reasoning Ability</h3>
                            <input type="range" min="0" max="15" value="12" className="w-full" />
                            <p className="text-right text-xs">12/15</p>
                        </div>
                        <div className="border border-green-400 rounded-lg p-4 h-[62px] w-[415px]">
                            <h3 className="font-semibold mb-2">Reasoning Ability</h3>
                            <input type="range" min="0" max="15" value="12" className="w-full" />
                            <p className="text-right text-xs">12/15</p>
                        </div>
                        <div className="border border-green-400 rounded-lg p-4 h-[62px] w-[415px]">
                            <h3 className="font-semibold mb-2">Reasoning Ability</h3>
                            <input type="range" min="0" max="15" value="12" className="w-full" />
                            <p className="text-right text-xs">12/15</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* Third Section */}
            <div className="border border-green-500 rounded-lg p-6 w-full h-auto ">
                <h2 className="text-lg font-semibold mb-6 text-center">STRENGTHS AND WEAKNESSES</h2>
                <div className="flex justify-center space-x-4 mb-8">
                    <button className="border border-green-400 py-2 px-6 rounded-full text-green-500 font-semibold h-[38px] w-[177px]">
                        Button
                    </button>
                    <button className="border border-green-400 py-2 px-6 rounded-full text-green-500 font-semibold h-[38px] w-[177px]">
                        Button
                    </button>
                    <button className="border border-green-400 py-2 px-6 rounded-full text-green-500 font-semibold h-[38px] w-[177px]">
                        Button
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-6">
                    {/* Left Column */}
                    <div className="flex flex-col space-y-4">
                        <div className="border border-green-400 rounded-lg p-4 h-[62px] w-[415px] flex items-center">
                            <div className="flex flex-col">
                                <h4 className="font-Poppins font-lightbold text-sm mb-1">Algebra</h4>
                                <h3 className="font-Poppins">Correct%</h3>
                            </div>
                            <input type="range" min="0" max="15" value="12" className="w-full ml-4" />
                            <p className="text-right text-xs">12/15</p>
                        </div>

                        <div className="border border-green-400 rounded-lg p-4 h-[62px] w-[415px] flex items-center">
                            <div className="flex flex-col">
                                <h4 className="font-Poppins text-sm mb-1">Algebra</h4>
                                <h3 className="font-Poppins">Correct%</h3>
                            </div>
                            <input type="range" min="0" max="15" value="12" className="w-full ml-4" />
                            <p className="text-right text-xs">12/15</p>
                        </div>
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col space-y-4">
                        <div className="border border-green-400 rounded-lg p-4 h-[62px] w-[415px] flex items-center">
                            <div className="flex flex-col">
                                <h4 className="font-Poppins text-sm mb-1">Algebra</h4>
                                <h3 className="font-Poppins">Correct%</h3>
                            </div>
                            <input type="range" min="0" max="15" value="12" className="w-full ml-4" />
                            <p className="text-right text-xs">12/15</p>
                        </div>
                        <div className="border border-green-400 rounded-lg p-4 h-[62px] w-[415px] flex items-center">
                            <div className="flex flex-col">
                                <h4 className="font-Poppins text-sm mb-1">Algebra</h4>
                                <h3 className="font-Poppins">Correct%</h3>
                            </div>
                            <input type="range" min="0" max="15" value="12" className="w-full ml-4" />
                            <p className="text-right text-xs">12/15</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Fourth Section */}
            <div className="border border-green-500 rounded-lg p-6 w-full h-auto">
                <h1 class="text-2xl font-bold mb-6 text-center text-gray-800">COMPARISON</h1>

                <div class="grid grid-cols-3 gap-4 mb-6">
                    <button class="py-2 px-4 bg-white text-green-500 font-semibold rounded-full border border-green-500 hover:bg-green-100 h-[38px] w-[177px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                        Button
                    </button>
                    <button class="py-2 px-4 bg-white text-green-500 font-semibold rounded-full border border-green-500 hover:bg-green-100 h-[38px] w-[177px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                        Button
                    </button>
                    <button class="py-2 px-4 bg-white text-green-500 font-semibold rounded-full border border-green-500 hover:bg-green-100 h-[38px] w-[177px] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                        Button
                    </button>
                    <button class="py-2 px-4 bg-white text-green-500 font-semibold rounded-full border border-green-500 hover:bg-green-100 h-[38px] w-[177px]focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                        Button
                    </button>
                    <button class="py-2 px-4 bg-white text-green-500 font-semibold rounded-full border border-green-500 hover:bg-green-100 focus:outline-none h-[38px] w-[177px]focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                        Button
                    </button>
                    <button class="py-2 px-4 bg-white text-green-500 font-semibold rounded-full border border-green-500 hover:bg-green-100 focus:outline-none h-[38px] w-[177px] focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                        Button
                    </button>
                </div>

                <div class="h-64 mb-8">
                    <div class="w-full h-full bg-gray-200 flex items-center justify-center">
                        Chart Placeholder
                    </div>
                </div>

                <div class="bg-green-100 rounded-lg p-4 flex items-center justify-between">
                    <div>
                        <p class="text-sm text-gray-600">Marks</p>
                        <p class="text-lg font-semibold text-gray-800">34.78/100.00</p>
                    </div>
                    <div class="text-right">
                        <p class="text-sm text-gray-600">Rank</p>
                        <p class="text-lg font-semibold text-gray-800">478578</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Student;












