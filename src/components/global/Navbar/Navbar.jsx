import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import SidebarMobile from "../Sidebar/SidebarMobile";

const Navbar = () => {
    return (
        <nav className="bg-white p-4 shadow">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between lg:justify-end h-10">
                    <div className="lg:hidden">
                        <SidebarMobile />
                    </div>

                    <DropdownMenu>
                        <DropdownMenuTrigger className="flex flex-row gap-3 outline-none">
                            <h5 className="my-auto">Hi, <strong>Novan J</strong></h5>
                            <Avatar className="my-auto">
                                <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>My Account</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Profile</DropdownMenuItem>
                            <DropdownMenuItem>Settings</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>Logout</DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
