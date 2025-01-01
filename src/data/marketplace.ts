// data/bidsData.js
import Van1 from '../images/trucks/van01.png';
import Van2 from '../images/trucks/van02.png';
import Van3 from '../images/trucks/van03.png';
import Van4 from '../images/trucks/van04.png';
import Van5 from '../images/trucks/van05.png';

const marketData = [
  {
    id: 'job011001',
    datePosted: '18 Apr 2022',
    vanImage: Van1,
    bidAmount: '120,000',
    youBid: '150,000',
    status: 'pending',
    pickupLocation: 'Ikeja, Lagos',
    deliveryLocation: 'Port Harcourt',
    collection: '24th Jan, 2024',
    delivery: '26th Jan, 2024',
    details: {
      jobDescription: 'Deliver office supplies to the Abuja branch.',
      additionalComments:
        'Handle with care. Delivery must be made before 5 PM.',
      price: 25000,
      cargoPhotos: [
        'https://via.placeholder.com/150?text=Parcel+1',
        'https://via.placeholder.com/150?text=Parcel+2',
      ],
      dimensions: {
        length: '50cm',
        width: '30cm',
        height: '40cm',
        weight: '20kg',
      },
      jobPoster: {
        name: 'John Smith',
        profilePhoto: 'https://randomuser.me/api/portraits/men/2.jpg',
      },
      truckRequirement: {
        type: 'Medium Van',
      },
    },
  },
  {
    id: 'job011002',
    datePosted: '18 Apr 2022',
    vanImage: Van2,
    bidAmount: '220,000',
    youBid: '240,000',
    status: 'closed',
    pickupLocation: 'Ikeja, Lagos',
    deliveryLocation: 'Abuja',
    collection: '24th Jan, 2024',
    delivery: '26th Jan, 2024',
    details: {
      jobDescription: 'Transport medical equipment to Abuja hospital.',
      additionalComments: 'Ensure the items are not exposed to moisture.',
      price: 40000,
      cargoPhotos: [
        'https://via.placeholder.com/150?text=Parcel+1',
        'https://via.placeholder.com/150?text=Parcel+2',
      ],
      dimensions: {
        length: '120cm',
        width: '80cm',
        height: '100cm',
        weight: '75kg',
      },
      jobPoster: {
        name: 'Jane Doe',
        profilePhoto: 'https://via.placeholder.com/100?text=Profile',
      },
      truckRequirement: {
        type: 'Heavy Truck',
      },
    },
  },
  {
    id: 'job011003',
    datePosted: '20 May 2021',
    vanImage: Van3,
    bidAmount: '300,000',
    youBid: '350,000',
    status: 'pending',
    pickupLocation: 'Ikeja, Lagos',
    deliveryLocation: 'Port Harcourt',
    collection: '24th Jan, 2024',
    delivery: '26th Jan, 2024',
    details: {
      jobDescription: 'Deliver construction materials to a project site.',
      additionalComments: 'Load should be evenly distributed to avoid tipping.',
      price: 50000,
      cargoPhotos: [
        'https://via.placeholder.com/150?text=Parcel+1',
        'https://via.placeholder.com/150?text=Parcel+2',
      ],
      dimensions: {
        length: '200cm',
        width: '100cm',
        height: '150cm',
        weight: '150kg',
      },
      jobPoster: {
        name: 'Michael Scott',
        profilePhoto: 'https://via.placeholder.com/100?text=Profile',
      },
      truckRequirement: {
        type: 'Flatbed Truck',
      },
    },
  },
  {
    id: 'job011004',
    datePosted: '12 Jul 2021',
    vanImage: Van4,
    bidAmount: '620,000',
    youBid: '650,000',
    status: 'pending',
    pickupLocation: 'Ikeja, Lagos',
    deliveryLocation: 'Port Harcourt',
    collection: '24th Jan, 2024',
    delivery: '26th Jan, 2024',
    details: {
      jobDescription: 'Transport electronic appliances for a retail store.',
      additionalComments: 'Fragile items, avoid stacking other items on top.',
      price: 30000,
      cargoPhotos: [
        'https://via.placeholder.com/150?text=Parcel+1',
        'https://via.placeholder.com/150?text=Parcel+2',
      ],
      dimensions: {
        length: '100cm',
        width: '50cm',
        height: '60cm',
        weight: '40kg',
      },
      jobPoster: {
        name: 'Pam Beesly',
        profilePhoto: 'https://via.placeholder.com/100?text=Profile',
      },
      truckRequirement: {
        type: 'Box Truck',
      },
    },
  },
  {
    id: 'job011005',
    datePosted: '15 Aug 2022',
    vanImage: Van5,
    bidAmount: '180,000',
    youBid: '200,000',
    status: 'closed',
    pickupLocation: 'Ikeja, Lagos',
    deliveryLocation: 'Abuja',
    collection: '24th Jan, 2024',
    delivery: '26th Jan, 2024',
    details: {
      jobDescription: 'Transport event materials for a conference.',
      additionalComments: 'Delivery should be made early in the morning.',
      price: 35000,
      cargoPhotos: [
        'https://via.placeholder.com/150?text=Parcel+1',
        'https://via.placeholder.com/150?text=Parcel+2',
      ],
      dimensions: {
        length: '70cm',
        width: '50cm',
        height: '40cm',
        weight: '25kg',
      },
      jobPoster: {
        name: 'Angela Martin',
        profilePhoto: 'https://via.placeholder.com/100?text=Profile',
      },
      truckRequirement: {
        type: 'Pickup Truck',
      },
    },
  },
];

export default marketData;