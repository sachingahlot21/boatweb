import React from 'react'
import { createContext, useState } from 'react'
import Search from './SearchCon'

const SearchContext = ({ children }) => {


    const [searchQuery, setSearchQuery] = useState('')
    const [searchLength, setSearchLength] = useState('')

    return <Search.Provider value={{ searchQuery, setSearchQuery, searchLength, setSearchLength }}>{children}</Search.Provider>

}
export default SearchContext