import React, { useState, useEffect } from 'react';

const Instructions = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [timeLeft, setTimeLeft] = useState({ hours: 1, minutes: 59, seconds: 1 });

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(prevTime => {
                if (prevTime.hours === 0 && prevTime.minutes === 0 && prevTime.seconds === 0) {
                    clearInterval(timer);
                    return prevTime;
                }
                let newSeconds = prevTime.seconds - 1;
                let newMinutes = prevTime.minutes;
                let newHours = prevTime.hours;

                if (newSeconds < 0) {
                    newSeconds = 59;
                    newMinutes -= 1;
                }
                if (newMinutes < 0) {
                    newMinutes = 59;
                    newHours -= 1;
                }

                return { hours: newHours, minutes: newMinutes, seconds: newSeconds };
            });
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <div className="min-h-screen bg-green-500 flex justify-center items-center p-4">
            <div className="bg-white w-full max-w-6xl rounded-xl shadow-lg flex flex-col lg:flex-row overflow-hidden">
                {/* Left Section */}
                <div className="w-full lg:w-1/3 bg-gradient-to-b from-green-200 to-green-400 p-8 flex flex-col justify-between">
                    {/* Countdown Timer */}
                    <div>
                        <h2 className="text-lg font-bold mb-4 text-center">Your Test Will Be Live in</h2>
                        <div className="bg-black text-white text-center rounded-lg shadow-xl p-6 mb-8">
                            <div className="flex gap-2 justify-center space-x-2 text-2xl font-bold">
                                <div className='flex flex-col'>
                                    <div>{String(timeLeft.hours).padStart(2, '0')}</div>
                                    <div className="text-sm">Hours</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div>{String(timeLeft.minutes).padStart(2, '0')}</div>
                                    <div className="text-sm">Minutes</div>
                                </div>
                                <div className='flex flex-col'>
                                    <div>{String(timeLeft.seconds).padStart(2, '0')}</div>
                                    <div className="text-sm">Seconds</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="text-center text-black">
                        <img src="/images/Hopingminds.png" alt="Hoping Minds Logo" className="w-24 mx-auto mb-4" />
                        <h3 className="text-lg font-bold mb-4">Contact Us For Support</h3>
                        <p className="text-md font-light mb-2">support@hopingminds.com</p>
                        <p className="text-md font-light">+91 7447723467, 3562563553</p>
                    </div>
                </div>

                {/* Right Section with Instructions */}
                <div className="w-full lg:w-2/3 p-8 flex flex-col justify-between">
                    <div>
                        <h1 className="text-2xl font-bold mb-4">Instructions Before Doing The Test</h1>

                        {/* Scrollable instructions content */}
                        <div className="h-[400px] overflow-y-auto mb-4 pr-4">
                            <h2 className="text-xl font-semibold mb-2">Online Test Instructions for AI-Proctored PAP Test</h2>

                            <h3 className="text-lg font-semibold mt-4 mb-2">Getting Ready:</h3>
                            <ul className="list-disc pl-5 mb-4">
                                <li>Ensure you have a working webcam and microphone connected to your computer.</li>
                                <li>Find a quiet, well-lit room with a clean desk/table to take the test.</li>
                                <li>Close all other programs and browsers before starting the test.</li>
                            </ul>

                            <h3 className="text-lg font-semibold mt-4 mb-2">Launching the Test:</h3>
                            <ol className="list-decimal pl-5 mb-4">
                                <li>Log into the test portal using the provided credentials.</li>
                                <li>Follow the instructions to launch the AI proctoring software</li>
                            </ol>

                            <h3 className="text-lg font-semibold mt-4 mb-2">During the Test:</h3>
                            <ol className="list-decimal pl-5 mb-4">
                                <li>The AI proctor will continuously monitor you via webcam and microphone.</li>
                                <li>Do not leave the testing area or have unauthorized materials/devices nearby.</li>
                                <li>The AI will flag any suspicious behaviour for review</li>
                            </ol>

                            <h3 className="text-lg font-semibold mt-4 mb-2">Alerts:</h3>
                            <ul className="list-disc pl-5 mb-4">
                                <li><strong>3 Times Alert:</strong> If you leave the testing area or look away from the screen for an extended period, you will receive an alert.</li>
                                <li><strong>2 Person Alert:</strong> If the AI detects a second person in the testing area, you will receive an alert.</li>
                                <li><strong>Tab Change Alert:</strong> If you switch tabs or windows during the test, you will receive an alert.</li>
                                <li><strong>New Window Alert:</strong> If you open a new window during the test, you will receive an alert.</li>
                                <li><strong>Block User Alert:</strong> After 3 alerts for leaving the testing area or looking away, you will be blocked from continuing the test.</li>
                            </ul>

                            <h3 className="text-lg font-semibold mt-4 mb-2">Submitting the Test:</h3>
                            <ol className="list-decimal pl-5 mb-4">
                                <li>Once complete, click "Submit Test" and follow any additional instructions.</li>
                                <li>The AI proctor recording will be reviewed to ensure test integrity.</li>
                            </ol>
                        </div>

                        {/* Checkbox for agreement */}
                        <div className="flex items-center mb-4">
                            <input
                                type="checkbox"
                                id="agreement"
                                className="mr-2 h-4 w-4 text-green-500 focus:ring-green-400 border-gray-300 rounded"
                                checked={isChecked}
                                onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <label htmlFor="agreement" className="text-sm text-gray-700">
                                I declare that I have read and understood the instructions, and I agree to abide by the rules.
                            </label>
                        </div>
                    </div>

                    {/* Button */}
                    <button
                        className={`w-full py-3 rounded-lg text-white font-bold ${isChecked ? 'bg-green-500 hover:bg-green-600' : 'bg-gray-400 cursor-not-allowed'}`}
                        disabled={!isChecked}
                    >
                        Ready To Begin
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Instructions;



