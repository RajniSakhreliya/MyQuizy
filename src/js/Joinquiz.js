import '../css/Joinquiz.scss';
import Navbar from './Views/Navbar';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import coinMenus from './Coinmenu/coinmenus';
import coinImg from '../assets/coin.svg';
import close from '../assets/close.svg';
import single_coin from '../assets/single_coin.svg';
import { GAME_TIMER } from "./Constant/Constant";
import Tagline from "./Views/TaglineBottom";

const Joinquiz = () => {

    const [data, setData] = useState()
    const navigateToNext = useNavigate()
    const [login, setLogin] = useState(false)
    const [PrizesRank, setPrizesRank] = useState(false)
    const [loginData, setLoginData] = useState('')

    const entryFees = 50;

    useEffect(() => {
        try {
            getdata()
            getLoginDatat()
            if (JSON.parse((localStorage.getItem('userData')))) {
                setLoginData(JSON.parse((localStorage.getItem('userData'))))
            }
            // ApiData()
            getLocalStorage()
        } catch (e) {
        }
    }, [])

    const getLocalStorage = () => {
        if (localStorage.getItem('categoryData')) {
        } else {
            window.location.replace('/')
        }
    }

    const hadelClick = (valyu) => {
        try {
            coinMenus(data?.Entry)
            navigateToNext('/home')
        } catch (e) {
        }
    }

    const getdata = async () => {
        try {
            let datas = await JSON.parse(atob(localStorage.getItem('categoryData')))
            let data = await JSON.parse((localStorage.getItem('data')))

            let dataFilter = datas.filter(category => category.category == localStorage.getItem('categoryKey'))
            let Filter = data.filter(data => data.category == localStorage.getItem('categoryKey'))
            localStorage.setItem('QuestionDatas', (JSON.stringify(Filter)))

            dataFilter.map((categoryData) => {
                setData(categoryData);
            });
        } catch (e) {
        }
    }

    const getLoginDatat = async () => {
        try {
            // setLoginData(JSON.parse(atob(localStorage.getItem('userData'))));
        } catch (e) { }
    }

    const { innerWidth: width, innerHeight: height } = window;

    return (
        <div className='Joinquiz' style={{ minHeight: height }}>
            <Navbar />

            <div className='Joinquiz-componet'>
                <div className='Joinquiz-img'>
                    <img className='contentImg' src={data?.img} alt={data?.category} />

                    <dir style={{ marginLeft: "10px" }}>
                        <h2>{data?.category}</h2>
                        <h3 style={{ display: 'flex', alignItems: "center", verticalAlign: "middle" }}>Play and win {data?.coin}<span style={{ marginLeft: "4px", verticalAlign: "middle" }}><img src={coinImg} alt="" /></span></h3>
                    </dir>
                </div>

                <div className='Joinquiz-condensing'>
                    <p>You’ve got {GAME_TIMER} seconds to answer all questions Answer as many questions as you can. Entry fee will be {data?.Entry} <span style={{ marginLeft: "4px", verticalAlign: "middle", margin: "auto" }}><img src={coinImg} alt="" /></span></p>
                </div>

                <div className='Joinquiz-condensing'>
                    <p>Join and save the coins you win! Its free & safe!</p>
                </div>

                {loginData?.email?.length > 0 ?
                    <div className="JoinQuiz-componet">
                        {/* <button
                                onClick={hadelClick}
                            >
                                <dir>
                                    <h1 className="JoinQuiz-btn">Play</h1>
                                </dir>
                            </button> */}
                    </div>
                    :
                    <>
                        <div className="JoinQuiz-componet">
                            {/* <button
                                    onClick={() => [navigateToNext('/login')]}
                                >
                                    <dir>
                                        <h1 className="JoinQuiz-btn">Join Quiz</h1>
                                    </dir>
                                </button> */}
                        </div>
                        <div className="PlayAsGuest-componet">
                            <button onClick={hadelClick}>
                                Play as Guest
                            </button>
                        </div>
                    </>
                }
            </div>

            <div className='ViewPrizes'>
                <div className="JoinQuiz-componet" onClick={() => { setPrizesRank(true) }}>
                    View Prizes
                </div>

                <div className="JoinQuiz-componet" onClick={() => { window.open("/contest-rules", "_blank") }}>
                    Contest Rules
                </div>
            </div>

            {PrizesRank ?
                <div className='PrizesRank-main'>
                    <div className='PrizesRank-close'>
                        <div onClick={() => { setPrizesRank(false) }}>
                            <img src={close} width='13px' alt="close-icon" />
                        </div>
                    </div>

                    <div className='PrizesRank-title'>
                        <h3>Prizes Rank List</h3>
                    </div>

                    <dir>
                        <div className='PrizesRank'>
                            <div>
                                <h5>Rank 1</h5>
                            </div>
                            <div className='PrizesRank-coin'><samp><img src={single_coin} alt="single_coin" width={'20px'} /></samp><samp style={{ paddingLeft: '5px' }}> </samp> 2,000</div>
                        </div>

                        <div className='PrizesRank'>
                            <div>
                                <h5>Rank 2 - 10</h5>
                            </div>
                            <div className='PrizesRank-coin'><samp><img src={single_coin} alt="single_coin" width={'20px'} /></samp><samp style={{ paddingLeft: '5px' }}> </samp> 750</div>
                        </div>

                        <div className='PrizesRank'>
                            <div>
                                <h5>Rank 11 - 50</h5>
                            </div>
                            <div className='PrizesRank-coin'><samp><img src={single_coin} alt="single_coin" width={'20px'} /></samp><samp style={{ paddingLeft: '5px' }}> </samp> 500</div>
                        </div>

                        <div className='PrizesRank'>
                            <div>
                                <h5>Rank 51 - 200</h5>
                            </div>
                            <div className='PrizesRank-coin'><samp><img src={single_coin} alt="single_coin" width={'20px'} /></samp><samp style={{ paddingLeft: '5px' }}> </samp> 320</div>
                        </div>

                        <div className='PrizesRank'>
                            <div>
                                <h5>Rank 201 - 500</h5>
                            </div>
                            <div className='PrizesRank-coin'><samp><img src={single_coin} alt="single_coin" width={'20px'} /></samp><samp style={{ paddingLeft: '5px' }}> </samp> 125</div>
                        </div>

                        <div className='PrizesRank'>
                            <div>
                                <h5>Rank 501 - 1000</h5>
                            </div>
                            <div className='PrizesRank-coin'><samp><img src={single_coin} alt="single_coin" width={'20px'} /></samp><samp style={{ paddingLeft: '5px' }}> </samp> 50</div>
                        </div>
                    </dir>
                </div>
                :
                <></>
            }

            <Tagline />
        </div>
    )
}

export default Joinquiz;