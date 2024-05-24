import { createContext, useState } from 'react';
import PropTypes from "prop-types";

export const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        return localStorage.getItem("theme") || "light";
    });

    const toggleTheme = () => {
        setTheme((prevTheme) => {
            const newTheme = prevTheme === 'light' ? 'dark' : 'light';
            localStorage.setItem('theme', newTheme);
            return newTheme;
        });
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

ThemeProvider.propTypes = {
    children: PropTypes.node.isRequired,
};

export default ThemeProvider;
