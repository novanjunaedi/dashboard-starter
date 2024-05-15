import Layout from "@/components/global/Layout/Layout";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
    return (
        <>
            <Helmet>
                <title>Dashboard</title>
            </Helmet>
            <Layout>
                <h1 className="text-2xl font-semibold">Dashboard</h1>
            </Layout>
        </>
    );
};

export default Dashboard;
