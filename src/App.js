// App.js
import React from 'react';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';
import LineChart from './components/LineChart';
import Table from './components/Table';
import AssessmentPage from './components/AssessmentPage';
import Student from './components/Student'
import Instructions from './components/Instructions';


const App = () => {
  return (
    <>

      {/* <div className="bg-green-500 min-h-screen p-6">
        <div className="bg-white  shadow-lg max-w-7xl mx-auto p-6">
          <h1 className="text-2xl font-bold mb-6 text-center">Assessment-1 Results</h1>
          <div className="space-y-6">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-semibold">Student Details</h2>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
                Download
              </button>
            </div>
            <Table />
            <div>
              <div className="flex items-center mb-2">
                <img src="/images/Tag.png" alt="Hoping Minds Logo" className="w-[22.62px] h-[22.62px] mr-2" />
                <h2 className="text-lg font-bold text-black"></h2>
              </div>
              <hr className="border-gray-300 mb-4" />
              <BarChart />
            </div>

            <div>
              {/* Image and Text Side by Side */}
      {/* <div className="flex items-center mb-2">
        <img src="/images/Tag.png" alt="Hoping Minds Logo" className="w-[22.62px] h-[22.62px] mr-2" />
        <h2 className="text-lg font-bold text-black">Percentile</h2>
      </div>

      <hr className="border-gray-300 mb-4" />

      {/* PieChart */}
      {/* <PieChart />
    </div > */}

      {/* <div>

        <div className="flex items-center mb-2">
          <img src="/images/Tag.png" alt="Hoping Minds Logo" className="w-[22.62px] h-[22.62px] mr-2" />
          <h2 className="text-lg font-bold text-black">Accuracy</h2>
        </div>
        <hr className="border-gray-300 mb-4 relative " />

        <LineChart />

      </div>
          </div >
        </div >
      </div >
  <div className="App">
    <AssessmentPage />
  </div> */}
      {/* <Student></Student> */}

      {/* <AssessmentPage></AssessmentPage> */}
      <Instructions></Instructions>
    </>
  );
};

export default App;





