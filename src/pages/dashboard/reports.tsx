import { useState } from 'react';
import Breadcrumb from '../../components/Breadcrumb';
import ChartOne from '../../components/ChartOne';
import ChartTwo from '../../components/ChartTwo';
import ChartThree from '../../components/ChartThree';
import ChartFour from '../../components/ChartFour';

const Reports = () => {
  return (
    <>
      <Breadcrumb pageName="Analytics Reports" />
      <div className="grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5">
        {/* Monthly Shipment Volume Trends */}
        <div className="col-span-12">
            <ChartFour />
        </div>

        {/* Bid Success & Revenue Analysis */}
        <div className="col-span-12 xl:col-span-8">
          <div className="rounded-sm border border-stroke bg-white px-5 pt-6 pb-2.5 shadow-default dark:border-strokedark dark:bg-boxdark sm:px-7.5">
            <h3 className="text-xl font-semibold text-black dark:text-white mb-4">
              Bid Success & Revenue Trends
            </h3>
            <ChartOne />
          </div>
        </div>

        {/* Weekly Delivery Performance */}
        <div className="col-span-12 xl:col-span-4">
            <ChartTwo />
        </div>

        {/* Delivery Status Distribution */}
        <div className="col-span-12">
            <ChartThree />
        </div>
      </div>
    </>
  );
};

export default Reports;