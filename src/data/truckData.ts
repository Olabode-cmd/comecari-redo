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
    status: 'active',
    location: 'Lagos',
  },
  {
    id: 2,
    image: Van2,
    model: 'TR7688-4352',
    type: 'Box Truck',
    capacity: '50 tonnes',
    status: 'redundant',
  },
  {
    id: 3,
    image: Van3,
    model: 'TR5622-7823',
    type: 'Refrigerated',
    capacity: '30 tonnes',
    status: 'active',
    location: 'Abuja',
  },
  {
    id: 4,
    image: Van4,
    model: 'TR3344-2290',
    type: 'Lowboy',
    capacity: '90 tonnes',
    status: 'active',
    location: 'Port Harcourt',
  },
  {
    id: 5,
    image: Van5,
    model: 'TR1199-8764',
    type: 'Dump Truck',
    capacity: '60 tonnes',
    status: 'redundant',
  },
  {
    id: 6,
    image: Van6,
    model: 'TR8833-4532',
    type: 'Tanker',
    capacity: '70 tonnes',
    status: 'active',
    location: 'Kano',
  },
  {
    id: 7,
    image: Van7,
    model: 'TR4455-1203',
    type: 'Car Carrier',
    capacity: '40 tonnes',
    status: 'redundant',
  },
  {
    id: 8,
    image: Van8,
    model: 'TR7722-5431',
    type: 'Logging',
    capacity: '85 tonnes',
    status: 'active',
    location: 'Kaduna',
  },
  {
    id: 9,
    image: Van9,
    model: 'TR6644-3987',
    type: 'Concrete Mixer',
    capacity: '35 tonnes',
    status: 'redundant',
  },
];

export default trucksData;