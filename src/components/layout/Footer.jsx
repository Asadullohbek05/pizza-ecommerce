
import { Link } from "react-router-dom"
import Logo from "../../assets/svg/Logo.svg"

import phoneIcon from "../../assets/svg/phone.svg"
import location2 from "../../assets/svg/location-2.svg"
import facebook from "../../assets/svg/facebook.svg"
import instagram from "../../assets/svg/instagram.svg"
import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext"

const Footer = () => {
    const { lang } = useContext(LanguageContext)
    return (
        <div className="bg-white border-t">
            <div className="max-w-[1330px] px-5 mx-auto py-8 ">
                <div className="flex flex-col sm:flex-row justify-between flex-wrap gap-2">
                    <div className="mb-6">
                        <img className="w-[141px] h-[32px] sm:w-auto" src={Logo} alt="" />
                    </div>
                    <ul className="flex flex-col gap-2 sm:gap-4 mb-3">
                        <h3 className="text-[14px] sm:text-[20px] font-semibold">Куда пицца</h3>
                        <li>
                            <Link className="text-[14px] sm:text-[16px] text-[#191919]" to='/'>{lang.aboutCompany}</Link>
                        </li>
                        <li>
                            <Link className="text-[14px] sm:text-[16px] text-[#191919]" to='/'>{lang.termsOfUse}</Link>
                        </li>
                        <li>
                            <Link className="text-[14px] sm:text-[16px] text-[#191919]" to='/'>{lang.warrantTterms}</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 sm:gap-4 mb-3">
                        <h3 className="text-[14px] sm:text-[20px] font-semibold">{lang.Help}</h3>
                        <li>
                            <Link className="text-[14px] sm:text-[16px] text-[#191919]" to='/'>{lang.restaurant}</Link>
                        </li>
                        <li>
                            <Link className="text-[14px] sm:text-[16px] text-[#191919]" to='/'>{lang.contacts}</Link>
                        </li>
                        <li>
                            <Link className="text-[14px] sm:text-[16px] text-[#191919]" to='/'>{lang.support}</Link>
                        </li>
                        <li>
                            <Link className="text-[14px] sm:text-[16px] text-[#191919]" to='/'>{lang.trackYourOrder}</Link>
                        </li>
                    </ul>
                    <ul className="flex flex-col gap-2 sm:gap-4 mb-3">
                        <h3 className="text-[14px] sm:text-[20px] font-semibold">{lang.contacts}</h3>
                        <li>
                            <Link className="text-[14px] sm:text-[16px] text-[#191919] flex items-center gap-3" to='/'><img src={phoneIcon} alt="" /> +7 (926) 223-10-11</Link>
                        </li>
                        <li>
                            <Link className="text-[14px] sm:text-[16px] text-[#191919] flex items-center gap-3" to='/'><img src={location2} alt="" /> {lang.location}</Link>
                        </li>
                        <div className="flex items-center gap-6">
                            <Link className="text-[14px] sm:text-[16px] text-[#191919] flex items-center gap-3" to='/'><img src={facebook} alt="" /> Facebook</Link>
                            <Link className="text-[14px] sm:text-[16px] text-[#191919] flex items-center gap-3" to='/'><img src={instagram} alt="" /> Instagram</Link>
                        </div>
                    </ul>
                </div>
                <p className="text-[14px] mt-6 sm:mt-0 sm:text-[16px]">© Copyright 2024 — Куда Пицца</p>
            </div>
        </div>
    )
}

export default Footer