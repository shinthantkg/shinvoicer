import { Helmet } from "react-helmet";
import MainLayout from "../components/shared/MainLayout";
import DashboardOverview from "../components/dashboard/DashboardOverview";
import InvoiceList from "../components/dashboard/InvoiceList.jsx";

const Dashboard = () => {
    return (
        <MainLayout>
            <Helmet>
                <title>Dashboard | shinvoicer</title>
            </Helmet>

            <div className={"flex flex-col items-center pt-[6vh] gap-[12rem]"}>
                <DashboardOverview />
                <InvoiceList />
            </div>
        </MainLayout>
    );
};

export default Dashboard;
