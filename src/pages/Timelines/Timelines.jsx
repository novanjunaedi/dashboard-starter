import Layout from "@/components/global/Layout/Layout";
import { Helmet } from "react-helmet-async";

const Timelines = () => {
    return (
        <>
            <Helmet>
                <title>Timeline</title>
            </Helmet>
            <Layout>
                <h1 className="text-2xl font-semibold">Timeline</h1>
            </Layout>
        </>
    );
};

export default Timelines;
