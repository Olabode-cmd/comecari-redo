import driversData from '../../data/driversData.json';
import { FaChevronRight } from "react-icons/fa";
import { SetStateAction, useState } from 'react';
import DriverDetails from '../../components/DriverDetails';
import Modal from '../../components/ui/Modal';
import { useFormik } from 'formik';
import { addDriverSchema } from '../../validation/schemas';

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
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);

    const addDriverFormik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
        },
        validationSchema: addDriverSchema,
        onSubmit: (values) => {
            console.log('Driver Added:', values);
            setIsAddModalOpen(false);
            addDriverFormik.resetForm();
        },
    });

    const openModal = (driver: SetStateAction<Driver | null>) => {
        setSelectedDriver(driver);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setSelectedDriver(null);
        setIsModalOpen(false);
    };

    const openAddModal = () => setIsAddModalOpen(true);
    const closeAddModal = () => {
        setIsAddModalOpen(false);
        addDriverFormik.resetForm();
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
                        {/* Details section */}
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
                            </div>
                        </div>

                        {/* Recent trips section */}
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
                        <form onSubmit={addDriverFormik.handleSubmit} className="space-y-4">
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
                                    {...addDriverFormik.getFieldProps('name')}
                                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                                        addDriverFormik.touched.name && addDriverFormik.errors.name
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                {addDriverFormik.touched.name && addDriverFormik.errors.name && (
                                    <div className="text-red-500 text-sm mt-1">{addDriverFormik.errors.name}</div>
                                )}
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
                                    {...addDriverFormik.getFieldProps('email')}
                                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                                        addDriverFormik.touched.email && addDriverFormik.errors.email
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                {addDriverFormik.touched.email && addDriverFormik.errors.email && (
                                    <div className="text-red-500 text-sm mt-1">{addDriverFormik.errors.email}</div>
                                )}
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
                                    {...addDriverFormik.getFieldProps('phone')}
                                    className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm ${
                                        addDriverFormik.touched.phone && addDriverFormik.errors.phone
                                            ? 'border-red-500'
                                            : 'border-gray-300'
                                    }`}
                                />
                                {addDriverFormik.touched.phone && addDriverFormik.errors.phone && (
                                    <div className="text-red-500 text-sm mt-1">{addDriverFormik.errors.phone}</div>
                                )}
                            </div>

                            <div className="flex justify-end space-x-3">
                                <button
                                    type="button"
                                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
                                    onClick={() => setIsAddModalOpen(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                                    disabled={!addDriverFormik.isValid || addDriverFormik.isSubmitting}
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