import { Link } from "react-router-dom";

const SidebarItem = ({ icon, title, to }) => {
    const url = window.location.pathname;

    return (
        <li>
            <Link className={`flex items-center p-2 rounded-lg text-white hover:bg-gray-700 group ${url.startsWith(to) && "bg-gray-700 font-bold"}`} to={to}>
                {icon}
                <span className="ms-3">{title}</span>
            </Link>
        </li>
    );
};

export default SidebarItem;
