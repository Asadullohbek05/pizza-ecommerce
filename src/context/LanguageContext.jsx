import PropTypes from "prop-types"

import { createContext, useState } from "react";
import languages from "../data/languages";

export const LanguageContext = createContext();


const LanguageContextProvider = ({ children }) => {
    const [langType, setLangType] = useState(localStorage.getItem('language') || 'ru')
    const state = { langType, lang: languages[langType], setLangType }
    return <LanguageContext.Provider value={state}>
        {children}
    </LanguageContext.Provider>
}

LanguageContextProvider.propTypes = {
    children: PropTypes.node
}

export default LanguageContextProvider