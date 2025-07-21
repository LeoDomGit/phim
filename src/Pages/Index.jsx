import React, { useEffect, useState } from 'react'

import Header from "../Components/Header";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "../css/film.css";
import { Pagination } from 'swiper/modules';
import Footer from '../Components/Footer';
import { Helmet } from 'react-helmet';
function Index() {
  const [films, setFilms] = useState([]);
  const [newFilms, setNewFilms] = useState([]);
  useEffect(() => {
    fetch('https://phim.nguonc.com/api/films/phim-moi-cap-nhat').then((res) => res.json())
      .then((res) => {
        setFilms(res.items);
      })
    fetch('https://phim.nguonc.com/api/films/the-loai/viet-nam').then((res) => res.json())
      .then((res) => {
        setNewFilms(res.items);
      })
  }, [])
  return (
    <>
      <Helmet>
        <title>Vũ trụ phim</title>
        <meta name="description" content='Vũ trụ phim' />
      </Helmet>
      <Header />
      <div className="bg-dark text-light">
        <div className="container pt-3 ">
          <Swiper
            slidesPerView={'auto'}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {films.map((film) => (
              <SwiperSlide key={film.slug}>
                <a href={"/vu-tru-phim/"+film.slug}>
                <img src={film.poster_url} alt={film.name} style={{ width: '100%', borderRadius: '10px' }} />
                <div className="text-center mt-2">
                </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="row mt-2">
            <h4>
              Phim mới
            </h4>
            <hr />
          </div>
          <div className="row mb-3">
            {films.length>0 && films.map((item,index)=>(
              <div className="col-md-4 mb-3 shadow">
               <a style={{textDecoration:"none"}} href={"/vu-tru-phim/"+item.slug}>
               <div class="card bg-dark shadow">
                  <div class="card-body">
                    <div className="row">
                      <img src={item.poster_url} className='img-fluid' style={{height:'300px',width:"auto",margin:'0px auto'}} alt="" />
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
          </div>
          <div className="row mt-2">
            <h4>
              Phim Việt Nam
            </h4>
            <hr />
          </div>
          <div className="row mb-3">
            {newFilms.length>0 && newFilms.map((item,index)=>(
              <div className="col-md-4 mb-3 shadow">
                <div class="card bg-dark shadow">
                  <div class="card-body">
                    <div className="row">
                      <img src={item.poster_url} className='img-fluid' style={{height:'300px',width:"auto",margin:'0px auto'}} alt="" />
                    </div>
                    <div className="row">
                      <div className="col-md text-center">
                        <h4 className='text-light pt-2'>{item.name}</h4>
                      </div>
                    </div>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
        <hr />

        <Footer/>

      </div>
    </>
  )
}

export default Index