import React from 'react'
import Image from './Image'

const ImageList = ({ imagen, search }) => {

    return (
        <div className="image_container">
            <h2>Resultados para: {search}</h2>
            <div className="d-flex image_list">
                {imagen.map(img => {
                    return <Image key={img.id} img={img}/>
                })}
            </div>
        </div>
    )
}

export default ImageList
