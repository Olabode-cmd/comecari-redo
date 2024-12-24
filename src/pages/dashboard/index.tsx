import WalletBalance from '../../components/WalletBalance.tsx';
import DeliveredToday from '../../components/DeliveredToday.tsx';
import TotalShipments from '../../components/TotalShipments.tsx';
import DeliveredThisMonth from '../../components/DeliveredThisMonth.tsx';
import ChartOne from '../../components/ChartOne.tsx';
// import ChartThree from '../../components/ChartThree.tsx';
// import ChartTwo from '../../components/ChartTwo.tsx';
// import ChatCard from '../../components/ChatCard.tsx';
// import MapOne from '../../components/MapOne.tsx';
import TableOne from '../../components/ShipmentHistory.tsx';
import BidsCard from '../../components/BidsCard.tsx';

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5">
        <WalletBalance />
        <DeliveredToday />
        <DeliveredThisMonth />
        <TotalShipments />
      </div>

      <div className="mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5">
        <ChartOne />
        <BidsCard />
        {/* <ChartThree /> */}
        {/* <MapOne /> */}
        <div className="col-span-12">
          <TableOne />
        </div>
        {/* <ChatCard /> */}
      </div>
    </>
  );
};

export default Dashboard;
