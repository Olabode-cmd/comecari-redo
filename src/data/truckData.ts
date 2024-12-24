import Van1 from '../images/trucks/van01.png';
import Van2 from '../images/trucks/van02.png';
import Van3 from '../images/trucks/van03.png';
import Van4 from '../images/trucks/van04.png';
import Van5 from '../images/trucks/van05.png';
import Van6 from '../images/trucks/van06.png';
import Van7 from '../images/trucks/van07.png';
import Van8 from '../images/trucks/van08.png';
import Van9 from '../images/trucks/van09.png';

interface Truck {
  id: number;
  image: string;
  model: string;
  type: string;
  capacity: string;
  status: 'active' | 'redundant';
  location?: string;
}

const trucksData = [
  {
    id: 1,
    image: Van1,
    model: 'TR8899-2901',
    type: 'Flatbed',
    capacity: '80 tonnes',
    dimensions: {
      length: '12m',
      breadth: '2.5m',
      height: '3.5m',
    },
    weightCapacity: '80000 kg',
    plateNumber: 'ABC-1234',
    status: 'active',
    location: 'Lagos',
    assignedDriver: {
      name: 'John Doe',
      profilePhoto: 'https://randomuser.me/api/portraits/men/5.jpg',
    },
  },
  {
    id: 2,
    image: Van2,
    model: 'TR7688-4352',
    type: 'Box Truck',
    capacity: '50 tonnes',
    dimensions: {
      length: '10m',
      breadth: '2.5m',
      height: '3m',
    },
    weightCapacity: '50000 kg',
    plateNumber: 'XYZ-5678',
    status: 'redundant',
    assignedDriver: {
      name: 'Jane Smith',
      profilePhoto: 'https://randomuser.me/api/portraits/women/2.jpg',
    },
  },
  {
    id: 3,
    image: Van3,
    model: 'TR5622-7823',
    type: 'Refrigerated',
    capacity: '30 tonnes',
    dimensions: {
      length: '8m',
      breadth: '2.5m',
      height: '3m',
    },
    weightCapacity: '30000 kg',
    plateNumber: 'KLM-9012',
    status: 'active',
    location: 'Abuja',
    assignedDriver: {
      name: 'Samuel Johnson',
      profilePhoto: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
  {
    id: 4,
    image: Van4,
    model: 'TR3344-2290',
    type: 'Lowboy',
    capacity: '90 tonnes',
    dimensions: {
      length: '15m',
      breadth: '3m',
      height: '2.5m',
    },
    weightCapacity: '90000 kg',
    plateNumber: 'NOP-3456',
    status: 'active',
    location: 'Port Harcourt',
    assignedDriver: {
      name: 'Emily Davis',
      profilePhoto: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 5,
    image: Van5,
    model: 'TR1199-8764',
    type: 'Dump Truck',
    capacity: '60 tonnes',
    dimensions: {
      length: '10m',
      breadth: '3m',
      height: '3m',
    },
    weightCapacity: '60000 kg',
    plateNumber: 'QRS-7890',
    status: 'redundant',
    assignedDriver: {
      name: 'Michael Brown',
      profilePhoto: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  },
  {
    id: 6,
    image: Van6,
    model: 'TR8833-4532',
    type: 'Tanker',
    capacity: '70 tonnes',
    dimensions: {
      length: '12m',
      breadth: '3m',
      height: '3.5m',
    },
    weightCapacity: '70000 kg',
    plateNumber: 'TUV-4321',
    status: 'active',
    location: 'Kano',
    assignedDriver: {
      name: 'Anna Wilson',
      profilePhoto: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
  },
  {
    id: 7,
    image: Van7,
    model: 'TR4455-1203',
    type: 'Car Carrier',
    capacity: '40 tonnes',
    dimensions: {
      length: '20m',
      breadth: '2.5m',
      height: '4m',
    },
    weightCapacity: '40000 kg',
    plateNumber: 'WXY-8765',
    status: 'redundant',
    assignedDriver: {
      name: 'David Clark',
      profilePhoto: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 8,
    image: Van8,
    model: 'TR7722-5431',
    type: 'Logging',
    capacity: '85 tonnes',
    dimensions: {
      length: '15m',
      breadth: '3m',
      height: '3.5m',
    },
    weightCapacity: '85000 kg',
    plateNumber: 'ZAB-3210',
    status: 'active',
    location: 'Kaduna',
    assignedDriver: {
      name: 'Sophia Lewis',
      profilePhoto: 'https://via.placeholder.com/150',
    },
  },
  {
    id: 9,
    image: Van9,
    model: 'TR6644-3987',
    type: 'Concrete Mixer',
    capacity: '35 tonnes',
    dimensions: {
      length: '9m',
      breadth: '2.5m',
      height: '3.5m',
    },
    weightCapacity: '35000 kg',
    plateNumber: 'CDE-6543',
    status: 'redundant',
    assignedDriver: {
      name: 'Matthew Harris',
      profilePhoto: 'https://via.placeholder.com/150',
    },
  },
];


export default trucksData;