import { Link } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import { FaRegHeart } from 'react-icons/fa';

import locationIcon from "../../assets/svg/Location.svg";
import profileIcon from "../../assets/svg/Account.svg";
import logoIcon from "../../assets/svg/Logo.svg";
import shoppingBag from "../../assets/svg/shopping-bag.svg";
import arrowIcon from "../../assets/svg/arrow.svg";
import hamburgerBtn from "../../assets/svg/hamburger-btn.svg";
import closeIcon from "../../assets/svg/close-icon.svg"
import phoneIcon from "../../assets/svg/phone.svg"
import location2 from "../../assets/svg/location-2.svg"
import facebook from "../../assets/svg/facebook.svg"
import instagram from "../../assets/svg/instagram.svg"
import { LanguageContext } from "../../context/LanguageContext";
import { ProductsContext } from "../../context/ProductsContext";
import { FavouritesContext } from "../../context/FavouritesContext";

const Header = () => {
    const { cart, isRunning } = useContext(ProductsContext)
    const { favourites } = useContext(FavouritesContext)
    const { lang, langType, changeLanguage } = useContext(LanguageContext)
    const [scrollHeight, setScrollHeight] = useState(0);
    const [visible, setVisible] = useState(false)

    const changeNavbar = () => {
        setScrollHeight(Math.trunc(window.scrollY));
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbar);
        return () => {
            window.removeEventListener('scroll', changeNavbar);
        };
    }, []);

    const toggleNav = () => {
        setVisible(!visible)
    }

    // --------------------------------------------------------------

    const [time, setTime] = useState(45 * 60); // 45 minutes in seconds


    useEffect(() => {
        let interval = null;

        if (isRunning) {
            interval = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime <= 0) {
                        clearInterval(interval);
                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        } else if (!isRunning && time !== 0) {
            clearInterval(interval);
        }

        return () => clearInterval(interval); // Clear interval on component unmount
    }, [isRunning, time]);

    const formatTime = (timeInSeconds) => {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const padTime = (time) => String(time).padStart(2, '0');

        return `${padTime(hours)}:${padTime(minutes)}:${padTime(seconds)}`;
    };




    return (
        <nav className="bg-white sticky top-0 z-50">
            <div className="border-b">
                <div className="max-w-[1330px] px-5 mx-auto ">
                    <div className="py-[9px] sm:py-[11px] flex flex-wrap sm:gap-3 lg:justify-between md:justify-evenly sm:justify-evenly items-center">
                        <div className="flex items-center sm:gap-10 sm:w-auto w-full justify-between">
                            <div className="flex items-center sm:gap-2">
                                <img src={locationIcon} alt="location" />
                                <select className="outline-none text-[14px] bg-white">
                                    <option>{lang.moscow}</option>
                                    <option>{lang.permian}</option>
                                    <option>{lang.sochi}</option>
                                    <option>{lang.kazan}</option>
                                </select>
                            </div>
                            <p className="hidden sm:block text-[14px] text-[#191919]">{lang.checkAddress}</p>
                            <p className="hidden sm:block text-[12px] sm:text-[14px] text-[#191919]">{lang.averageDeliveryTime}*: <span className="font-semibold">{formatTime(time)}</span></p>
                            <select value={langType} onChange={changeLanguage} className="select select-sm select-bordered">
                                <option value='ru'>RU</option>
                                <option value='uz'>UZ</option>
                            </select>
                        </div>
                        <div className="flex gap-10">
                            <p className="hidden sm:block font-normal text-[14px] text-[#191919]">{lang.openingHours}</p>
                            <button className="hidden sm:flex font-normal items-center gap-2 text-[14px] text-[#191919]"><img src={profileIcon} alt="profileIcon" /> {lang.loginAccount} </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`transition border-b sticky top-0`}>
                <div className="max-w-[1330px] px-5 mx-auto ">
                    <div className="py-4 flex gap-4 items-center justify-between">
                        <Link className="flex items-center gap-3" to={'/'}><img src={logoIcon} alt="Logo icon" /></Link>
                        <div className="hidden lg:block">
                            <ul className={`flex items-center gap-7 ${scrollHeight > 44 ? 'block' : 'hidden'}`}>
                                <li>
                                    <Link to={'/'} className="transition text-[#191919] font-normal hover:text-[#ff7010] text-[17px]">{lang.stock}</Link>
                                </li>
                                <li>
                                    <Link to={'/pizza'} className="transition text-[#191919] font-normal hover:text-[#ff7010] text-[17px]">{lang.pizza}</Link>
                                </li>
                                <li>
                                    <Link to={'/sushi'} className="transition text-[#191919] font-normal hover:text-[#ff7010] text-[17px]">{lang.sushi}</Link>
                                </li>
                                <li>
                                    <Link to={'/drinks'} className="transition text-[#191919] font-normal hover:text-[#ff7010] text-[17px]">{lang.beverages}</Link>
                                </li>
                                <li>
                                    <Link to={'/snacks'} className="transition text-[#191919] font-normal hover:text-[#ff7010] text-[17px]">{lang.snacks}</Link>
                                </li>
                                <li>
                                    <Link to={'/combo'} className="transition text-[#191919] font-normal hover:text-[#ff7010] text-[17px]">{lang.combo}</Link>
                                </li>
                                <li>
                                    <Link to={'/deserts'} className="transition text-[#191919] font-normal hover:text-[#ff7010] text-[17px]">{lang.dessert}</Link>
                                </li>
                                <li>
                                    <Link to={'/causes'} className="transition text-[#191919] font-normal hover:text-[#ff7010] text-[17px]">{lang.sauces}</Link>
                                </li>
                                <li>
                                    <div className="dropdown dropdown-hover">
                                        <div tabIndex={0} role="button" className="flex items-center gap-2 m-1 text-[#191919] font-normal hover:text-[#ff7010] text-[17px]">{lang.other} <img src={arrowIcon} alt="" /></div>
                                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-[285px] p-2 shadow left-[-100px]">
                                            <li><Link className="text-[#191919] font-medium text-[16px]" to={''}>{lang.stock}</Link></li>
                                            <li><Link className="text-[#191919] font-medium text-[16px]" to={''}>{lang.aboutCompany}</Link></li>
                                            <li><Link className="text-[#191919] font-medium text-[16px]" to={''}>{lang.termsOfUse}</Link></li>
                                            <li><Link className="text-[#191919] font-medium text-[16px]" to={''}>{lang.warrantTterms}</Link></li>
                                            <li><Link className="text-[#191919] font-medium text-[16px]" to={''}>{lang.restaurant}</Link></li>
                                            <li><Link className="text-[#191919] font-medium text-[16px]" to={''}>{lang.contacts}</Link></li>
                                            <li><Link className="text-[#191919] font-medium text-[16px]" to={''}>{lang.support}</Link></li>
                                            <li><Link className="text-[#191919] font-medium text-[16px]" to={''}>{lang.trackYourOrder}</Link></li>

                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex items-center gap-2 ">
                            <Link to='/favourites' className="bg-[#FF7010] hidden lg:flex px-4 py-[8px]  items-center gap-2 rounded text-white text-[17px]"><FaRegHeart color="white" size={20} />{favourites.length}</Link>
                            <Link to='/cart' className="bg-[#FF7010] hidden lg:flex items-center justify-center px-4 py-2 w-[70px] gap-2 rounded text-white text-[16px]"><img src={shoppingBag} alt="Shopping bag" /> {cart.length}</Link>
                        </div>
                        {
                            visible ? <button onClick={toggleNav} className="lg:hidden"><img width={32} height={20} src={closeIcon} alt="" /></button>
                                : <button onClick={toggleNav} className="lg:hidden"><img width={32} height={20} src={hamburgerBtn} alt="" /></button>
                        }
                    </div>
                </div>
                <div className={`fixed ${visible ? 'left-0' : 'left-[-100%]'} w-full h-full bg-white innerNav`}>
                    <button className="flex font-normal w-full p-5  items-center gap-4 text-[16px] text-[#000000] border-b"><img src={profileIcon} alt="profileIcon" /> {lang.loginAccount}</button>
                    <ul className="flex flex-col p-5 border-b gap-3">
                        <li>
                            <Link to={'/'} className="text-[#191919] text-[16px]">{lang.stock}</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="text-[#191919] text-[16px]">{lang.aboutCompany}</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="text-[#191919] text-[16px]">{lang.termsOfUse}</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="text-[#191919] text-[16px]">{lang.warrantTterms}</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="text-[#191919] text-[16px]">{lang.restaurant}</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="text-[#191919] text-[16px]">{lang.contacts}</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="text-[#191919] text-[16px]">{lang.support}</Link>
                        </li>
                        <li>
                            <Link to={'/'} className="text-[#191919] text-[16px]">{lang.trackYourOrder}</Link>
                        </li>
                    </ul>
                    <div className="flex flex-col gap-3 p-5">
                        <p className="flex gap-3 text-[#191919] text-[14px]"><img src={phoneIcon} alt="" /> +7 (926) 223-10-11</p>
                        <p className="flex gap-4 text-[#191919] text-[14px]"><img src={location2} alt="" /> {lang.location}</p>
                        <div className="flex gap-6">
                            <Link className="flex gap-3 text-[#191919] text-[14px]"><img src={facebook} alt="" /> Facebook</Link>
                            <Link className="flex gap-3 text-[#191919] text-[14px]"><img src={instagram} alt="" /> Instagram</Link>
                        </div>
                    </div>
                    <div className="border-t border-b text-center py-4">
                        <p className="text-[#A5A5A5] font-normal">{lang.openingHours}</p>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Header;
