import React from 'react'
import './pagination.css'

const Pagination = ({ actualPage , setActualPage, totalPage}) => {

    const prevPage = () => {
        const newActualPage = actualPage - 1

        if(actualPage === 1) return 

        setActualPage(newActualPage)
    }

    const nextPage = () => {
        const newActualPage = actualPage + 1

        if(newActualPage > totalPage) return 

        setActualPage(newActualPage)
    }

    return (
        <div className="container d-flex pagination_container">        
            <button onClick={prevPage} >
                anterior
            </button>

            <button onClick={nextPage} >
                siguiente
            </button>
        </div>
    )
}

export default Pagination
