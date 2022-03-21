import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({children}) => {
    const [queryData, setqueryData] = useState('')
    const [searching, setSearching] = useState(false)

    const onInputChange = (e) => {
        setqueryData(e.target.value)
    } 
    const onKeyPressEnter = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            setSearching(true)
            console.log(e.target.value);
          }
    }

    return(
        <AppContext.Provider value={{
            onInputChange,
            onKeyPressEnter,
            setSearching,
            setqueryData,
            searching,
            queryData,
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)
export {AppContext, AppProvider}