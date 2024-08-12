import '../css/category.scss'

import Navbar from './Views/Navbar';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { setUsreLogData } from './Slice';
import { useDispatch } from "react-redux";
import { auth } from "./Constant/firebase";
import coinImg from "../assets/coin.svg"
import animationData from '../assets/live_dot.json'
import CategoryDiv from './categoryDiv';
import TaglineBottom from './Views/TaglineBottom';
import Footer from './Footer/FooterBar';

const Contests = () => {
    const navigateToNext = useNavigate()
    const [t, seT] = useState(false)
    const [coin, setCoin] = useState(0)
    const dispatch = useDispatch()
    const [searchParam, setSearchParams] = useSearchParams();

    useEffect(() => {
        try {
            if (searchParam != null && searchParam.get('cId') != null && !searchParam.get('cId').toString == "") {
                localStorage.setItem('CEncId', searchParam.get('cId'));
            }
        } catch (e) { }

        let isUserReach = localStorage.getItem('isUserReach');
        setCoin(localStorage.getItem("coin"));

        if (!isUserReach) {
            seT(false);
            window.location.replace('/start');
        } else {
            seT(true);
        }
        GetDate()

        try {
            var arr = JSON.parse(atob(localStorage.getItem('categoryData')));
            if (!arr) {
                navigateToNext('/start');
                return;
            }
        } catch (error) {
            navigateToNext('/start');
        }
    }, [])

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

    const GetDate = () => {

        const getDate = localStorage.getItem('date')
        if (getDate) {
            const date = new Date().getDate();
            if (date == getDate) {

            } else {
                localStorage.clear()
            }
        } else {
            localStorage.setItem('date', new Date().getDate())
        }

    }

    const { innerWidth: width, innerHeight: height } = window;
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            {t ?
                <div style={{ minHeight: height }} className="contests">
                    <Navbar />

                    <div className='cotesh-copen'>
                        <div className='Contests'>
                            <div><h3>Contests</h3></div>

                            <div className='coin-componet'>
                                <samp><img src={coinImg} alt="coin" /></samp>
                                <h3>{coin}</h3>
                            </div>

                        </div>

                        <CategoryDiv />
                    </div>

                    <TaglineBottom />
                    <Footer />

                </div>
                :
                <div></div>
            }

        </>
    )
}

export default Contests;