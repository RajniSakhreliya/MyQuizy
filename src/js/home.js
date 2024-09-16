import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import audiencePoll from '../assets/poll.svg';
import freezeTimer from '../assets/freez_timer.svg';
import flipQuestion from '../assets/flip_question.svg';
import fiptFipt from '../assets/50_50.svg';
import { coinGet, totlQuestions, correctAnswer } from './Slice';
import { useDispatch, useSelector } from "react-redux";
import { GAME_TIMER } from "./Constant/Constant";
import '../css/home.scss';
import close from '../assets/close.svg';
import coinImg from '../assets/coin.svg';
import logoTop from '../assets/logo_top.png';

const Home = () => {

    function mathRamdom(max, min) {
        return `${`${Math.random() * (max - min) + min}`.split(".")[0]}`;
    }

    useEffect(() => {
        getLocalStorage()
        localStorage.setItem('CurrentRank', mathRamdom(1, 60))
    }, [])

    const getLocalStorage = () => {
        if (localStorage.getItem('data') && localStorage.getItem('categoryData') && JSON.parse((localStorage.getItem('QuestionDatas')))) {
        } else {
            window.location.replace('/start')
        }
    }

    //redux
    const dispatch = useDispatch()
    const Selector = useSelector(coinGet)
    //coin
    const [coin, setCoin] = useState(0)

    const [index, setIndex] = useState(0)
    const [indexs, setIndexs] = useState(0)
    const [Datas, setDatas] = useState({})
    const [answer, setAnswer] = useState('')
    const [questionIncorrect, setQuestionIncorrect] = useState(0)
    const [lifelinesDisplay, setLifelinesDisplay] = useState(false)

    const [questionCorrect, setQuestionCorrect] = useState(0)
    const [yourscorre, setYourscorre] = useState(0)

    //Timer
    const [topTimer, setTopTimer] = useState(GAME_TIMER);
    const [topTimerStart, setTopTimerStart] = useState(false);
    const firstStart = useRef(true);
    const tick = useRef();

    //Option-animation
    const [optionAnimationA, setOptionAnimationA] = useState('option');
    const [optionAnimationB, setOptionAnimationB] = useState('option');
    const [optionAnimationC, setOptionAnimationC] = useState('option');
    const [optionAnimationD, setOptionAnimationD] = useState('option');

    // totlQestion
    const [totlQestion, setTotlQestion] = useState(0)

    // boxShadow
    const [boxShadowA, setboxShadowA] = useState('#2B3447');
    const [boxShadowB, setboxShadowB] = useState('#2B3447');
    const [boxShadowC, setboxShadowC] = useState('#2B3447');
    const [boxShadowD, setboxShadowD] = useState('#2B3447');

    // fontColor
    const [fontColorA, setFontColorA] = useState('#fff');
    const [fontColorB, setFontColorB] = useState('#fff');
    const [fontColorC, setFontColorC] = useState('#fff');
    const [fontColorD, setFontColorD] = useState('#fff');

    // opacityBtn
    const [opacityA, setOpacityA] = useState('1');
    const [opacityB, setOpacityB] = useState('1');
    const [opacityC, setOpacityC] = useState('1');
    const [opacityD, setOpacityD] = useState('1');

    const [popup, setPopup] = useState(false)
    const [popupFn, setPopupFn] = useState('')
    const [popupTitle, setPopupTitle] = useState('')
    const [popupDesc, setPopupDesc] = useState('')

    useEffect(() => {
        setCoin(localStorage.getItem('coin'))
        getCategoryData()
        setTopTimerStart(true);
        localStorage.setItem('time', 'time');
        dispatch(correctAnswer())
    }, [])

    useEffect(() => {
        localStorage.setItem('totlQestion', totlQestion)
        dispatch(totlQuestions(totlQestion));
    }, [totlQestion])

    useEffect(() => {
        localStorage.setItem('correctAnswer', questionCorrect)
    }, [questionCorrect])

    useEffect(() => {
        localStorage.setItem('wrongAnswer', questionIncorrect)
    }, [questionIncorrect])

    useEffect(() => {
        localStorage.setItem('yourscorre', yourscorre)
    }, [yourscorre])

    useEffect(() => {
        if (firstStart.current) {
            firstStart.current = !firstStart.current;
            return;
        }

        if (topTimerStart) {
            tick.current = setInterval(() => {
                setTopTimer((topTimer) => topTimer - 1);
            }, 1000);
        } else {
            clearInterval(tick?.current);
        }

        return () => clearInterval(tick.current);
    }, [topTimerStart]);

    const freezeTimerCall = () => {
        setColorToggleStart('grey')
        setLifelinesToggleStart('none')
        setLifelinesDisplay(true)
        setTopTimerStart(!topTimerStart);
    };

    const dispSecondsAsMins = (seconds) => {
        if (seconds <= 0) {
            window.location.replace('/score')
        }
        return (seconds <= 0 ? "00" : seconds.toString());
    };

    useEffect(() => { getData() }, [])
    useEffect(() => { getData() }, [index])

    const correctAns = answer;

    //color
    const [colorA, setcolorA] = useState("#2B3447")
    const [colorB, setcolorB] = useState("#2B3447")
    const [colorC, setcolorC] = useState("#2B3447")
    const [colorD, setcolorD] = useState("#2B3447")

    //btnDisabled
    const [btnDisabledA, setBtnDisabledA] = useState(0)
    const [btnDisabledB, setBtnDisabledB] = useState(0)
    const [btnDisabledC, setBtnDisabledC] = useState(0)
    const [btnDisabledD, setBtnDisabledD] = useState(0)

    const hadelClick = (currentClick) => {
        if (!topTimerStart) {
            freezeTimerCall();
        }

        setBtnDisabledA(2)
        setBtnDisabledB(2)
        setBtnDisabledC(2)
        setBtnDisabledD(2)

        if (currentClick == "a") {
            if (currentClick == correctAns) {
                setcolorA("#1DBA5C")
                setboxShadowA("linear-gradient(to top, #1DBA5C , #fff)")

            } else {
                setcolorA("red")
                setOptionAnimationA('option-animation')
            }
        } else {
            setcolorA("#2B3447")
        }

        if (currentClick == "b") {
            if (currentClick == correctAns) {
                setcolorB("#1DBA5C")
                setboxShadowB("linear-gradient(to top, #1DBA5C , #fff)")
            } else {
                setOptionAnimationB('option-animation')
                setcolorB("red")
            }
        } else {
            setcolorB("#2B3447")
        }

        if (currentClick == "c") {
            if (currentClick == correctAns) {
                setcolorC("#1DBA5C")
                setboxShadowC("linear-gradient(to top, #1DBA5C , #fff)")

            } else {
                setOptionAnimationC('option-animation')
                setcolorC("red")
            }
        } else {
            setcolorC("#2B3447")
        }

        if (currentClick == "d") {
            if (currentClick == correctAns) {
                setcolorD("#1DBA5C")
                setboxShadowD("linear-gradient(to top, #1DBA5C , #fff)")

            } else {
                setOptionAnimationD('option-animation')
                setcolorD("red")
            }
        } else {
            setcolorD("#2B3447")
        }

        const intervalQuestio = setInterval(() => {
            if (correctAns == "a") {
                setcolorA("#1DBA5C")
                setboxShadowA("linear-gradient(to top, #1DBA5C , #fff)")
            } else if (correctAns == "b") {
                setcolorB("#1DBA5C")
                setboxShadowB("linear-gradient(to top, #1DBA5C , #fff)")
            } else if (correctAns == "c") {
                setcolorC("#1DBA5C")
                setboxShadowC("linear-gradient(to top, #1DBA5C , #fff)")
            } else if (correctAns == "d") {
                setcolorD("#1DBA5C")
                setboxShadowD("linear-gradient(to top, #1DBA5C , #fff)")
            }
            setLifelinesDisplay(false)
            clearInterval(intervalQuestio)
        }, 300);

        const intervalQuestios = setInterval(() => {
            const score = localStorage.getItem('yourscorre')
            const coin = localStorage.getItem('coin');
            if (index + 1 == totlQestion) {
                // localStorage.setItem('home', true)
                // navigateToNext('/score')
                localStorage.setItem('coin', (parseInt(coin) + (score / 10)))

                window.location.replace('/score')
            }
            clearInterval(intervalQuestios)
        }, 700);

        if (currentClick == correctAns) {
            if (questionCorrect < totlQestion) {
                setQuestionCorrect(questionCorrect + 1)
                setYourscorre(yourscorre + 1 * 20)
            }
        } else {
            if (questionIncorrect < totlQestion) {
                setQuestionIncorrect(questionIncorrect + 1)
                setYourscorre(yourscorre - 10)
            }
        }

        const intervalQuestion = setInterval(() => {
            setBtnDisabledA(0)
            setBtnDisabledB(0)
            setBtnDisabledC(0)
            setBtnDisabledD(0)

            setcolorA("#2B3447")
            setcolorB("#2B3447")
            setcolorC("#2B3447")
            setcolorD("#2B3447")
            clearInterval(intervalQuestion)
            setOptionAnimationA('option')
            setOptionAnimationB('option')
            setOptionAnimationC('option')
            setOptionAnimationD('option')

            setboxShadowA("#2B3447")
            setboxShadowB("#2B3447")
            setboxShadowC("#2B3447")
            setboxShadowD("#2B3447")

            setOpacityA('1')
            setOpacityB('1')
            setOpacityC('1')
            setOpacityD('1')

            setFontColorA("#fff")
            setFontColorB("#fff")
            setFontColorC("#fff")
            setFontColorD("#fff")
        }, 1000);
        const indexQuvesn = setInterval(() => {
            setIndex(index + 1)
            clearInterval(indexQuvesn)

        }, 1300)
        let questionTotl = questionCorrect + questionIncorrect
        if (questionTotl == 5) {
            setBtnDisabledA(2)
            setBtnDisabledB(2)
            setBtnDisabledC(2)
            setBtnDisabledD(2)
        }

    }

    const popupClick = (key, isCoin) => {
        if (key == 'flipquestion') {
            setPopupTitle('Use Flip Question Lifeline');
            setPopupDesc('The flip the question be paused for 30 seconds to allow more time to answer the question.')

        } else if (key == "freezetimer") {
            setPopupTitle('Use Freeze Timer Lifeline');
            setPopupDesc('The freeze timer be paused for 30 seconds to allow more time to answer the question.')

        } else if (key == "audiencePol") {
            setPopupTitle('Use Audience Poll Lifeline');
            setPopupDesc('The audience poll be paused for 30 seconds to allow more time to answer the question.')

        } else if (key == "50-50") {
            setPopupTitle('Use 50:50 Lifeline');
            setPopupDesc('The 50-50 will be paused for 30 seconds to allow more time to answer the question.')
        }

        setPopup(true)
        setPopupFn(key)

        if (isCoin) {
            const coin = localStorage.getItem('coin');
            localStorage.setItem('coin', (parseInt(coin) - 20));
        }

        if (popup == true) {
            if (key == 'flipquestion') {
                FlipQuestion();

            } else if (key == "freezetimer") {
                freezeTimerCall();

            } else if (key == "audiencePol") {
                audiencePol();

            } else if (key == "50-50") {
                fifty_fifty();
            }
        }
    }

    const getData = async () => {
        try {
            const data = await JSON.parse((localStorage.getItem('QuestionDatas')));

            let dataFilter = data.filter(name => name.FlipQuestion == false);

            if (dataFilter.length > 20) {
                dataFilter.splice(20);
            }
            setTotlQestion(dataFilter.length);
            // setTopTimer(quizTimerStart);

            dataFilter?.map((questionData, indexs) => {
                if (indexs == index) {
                    setDatas(questionData)
                    const intervalQuestion = setInterval(() => {
                        clearInterval(intervalQuestion)
                    }, 1300)
                    setIndexs(indexs - 1)
                    setAnswer((questionData?.answer).toString().toLowerCase())
                }

            })
        } catch (error) {
            
        }
    }

    const [categoryData, setCategoryData] = useState([])

    const getCategoryData = async () => {
        try {
            let datas = await JSON.parse(atob(localStorage.getItem('categoryData')))
            let dataFilter = await datas.filter(category => category.category == localStorage.getItem('categoryKey'));

            dataFilter.map((categoryData) => {
                setCategoryData(categoryData);
            });
        } catch (error) {
        }
    }


    //lifelinesDisabled
    const [lifelinesAudiencePoll, setLifelinesAudiencePoll] = useState('auto')
    const [lifelinesaudiencePol, setLifelinesaudiencePol] = useState('auto')
    const [lifelinesFlipQuestion, setLifelinesFlipQuestion] = useState('auto')
    const [lifelinesToggleStart, setLifelinesToggleStart] = useState('auto')

    //lifelinesDisabledColor
    const [colorAudiencePoll, setColorAudiencePoll] = useState('white')
    const [coloraudiencePol, setColoraudiencePol] = useState('white')
    const [colorFlipQuestion, setColorFlipQuestion] = useState('white')
    const [colorToggleStart, setColorToggleStart] = useState('white')

    const fifty_fifty = () => {
        setColorAudiencePoll('grey')
        setLifelinesAudiencePoll('none')
        setLifelinesDisplay(true)

        let arr = ['a', 'b', 'c', 'd']
        arr.splice(arr.indexOf(correctAns), 1);
        var randomNumber = arr[Math.floor(Math.random() * arr.length)];
        arr.splice(arr.indexOf(randomNumber), 1);

        var firstValue = arr[0];
        var secondValue = arr[1];

        if (firstValue == "a" || secondValue == "a") {
            setcolorA("#2B3447");
            // setboxShadowA("linear-gradient(to top, #1DBA5C , #fff)")
            setBtnDisabledA(2);
            setFontColorA('#2B3447')
        }

        if (firstValue == "b" || secondValue == "b") {
            setcolorB("#2B3447");
            // setboxShadowB("linear-gradient(to top, #1DBA5C , #fff)")
            setBtnDisabledB(2);
            setFontColorB('#2B3447')
        }

        if (firstValue == "c" || secondValue == "c") {
            setcolorC("#2B3447");
            // setboxShadowC("linear-gradient(to top, #1DBA5C , #fff)")
            setBtnDisabledC();
            setFontColorC('#2B3447')
        }

        if (firstValue == "d" || secondValue == "d") {
            setcolorD("#2B3447");
            // setboxShadowD("linear-gradient(to top, #1DBA5C , #fff)")
            setBtnDisabledD(2);
            setFontColorD('#2B3447')
        }
    }

    const audiencePol = () => {

        setColoraudiencePol('grey')
        setLifelinesaudiencePol('none')
        setLifelinesDisplay(true)

        if (correctAns == "a") {
            setcolorA("#1DBA5C")

            setOpacityB("0.2")
            setOpacityC("0.2")
            setOpacityD("0.2")
            setboxShadowA("linear-gradient(to top, #1DBA5C , #fff)");

        } else if (correctAns == "b") {
            setcolorB("#1DBA5C")

            setOpacityA("0.2")
            setOpacityC("0.2")
            setOpacityD("0.2")
            setboxShadowB("linear-gradient(to top, #1DBA5C , #fff)")

        } else if (correctAns == "c") {
            setcolorC("#1DBA5C")

            setOpacityA("0.2")
            setOpacityB("0.2")
            setOpacityD("0.2")
            setboxShadowC("linear-gradient(to top, #1DBA5C , #fff)")

        } else if (correctAns == "d") {
            setcolorD("#1DBA5C")

            setOpacityA("0.2")
            setOpacityB("0.2")
            setOpacityC("0.2")
            setboxShadowD("linear-gradient(to top, #1DBA5C , #fff)")
        }
    }

    const FlipQuestion = async () => {
        setLifelinesDisplay(true)
        setColorFlipQuestion('grey')
        setLifelinesFlipQuestion('none')

        const data = await JSON.parse((localStorage.getItem('data')))
        let flipQuestions = data.filter(name => name.FlipQuestion == true)
        flipQuestions.map(flipQuestion => {
            setDatas(flipQuestion)
        });
    }

    const { innerWidth: width, innerHeight: height } = window;

    return (
        <div className="home" style={{ minHeight: height }}>

            <div className='QuizStart'>
                <div className='logoImageTop'>
                    <a href="/"><img src={logoTop} alt="coin" /></a>
                </div>

                <div className='score-conterner'>
                    <img src={coinImg} alt="" />
                    <div className='scoreDesc'>
                        <div style={{ marginRight: "5px" }}>
                            {yourscorre.toString()}
                        </div>

                        <div>
                            coins
                        </div>
                    </div>
                </div>
            </div>

            <div className='Question-contenr'>

                <div className='timerQue'>
                    <div className='questionContainerTop'>
                        <div>Question :</div>

                        <div style={{ fontWeight: "bold", marginLeft: "5px" }}> {indexs + 2}/
                            {totlQestion}
                        </div>
                    </div>

                    <div className='timerC'>
                        <div className='taymer-Conterner'>
                            <div className='taymer-topTimer'>{dispSecondsAsMins(topTimer)}</div>
                            <p style={{ marginLeft: "5px" }}>sec</p>
                        </div>
                    </div>
                </div>

                <h3 className='Question'>{Datas?.Question}</h3>

                <div className='options-contenr'>
                    <button className={optionAnimationA} disabled={btnDisabledA > 1} style={{ background: boxShadowA }} onClick={() => { hadelClick("a") }}>
                        <div style={{ backgroundColor: colorA, color: fontColorA, opacity: opacityA }} className='btn-div'>
                            <div>{Datas?.options?.a}</div>
                        </div>
                    </button>

                    <button style={{ background: boxShadowB, }} disabled={btnDisabledB > 1} onClick={() => { hadelClick("b") }} className={optionAnimationB}>
                        <div style={{ backgroundColor: colorB, color: fontColorB, opacity: opacityB }} className='btn-div'>
                            <div>{Datas?.options?.b}</div>
                        </div>
                    </button>

                    <button style={{ background: boxShadowC, }} disabled={btnDisabledC > 1} onClick={() => { hadelClick("c") }} className={optionAnimationC}>
                        <div style={{ backgroundColor: colorC, color: fontColorC, opacity: opacityC }} className='btn-div'>
                            <div>{Datas?.options?.c}</div>
                        </div>
                    </button>

                    <button style={{ background: boxShadowD, }} disabled={btnDisabledD > 1} onClick={() => { hadelClick("d") }} className={optionAnimationD}>
                        <div style={{ backgroundColor: colorD, color: fontColorD, opacity: opacityD }} className='btn-div'>
                            <div>{Datas?.options?.d}</div>
                        </div>
                    </button>

                </div>
            </div>

            <div className='cor-componet'>
                <h1 className='rek' style={{ color: "rgb(31, 179, 31)", fontSize: "14px" }}>
                    {questionCorrect}
                    <samp style={{ fontSize: "10px", color: "lightslategray", marginLeft: "5px" }}> Right</samp>
                </h1>

                <h1 className='rek' style={{ color: "red", fontSize: "14px" }}>
                    {questionIncorrect}
                    <samp style={{ fontSize: "10px", color: "lightslategray", marginLeft: "5px" }}> Wrong</samp>
                </h1>
            </div>

            <div style={{ margin: "auto", width: "100%", height: "1px" }}></div>

            <div className="lifelines" style={{ zIndex: 1, position: 'relative' }}>
                <div className='LIFELINES-style'>
                    <p onClick={() => setLifelinesDisplay(!lifelinesDisplay)}>{lifelinesDisplay ? "Lifelines" : "Tap to use Lifelines"}</p>
                </div>

                {lifelinesDisplay ?
                    <div className='lifelines-options'>
                        <div style={{ pointerEvents: lifelinesAudiencePoll, color: colorAudiencePoll }} className='lifeline-contenr' onClick={() => popupClick('50-50', false)}>
                            <div className='lifeline' style={{ borderColor: colorAudiencePoll, color: '#fff' }}>
                                <img src={fiptFipt} style={{ minWidth: "28px" }} alt="AudiencePoll" />
                            </div>

                            <h5>50:50</h5>
                            <div className='marging'></div>
                        </div>

                        <div className='lifeline-contenr' style={{ pointerEvents: lifelinesaudiencePol, color: coloraudiencePol, }} onClick={() => popupClick("audiencePol", false)}>
                            <div style={{ borderColor: coloraudiencePol, }} className='lifeline'                            >
                                <img src={audiencePoll} alt="AudiencePoll" />
                            </div>
                            <h5>Audience Poll</h5>
                        </div>

                        <div className='lifeline-contenr' style={{ pointerEvents: lifelinesToggleStart, color: colorToggleStart }} onClick={() => popupClick('freezetimer', false)}>
                            <div style={{ borderColor: colorToggleStart, }} className='lifeline'>
                                <img src={freezeTimer} alt="freezeTimer" />
                            </div>
                            <h5>Freeze Timer</h5>
                        </div>

                        <div style={{ pointerEvents: lifelinesFlipQuestion, color: colorFlipQuestion }} className='lifeline-contenr'>
                            <div className='lifeline' style={{ pointerEvents: lifelinesFlipQuestion, color: colorFlipQuestion }} onClick={() => popupClick('flipquestion', false)}>
                                <img src={flipQuestion} alt="flipQuestion" />
                            </div>
                            <h5>Flip Question</h5>
                        </div>

                    </div>

                    : <></>
                }
            </div>

            {popup ?
                <div className='popup-mian'>
                    <div className='popup-close'>
                        <div onClick={() => [setPopup(false)]}>
                            <img src={close} width='13px' alt="close-icon" />
                        </div>
                    </div>

                    <div className='popup-description'>
                        <p style={{ marginBottom: "10px" }}>
                            {popupTitle}
                        </p>
                        <p>
                            {popupDesc}
                        </p>
                    </div>

                    <div className="JoinQuiz-componet">
                        <button onClick={() => [popupClick(popupFn, false), setPopup(false)]}>
                            <dir>
                                <h1 className="JoinQuiz-btn">Use for Free</h1>
                            </dir>
                        </button>
                    </div>

                    <div className='ViewPrizes' style={{ display: "none" }}>
                        <div className="JoinQuiz-componet">
                            <button onClick={() => [popupClick(popupFn, true), setPopup(false)]}>
                                <h2 style={{ display: 'flex', alignItems: "center" }} className="JoinQuiz-btn">Use for 20
                                    <samp>
                                        <img src={coinImg} alt="coin" width={'25px'} />
                                    </samp>
                                </h2>
                            </button>
                        </div>
                    </div>
                </div>
                :
                <></>
            }
        </div>
    )
}

export default Home;