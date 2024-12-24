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
    { id: 1, route: "Kaduna", bidAmount: "₦75,000", status: "Pending", vanImage: Van1 },
    { id: 2, route: "Lagos", bidAmount: "₦120,000", status: "Accepted", vanImage: Van2 },
    { id: 3, route: "Jos", bidAmount: "₦50,000", status: "Closed", vanImage: Van3 },
    { id: 4, route: "Oshogbo", bidAmount: "₦85,000", status: "Pending", vanImage: Van4 },
    { id: 5, route: "Calabar", bidAmount: "₦110,000", status: "Accepted", vanImage: Van5 },
    { id: 6, route: "Owerri", bidAmount: "₦95,000", status: "Closed", vanImage: Van6 },
    { id: 7, route: "Warri", bidAmount: "₦78,000", status: "Pending", vanImage: Van7 },
    { id: 8, route: "Lokoja to Ilorin", bidAmount: "₦65,000", status: "Accepted", vanImage: Van8 },
    { id: 9, route: "Bauchi", bidAmount: "₦72,000", status: "Closed", vanImage: Van9 },
    { id: 10, route: "Aba", bidAmount: "₦68,000", status: "Pending", vanImage: Van1 },
    { id: 11, route: "Akure", bidAmount: "₦90,000", status: "Accepted", vanImage: Van2 },
    { id: 12, route: "Sokoto", bidAmount: "₦77,000", status: "Closed", vanImage: Van3 },
    { id: 13, route: "Abeokuta", bidAmount: "₦88,000", status: "Pending", vanImage: Van4 },
    { id: 14, route: "Kaduna", bidAmount: "₦100,000", status: "Accepted", vanImage: Van5 },
    { id: 15, route: "Maiduguri", bidAmount: "₦55,000", status: "Closed", vanImage: Van6 },
];



export default bidsData;