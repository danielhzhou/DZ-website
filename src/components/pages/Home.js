import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../SliderData';
import MeTitle from '../MeTitle';
import EndingSection from '../EndingSection';
import Projects from '../Projects';
import Art from '../Art';

function Home () {
    return(
        <>
        <HeroSection />
        <MeTitle />
        <ImageSlider id slides={SliderData}/>
        <Cards />
        <Projects />
        <Art />
        <EndingSection />
        </>
    )
}

export default Home;