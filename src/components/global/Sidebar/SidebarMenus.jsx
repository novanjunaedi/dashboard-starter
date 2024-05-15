import { FaHome, FaTable } from "react-icons/fa";
import { FaNoteSticky } from "react-icons/fa6";

export const sidebarmenus = [
    {
        title: 'Dashboard',
        icon: <FaHome />,
        to: '/dashboard'
    },
    {
        title: 'Timeline',
        icon: <FaTable />,
        to: '/timelines'
    },
    {
        title: 'Notulensi',
        icon: <FaNoteSticky />,
        to: '/minutes'
    },
];