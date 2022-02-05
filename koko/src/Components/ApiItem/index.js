import React from "react";
import './ApiItem.scss';
import {BsBookmark} from 'react-icons/bs'
import {BsChevronRight} from 'react-icons/bs'
import {BsBookmarkFill} from 'react-icons/bs'

const ApiItem = ({api, toggleBookmark}) => {
    return(
        <div className="api-item">
         
            <div className="item-icon">
              <img src={api.icon}></img>
            </div>
            <div className="item-detail">
              <h4>{api.name}</h4>
              <div className="item-category">{api.category}</div>
              <div className="item-description">{api.descriptions}</div>
            </div>
            <div className='item-hover'>
              <button onClick={() => toggleBookmark(api.id)}>
                {!api.bookmark ? <BsBookmark/> :<BsBookmarkFill />}
                Bookmark
              </button>
              <a href='https://www.teknorder.com/'>
                API Docs
                <BsChevronRight/>
              </a>
            </div>
          </div>
        
    )
}

export default ApiItem