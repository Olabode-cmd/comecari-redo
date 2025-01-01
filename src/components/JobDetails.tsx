import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from "react";
import { FaTruck } from "react-icons/fa";

const JobDetails = (props: { primaryColor: any; value: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; title: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; }) => {
  return (
    <div className="rounded-lg border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark">
      <div className="flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4">
        <FaTruck className={`${props.primaryColor} dark:text-white w-6 h-6`} />
      </div>

      <div className="mt-4 flex items-end justify-between">
        <div>
          <h4 className="text-title-md font-bold text-black dark:text-white">
            {props.value}
          </h4>
          <span className="text-sm font-medium">{props.title}</span>
        </div>
      </div>
    </div>
  );
};

export default JobDetails;