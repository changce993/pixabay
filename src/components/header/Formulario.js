import React from 'react'

const Formulario = ({ setSearch }) => {
    
    const searchImages = e => {
        setSearch(e.target.value)
    }
    
    const handleSubmit = e => {
        e.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Encuentra la imagen que necesites</h1>
            <div className="search_bar d-flex">
                <input id="search_bar" type="text" placeholder="Buscar imagen" onChange={searchImages}/>
                <label htmlFor="search_bar"><i className="fas fa-search"></i></label>
            </div>
        </form>
    )
}

export default Formulario
