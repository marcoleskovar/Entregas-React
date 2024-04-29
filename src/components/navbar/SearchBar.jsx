//*STYLE: _searchBar.scss

import { useRef, useState } from "react"

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState ('')
    const inputRef = useRef (null)

    const handleInputChange = (e) => {
        setInputValue (e.target.value)
    }

    const erase = () => {
        setInputValue ('')
    }

    return (
        <div className="searchBarContainer">
            <span className="searchBarContainer-searchIcon">
                <svg className="searchBarContainer-searchIcon-svg bi bi-search" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
                </svg>
            </span>
            <input className="searchBarContainer-searchBar" value={inputValue} ref={inputRef} onChange={handleInputChange} style={{width: inputValue !== '' ? '235px' : '270px'}} type="text"/>
            <span className="searchBarContainer-deleteIcon" onClick={erase} style={{display: inputValue === '' ? 'none' : 'flex'}}>
                <svg className="searchBarContainer-deleteIcon-svg bi bi-x-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                </svg>
            </span>
        </div>
    )
}