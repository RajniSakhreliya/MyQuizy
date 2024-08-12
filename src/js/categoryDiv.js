import '../css/categoryDiv.scss'

import { useState } from "react";
import Lottie from "lottie-react";
import animationData from '../assets/live_dot.json';
import coinImg from "../assets/coin.svg"
import { useNavigate } from "react-router-dom";

const CategoryDiv = () => {

    const navigateToNext = useNavigate();

    function mathRamdom(max, min) {
        return `${`${Math.random() * (max - min) + min}`.split(".")[0]}`;
    }

    try {
        var arr = JSON.parse(atob(localStorage.getItem('categoryData')));
        if (!arr) {
            navigateToNext('/start')
            return
        }
    } catch (error) {
        navigateToNext('/start')
    }


    const hadelClick = (valyu) => {
        localStorage.setItem('categoryKey', ((valyu)))
        navigateToNext('/joinquiz')
    }

    return (
        <>
            {
                arr?.map((element, index) => {
                    return (
                        <div key={index}>
                            <div className='ContestsScience'>
                                <div className='Contests-componet'>
                                    <div className='ContestsImg-componet'><img src={element?.img} alt="img" /></div>
                                    <div className='ContestsDerivation-componet'>

                                        <div className='category-title'>
                                            {element?.category}
                                        </div>

                                        <div className='live'>
                                            <h4>
                                                <div className='Lottie'>
                                                    <div >
                                                        <Lottie
                                                            animationData={animationData}
                                                            loop={true}
                                                        />
                                                    </div>
                                                </div>
                                                Live
                                            </h4>
                                        </div>

                                        <div style={{ marginTop: "5px", display: "flex", flexDirection: "row", justifyContent: "center", verticalAlign: "middle", fontSize: "14px", alignItems: "center", fontWeight: "bold" }}>
                                            Play and win {element?.coin} <span style={{ marginLeft: "0px", verticalAlign: "middle", margin: "auto" }}><img src={coinImg} alt="" /></span>
                                        </div>

                                        <div style={{ marginTop: "5px", textAlign: "start", }}>
                                            <p style={{ whiteSpace: "nowrap" }}>
                                                Winner announcement @8:30PM
                                            </p>
                                        </div>

                                        <div className='entryCoin-componet' style={{ marginTop: "8px" }}>
                                            <div style={{ verticalAlign: "middle", width: "84px", display: "flex", alignItems: "center" }}>
                                                <p style={{ display: "flex", width: '100%', alignItems: "center" }}>
                                                    Entry : <b>{"" + element?.Entry}</b> <samp >
                                                        <img src={coinImg} width='18px' style={{ marginTop: "5px", marginLeft: "2px" }} alt="coin-icon" /></samp>
                                                </p>
                                            </div>

                                            <div>
                                                <h5 style={{ fontWeight: "200", whiteSpace: "nowrap", marginTop: "8px" }}>
                                                    <b>{mathRamdom(1000, 3000)}</b> User playing
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='ContestsPlay-btn'>
                                        <button onClick={() => hadelClick(element?.category)}>
                                            <div>Play</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </>
    )
}

export default CategoryDiv;