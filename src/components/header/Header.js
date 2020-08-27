import React from 'react'
import Formulario from './Formulario'
import './header.css';

const Header = ({ setSearch }) => {
    return (
        <header className="d-flex jumbotron">
            <Formulario setSearch={setSearch} />
        </header>
    )
}

export default Header
