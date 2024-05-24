import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ThemeProvider from "./lib/ThemeContext";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import DashboardProvider from "./lib/DashboardContext";
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
            element: <DashboardProvider><Dashboard /></DashboardProvider>
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

    return <ThemeProvider><RouterProvider router={router} /></ThemeProvider>;
};

export default App;
