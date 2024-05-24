import { useContext } from "react";
import { ThemeContext } from "../../lib/ThemeContext";
import PropTypes from "prop-types";
import Sidebar from './Sidebar';

const MainLayout = ({ children }) => {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <Sidebar />
            <main className={`${theme === "light" ? "bg-white" : "bg-primary-dark"} w-screen h-screen font-primary`}>
                {children}
            </main>
        </>
    );
};

MainLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainLayout;
