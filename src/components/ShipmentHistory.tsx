// import BrandOne from '../images/brand/brand-01.svg';
// import BrandTwo from '../images/brand/brand-02.svg';
// import BrandThree from '../images/brand/brand-03.svg';
// import BrandFour from '../images/brand/brand-04.svg';
// import BrandFive from '../images/brand/brand-05.svg';

import { useState } from 'react';
import shipmentHistory from '../data/shipmentData.json';

// const shipmentHistory = Array.from({ length: 20 }, (_, index) => ({
//   id: index + 1,
//   name: `Driver ${index + 1}`,
//   vehicle: `Truck ${index + 1}`,
//   vehicleId: `TRK${1000 + index}`,
//   pickup: `Location ${index + 1}`,
//   destination: `Destination ${index + 1}`,
//   payment: `$${(Math.random() * 1000).toFixed(2)}`,
// }));

const TableOne = () => {
  const limitedData = shipmentHistory.slice(0, 10);

  
  return (
    <div className="rounded-lg  border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5 xl:pb-1">
      <h4 className="mb-6 text-xl font-semibold text-black dark:text-white">
        Shipment History
      </h4>

      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-slate-800 text-white dark:bg-meta-4">
            <th className="p-2.5 text-left text-sm font-medium uppercase xsm:text-base">
              Name
            </th>
            <th className="p-2.5 text-left text-sm font-medium uppercase xsm:text-base">
              Vehicle
            </th>
            <th className="p-2.5 text-left text-sm font-medium uppercase xsm:text-base">
              Vehicle ID
            </th>
            <th className="p-2.5 text-left text-sm font-medium uppercase xsm:text-base">
              Pickup
            </th>
            <th className="p-2.5 text-left text-sm font-medium uppercase xsm:text-base">
              Destination
            </th>
            <th className="p-2.5 text-left text-sm font-medium uppercase xsm:text-base">
              Payment
            </th>
            <th className="p-2.5 text-left text-sm font-medium uppercase xsm:text-base">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {limitedData.map((entry, index) => (
            <tr
              key={entry.id}
              className={`border-stroke text-sm font-medium dark:border-strokedark ${index % 2 === 0 ? 'bg-gray-50' : 'bg-blue-50'}`}
            >
              <td className="p-2.5 text-black dark:text-white">
                {entry.name}
              </td>
              <td className="p-2.5 text-black dark:text-white">
                {entry.vehicle}
              </td>
              <td className="p-2.5 text-black dark:text-white">
                {entry.vehicleId}
              </td>
              <td className="p-2.5 text-black dark:text-white">
                {entry.pickup}
              </td>
              <td className="p-2.5 text-black dark:text-white">
                {entry.destination}
              </td>
              <td className="p-2.5 text-meta-3">{entry.payment}</td>
              <td className="p-2.5 text-blue-500 cursor-pointer">View</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <button
          className="px-4 py-2 my-5 text-sm font-medium text-white bg-primary rounded-sm hover:bg-blue-600"
          // onClick={() => alert("Navigate to full Shipment page")}
        >
          See More
        </button>
      </div>
    </div>
  );
};

export default TableOne;
