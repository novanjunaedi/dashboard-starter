import { Helmet } from "react-helmet-async";
import { FaPlus } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Layout from "@/components/global/Layout/Layout";

const Minutes = () => {
    const navigate = useNavigate();

    return (
        <>
            <Helmet>
                <title>Notulensi</title>
            </Helmet>
            <Layout>
                <div className="flex flex-row justify-between align-middle">
                    <h1 className="text-2xl font-semibold">Notulensi</h1>
                    <Button onClick={() => navigate("/minutes/add")}>
                        <FaPlus className="me-2" />
                        Tambah
                    </Button>
                </div>

                <section className="my-10 bg-white">
                    <Table className="w-[1080px] lg:w-full overflow-auto">
                        <TableHeader>
                            <TableRow>
                                <TableHead className="w-[100px]">No</TableHead>
                                <TableHead className="w-[300px]">Meeting Date & Time</TableHead>
                                <TableHead className="w-[250px]">Place</TableHead>
                                <TableHead className="w-[200px]">Purpouse</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {[1, 2, 3, 4, 5].map((item) => (
                                <TableRow key={item}>
                                    <TableCell>001</TableCell>
                                    <TableCell>Rabu 20 Januari 2024 Pukul 14.00 WIB</TableCell>
                                    <TableCell>Ibis Hotel Bandung</TableCell>
                                    <TableCell>MoU</TableCell>
                                    <TableCell className="space-x-2">
                                        <Button onClick={() => navigate("/minutes/detail/001")} size="sm" className="bg-blue-500 hover:bg-blue-300">Detail</Button>
                                        <Button onClick={() => navigate("/minutes/edit/001")} size="sm" className="bg-yellow-500 hover:bg-yellow-300">Edit</Button>
                                        <Button onClick={() => console.log("delete clicked")} size="sm" className="bg-red-500 hover:bg-red-300">Delete</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </section>
            </Layout >
        </>
    );
};

export default Minutes;
