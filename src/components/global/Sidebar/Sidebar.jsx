import SidebarItem from "./SidebarItem";
import { sidebarmenus } from "./SidebarMenus";

const Sidebar = () => {
    return (
        <aside className="hidden lg:flex flex-col bg-slate-900 w-[23em] h-screen">
            <div className="px-4 py-5">
                <h1 className="text-white text-2xl font-bold">Dashboard Starter</h1>
            </div>
            <div className="h-full px-3 py-3 overflow-y-auto">
                <ul className="space-y-2 font-medium my-5">
                    {sidebarmenus?.map((menu, index) => (
                        <SidebarItem
                            key={index}
                            icon={menu.icon}
                            title={menu.title}
                            to={menu.to}
                        />
                    ))}
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
