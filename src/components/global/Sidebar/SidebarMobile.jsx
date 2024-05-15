import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { FaBars } from "react-icons/fa";
import { sidebarmenus } from "./SidebarMenus";
import SidebarItem from "./SidebarItem";

const SidebarMobile = () => {
    return (
        <Sheet>
            <SheetTrigger>
                <FaBars size={20} />
            </SheetTrigger>
            <SheetContent className="bg-slate-900 text-white border-none" side="left">
                <SheetHeader className="text-start">
                    <SheetTitle className="text-2xl text-white font-bold">Dashboard Starter</SheetTitle>
                    <SheetDescription>
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
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    );
};

export default SidebarMobile;
