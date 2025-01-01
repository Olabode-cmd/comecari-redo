import { SetStateAction, useState } from "react";
import JobDetails from "../../components/JobDetails";
import jobs from '../../data/jobs.json';
import { FaLocationDot } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import Modal from "../../components/ui/Modal";
import Map from '../../images/maps.png';

interface Job {
    id: string;
    datePosted: string;
    status: string;
    pickupLocation: string;
    deliveryLocation: string;
    driver: {
        name: string;
        photo: string;
    };
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


const Jobs = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    const openModal = (job: SetStateAction<Job | null>) => {
        setSelectedJob(job);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedJob(null);
    };

    // console.log(jobs.details.jobPoster.profilePhoto)

    return (
        <div>
            {/* <h1>Jobs</h1> */}

            <div className="grid gap-4 2xl:gap-8 grid-cols-1 md:grid-cols-3 mt-4">
                <JobDetails primaryColor={'text-green-600'} value={23} title='Completed Orders' />
                <JobDetails primaryColor={'text-blue-300'} value={5} title='Approved (Today)' />
                <JobDetails primaryColor={'text-gray-800'} value={"₦120,500"} title='Revenue this month' />
            </div>

            <div className="mt-6">
                <h3 className="text-lg md:text-xl font-semibold">Active Jobs</h3>

                <div className="mt-4 grid gap-5 2xl:gap-8 grid-cols-1 md:grid-cols-3 2xl:grid-cols-4">
                    {jobs.map((job) => (
                        <div
                            key={job.id}
                            className="bg-white rounded-lg shadow-md p-4 flex flex-col justify-between"
                        >
                            <div>
                                <div className="flex items-center justify-between">
                                    <div>
                                        <p className="text-gray-500 text-sm">{job.id}</p>
                                        <p className="text-gray-500 text-md">Date posted: <span className="font-semibold text-black">{job.datePosted}</span></p>
                                    </div>

                                    <span
                                        className={`px-2 py-1 capitalize rounded-md text-sm font-semibold 
    ${job.status === "pending"
                                                ? "text-yellow-600 bg-yellow-100"
                                                : job.status === "in transit"
                                                    ? "text-green-600 bg-green-100"
                                                    : job.status === "sos"
                                                        ? "text-red-600 bg-red-100"
                                                        : "text-gray-600 bg-gray-100"
                                            }`}
                                    >
                                        {job.status}
                                    </span>
                                </div>

                                <div className="mt-4">
                                    <div className="flex items-center space-x-3">
                                        <FaLocationDot />
                                        <p className="text-black text-md font-semibold">
                                            {job.pickupLocation}
                                        </p>
                                    </div>
                                    <p className="text-black my-1 text-sm">to</p>
                                    <div className="flex items-center space-x-3">
                                        <MdMyLocation />
                                        <p className="text-black text-md font-semibold">
                                            {job.deliveryLocation}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6">
                                <p className="text-gray-500 text-sm">Driver</p>
                                <p className="text-black font-medium">{job.driver.name}</p>
                            </div>

                            <div className="my-4">
                                <p className="text-black font-medium">
                                    <span className="text-gray-400">Description:</span> {job.details.jobDescription}
                                </p>
                            </div>
                            <button
                                className="bg-blue-600 hover:bg-blue-700 duration-150 text-white text-md font-medium py-2 px-4 rounded-md"
                                onClick={() => openModal(job)}
                            >
                                View Details
                            </button>
                        </div>
                    ))}
                </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={closeModal} title="" size='lg'>
                {selectedJob && (
                    <div>
                        <h3 className="text-2xl font-semibold text-black">Shipment Number: {selectedJob.id}</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mt-4">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-lg font-medium text-black">Job description:</h3>
                                    <p className="text-md">{selectedJob.details.jobDescription}</p>
                                </div>

                                <div>
                                    <h3 className="text-lg font-medium text-black">Pickup to Destination:</h3>
                                    <div className="flex items-center space-x-3 mt-2">
                                        <FaLocationDot />
                                        <p className="text-black text-md font-semibold">
                                            {selectedJob.pickupLocation}
                                        </p>
                                    </div>
                                    <p className="text-black my-1 text-sm">to</p>
                                    <div className="flex items-center space-x-3">
                                        <MdMyLocation />
                                        <p className="text-black text-md font-semibold">
                                            {selectedJob.deliveryLocation}
                                        </p>
                                    </div>
                                </div>

                                <p className="text-md font-medium text-black">Price: <span className="font-semibold">₦{selectedJob.details.price}</span> </p>
                                <p className="text-md font-medium text-black">Weight: <span className="font-semibold">{selectedJob.details.dimensions.weight}</span> </p>
                                <p className="text-md font-medium text-black">Dimensions: <span className="font-semibold">{selectedJob.details.dimensions.length} x {selectedJob.details.dimensions.width} x {selectedJob.details.dimensions.height}</span> </p>

                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-black">Job poster:</h3>

                                        <div className="flex items-center space-x-3 mt-2">
                                            <img src={selectedJob.details.jobPoster.profilePhoto} alt="job poster image" className="w-[45px] rounded-full" />

                                            <p className="text-black text-md font-semibold">
                                                {selectedJob.details.jobPoster.name}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-medium text-black">Assigned Driver:</h3>

                                        <div className="flex items-center space-x-3 mt-2">
                                            <img src={selectedJob.driver.photo} alt="job poster image" className="w-[45px] rounded-full" />

                                            <p className="text-black text-md font-semibold">
                                                {selectedJob.driver.name}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div>
                                <h3 className="text-lg font-medium text-black">Location:</h3>
                                <img src={Map} alt="map src" className="rounded-lg mt-3" />
                            </div>
                        </div>
                    </div>
                )}
            </Modal>

            
        </div>
    )
}

export default Jobs;