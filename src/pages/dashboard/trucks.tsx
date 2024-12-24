import trucksData from '../../data/truckData';
import { useState } from 'react';

const Trucks = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedModel, setSelectedModel] = useState('');
    const [truckName, setTruckName] = useState('');

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

    const selectedTruck = trucksData.find((truck) => truck.model === selectedModel);

    return (
        <div>
            <div className="flex space-x-3 justify-end">
                <button className='bg-blue-600 hover:bg-blue-700 duration-150 text-white px-4 py-3 rounded-lg font-medium text-sm' onClick={() => setIsModalOpen(true)}>Add Trucks</button>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white rounded-lg shadow-lg p-6 w-[400px]">
                        <h3 className="text-xl font-semibold mb-4">Add New Truck</h3>
                        <form onSubmit={handleAddTruck}>
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

                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Select Truck Model</label>
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

                            {selectedTruck && (
                                <div className="mb-4 flex flex-col items-center">
                                    <img
                                        src={selectedTruck.image}
                                        alt={selectedTruck.model}
                                        className="w-24 h-24 mb-2"
                                    />
                                    <p className="text-sm text-gray-500">{selectedTruck.type} • {selectedTruck.capacity}</p>
                                </div>
                            )}

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

            <div className="grid gap-5 2xl:gap-8 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4 mt-4">
                {trucksData.map((truck) => (
                    <div
                        key={truck.id}
                        className="bg-white px-3 py-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 relative"
                    >
                        {/* Status Tag */}
                        {truck.status === 'active' && (
                            <span className="absolute top-2 right-2 bg-green-100 text-green-500 text-xs font-semibold px-2 py-1 rounded-md">
                                Active
                            </span>
                        )}
                        {/* {truck.status === 'redundant' && (
                            <span className="absolute top-2 right-2 bg-red-100 text-red-500 text-xs font-semibold px-2 py-1 rounded-md">
                                Redundant
                            </span>
                        )} */}

                        {/* Truck Image */}
                        <img src={truck.image} alt={`${truck.type} image`} className="w-full h-40 object-cover rounded-lg mb-4 mt-4" />

                        {/* Truck Details */}
                        <h3 className="text-2xl font-semibold text-black">{truck.model}</h3>
                        <p className="text-gray-500 font-medium text-md">
                            {truck.type} • {truck.capacity}
                        </p>

                        {/* Location for Active Trucks */}
                        {truck.status === 'active' && (
                            <p className="mt-2 text-sm font-medium text-gray-600">
                                Current Location: <span className="text-black">{truck.location}</span>
                            </p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Trucks;