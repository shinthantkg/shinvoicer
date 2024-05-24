import { useContext, useState } from "react";
import { ThemeContext } from "../../lib/ThemeContext";
import { DashboardContext } from "../../lib/DashboardContext";
import arrowDownIcon from "../../assets/images/arrow-down-icon.svg";
import arrowUpIcon from "../../assets/images/arrow-up-icon.svg";
import plusIcon from "../../assets/images/plus-icon.svg";

const DashboardOverview = () => {
    const { theme } = useContext(ThemeContext);
    const { isFormShown, toggleForm } = useContext(DashboardContext);
    const [filterDropdowned, toggleFilterDropdown] = useState(false);

    return (
        <div className={"flex justify-between w-1/3 mx-auto"}>
            <div className={"flex flex-col"}>
                <h1 className={`font-bold text-xl ${theme === "light" ? "text-black" : "text-white"}`}>Invoices</h1>
                <p className={"text-accent"}>There are 0 total invoices.</p>
            </div>

            <div className={"flex gap-4 items-center"}>
                <div onClick={() => toggleFilterDropdown(!filterDropdowned)} className={"flex items-center gap-2 cursor-pointer"}>
                    <span className={`${theme === "light" ? "text-black" : "text-white"} font-bold`}>Filter by status</span>
                    <img src={filterDropdowned ? arrowUpIcon : arrowDownIcon} alt=""/>
                </div>
                <button onClick={() => toggleForm(!isFormShown)} className={"bg-secondary-dark hover:bg-secondary-light transition-all duration-300 text-white rounded-3xl p-12p font-bold flex justify-between items-center gap-4"}>
                    <span className={"bg-white p-5p rounded-full"}><img className={""} src={plusIcon} alt=""/></span>
                    New Invoice
                </button>
            </div>
        </div>
    );
};

export default DashboardOverview;
