import React, { useState, useEffect } from 'react';
import Header from './components/header/Header'
import ImageList from './components/ImageList/ImageList'
import Pagination from './components/pagination/Pagination'

function App() {

  const [search, setSearch] = useState('');
  const [imagen, setImagen] = useState([])
  const [actualPage, setActualPage] = useState(1)
  const [totalPage, setTotalPage] = useState(1)

  useEffect(() => {

    if(search.trim() === '') return

    const imagePerPage = 30
    const key = '18043833-39bc8a913a23148af7e404f0d'
    const url = `https://pixabay.com/api/?key=${key}&q=${search}&per_page=${imagePerPage}&page=${actualPage}`

    fetch(url)
    .then(response => {
      return response.json()
    })
    .then(results => {
      setImagen(results.hits)
      setTotalPage(Math.ceil(results.totalHits / imagePerPage))
    })

    const jumbotron = document.querySelector('.jumbotron')

    jumbotron.scrollIntoView({ behavior : "smooth"})
  }, [search, actualPage])

  console.log(totalPage)
  return (<>
    <Header setSearch={setSearch} />
    <ImageList imagen={imagen} search={search}/>
    <Pagination actualPage={actualPage} setActualPage={setActualPage} totalPage={totalPage} />
  </>
  );
}

export default App;
