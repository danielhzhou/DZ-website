import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../SliderData';
import MeTitle from '../MeTitle';

function Home () {
    return(
        <>
        <HeroSection />
        <MeTitle />
        <ImageSlider id slides={SliderData}/>
        <Cards />
        </>
    )
}

export default Home;