import React, { useState } from 'react';
import { SBD } from './SBD';
import { NavLink } from 'react-router-dom';
import './ImgSSB.css';

const ImgSSB = ({ slides }) => {
    const [current, setCurrent] = useState(0);
    const length = slides.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    };
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1);
    };

    if (!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }

    return (
        <div className='smallBird'>
            <section className='slider'>
                <div className='slider-pic'>
                    <div className='prev-btn' onClick={prevSlide}>
                        <i className="fas fa-caret-left"></i>
                    </div>
                    <div className='next-btn' onClick={nextSlide}>
                        <i className="fas fa-caret-right"></i>
                    </div>
                    {SBD.map((slide, index) => {
                        return (
                            <div className={index === current ? 'slide active' : 'slide'} key={index}>
                                {index === current && (
                                    <img src={slide.image} alt='small bird' className='image' />
                                )}
                            </div>
                        );
                    })}
                </div>
                <div className='desc-box'>
                    <NavLink to='/productSmallBird'>
                        <button type='button'>
                            Small Parrots
                        </button>
                    </NavLink>
                </div>
            </section>
        </div>

    )
}

export default ImgSSB;


