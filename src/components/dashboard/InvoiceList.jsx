import { useContext } from "react";
import { ThemeContext } from "../../lib/ThemeContext";
import emptyIllustration from "../../assets/images/empty-illustration.svg";

const InvoiceList = () => {
    const { theme } = useContext(ThemeContext);

    return (
        <div className={"flex flex-col items-center gap-8 text-center"}>
            <img src={emptyIllustration} alt="Woman in an envelope speaking with a loudspeaker."/>
            <h2 className={`${theme === "light" ? "text-black" : "text-white text-md"} font-bold`}>There is nothing here</h2>
            <p className={"text-accent"} style={{width: "250px"}}>Create a new invoice by clicking the <span className={"font-bold"}>New Invoice</span> button and get started</p>
        </div>
    );
};

export default InvoiceList;
