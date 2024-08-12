import '../css/submit.scss';
import { useNavigate } from 'react-router-dom';
import {
    setUsreLogData
} from './Slice';
import { useDispatch } from "react-redux";
import { auth } from "./Constant/firebase";
import { useEffect } from 'react';
import Description from './Views/Description';
import Margin from './Views/Margin';
import TagLineBottom from './Views/TaglineBottom';

const Submit = () => {

    const navigateToNext = useNavigate()
    const dispatch = useDispatch()

    const hadelClick = () => {
        localStorage.setItem('isUserReach', true)
        navigateToNext('/')
    }

    let description = [
        { line: "Play online quiz competitions now and earn Coins" },
        { line: "Show your skills, win prizes, and impress your friends" },
        { line: "All the learning tools you need to level up your knowledge" },
        { line: "Solve mind-bending puzzles" },
        { line: "Prove your mastery as quiz masters on Quizy Games" }

    ]

    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                localStorage.setItem('login', true)
            } else {

                localStorage.setItem('login', false)
            }
        })

    }, [])


    const setUser = (user) => {
        dispatch(
            setUsreLogData({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
            })
        )

    }

    const { innerWidth: width, innerHeight: height } = window;

    return (
        <div style={{ minHeight: height }} className='submit'>
            <div className='coins-img'>
                <img src={require('../assets/coin_rain.png')} width='150%' alt="coins" />
            </div>

            <dir className='got-coins'>
                <p style={{ fontSize: "20px", fontWeight: "bold" }}>You have got 200 coins</p>
                <Margin />
                <p>Check out more quizzes to push your knowledge to the optimum level and keep grabbing more coins!</p>
            </dir>

            <div className="JoinQuiz-componet">
                <button onClick={hadelClick}>
                    <dir>
                        <h1 className="JoinQuiz-btn">Let’s start</h1>
                    </dir>
                </button>
            </div>

            <Description title={"Play Quiz and Win Coins!"} descValue={description} />

            <TagLineBottom />
        </div>
    )
}

export default Submit;