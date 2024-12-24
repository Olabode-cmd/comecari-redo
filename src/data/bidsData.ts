// data/bidsData.js
import Van1 from "../images/trucks/van01.png";
import Van2 from "../images/trucks/van02.png";
import Van3 from "../images/trucks/van03.png";
import Van4 from "../images/trucks/van04.png";
import Van5 from "../images/trucks/van05.png";
import Van6 from "../images/trucks/van06.png";
import Van7 from "../images/trucks/van07.png";
import Van8 from "../images/trucks/van08.png";
import Van9 from "../images/trucks/van09.png";

interface Bid {
  id: number;
  route: string;
  bidAmount: string;
  status: 'Pending' | 'Accepted' | 'Closed';
  vanImage: string;
}

const bidsData = [
    { id: 1, route: "Sokoto to Kaduna", bidAmount: "₦75,000", status: "Pending", vanImage: Van1 },
    { id: 2, route: "Abuja to Lagos", bidAmount: "₦120,000", status: "Accepted", vanImage: Van2 },
    { id: 3, route: "Kano to Jos", bidAmount: "₦50,000", status: "Closed", vanImage: Van3 },
    { id: 4, route: "Ibadan to Oshogbo", bidAmount: "₦85,000", status: "Pending", vanImage: Van4 },
    { id: 5, route: "Port Harcourt to Calabar", bidAmount: "₦110,000", status: "Accepted", vanImage: Van5 },
    { id: 6, route: "Enugu to Owerri", bidAmount: "₦95,000", status: "Closed", vanImage: Van6 },
    { id: 7, route: "Benin to Warri", bidAmount: "₦78,000", status: "Pending", vanImage: Van7 },
    { id: 8, route: "Lokoja to Ilorin", bidAmount: "₦65,000", status: "Accepted", vanImage: Van8 },
    { id: 9, route: "Jos to Bauchi", bidAmount: "₦72,000", status: "Closed", vanImage: Van9 },
    { id: 10, route: "Uyo to Aba", bidAmount: "₦68,000", status: "Pending", vanImage: Van1 },
    { id: 11, route: "Calabar to Akure", bidAmount: "₦90,000", status: "Accepted", vanImage: Van2 },
    { id: 12, route: "Zaria to Sokoto", bidAmount: "₦77,000", status: "Closed", vanImage: Van3 },
    { id: 13, route: "Ado-Ekiti to Abeokuta", bidAmount: "₦88,000", status: "Pending", vanImage: Van4 },
    { id: 14, route: "Minna to Kaduna", bidAmount: "₦100,000", status: "Accepted", vanImage: Van5 },
    { id: 15, route: "Gombe to Maiduguri", bidAmount: "₦55,000", status: "Closed", vanImage: Van6 },
];

export default bidsData;