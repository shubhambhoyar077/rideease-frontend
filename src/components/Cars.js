import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import { BiSolidLeftArrow, BiSolidRightArrow } from 'react-icons/bi';
import { fetchCars } from '../redux/cars/carsSlice';

function Cars() {
  const cars = useSelector((state) => state.cars.cars) || [];
  const dispatch = useDispatch();
  const sliderRef = useRef(null);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const scrollRight = () => {
    sliderRef.current.slickNext();
  };

  const scrollLeft = () => {
    sliderRef.current.slickPrev();
  };

  function getRandomColor() {
    const r = Math.floor(Math.random() * 155) + 100;
    const g = Math.floor(Math.random() * 155) + 100;
    const b = Math.floor(Math.random() * 155) + 100;
    return `rgb(${r}, ${g}, ${b})`;
  }

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    initialSlide: 0,
    slidesToShow: Math.min(3, cars.length),
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: Math.min(2, cars.length),
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  if (cars.length === 0) {
    return <div>Cars Loading...</div>;
  }

  return (
    <>
      <div className="carousel-car">
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <Slider ref={sliderRef} {...settings}>
          {cars.map((car) => (
            <div key={car.id} className="cars-list">
              <Link to={`car/${car.id}`} className="details-link">
                <div className="cars-card">
                  <div
                    className="circle-color"
                    style={{ backgroundColor: getRandomColor() }}
                  >
                    <img
                      src={car.image}
                      alt={car.name}
                      className="cars-image"
                    />
                  </div>
                  <div className="cars-card-details">
                    <h5 className="car-name">{car.name}</h5>
                    <p className="dots">..............................</p>
                    <p className="car-details">
                      {car.details.slice(0, 30)}
                      {car.details.length > 30 && '...'}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </Slider>
        <div className="carousel-buttons">
          <button type="button" className="btn-cr2" onClick={scrollLeft}>
            <BiSolidLeftArrow />
          </button>
          <button type="button" className="btn-cr" onClick={scrollRight}>
            <BiSolidRightArrow />
          </button>
        </div>
      </div>
    </>
  );
}

export default Cars;
