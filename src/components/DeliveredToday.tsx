import { TbTruckDelivery } from "react-icons/tb";

const DeliveredToday = () => {
  return (
    <div className="rounded-lg border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <TbTruckDelivery className="text-primary dark:text-white w-6 h-6" />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            11
          </h4>
          <span className="text-sm font-medium">Delivered today</span>
        </div>
      </div>
    </div>
  );
};

export default DeliveredToday;
