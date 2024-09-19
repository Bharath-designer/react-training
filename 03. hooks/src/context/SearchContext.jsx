import { createContext, useEffect, useState } from "react"

export const SearchContext = createContext()

export const SearchContextProvider = ({ children }) => {

    const [searchText, setSearchText] = useState("")
    return (
        <SearchContext.Provider value={{ searchText, setSearchText}}>
            {children}
        </SearchContext.Provider>
    )
}

