import { useEffect, useRef, useState } from 'react';
import '../css/start.scss'
import { useNavigate, useSearchParams } from 'react-router-dom';
import {
    coinGet,
    totlQuestions,
    correctAnswer
} from './Slice'
import '../css/start.scss'
import Description from './Views/Description';
import {
    setUsreLogData
} from './Slice';
import { useDispatch, useSelector } from "react-redux";
import { auth } from "./Constant/firebase";
import axios from 'axios';
import Margin from './Views/Margin';
import { categoryApi, dataApi } from '../Const/constant';

const Start = () => {

    const [login, setLogin] = useState()

    const [loader, setLoder] = useState(true)

    //redux
    const dispatch = useDispatch()
    const Selector = useSelector(coinGet)
    //coin
    const [coin, setCoin] = useState(200)

    const [index, setIndex] = useState(0)
    const [questionIncorrect, setQuestionIncorrect] = useState(0)
    const [lifelinesDisplay, setLifelinesDisplay] = useState('lifelines')

    const [questionCorrect, setQuestionCorrect] = useState(0)
    const [yourscorre, setYourscorre] = useState(0)

    //Timer
    const [topTimer, setTopTimer] = useState(100);
    const [topTimerStart, setTopTimerStart] = useState(false);
    const firstStart = useRef(true);
    const tick = useRef();

    //Option-animation
    const [optionAnimationA, setOptionAnimationA] = useState('option');
    const [optionAnimationB, setOptionAnimationB] = useState('option');
    const [optionAnimationC, setOptionAnimationC] = useState('option');
    const [optionAnimationD, setOptionAnimationD] = useState('option');
    // boxShadow
    const [boxShadowA, setboxShadowA] = useState('none');
    const [boxShadowB, setboxShadowB] = useState('none');
    const [boxShadowC, setboxShadowC] = useState('none');
    const [boxShadowD, setboxShadowD] = useState('none');

    let arr = [
        {
            "FlipQuestion": "false",
            "category": "World",
            "type": "multiple",
            "difficulty": "easy",
            "Question": "What is the smallest country in the world by land area?",
            "correct_answer": "Vatican City",
            "answer": "b",
            "options": {
                "a": "Monaco",
                "b": "Vatican City",
                "c": "San Marino",
                "d": "LiechtensteinCorrect",
            }
        },
        {
            "FlipQuestion": "false",
            "category": "Science",
            "type": "multiple",
            "difficulty": "easy",
            "Question": 'Which famous scientist formulated the theory of relativity?',
            "correct_answer": "Albert Einstein",
            "answer": "b",
            "options": {
                "a": "Isaac Newton",
                "b": "Albert Einstein",
                "c": "Nikola Tesla",
                "d": "Marie CurieCorrect ",
            }
        }

    ]

    let description = [
        { line: "Welcome to Quizy Games, your favourite trivia quiz, iq test and quiz maker platform" },
        { line: "Play 1000s of free quizzes" },
        { line: "Upgrade your skills with our top quizzes" },
        { line: "Make quizzes for free and compete with friends in real-time" },
        { line: "Millions of quiz admirer like you showed trust on us." }

    ]

    useEffect(() => {
        try {
            auth.onAuthStateChanged(async (user) => {
                try {
                    if (user) {
                        setLogin(true)

                        setUser(user)
                        setLoder(true)
                        localStorage.setItem('login', true)

                    } else {
                        setLoder(false)
                        localStorage.setItem('login', false)
                        setLogin(false)
                    }
                } catch (e) {
                    setLoder(false)
                }
            })
            GetDate()
        } catch (e) {
        }
    }, [])


    const setUser = (user) => {
        try {

            dispatch(
                setUsreLogData({
                    name: user.displayName,
                    email: user.email,
                    photo: user.photoURL
                })
            )
        } catch (e) {
        }
    }
    // totlQestion
    const [totlQestion, setTotlQestion] = useState(0)

    const navigate = useNavigate()

    useEffect(() => {
        try {
            setTopTimerStart(true);
            dispatch(coinGet(coin));
            dispatch(correctAnswer())
        } catch (e) {
        }
    }, [])

    useEffect(() => {
        try {
            localStorage.setItem('coin', 200)
            localStorage.setItem('totlQestion', totlQestion,)
            dispatch(totlQuestions(totlQestion));
        } catch (e) {
        }
    }, [totlQestion])

    useEffect(() => {
        try {
            localStorage.setItem('correctAnswer', questionCorrect)
        } catch (e) {
        }
    }, [questionCorrect])

    useEffect(() => {
        try {
            localStorage.setItem('wrongAnswer', questionIncorrect)
        } catch (e) {
        }
    }, [questionIncorrect])

    const targetRef = useRef();
    const { innerWidth: width, innerHeight: height } = window;

    useEffect(() => {
        try {
            if (firstStart.current) {
                firstStart.current = !firstStart.current;
                return;
            }

            if (topTimerStart) {
                tick.current = setInterval(() => {
                    setTopTimer((topTimer) => topTimer - 1);
                }, 1000);
            } else {
                clearInterval(tick.current);
            }

            return () => clearInterval(tick.current);
        } catch (e) {
        }
    }, [topTimerStart]);

    const correctAns = 'a';

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

    const hadelClick = (currentClick, index) => {

        try {
            setBtnDisabledA(2)
            setBtnDisabledB(2)
            setBtnDisabledC(2)
            setBtnDisabledD(2)

            if (currentClick === "a") {
                if (currentClick === correctAns) {
                    setcolorA("#1DBA5C")
                    setboxShadowA("linear-gradient(to top, #1DBA5C , #fff)")

                } else {
                    setcolorA("red")
                    setOptionAnimationA('option-animation')
                }
            } else {

                setcolorA("#2B3447")
            }

            if (currentClick === "b") {
                if (currentClick === correctAns) {
                    setcolorB("#1DBA5C")
                    setboxShadowB("linear-gradient(to top, #1DBA5C , #fff)")

                } else {
                    setOptionAnimationB('option-animation')
                    setcolorB("red")
                }
            } else {

                setcolorB("#2B3447")
            }

            if (currentClick === "c") {

                if (currentClick === correctAns) {
                    setcolorC("#1DBA5C")
                    setboxShadowC("linear-gradient(to top, #1DBA5C , #fff)")

                } else {
                    setOptionAnimationC('option-animation')
                    setcolorC("red")
                }
            } else {

                setcolorC("#2B3447")
            }

            if (currentClick === "d") {
                if (currentClick === correctAns) {
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
                if (correctAns === "a") {
                    setcolorA("#1DBA5C")
                    setboxShadowA("linear-gradient(to top, #1DBA5C , #fff)")
                } else if (correctAns === "b") {
                    setcolorB("#1DBA5C")
                    setboxShadowB("linear-gradient(to top, #1DBA5C , #fff)")
                } else if (correctAns === "c") {
                    setcolorC("#1DBA5C")
                    setboxShadowC("linear-gradient(to top, #1DBA5C , #fff)")
                } else if (correctAns === "d") {
                    setcolorD("#1DBA5C")
                    setboxShadowD("linear-gradient(to top, #1DBA5C , #fff)")
                }
                setLifelinesDisplay('lifelines')
                clearInterval(intervalQuestio)
            }, 300);

            const intervalQuestios = setInterval(() => {
                if (index + 1 === totlQestion) {
                    navigate("/score")
                }
                clearInterval(intervalQuestios)
            }, 700);

            if (currentClick === correctAns) {
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

                setcolorA("#2B3447")
                setcolorB("#2B3447")
                setcolorC("#2B3447")
                setcolorD("#2B3447")
                clearInterval(intervalQuestion)
                // setIndex(index + 1)
                setOptionAnimationA('option')
                setOptionAnimationB('option')
                setOptionAnimationC('option')
                setOptionAnimationD('option')
                setIndex(index + 1)

                setboxShadowA("none")
                setboxShadowB("none")
                setboxShadowC("none")
                setboxShadowD("none")

                if (index - 1 >= 0) {
                    navigate("/submit")
                }
            }, 1000);
            const indexQuvesn = setInterval(() => {
                setBtnDisabledA(0)
                setBtnDisabledB(0)
                setBtnDisabledC(0)
                setBtnDisabledD(0)
                clearInterval(indexQuvesn)

            }, 1300)
            let questionTotl = questionCorrect + questionIncorrect

            if (questionTotl === 5) {
                setBtnDisabledA(2)
                setBtnDisabledB(2)
                setBtnDisabledC(2)
                setBtnDisabledD(2)
            }
        } catch (e) {
        }
    }

    const GetDate = async () => {
        try {
            const getDate = localStorage.getItem('date')
            if (getDate) {
                const date = new Date().getDate();
                // if (date == getDate) {
                localStorage.setItem('categoryData', btoa(JSON.stringify(categoryApi)));
                localStorage.setItem('data', (JSON.stringify(dataApi)));
                // } else {
                // localStorage.clear()
                // }
            } else {
                localStorage.setItem('date', new Date().getDate())
            }
        } catch (e) {
        }
    }

    return (
        <>
            <div className="Start" style={{ minHeight: `${window.innerHeight}px`, }}>

                <div className='cor-componet'>
                    <h1 onClick={() => { window.location.replace("/login"); }}>Quizy Games!</h1>
                    <p className='rek'>Just answer 2 Question and win 200 coins</p>
                </div>

                {
                    arr?.map((Question, indexs) => {
                        if (indexs === index) {
                            return (
                                <div className='Question-contenr' key={indexs}>
                                    <p className='question-length'>Question {index + 1}/<b>2</b></p>

                                    <h3 className='Question'>{Question?.Question}</h3>

                                    <div className='options-contenr'>
                                        <button className={optionAnimationA} disabled={btnDisabledA > 1} style={{ background: boxShadowA, }} onClick={() => { hadelClick("a", index) }}>
                                            <div style={{ backgroundColor: colorA, }} className='btn-div'>
                                                {Question.options.a}
                                            </div>
                                        </button>

                                        <button style={{ background: boxShadowB, }} disabled={btnDisabledB > 1} onClick={() => { hadelClick("b", index) }} className={optionAnimationB}>
                                            <div style={{ backgroundColor: colorB, }} className='btn-div'>
                                                {Question.options.b}
                                            </div>
                                        </button>

                                        <button style={{ background: boxShadowC, }} disabled={btnDisabledC > 1} onClick={() => { hadelClick("c", index) }} className={optionAnimationC}>
                                            <div style={{ backgroundColor: colorC, }} className='btn-div'>
                                                {Question.options.c}
                                            </div>
                                        </button>

                                        <button style={{ background: boxShadowD, }} disabled={btnDisabledD > 1} onClick={() => { hadelClick("d", index) }} className={optionAnimationD}>
                                            <div style={{ backgroundColor: colorD, }} className='btn-div'>
                                                {Question.options.d}
                                            </div>
                                        </button>
                                    </div>
                                </div>
                            )
                        }
                    })
                }

                <h4>Sign up <samp style={{ fontWeight: "600" }}> OR </samp> Sign In</h4>

                <Margin />
                <Description title={"Play quizzes and puzzles online"} descValue={description} />
                <Margin />
            </div>

        </>

    )
}

export default Start;