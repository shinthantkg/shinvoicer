import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import DashboardInvoice from "./pages/DashboardInvoice";
import Settings from "./pages/Settings";
import PayInvoice from "./pages/PayInvoice.jsx";

const App = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "/authenticate",
            element: <Auth />
        },
        {
            path: "/dashboard",
            element: <Dashboard />
        },
        {
            path: "/dashboard/invoice/:id",
            element: <DashboardInvoice />
        },
        {
            path: "/settings",
            element: <Settings />
        },
        {
            path: "/pay/:username/:invoice-id",
            element: <PayInvoice />
        }
    ]);

    return <RouterProvider router={router} />
};

export default App;
