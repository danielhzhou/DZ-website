import React from 'react';
import '../../App.css';
import HeroSection from '../HeroSection';
import Cards from '../Cards';
import ImageSlider from '../ImageSlider';
import {SliderData} from '../SliderData';
import MeTitle from '../MeTitle';
import EndingSection from '../EndingSection';
import ProjectsA from'../ProjectsA'
import ProjectsB from '../ProjectsB'
import ProjectsC from '../ProjectsC'
import ProjectsD from '../ProjectsD'
import ProjectsE from '../ProjectsE'
import ProjectsF from '../ProjectsF'
import ProjectsG from '../ProjectsG'
import Art from '../Art';

function Home () {
    return(
        <>
        <HeroSection />
        <MeTitle />
        <ImageSlider id slides={SliderData}/>
        <Cards />
        <ProjectsA />
        <ProjectsD />
        <ProjectsC />
        <ProjectsB />
        <ProjectsE />
        <ProjectsF />
        <ProjectsG />
        <Art />
        <EndingSection />
        </>
    )
}

export default Home;