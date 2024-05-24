import { createContext, useState } from "react";
import PropTypes from "prop-types";

export const DashboardContext = createContext();

const DashboardProvider = ({ children }) => {
    const [isFormShown, toggleForm] = useState(false);

    return <DashboardContext.Provider value={{ isFormShown, toggleForm }}>
        {children}
    </DashboardContext.Provider>
}

DashboardProvider.propTypes = {
    children: PropTypes.node.isRequired
};

export default DashboardProvider;
