import { createBrowserRouter } from "react-router";
import Bannaer from "../src/Component/bannaer/Bannaer";
import TradingAppSection from "../src/Component/TradingAppSection/TradingAppSection";
import Layout from "../src/Component/Shered/Layout/Layout";
import PageNotFound from "../src/Component/PageNotFound/PageNotFound";
import AppDetailsPage from "../src/Component/AppDetails/AppDetailsPage";
import InstallationPage from "../src/Component/InstallationPage/InstallationPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: Layout,
        children: [
            {
                path: '/',
                element: <Bannaer />
            },
            {
                path: 'app',
                Component: TradingAppSection
            },
            {
                path: 'installation',
                Component: InstallationPage
            },
            {
                path: 'singleApp',
                Component: AppDetailsPage
            },
        ]
    },
    {
        path: '*',
        Component: PageNotFound
    }
]);


export default router