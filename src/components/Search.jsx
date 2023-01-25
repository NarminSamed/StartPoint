import React from 'react'
import { useRef, useEffect, useState } from 'react'
// import Navbar from './Navbar';
// import { Api } from '@mui/icons-material';
// import {Results}

const Search = () => {

    const searchBtn = useRef()
    const closingBtn = useRef()
    const searchForm = useRef()


    const formActive = (e) => {
        const kliklenenElement = e.target


        if (kliklenenElement === searchBtn.current) {
            searchBtn.current.classList.remove('fa-magnifying-glass')
            closingBtn.current.style.display = 'block'
            searchBtn.current.style.display = "block"
            searchForm.current.classList.add('js-active')
        }
    }

    const closingInput = (e) => {
        const kliklenenElement = e.target


        if (kliklenenElement === closingBtn.current) {
            searchForm.current.classList.remove('js-active')
            closingBtn.current.style.display = 'none'
            searchBtn.current.classList.add('fa-magnifying-glass')
            searchBtn.current.style.display = 'block'
        }
    }

    // search start-2
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [q, setQ] = useState("");
    const [searchParam] = useState(["gymName", "gymLocation", "starCount"]);
    useEffect(() => {
        fetch("http://localhost:3000/gyms")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
              
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])
  
    if (error) {
        return <>{error.message}</>;
    } else if (!isLoaded) {
        return <>loading...</>;
    } else {
        return (
            <>
            <div className="navbar-search">
                <button type='button' className="nav_search__toggle" onClick={formActive}>
                    <i className="fa-solid fa-magnifying-glass search_icon" ref={searchBtn}></i>
                    <i className="fa-solid fa-xmark" ref={closingBtn} onClick={closingInput}></i>
                </button>
                <div className="search_form" ref={searchForm}>
                    <form className='form-search_inner' action="/">
                        <input
                            type="search"
                            className='search-input'
                            name="search-form"
                            id="search-form"
                            placeholder='Axtar...'
                            value={q}
                            onChange={(e) => setQ(e.target.value)} />
                        <button type='submit' className='search-submit'>
                            <i className="fa-solid fa-magnifying-glass"></i>
                        </button>
                    </form>

                </div>

            </div>

           
            </>
        )
    }
}
export default Search