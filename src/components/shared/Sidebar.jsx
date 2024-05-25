import { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../../lib/ThemeContext";
import logo from "../../assets/images/logo.svg";
import lightThemeIcon from "../../assets/images/light-theme.svg";
import darkThemeIcon from "../../assets/images/dark-theme.svg";
import profileIcon from "../../assets/images/example.png";

const Sidebar = () => {
    const { theme, toggleTheme } = useContext(ThemeContext)
    const [profileClicked, setProfileClicked] = useState(false);

    useEffect(() => {
        const handleWindowClickEvent = (event) => {
            if (profileClicked && event.target.tagName !== "IMG") {
                setProfileClicked(false);
            }
        };

        window.addEventListener("click", handleWindowClickEvent);

        return () => {
            window.removeEventListener("click", handleWindowClickEvent);
        };
    });

    return (
        <header>
            <nav>
                <div className={"absolute bg-primary-light w-[100px] h-screen rounded-r-3xl flex flex-col justify-between"}>
                    <div className={"bg-secondary-dark w-full h-[100px] rounded-r-3xl cursor-pointer"}>
                        <img className={"relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-fit z-20"} src={logo} alt=""/>
                        <div className={"bg-secondary-light w-full h-1/2 rounded-tl-3xl rounded-br-3xl transform translate-y-1/2 hover:h-[75%] hover:translate-y-0 transition-all duration-300"}></div>
                    </div>

                    <div className={"flex flex-col"}>
                        <div className={"h-[100px] flex justify-center items-center"}>
                            <img onClick={toggleTheme} className={"hover:brightness-150 transition-all duration-300 cursor-pointer"} src={theme === "dark" ? lightThemeIcon : darkThemeIcon} alt=""/>
                        </div>
                        <hr className={"border-accent border-1"} />
                        <div className={"h-[100px] flex justify-center items-center"}>
                            <img onClick={() => setProfileClicked(!profileClicked)} className={"rounded-full w-8 h-8 cursor-pointer hover:border-2 hover:border-secondary-dark"} src={profileIcon} alt="Shin Thant Kaung's profile picture."/>
                        </div>
                    </div>
                </div>

                <div className={`absolute left-32 bottom-4 flex flex-col justify-center items-center bg-primary-light rounded-2xl p-4 text-white font-primary w-[180px] ${!profileClicked ? "hidden" : ""}`}>
                    <ul>
                        <li className={"mb-2 cursor-pointer hover:text-secondary-dark"}><a href="/settings">Settings</a></li>
                        <li className={"cursor-pointer hover:text-secondary-dark"}>Log Out</li>
                    </ul>
                </div>
            </nav>
        </header>
    );
};

export default Sidebar;
