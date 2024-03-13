import React, { useState, createContext } from 'react'

export const SearchContextValue = createContext(null);
const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');
    return (
        <SearchContextValue.Provider value={{ searchValue, setSearchValue }}>
            {children}
        </SearchContextValue.Provider>
    );
};

export default SearchProvider;