import { MdFilterListAlt, MdMyLocation } from "react-icons/md";
import marketData from "../../data/marketplace";
import { FaLocationDot } from "react-icons/fa6";
import { SetStateAction, useState } from "react";
import Modal from "../../components/ui/Modal";

interface Bid {
    id: string;
    datePosted: string;
    vanImage: any;
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

const Marketplace = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isFilterModalOpen, setIsFilterModalOpen] = useState(false);
    const [selectedBid, setSelectedBid] = useState<Bid | null>(null);

    const openModal = (bid: SetStateAction<Bid | null>) => {
        setSelectedBid(bid);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedBid(null);
    };

    const openFilterModal = ()=> {
        setIsFilterModalOpen(true);
    }
    const closeFilterModal = ()=> {
        setIsFilterModalOpen(false);
    }

    // Apply input

    const [isInputVisible, setIsInputVisible] = useState(false);
    const [newBid, setNewBid] = useState("");

    const toggleInput = () => {
        setIsInputVisible(!isInputVisible);
        if (isInputVisible) setNewBid("");
    };

    return (
        <div>
            <div className="flex items-center justify-between">
                <h3 className="text-lg md:text-xl font-semibold">Marketplace</h3>

                <button onClick={() => openFilterModal()} className="text-white bg-blue-600 hover:bg-blue-700 text-sm font-medium px-4 py-3 rounded-lg flex space-x-2 items-center">
                    <MdFilterListAlt />
                    <span>Filter</span>
                </button>
            </div>

            <Modal isOpen={isFilterModalOpen} onClose={closeFilterModal} title="Filter marketplace" size="sm">
                <form className="space-y-2">
                    <div>
                        <label htmlFor="pickupLocation" className="text-sm font-medium">
                            Enter pickup location
                        </label>
                        <input type="text" id="pickupLocation" className="w-full px-3 py-3 border border-slate-300 rounded-lg text-md font-medium focus:outline-none" />
                    </div>

                    <div>
                        <label htmlFor="deliveryLocation" className="text-sm font-medium">
                            Enter delivery location
                        </label>
                        <input type="text" id="deliveryLocation" className="w-full px-3 py-3 border border-slate-300 rounded-lg text-md font-medium focus:outline-none" />
                    </div>

                    <div>
                        <label htmlFor="bidAmount" className="text-sm font-medium">
                            Enter bid amount
                        </label>
                        <input type="text" id="bidAmount" className="w-full px-3 py-3 border border-slate-300 rounded-lg text-md font-medium focus:outline-none" />
                    </div>

                    <div>
                        <label htmlFor="collection" className="text-sm font-medium">
                            Enter collection
                        </label>
                        <input type="text" id="collection" className="w-full px-3 py-3 border border-slate-300 rounded-lg text-md font-medium focus:outline-none" />
                    </div>

                    <div>
                        <label htmlFor="delivery" className="text-sm font-medium">
                            Enter delivery
                        </label>
                        <input type="text" id="delivery" className="w-full px-3 py-3 border border-slate-300 rounded-lg text-md font-medium focus:outline-none" />
                    </div>

                    <div>
                        <button
                            className="text-white w-full mt-3 bg-blue-600 hover:bg-blue-700 text-sm font-medium px-4 py-3 rounded-lg"
                        >
                            Apply
                        </button>
                    </div>
                </form>
            </Modal>

            <div className="mt-4 grid gap-5 2xl:gap-8 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4">
                {marketData.map((bid) => (
                    <div
                        key={bid.id}
                        className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
                    >
                        <div>
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-black font-semibold text-lg">Shipment number: {bid.id}</p>
                                    <p className="text-gray-500 text-md">Date posted: <span className="font-semibold text-black">{bid.datePosted}</span></p>
                                </div>
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

                        <div className="my-4 space-y-2">
                            <p className="text-black font-medium">
                                <span className="text-gray-400">Collection:</span> {bid.collection}
                            </p>

                            <p className="text-black font-medium">
                                <span className="text-gray-400">Delivery:</span> {bid.delivery}
                            </p>

                            <p className="text-black font-medium">
                                <span className="text-gray-400">Bid amount:</span> ₦{bid.bidAmount}
                            </p>
                        </div>

                        <button
                            className="bg-blue-600 hover:bg-blue-700 duration-150 text-white text-md font-medium py-2 px-4 rounded-md"
                            onClick={() => openModal(bid)}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="" size='lg'>
                {selectedBid && (
                    <div>
                        <div className="flex items-center space-x-3">
                            <h3 className="text-2xl font-semibold text-black">Shipment number: {selectedBid.id}</h3>

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
                                            <h3 className="text-lg font-medium text-black">Truck type:</h3>
                                            <p className="text-md font-medium">{selectedBid.details.truckRequirement.type}</p>
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

                                <hr className="my-4 text-slate-300" />

                                <div>
                                    <h3 className="text-lg font-semibold">Bid</h3>

                                    <div className="mt-2">
                                        <h3 className="text-lg font-medium text-black">Bid amount:</h3>
                                        <p className="text-md font-medium">₦{selectedBid.bidAmount}</p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <h3 className="text-lg font-medium text-black">Cargo photos:</h3>
                                    <div className="grid grid-cols-3 gap-3 mt-3">
                                        {selectedBid.details.cargoPhotos.map((photo, index) => (
                                            <img key={index} src={photo} alt={`Cargo photo ${index + 1}`} className="w-full rounded-lg" />
                                        ))}
                                    </div>
                                </div>

                                <div className="mt-2">
                                    <h3 className="text-lg font-medium text-black">Truck</h3>
                                    <img src={selectedBid.vanImage} alt="van image" className="w-[165px]" />
                                </div>

                                <div className="flex items-center justify-end">
                                    <div className="flex space-x-2 items-center">
                                        {isInputVisible && (
                                            <input
                                                type="text"
                                                value={newBid}
                                                onChange={(e) => setNewBid(e.target.value)}
                                                placeholder="Enter new bid"
                                                className="border border-gray-300 px-3 py-2.5 rounded-lg text-sm focus:outline-none"
                                            />
                                        )}

                                        <button
                                            onClick={toggleInput}
                                            className="text-white bg-slate-500 hover:bg-slate-600 text-sm font-medium px-4 py-3 rounded-lg"
                                        >
                                            {isInputVisible ? "Close" : "Set new bid"}
                                        </button>

                                        <button
                                            className="text-white bg-green-600 hover:bg-green-700 text-sm font-medium px-4 py-3 rounded-lg"
                                            disabled={!newBid && isInputVisible} // Disable if input is visible but empty
                                        >
                                            Apply
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    )
}

export default Marketplace;