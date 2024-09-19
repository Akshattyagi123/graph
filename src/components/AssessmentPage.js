import React from 'react';


const AssessmentPage = () => {
    return (
        <div className="min-h-screen bg-green-500 flex justify-center items-center">
            <div className="bg-white w-10/12 rounded-xl shadow-lg flex overflow-hidden">
                <div className="w-1/3 bg-gradient-to-b  from-green-200 to-green-400 p-8 justify-center">
                    {/* Countdown Timer */}
                    <h2 className="text-lg font-bold mb-4 justify-center ml-14">Your Test Will Be Live in</h2>
                    <div className="bg-black text-white text-center rounded-lg shadow-xl p-6 mb-8 w-[300.33px] h-[134.66px] ml-14">
                        <div className="flex gap-2 justify-center space-x-2 text-2xl font-bold">
                            <div className='flex flex-col'>
                                <div>1</div>
                                <div>Hours</div>
                            </div>

                            <div className='flex flex-col'>
                                <div>59</div>
                                <div>Minutes</div>
                            </div>

                            <div className='flex flex-col'>
                                <div>1</div>
                                <div>Seconds</div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center text-black">
                        <img src="/images/Hopingminds.png" alt="Hoping Minds Logo" className="w-24 mx-auto mb-4" />
                        <h3 className="text-lg font-bold mb-4">Contact Us For Support</h3>
                        <p className="text-md font-light mb-2">support@hoppingminds.com</p>
                        <p className="text-md font-light">+91 7447723467, 3562563553</p>
                    </div>
                </div>

                <div className="w-2/3 p-10">
                    <h1 className="text-3xl font-bold mb-4">Welcome</h1>
                    <h2 className="text-2xl font-semibold mb-6">It's Time To Complete Your <span className="text-green-500">Designing Assessment!</span></h2>

                    <form className="space-y-4">
                        <div>
                            <label className="block font-semibold">Name</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Enter your name" />
                        </div>
                        <div>
                            <label className="block font-semibold">Phone Number</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Enter your phone number" />
                        </div>
                        <div>
                            <label className="block font-semibold">College Name</label>
                            <input type="text" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Enter your college name" />
                        </div>
                        <div>
                            <label className="block font-semibold">Email</label>
                            <input type="email" className="w-full border border-gray-300 rounded-lg p-2" placeholder="Enter your email" />
                        </div>

                        {/* Buttons */}
                        <div>
                            <button type="button" className="bg-green-500 text-white px-6 py-2 rounded-lg mr-0">Verify</button>
                            <button type="submit" className="bg-green-600 text-white px-8 py-2 rounded-lg flex items-center">
                                Continue To Test
                                <span className="ml-2">→</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AssessmentPage;
