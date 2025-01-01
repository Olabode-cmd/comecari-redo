import { FaLocationDot } from 'react-icons/fa6';
import bidsData from '../../data/bids';
import { MdMyLocation } from 'react-icons/md';
import { SetStateAction, useState } from 'react';
import Modal from '../../components/ui/Modal';

interface Bid {
    id: string;
    datePosted: string;
    status: string;
    pickupLocation: string;
    deliveryLocation: string;
    bidAmount: string;
    youBid: string;
    collection: string;
    delivery: string;
    details: {
        jobDescription: string;
        additionalComments: string;
        price: number;
        cargoPhotos: string[];
        dimensions: {
            length: string;
            width: string;
            height: string;
            weight: string;
        };
        jobPoster: {
            name: string;
            profilePhoto: string;
        };
        truckRequirement: {
            type: string;
        };
    };
}

const Bids = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBid, setSelectedBid] = useState<Bid | null>(null);

    const openModal = (bid: SetStateAction<Bid | null>) => {
        setSelectedBid(bid);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBid(null);
    };

    return (
        <div>
            <h3 className="text-lg md:text-xl font-semibold">Bids</h3>

            <div className="mt-4 grid gap-5 2xl:gap-8 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4">
                {bidsData.map((bid) => (
                    <div
                        key={bid.id}
                        className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-gray-500 text-sm">{bid.id}</p>
                                    <p className="text-gray-500 text-md">Date posted: <span className="font-semibold text-black">{bid.datePosted}</span></p>
                                </div>

                                <span
                                    className={`px-2 py-1 capitalize rounded-md text-sm font-semibold 
    ${bid.status === "pending"
                                            ? "text-yellow-600 bg-yellow-100"
                                            : bid.status === "in transit"
                                                ? "text-green-600 bg-green-100"
                                                : bid.status === "closed"
                                                    ? "text-red-600 bg-red-100"
                                                    : "text-gray-600 bg-gray-100"
                                        }`}
                                >
                                    {bid.status}
                                </span>
                            </div>

                            <div className="mt-4">
                                <div className="flex items-center space-x-3">
                                    <FaLocationDot />
                                    <p className="text-black text-md font-semibold">
                                        {bid.pickupLocation}
                                    </p>
                                </div>
                                <p className="text-black my-1 text-sm">to</p>
                                <div className="flex items-center space-x-3">
                                    <MdMyLocation />
                                    <p className="text-black text-md font-semibold">
                                        {bid.deliveryLocation}
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* <div className="mt-6">
                            <p className="text-gray-500 text-sm">Driver</p>
                            <p className="text-black font-medium">{bid.driver.name}</p>
                        </div> */}

                        <div className="my-4 space-y-2">
                            <p className="text-black font-medium">
                                <span className="text-gray-400">Collection:</span> {bid.collection}
                            </p>

                            <p className="text-black font-medium">
                                <span className="text-gray-400">Delivery:</span> {bid.delivery}
                            </p>
                        </div>

                        <hr />

                        <div className="my-4 space-y-2">
                            <p className="text-black font-medium">
                                <span className="text-gray-400">Bid amount:</span> ₦{bid.bidAmount}
                            </p>

                            <p className="text-black font-medium">
                                <span className="text-gray-400">You Bid:</span> ₦{bid.youBid}
                            </p>
                        </div>


                        <button
                            className="bg-blue-600 hover:bg-blue-700 duration-150 text-white text-md font-medium py-2 px-4 rounded-md"
                            onClick={() => openModal(bid)}
                        >
                            Bid Details
                        </button>
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="" size='lg'>
                {selectedBid && (
                    <div>
                        <div className="flex items-center space-x-3">
                            <h3 className="text-2xl font-semibold text-black">Bid Number: {selectedBid.id}</h3>
                            <span
                                className={`px-2 py-1 capitalize rounded-md text-sm font-semibold 
                                ${selectedBid.status === "pending"
                                        ? "text-yellow-600 bg-yellow-100"
                                        : selectedBid.status === "in transit"
                                            ? "text-green-600 bg-green-100"
                                            : selectedBid.status === "closed"
                                                ? "text-red-600 bg-red-100"
                                                : "text-gray-600 bg-gray-100"
                                    }`}
                            >
                                {selectedBid.status}
                            </span>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-4">
                            <div>
                                <div className="grid grid-cols-2 gap-2">
                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-medium text-black">Collection date:</h3>
                                            <p className="text-md font-medium">{selectedBid.collection}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium text-black">Delivery date:</h3>
                                            <p className="text-md font-medium">{selectedBid.delivery}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium text-black">Bid amount:</h3>
                                            <p className="text-md font-medium">₦{selectedBid.bidAmount}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium text-black">Your Bid:</h3>
                                            <p className="text-md font-medium">₦{selectedBid.youBid}</p>
                                        </div>
                                    </div>

                                    <div className="space-y-4">
                                        <div>
                                            <h3 className="text-lg font-medium text-black">Pickup Location:</h3>
                                            <p className="text-md font-medium">{selectedBid.pickupLocation}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium text-black">Delivery Location:</h3>
                                            <p className="text-md font-medium">{selectedBid.deliveryLocation}</p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium text-black">Dimensions:</h3>
                                            <p className="text-md"><span className="font-medium">{selectedBid.details.dimensions.length} x {selectedBid.details.dimensions.width} x {selectedBid.details.dimensions.height}</span></p>
                                        </div>

                                        <div>
                                            <h3 className="text-lg font-medium text-black">Truck Requirements:</h3>
                                            <p className="text-md font-medium">{selectedBid.details.truckRequirement.type}</p>
                                        </div>

                                    </div>
                                </div>

                                <hr className='my-4 text-slate-300' />

                                <div>
                                    <div>
                                        <h3 className="text-lg font-medium text-black">Job Poster:</h3>

                                        <div className="flex items-center space-x-3 mt-2">
                                            <img src={selectedBid.details.jobPoster.profilePhoto} alt="profile photo" className="w-10 h-10 rounded-full" />
                                            <p className="text-slate-700 text-md font-medium">{selectedBid.details.jobPoster.name}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h3 className="text-lg font-medium text-black">Cargo photos:</h3>
                                <div className="grid grid-cols-3 gap-3 mt-3">
                                    {selectedBid.details.cargoPhotos.map((photo, index) => (
                                        <img key={index} src={photo} alt={`Cargo photo ${index + 1}`} className="w-full rounded-lg" />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Bids;