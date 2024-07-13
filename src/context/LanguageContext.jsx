import PropTypes from "prop-types"

import { createContext, useState } from "react";
import languages from "../data/languages";
import { toast } from "react-toastify";
import { LANGUAGE } from "../constants";

export const LanguageContext = createContext();


const LanguageContextProvider = ({ children }) => {
    const [langType, setLangType] = useState(localStorage.getItem(LANGUAGE) || 'ru')

    const changeLanguage = (e) => {
        if (e.target.value === 'ru') {
            toast.success('Язык изменен на русский')
        } else {
            toast.success("Til rus tiliga o'zgartirildi")
        }
        setLangType(e.target.value)
        localStorage.setItem(LANGUAGE, e.target.value)
    }

    const state = { langType, lang: languages[langType], changeLanguage }
    return <LanguageContext.Provider value={state}>
        {children}
    </LanguageContext.Provider>
}

LanguageContextProvider.propTypes = {
    children: PropTypes.node
}

export default LanguageContextProvider