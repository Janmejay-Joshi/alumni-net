import { BsFilePerson } from "react-icons/bs";
import { BiDetail } from "react-icons/bi";
import { FaDonate } from "react-icons/fa";
import {GrGroup} from "react-icons/gr";
import { MdNotificationsActive } from "react-icons/io";


const data = [
  {
    id: 1,
    name: "My Details",
    icons: <BiDetail />,
    path : "#"  
  },
  {
    id: 2,
    name: "Profile",
    icons: <BsFilePerson />,
    path : "#"  

  },
  {
    id: 3,
    name: "Donations",
    icons: <FaDonate />,
    path : "#"  

  },
  {
    id: 4,
    name: "Connections",
    icons : <GrGroup />,
    path : "#"  

  },
  {
    id: 5,
    name: "Notices",
    icons : <MdNotificationsActive />,
    path : "#"  

  },
];
export default data;
