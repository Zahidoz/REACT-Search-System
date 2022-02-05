import React from "react";
import {GrSearch} from 'react-icons/gr'
import './Search.scss'

const Search = ({search,setSearch,placeholder}) => {
    return(
        <div>
            <form className="api-search-form">
                <div className='icon'>
                    <GrSearch />
                </div>
                <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder={placeholder}/>  
            </form>
        </div>
    )
} 

export default Search 