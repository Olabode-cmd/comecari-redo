import bidsData from "../data/bidsData";
// import { Link } from 'react-router-dom';
import { Key, ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const BidsCard = ()=> {
    const limitedData = bidsData.slice(0, 3);

    return (
        <div className="col-span-4 rounded-lg w-full border border-stroke bg-white py-6 px-4 shadow-default dark:border-strokedark dark:bg-boxdark">
            <div className="flex items-center justify-between">
                <h4 className="mb-6 md:text-lg lg:text-xl font-semibold text-black dark:text-white">
                    Active Bids
                </h4>

                {/* <Link to='/'>
                    see 
                </Link> */}
            </div>

            <div>
                <div className="space-y-2">
                    {limitedData.map((bid: { id: Key | null | undefined; route: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; bidAmount: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | ReactPortal | null | undefined; status: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined; vanImage: string | undefined; }) => (
                        <div
                            key={bid.id}
                            className="flex items-end justify-between border-b pb-4 last:border-b-0"
                        >
                            <div>
                                <h4 className="text-md text-black font-medium">{bid.route}</h4>

                                <h4 className="text-gray-4">
                                    You bid:{" "}
                                    <span className="text-black font-semibold">
                                        {bid.bidAmount}
                                    </span>
                                </h4>
                                <div className="flex items-center space-x-3 mt-2">
                                    <p className="text-md font-medium text-gray-4">Status:</p>
                                    <span
                                        className={`px-2 py-1 rounded-md text-sm ${bid.status === "Pending"
                                                ? "text-orange-500 bg-orange-50"
                                                : bid.status === "Accepted"
                                                    ? "text-green-500 bg-green-50"
                                                    : "text-red-500 bg-red-50"
                                            }`}
                                    >
                                        {bid.status}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <img src={bid.vanImage} alt={`Van ${bid.id}`} className="w-[85px]" />

                                <button className="bg-blue-600 hover:bg-blue-700 duration-150 text-white px-3 py-2 text-sm rounded-md mt-2">
                                    View Bids
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default BidsCard;