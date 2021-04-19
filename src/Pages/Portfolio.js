import React from "react";

import ProjectCard from '../Components/ProjectCard';

import DesperadoLogo from '../Assets/img/desperado-logo.png';
import BettiLogo from '../Assets/img/betti-logo.png';
import GOLLogo from '../Assets/img/gol-logo.png';
import WeatherLogo from '../Assets/img/weather-logo.png';
import HightopLogo from '../Assets/img/hightop-logo.png';
import QuizLogo from '../Assets/img/quiz-logo.png';


export default class Portfolio extends React.Component {

    render() {
        return (
            <div className="container">
                <div className="row">
                    <ProjectCard name="Desperado" imgSrc={DesperadoLogo} ghLink="https://github.com/DomenicBeall/desperado" deployLink=""/>
                    <ProjectCard name="Betti" imgSrc={BettiLogo} ghLink="https://github.com/h-mai/Project-2" deployLink="https://boiling-mountain-46833.herokuapp.com/"/>
                    <ProjectCard name="Conways Game of Life" imgSrc={GOLLogo} ghLink="https://github.com/DomenicBeall/GameOfLife" deployLink="https://domenicbeall.github.io/GameOfLife/"/>
                </div>
                <div className="row">
                    <ProjectCard name="Hightop Design" imgSrc={HightopLogo} ghLink="https://github.com/DomenicBeall/Hightop-Design-Website" deployLink=""/>
                    <ProjectCard name="Weather Dashboard" imgSrc={WeatherLogo} ghLink="https://github.com/DomenicBeall/WeatherDashboard" deployLink="https://domenicbeall.github.io/WeatherDashboard/"/>
                    <ProjectCard name="Code Quiz" imgSrc={QuizLogo} ghLink="https://github.com/DomenicBeall/CodeQuiz" deployLink="https://domenicbeall.github.io/CodeQuiz/"/>
                </div>
            </div>
        )
    }

}