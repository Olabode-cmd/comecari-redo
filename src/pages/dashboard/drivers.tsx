import driversData from '../../data/driversData.json';
import { FaChevronRight } from "react-icons/fa";
import { SetStateAction, useState } from 'react';
import DriverDetails from '../../components/DriverDetails';
import Modal from '../../components/ui/Modal';

interface Trip {
    route: string;
    collectionDate: string;
    deliveryDate: string;
}

interface Driver {
    id: number;
    name: string;
    photo: string;
    deliveries: number;
    rating: number;
    totalDrivingHours: number;
    lastActive: string;
    email: string;
    mobile: string;
    recentTrips: Trip[];
}


const Drivers = () => {
    const [selectedDriver, setSelectedDriver] = useState<Driver | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = (driver: SetStateAction<Driver | null>) => {
        setSelectedDriver(driver);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedDriver(null);
        setIsModalOpen(false);
    };

    // Form for Adding Drivers

    const [isAddModalOpen, setIsAddModalOpen] = useState(false); // Updated state name
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const openAddModal = () => setIsAddModalOpen(true); // Updated function name
    const closeAddModal = () => {
        setIsAddModalOpen(false); // Updated function name
        setFormData({ name: "", email: "", phone: "" }); // Reset form
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Driver Added:", formData);
        closeAddModal(); // Updated function call
    };
    return (
        <div>
            <div className="flex space-x-3 justify-end">
                <button
                    className="bg-blue-600 hover:bg-blue-700 duration-150 text-white px-4 py-3 rounded-lg font-medium text-sm"
                    onClick={openAddModal}
                >
                    Add Drivers
                </button>
            </div>

            <div className="grid gap-4 2xl:gap-8 grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-4">
                <DriverDetails primaryColor={'text-green-600'} value={13} title='Active Drivers' />
                <DriverDetails primaryColor={'text-red-600'} value={5} title='Redundant Drivers' />
                <DriverDetails primaryColor={'text-gray-800'} value={18} title='Total Drivers' />
                <DriverDetails primaryColor={'text-green-300'} value={2} title='Currently on Shipment' />
            </div>

            <div className="my-4">
                <h3 className="text-base lg:text-xl font-medium text-black">All Drivers</h3>

                <div className="grid gap-5 2xl:gap-8 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 mt-4">
                    {driversData.map((driver) => (
                        <div
                            key={driver.id}
                            className="flex items-center bg-white shadow-md p-4 rounded-lg cursor-pointer hover:shadow-lg transition duration-150"
                            onClick={() => openModal(driver)}
                        >
                            <img
                                src={driver.photo}
                                alt={driver.name}
                                className="w-12 h-12 rounded-full"
                            />
                            <div className="ml-4 flex-grow">
                                <h3 className="text-sm font-medium text-black">{driver.name}</h3>
                                <p className="text-xs text-gray-500">
                                    Last Active: {driver.lastActive}
                                </p>
                            </div>
                            <FaChevronRight className="text-gray-400" />
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="Driver Details" size='lg'>
                {selectedDriver && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            {/* <h1 className="text-gray-300 font-semibold text-black text-md lg:text-xl mb-4">Drivers Details</h1> */}
                            <div>
                                <div>

                                    <div>
                                        <img
                                            src={selectedDriver.photo}
                                            alt={selectedDriver.name}
                                            className="w-[140px] rounded-full mx-auto my-4"
                                        />
                                        <h2 className="text-lg font-semibold text-black text-center mb-4">
                                            {selectedDriver.name}
                                        </h2>
                                    </div>

                                    <hr className='bg-gray-300' />

                                    <div className="flex items-center justify-between py-4">
                                        <div className="text-center">
                                            <h3 className="text-2xl font-semibold">{selectedDriver.deliveries}</h3>
                                            <p className="text-md font-medium text-gray-300">Deliveries</p>
                                        </div>


                                        <div className="text-center">
                                            <h3 className="text-2xl font-semibold">⭐ {selectedDriver.rating}</h3>
                                            <p className="text-md font-medium text-gray-300">Star ratings</p>
                                        </div>


                                        <div className="text-center">
                                            <h3 className="text-2xl font-semibold">{selectedDriver.totalDrivingHours}</h3>
                                            <p className="text-md font-medium text-gray-300">Driving hours</p>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <h3 className="text-xl font-semibold">Details</h3>

                                        <div className="my-4 space-y-3">

                                            <p className="text-md text-gray-600">
                                                <strong>Email:</strong> {selectedDriver.email}
                                            </p>
                                            <p className="text-md text-gray-600">
                                                <strong>Mobile:</strong> {selectedDriver.mobile}
                                            </p>
                                            <p className="text-md text-gray-600">
                                                <strong>Last Active:</strong> {selectedDriver.lastActive}
                                            </p>
                                        </div>
                                    </div>

                                    {/* <div className="flex justify-end">
                                        <button
                                            className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                                            onClick={closeModal}
                                        >
                                            Close
                                        </button>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className="text-gray-300 font-semibold text-black text-md lg:text-xl mb-4">Recent Trips</h1>

                            <div className="space-y-3">
                                {selectedDriver.recentTrips.map((trip, index) => (
                                    <div
                                        key={index}
                                        className="bg-gray-2 rounded-lg px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center"
                                    >
                                        <div className="text-base font-medium text-gray-700">{trip.route}</div>

                                        <div>
                                            <p className="font-medium text-sm">Collection: {trip.collectionDate}</p>
                                            <p className="font-medium text-sm mt-1">Delivery: {trip.deliveryDate}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            {/* {isModalOpen && selectedDriver && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex py-8 justify-center z-50"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-lg p-6 w-[95%] md:w-[85%] lg:w-[70%] relative"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <h1 className="text-gray-300 font-semibold text-black text-md lg:text-xl mb-4">Drivers Details</h1>
                                <div>
                                    <div>

                                        <div>
                                            <img
                                                src={selectedDriver.photo}
                                                alt={selectedDriver.name}
                                                className="w-[140px] rounded-full mx-auto my-4"
                                            />
                                            <h2 className="text-lg font-semibold text-black text-center mb-4">
                                                {selectedDriver.name}
                                            </h2>
                                        </div>

                                        <hr className='bg-gray-300' />

                                        <div className="flex items-center justify-between py-4">
                                            <div className="text-center">
                                                <h3 className="text-2xl font-semibold">{selectedDriver.deliveries}</h3>
                                                <p className="text-md font-medium text-gray-300">Deliveries</p>
                                            </div>


                                            <div className="text-center">
                                                <h3 className="text-2xl font-semibold">⭐ {selectedDriver.rating}</h3>
                                                <p className="text-md font-medium text-gray-300">Star ratings</p>
                                            </div>


                                            <div className="text-center">
                                                <h3 className="text-2xl font-semibold">{selectedDriver.totalDrivingHours}</h3>
                                                <p className="text-md font-medium text-gray-300">Driving hours</p>
                                            </div>
                                        </div>

                                        <div className="mt-4">
                                            <h3 className="text-xl font-semibold">Details</h3>

                                            <div className="my-4 space-y-3">

                                                <p className="text-md text-gray-600">
                                                    <strong>Email:</strong> {selectedDriver.email}
                                                </p>
                                                <p className="text-md text-gray-600">
                                                    <strong>Mobile:</strong> {selectedDriver.mobile}
                                                </p>
                                                <p className="text-md text-gray-600">
                                                    <strong>Last Active:</strong> {selectedDriver.lastActive}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="flex justify-end">
                                            <button
                                                className="bg-red-500 text-white px-4 py-2 rounded-md mt-4"
                                                onClick={closeModal}
                                            >
                                                Close
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h1 className="text-gray-300 font-semibold text-black text-md lg:text-xl mb-4">Recent Trips</h1>

                                <div className="space-y-3">
                                    {selectedDriver.recentTrips.map((trip, index) => (
                                        <div
                                            key={index}
                                            className="bg-gray-2 rounded-lg px-4 py-3 flex flex-col sm:flex-row sm:justify-between sm:items-center"
                                        >
                                            <div className="text-base font-medium text-gray-700">{trip.route}</div>

                                            <div>
                                                <p className="font-medium text-sm">Collection: {trip.collectionDate}</p>
                                                <p className="font-medium text-sm mt-1">Delivery: {trip.deliveryDate}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            )} */}

            {/* Modal */}
            {isAddModalOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                    onClick={closeAddModal}
                >
                    <div
                        className="bg-white rounded-lg p-6 w-full max-w-md"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-lg font-semibold text-black mb-4">
                            Add New Driver
                        </h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div>
                                <label
                                    htmlFor="phone"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Phone
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    required
                                />
                            </div>
                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                                    onClick={closeAddModal}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                >
                                    Add Driver
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Drivers;