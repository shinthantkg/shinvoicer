import { useContext, useState } from "react";
import { ThemeContext } from "../../lib/ThemeContext";
import { DashboardContext } from "../../lib/DashboardContext";
import arrowDownIcon from "../../assets/images/arrow-down-icon.svg";
import arrowUpIcon from "../../assets/images/arrow-up-icon.svg";
import plusIcon from "../../assets/images/plus-icon.svg";

const DashboardOverview = () => {
    const { theme } = useContext(ThemeContext);
    const { isFormShown, toggleForm, setSelectedFilters } = useContext(DashboardContext);
    const [filterDropdowned, toggleFilterDropdown] = useState(false);

    const handleFilterSelection = (event) => {
        const value = event.target.value;
        setSelectedFilters((prevFilters) =>
            event.target.checked ? [...prevFilters, value] : prevFilters.filter((item) => item !== value)
        );
    }

    return (
        <div className="flex justify-between gap-52 mx-auto">
            <div className="flex flex-col">
                <h1 className={`font-bold text-xl ${theme === "light" ? "text-black" : "text-white"}`}>Invoices</h1>
                <p className="text-accent">There are 0 total invoices.</p>
            </div>

            <div className="flex gap-4 items-center">
                <div
                    onClick={() => toggleFilterDropdown(!filterDropdowned)}
                    className="flex items-center gap-2 cursor-pointer"
                    aria-expanded={filterDropdowned}
                >
                    <span className={`${theme === "light" ? "text-black" : "text-white"} font-bold`}>Filter by status</span>
                    <img src={filterDropdowned ? arrowUpIcon : arrowDownIcon} alt="Toggle filter dropdown" />
                </div>

                {filterDropdowned && (
                    <div className={`${theme === "light" ? "bg-white" : "bg-primary-light"} pt-6 pr-20 pb-6 pl-6 flex flex-col justify-center absolute top-40 rounded-xl shadow-xl`}>
                        {['draft', 'pending', 'paid', 'rejected'].map(status => (
                            <div key={status} className="flex items-center gap-4">
                                <input
                                    onChange={handleFilterSelection}
                                    className="cursor-pointer"
                                    id={`${status}-filter`}
                                    type="checkbox"
                                    value={status}
                                />
                                <label
                                    className={`${theme === "light" ? "text-black" : "text-white"} font-semibold`}
                                    htmlFor={`${status}-filter`}
                                >
                                    {status.charAt(0).toUpperCase() + status.slice(1)}
                                </label>
                            </div>
                        ))}
                    </div>
                )}

                <button
                    onClick={() => toggleForm(!isFormShown)}
                    className="bg-secondary-dark hover:bg-secondary-light transition-all duration-300 text-white rounded-3xl p-3 font-bold flex justify-between items-center gap-4"
                >
                    <span className="bg-white p-1.5 rounded-full">
                        <img src={plusIcon} alt="New invoice" />
                    </span>
                    New Invoice
                </button>
            </div>
        </div>
    );
};

export default DashboardOverview;
