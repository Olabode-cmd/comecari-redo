import { FaTimes } from 'react-icons/fa';
import trucksData from '../../data/truckData';
import { SetStateAction, useState, useEffect } from 'react';
import TruckDetails from '../../components/TruckDetails';

import Map from '../../images/maps.png';
import Truck1 from '../../images/trucks/truck1.jpg';
import Truck2 from '../../images/trucks/truck2.jpg';
import Truck3 from '../../images/trucks/truck3.jpg';

import CheckboxTwo from '../../components/CheckboxTwo';

interface Truck {
    id: number;
    image: string;
    model: string;
    type: string;
    capacity: string;
    dimensions: {
        length: string;
        breadth: string;
        height: string;
    };
    weightCapacity: string;
    plateNumber: string;
    status: string;
    location?: string;
    assignedDriver: {
        name: string;
        profilePhoto: string;
    };
}


const Trucks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState('');
    const [truckName, setTruckName] = useState('');
    const [isDetailsOpenModal, setIsDetailsOpenModal] = useState(false);
    const [detailedTruck, setDetailedTruck] = useState<Truck | null>(null);

    const handleModelChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedModel(event.target.value);
    };

    const handleAddTruck = (e: React.FormEvent) => {
        e.preventDefault();
        console.log({ truckName, selectedModel });
        setIsModalOpen(false);
        setTruckName('');
        setSelectedModel('');
    };

    const handleTruckClick = (truck: SetStateAction<null>) => {
        setDetailedTruck(truck);
        setIsDetailsOpenModal(true);
    };

    const closeDetailsModal = () => {
        setDetailedTruck(null);
        setIsDetailsOpenModal(false);
    };

    const selectedTruck = trucksData.find((truck) => truck.model === selectedModel);

    // carousel

    const images = [Truck1, Truck2, Truck3];
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevSlide = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextSlide();
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <div className="flex space-x-3 justify-end">
                <button className='bg-blue-600 hover:bg-blue-700 duration-150 text-white px-4 py-3 rounded-lg font-medium text-sm' onClick={() => setIsModalOpen(true)}>Add Trucks</button>
            </div>

            <div className="grid gap-4 2xl:gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4">
                <TruckDetails primaryColor={'text-green-600'} value={13} title='Active Trucks' />
                <TruckDetails primaryColor={'text-red-600'} value={5} title='Redundant Trucks' />
                <TruckDetails primaryColor={'text-gray-800'} value={18} title='Total Trucks' />
                <TruckDetails primaryColor={'text-green-300'} value={2} title='Currently on Shipment' />
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex pt-8 pb-6 justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[95%] md:w-[60%] lg:w-[50%] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <h3 className="text-xl font-semibold mb-4">Add New Truck</h3>
                        <form onSubmit={handleAddTruck}>
                            <div className="grid grid-cols-2 gap-4">
                                {/* Truck Name */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Truck Name</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md text-black"
                                        placeholder="Enter truck name"
                                        value={truckName}
                                        onChange={(e) => setTruckName(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Select Truck Model */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Truck Model</label>
                                    <select
                                        className="w-full px-4 py-2 border rounded-md text-black"
                                        value={selectedModel}
                                        onChange={handleModelChange}
                                        required
                                    >
                                        <option value="" disabled>Select a model</option>
                                        {trucksData.map((truck) => (
                                            <option key={truck.id} value={truck.model}>
                                                {truck.type}
                                            </option>
                                        ))}
                                    </select>
                                </div>

                                {/* Truck Dimensions */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Chases Number</label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-2 border rounded-md text-black"
                                        placeholder="Enter chases"
                                        // value={length}
                                        // onChange={(e) => setLength(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">VIM Number</label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-2 border rounded-md text-black"
                                        placeholder="Enter VIM"
                                        // value={breadth}
                                        // onChange={(e) => setBreadth(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Height (m)</label>
                                    <input
                                        type="number"
                                        className="w-full px-4 py-2 border rounded-md text-black"
                                        placeholder="Enter height"
                                        // value={height}
                                        // onChange={(e) => setHeight(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Weight Capacity */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Weight Capacity (tonnes)</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md text-black"
                                        placeholder="Enter weight capacity"
                                        // value={weightCapacity}
                                        // onChange={(e) => setWeightCapacity(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Plate Number */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Plate Number</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md text-black"
                                        placeholder="Enter plate number"
                                        // value={plateNumber}
                                        // onChange={(e) => setPlateNumber(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Driver License */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Driver's License</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md text-black"
                                        placeholder="Enter driver's license number"
                                        // value={driverLicense}
                                        // onChange={(e) => setDriverLicense(e.target.value)}
                                        required
                                    />
                                </div>

                                {/* Assigned Driver */}
                                <div className="mb-4">
                                    <label className="block text-sm font-medium mb-1">Assigned Driver</label>
                                    <input
                                        type="text"
                                        className="w-full px-4 py-2 border rounded-md text-black"
                                        placeholder="Enter driver name"
                                        // value={assignedDriver}
                                        // onChange={(e) => setAssignedDriver(e.target.value)}
                                        required
                                    />
                                </div>

                                <div className="mb-4 flex items-end">
                                    <CheckboxTwo />
                                </div>
                            </div>

                            {/* Truck Preview */}
                            {selectedTruck && (
                                <div className="mb-4 flex flex-col items-center">
                                    <img
                                        src={selectedTruck.image}
                                        alt={selectedTruck.model}
                                        className="w-24 h-24 mb-2"
                                    />
                                    <p className="text-sm text-gray-500">
                                        {selectedTruck.type} • {selectedTruck.capacity}
                                    </p>
                                </div>
                            )}

                            {/* Form Actions */}
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    className="px-4 py-2 bg-gray-200 hover:bg-gray-300 text-black rounded-md"
                                    onClick={() => setIsModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                                >
                                    Add Truck
                                </button>
                            </div>
                        </form>
                    </div>
                </div>

            )}

            <div className='my-4'>
                <h3 className="text-base lg:text-xl font-medium text-black">All Trucks</h3>

                <div className="grid gap-5 2xl:gap-8 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 mt-4">
                    {trucksData.map((truck) => (
                        <div
                            key={truck.id}
                            className="bg-white hover:bg-gray-50 px-3 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 relative cursor-pointer"
                            onClick={() => handleTruckClick(truck)}
                        >
                            {/* Status Tag */}
                            {truck.status === "active" && (
                                <span className="absolute top-2 right-2 bg-green-100 text-green-500 text-xs font-semibold px-2 py-1 rounded-md">
                                    Active
                                </span>
                            )}

                            {/* Truck Image */}
                            <img
                                src={truck.image}
                                alt={`${truck.type} image`}
                                className="w-full h-40 object-cover rounded-lg mb-4 mt-4"
                            />

                            {/* Truck Details */}
                            <h3 className="text-2xl font-semibold text-black">{truck.model}</h3>
                            <p className="text-gray-500 font-medium text-md">
                                {truck.type} • {truck.capacity}
                            </p>

                            {/* Location for Active Trucks */}
                            {truck.status === "active" && (
                                <p className="mt-2 text-sm font-medium text-gray-600">
                                    Current Location:{" "}
                                    <span className="text-black">{truck.location}</span>
                                </p>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Truck Details */}
            {isDetailsOpenModal && detailedTruck && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex pt-8 pb-8 justify-center z-50 overflow-y-auto">
                    <div className="bg-white relative rounded-lg p-6 w-[90%] overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300">
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
                            onClick={closeDetailsModal}
                        >
                            <FaTimes className='w-5 h-5' />
                        </button>
                        <h2 className="text-2xl font-semibold mb-4">Truck Model: {detailedTruck.model}</h2>

                        <div className="grid gap-4 md:gap-8 grid-cols-1 md:grid-cols-2">
                            <div>
                                <p className="font-medium text-base xl:text-lg text-gray-500 mb-2">
                                    Active Trip
                                </p>

                                <img src={Map} alt="maps img" />
                            </div>

                            <div>
                                <p className="font-medium text-base xl:text-lg text-gray-500 mb-2">Truck Pictures</p>

                                <div className="relative w-full">
                                    {/* Carousel Images */}
                                    <div className="overflow-hidden">
                                        <img
                                            src={images[currentIndex]}
                                            alt={`Truck ${currentIndex + 1}`}
                                            className="w-full h-[325px] object-cover"
                                        />
                                    </div>

                                    {/* Chevron Left */}
                                    <button
                                        onClick={prevSlide}
                                        className="absolute top-1/2 left-3 -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M15.75 19.5L8.25 12l7.5-7.5"
                                            />
                                        </svg>
                                    </button>

                                    {/* Chevron Right */}
                                    <button
                                        onClick={nextSlide}
                                        className="absolute top-1/2 right-3 -translate-y-1/2 bg-gray-100 p-2 rounded-full shadow-md hover:bg-gray-200 transition"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            strokeWidth={2}
                                            stroke="currentColor"
                                            className="w-5 h-5"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M8.25 4.5l7.5 7.5-7.5 7.5"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div>
                                <p className="font-medium text-base xl:text-lg text-gray-500 mb-2">
                                    Truck Details
                                </p>
                                <div className="space-y-3">
                                    <p className="text-gray-600">
                                        <strong>Type:</strong> {detailedTruck.type}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Capacity:</strong> {detailedTruck.capacity}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Dimensions:</strong> {`${detailedTruck.dimensions.length} x ${detailedTruck.dimensions.breadth} x ${detailedTruck.dimensions.height}`}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Weight Capacity:</strong> {detailedTruck.weightCapacity}
                                    </p>
                                    <p className="text-gray-600">
                                        <strong>Plate Number:</strong> {detailedTruck.plateNumber}
                                    </p>
                                    {detailedTruck.status === "active" && (
                                        <p className="text-gray-600">
                                            <strong>Current Location:</strong> {detailedTruck.location}
                                        </p>
                                    )}

                                    <div className="flex items-center mt-4">
                                        <img
                                            src={detailedTruck.assignedDriver.profilePhoto}
                                            alt={`${detailedTruck.assignedDriver.name}'s photo`}
                                            className="w-10 h-10 rounded-full mr-3"
                                        />
                                        <p className="text-gray-600">
                                            <strong>Assigned Driver:</strong> {detailedTruck.assignedDriver.name}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <p className="font-medium text-base xl:text-lg text-gray-500 mb-2">
                                    Recent Trips
                                </p>

                                <div className="space-y-4">
                                    <div className="bg-gray-3 font-medium px-3 py-2.5 rounded-lg flex items-center justify-between">
                                        <p className="text-gray-600 text-black font-semibold">1. Lagos to Sokoto</p>

                                        <div>
                                            <p className="text-sm text-gray-500">Collection: 4th April, 2024</p>
                                            <p className="text-sm text-gray-500">Delivery: 7th April, 2024</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        
                    </div>
                </div>
            )}
        </div>
    )
}

export default Trucks;