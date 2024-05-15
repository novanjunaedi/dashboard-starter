import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";

const Layout = ({ children }) => {
    return (
        <>
            <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
                <Sidebar />
                <div className="flex flex-col w-full h-full">
                    <Navbar />
                    <main className="container py-5 h-screen overflow-y-auto">{children}</main>
                </div>
            </div>
        </>
    );
};

export default Layout;
