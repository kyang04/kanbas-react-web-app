import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { RiDashboard3Line } from "react-icons/ri";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaBook } from "react-icons/fa";
import { BsCalendar2Week } from "react-icons/bs";
import { BiSolidInbox } from "react-icons/bi";
import { FaHistory } from "react-icons/fa";
import { PiTelevisionSimpleBold } from "react-icons/pi";
import { MdOutlineExitToApp } from "react-icons/md";
import { BiSolidHelpCircle } from "react-icons/bi";
import logo from "./NU_RGB_Notched-N_motto_RB.png";
function KanbasNavigation() {
    const links = ["Account", "Dashboard", "Courses", "Calendar", "Inbox", "History", "Studio", "Commons", "Help"];
    const linksToIconsMap = {
        Account: <MdOutlineAccountCircle className="fs-1 text account" />,
        Dashboard: <RiDashboard3Line className="fs-1 text" />,
        Courses: <FaBook className="fs-1 text" />,
        Calendar: <BsCalendar2Week className="fs-1 text" />,
        Inbox: <BiSolidInbox className = "fs-1-text"/>,
        History: <FaHistory className = "fs-1-text"/>,
        Studio : <PiTelevisionSimpleBold  className = "fs-1-text"/>,
        Commons : <MdOutlineExitToApp  className = "fs-1-text"/>,
        Help : <BiSolidHelpCircle className = "fs-1-text"/>,
    };

    const { pathname } = useLocation();
    return (
        <div className="wd-kanbas-navigation icon list-group" style={{ width: 100 }}>
            <img src={logo}  alt="..."/>
            {links.map((link, index) => (
                <Link
                    key={index}
                    to={`/Kanbas/${link}`}
                    className={`list-group-item text-center p-3 ${
                        pathname.includes(link) && "active"
                    }`
                }
                >
                    <span>{linksToIconsMap[link]}</span>
                    <br />
                    {link}
                </Link>
            ))}
        </div>
    );
}
export default KanbasNavigation;