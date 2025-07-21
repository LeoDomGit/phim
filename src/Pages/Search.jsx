/* eslint-disable */
import React, { useEffect, useState } from 'react'
import Header from "../Components/Header";
import 'swiper/css';
import "../css/film.css";
import { useParams } from 'react-router-dom';
import Footer from '../Components/Footer';
import axios from 'axios';
import { Helmet } from 'react-helmet';
function Search() {
    const { id } = useParams();
    const [films, setFilms] = useState([]);
    const [error, setError] = useState(null);
    const [page,setPage]= useState(1);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`https://phim.nguonc.com/api/films/search?keyword=`+id+`&page=`+page);
                if(response.data.items.length==0){
                    window.location.replace('/vu-tru-phim')
                }
                setFilms(response.data.items);
                setError(null); // Clear any previous error
            } catch (err) {
                if (err.response && err.response.status === 404) {
                    // Handle 404 Not Found error
                } else {
                    // Handle other errors
                    setError('An error occurred while fetching data.');
                    console.error('Error fetching data:', err);
                }
            }
        };

        fetchData();
    }, [id,page]);

    if (error) {
        return <p>{error}</p>; // Display error message
    }
    return (
        <>
         <Helmet>
        <title>Tìm kiếm</title>
        <meta name="description" content={'Tìm kiếm'} />
      </Helmet>
            <Header />
            <div className="bg-dark text-light">
                <div className="container pt-3 ">
                    <div className="row mt-2">
                        <h4>
                            Phim mới
                        </h4>
                        <hr />
                    </div>
                    <div className="row mb-3">
                        {films.length > 0 && films.map((item, index) => (
                            <div className="col-md-4 mb-3 shadow">
                                <a style={{ textDecoration: "none" }} href={"/vu-tru-phim/" + item.slug}>
                                    <div class="card bg-dark shadow">
                                        <div class="card-body">
                                            <div className="row">
                                                <img src={item.poster_url} className='img-fluid' style={{ height: '300px', width: "auto", margin: '0px auto' }} alt="" />
                                            </div>
                                            <div className="row">
                                                <div className="col-md text-center">
                                                    <h4 className='text-light pt-2'>{item.name}</h4>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        ))}
                        <div className="row text-center">
                            <div className="col-md ">
                                <button className="btn btn-warning mx-2" onClick={(e) => setPage(page - 1)}> &lt;&lt; </button>
                                <button className="btn btn-warning mx-2" onClick={(e) => setPage(page + 1)}> &gt;&gt; </button>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />

                <Footer />

            </div>
        </>
    )
}

export default Search