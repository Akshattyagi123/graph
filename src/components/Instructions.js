import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Instructions = () => {
    return (
        <div className="min-h-screen bg-green-500 flex justify-center items-center">
            <div className="bg-white w-[1280px] h-[706px] mt-[67px] mx-auto rounded-3xl shadow-lg flex overflow-hidden relative">
                {/* Left Section with Contact Info */}
                <div className="w-2/5 bg-green-100 p-8 flex flex-col justify-between">
                    <div className="flex-grow"></div>
                    <div className="text-center text-black">
                        <img src="/images/Hopingminds.png" alt="Hoping Minds Logo" className="w-32 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold mb-2">Contact Us For Support</h3>
                        <p className="text-sm mb-1">support@hopingminds.com</p>
                        <p className="text-sm">+91 7447723467 , 3562563553</p>
                    </div>
                </div>

                {/* Right Section with Instructions */}
                <div className="w-3/5 p-10 flex flex-col justify-between rounded-tl-3xl rounded-bl-3xl">
                    <div>
                        <h1 className="text-3xl font-bold mb-2">Here Are Few Instructions</h1>
                        <h1 className="text-3xl font-bold">Before Doing The Test -</h1>
                    </div>

                    {/* Placeholder for instructions content */}
                    <div className="flex-grow"></div>
                </div>

                {/* Button with precise positioning */}
                <div className="absolute top-[640px] left-[575px] w-[575px] h-[60px]">
                    <button className="bg-green-500 text-white font-bold w-full h-full flex items-center justify-center px-6 rounded-tl-lg">
                        <span className="text-lg">Ready To Begin</span>
                        <FaArrowRight className="text-xl ml-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Instructions;


