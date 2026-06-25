import { createBrowserRouter } from "react-router";
import Bannaer from "../src/Component/bannaer/Bannaer";
import TradingAppSection from "../src/Component/TradingAppSection/TradingAppSection";
import Layout from "../src/Component/Shered/Layout/Layout";
import PageNotFound from "../src/Component/PageNotFound/PageNotFound";
import AppDetailsPage from "../src/Component/AppDetails/AppDetailsPage";

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
                element: <h1>a;dfj</h1>
            },
            {
                path: 'singleApp',
                Component: AppDetailsPage
            }
        ]
    },
    {
        path: '*',
        Component: PageNotFound
    }
]);


export default router