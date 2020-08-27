import React from 'react'
import './Image.css'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser, faHeart, faEye} from '@fortawesome/free-solid-svg-icons'

const Image = ({ img }) => {

    const {largeImageURL, views, likes, user, tags} = img

    return (
        <div className="image_body">
            <a href={largeImageURL} target="_blank" rel="noopener noreferrer" >
                <img src={largeImageURL} alt={tags}/>
                <div className="info_image d-flex">
                    <p> <FontAwesomeIcon icon={faUser} />  By {user}</p>
                    <div className="views_likes">
                        <p> <FontAwesomeIcon icon={faEye} /> {new Intl.NumberFormat().format(views)} Views</p>
                        <p> <FontAwesomeIcon icon={faHeart} /> {new Intl.NumberFormat().format(parseInt(likes))} Likes</p>
                    </div>
                </div>
            </a>
        </div>
    )
} 

export default Image
