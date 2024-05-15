import { Helmet } from "react-helmet-async";

const NotFound = () => {
    return (
        <>
            <Helmet>
                <title>404 Not Found</title>
            </Helmet>
            <main className="bg-gray-100 h-screen flex justify-center items-center">
                <div className="block text-center">
                    <h1 className="text-2xl font-semibold mb-3">404 Not Found</h1>
                    <p>Oops, halaman yang kamu cari tidak ditemukan</p>
                </div>
            </main>
        </>
    );
};

export default NotFound;
