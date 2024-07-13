
import { Link } from "react-router-dom"
import acceptImg from "../../assets/svg/Accept-img.svg"
import { useContext } from "react"
import { LanguageContext } from "../../context/LanguageContext";

const Accept = () => {
    const { lang } = useContext(LanguageContext)
    return (
        <div className="flex justify-center">
            <div className="mt-[100px] mb-[70px] mx-auto max-w-[382px] flex  flex-col justify-center items-center">
                <img src={acceptImg} className="mb-12" alt="" />
                <h2 className="px-2 text-center text-[24px] text-[#000000] font-semibold mb-4">{lang.order}</h2>
                <p className="text-center text-[16px] mb-6 px-2">
                    {lang.thanks} <br /> {lang.thanksText}
                </p>
                <Link to='/' className=" bg-[#FF7010] text-white py-[13px] px-[24px] rounded-[6px] mx-auto">{lang.trackOrder}</Link>
            </div>
        </div>
    )
}

export default Accept