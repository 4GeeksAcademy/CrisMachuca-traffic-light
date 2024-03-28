import React, { useState } from "react";


const TrafficLight = () => {
    const colors = ["red", "yellow", "green"];
    const [ color, setColor] = useState("");
   
    const getRandomColor = () => {
        const randomIndex = Math.floor(Math.random() * colors.length);
        return colors[randomIndex];
    };

    const handleColorChange = () => {
        const currentColorIndex = colors.indexOf(color);
        let randomColorIndex = currentColorIndex;
        while (randomColorIndex === currentColorIndex) {
            randomColorIndex = Math.floor(Math.random() * colors.length);
        }
        setColor(colors[randomColorIndex]);
    };
    return (
        <>
        
        <h1>The Traffic Light</h1>
        <div className="container-fluid d-flex flex-column">
           
            <div className="traffic-light-container">
                <div className="traffic-light">
                    <button className={`light red ${color === "red" && "active-red"}`}
                    onClick={() => setColor("red")}></button>
                    <button className={`light yellow ${color === "yellow" && "active-yellow"}`}
                    onClick={() => setColor("yellow")}></button>
                    <button className={`light green ${color === "green" && "active-green"}`}
                    onClick={() => setColor("green")}></button>
                </div>
                <div className="stick"></div>
            </div>
            <div className="box-buttons d-flex flex-column">
                <p className="buttons-text text-center">You can change colors</p>
                <button className="random-color-button" onClick={handleColorChange}><span>Random</span></button>
            </div>
        </div>
        <footer>Designed by Cris Machuca for <span className="footer-span">4Geeks Academy</span></footer>
        
        </>
    )
}

export default TrafficLight