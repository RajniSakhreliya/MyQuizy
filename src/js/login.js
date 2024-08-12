import '../css/login.scss'
import Navbar from './Views/Navbar'
import googleLogo from '../assets/google-logo.svg'
import { setUsreLogData, } from './Slice';
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from 'react';
import { auth, SingWithGoogls } from "./Constant/firebase";
import { useNavigate } from 'react-router-dom';
import { gapi } from 'gapi-script';
import Description from './Views/Description';
import coin from '../assets/coin.svg';
import { GoogleLogin } from '@react-oauth/google';
import TaglineBottom from './Views/TaglineBottom';
import { GoogleOAuthProvider } from '@react-oauth/google';

const getClientId = process.env.React_APP_CLIENID;

const Login = () => {
    <GoogleOAuthProvider clientId={getClientId}>...</GoogleOAuthProvider>;

    let description = [
        {
            line: "Get coins on the completion of each quiz"
        },
        {
            line: "Upgrade your skills with our top quizzes"
        },
        {
            line: "Millions of quiz admirer like you showed trust on us."
        },
    ]

    useEffect(() => {
        const initClient = () => {
            gapi.client.init({
                clientId: getClientId,
                scope: ''
            });
        };

        gapi.load('client:auth2', initClient);
    }, []);

    const [err, seterr] = useState('')
    const [e, setE] = useState('e')
    const dispatch = useDispatch()
    const hadelClick = () => {
        try {
            // SingWithGoogls()
            // auth.onAuthStateChanged(async (user) => {
            //     loginData(user)

            //     if (user) {
            //         setUser(user)
            //         navigate('/submit')
            //         seterr('user?.displayName')
            //     }
            // })

        } catch (e) { }
    }

    const navigate = useNavigate();
    const setUsreLogDatas = useSelector(setUsreLogData);
    useEffect(() => {
        auth.onAuthStateChanged(async (user) => {
            if (user) {
                setUser(user)
                navigate('/submit')
            }
        })
    }, [])

    const setUser = (user) => {
        dispatch(
            setUsreLogData({
                name: user?.displayName,
                email: user?.email,
                photo: user?.photoURL,
            })
        )
    }

    const loginData = async (user) => {
        let userObj = {
            id: user?.email,
            email: user?.email,
            emailVerified: user?.emailVerified,
            name: user?.displayName,
            photo: user?.photoURL,
            uid: user?.uid,
            lastLoginAt: user?.reloadUserInfo.lastLoginAt,
            apiKey: user?.auth.config.apiKey
        }

    }
    const responseGoogle = (response) => {
        try {
            const userObj = {
                email: response?.profileObj?.email,
                familyName: response?.profileObj?.familyName,
                givenName: response?.profileObj?.givenName,
                name: response?.profileObj?.name,
                imageUrl: response?.profileObj?.imageUrl,
            }

            if (!response?.error) {
                localStorage.setItem("userData", JSON.stringify(userObj));
                navigate('/submit')
            } else {
                seterr(JSON.stringify(response?.error))
                // seterr(`"Enable the third party cookies"`)
            }
            // setE(`${JSON.stringify(response)} email`)
        } catch (error) {
            seterr(error)
        }
    };
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <div className="Login" style={{ minHeight: height }}>
            <Navbar />

            <div className='login-componet'>
                <h2>Sign up now & Play Quiz</h2>

                <h4 style={{ display: "flex", alignItems: "center", width: "100%", textAlign: "center", justifyContent: "center" }}>
                    Play Quizzes and win <img src={coin} alt="coin" />
                </h4>

                <div className='googleSing-componet'>
                    <GoogleLogin
                        onSuccess={credentialResponse => {
                            console.log(credentialResponse);
                        }}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                        useOneTap
                    />;

                    <h2 style={{ color: 'red' }}>{err}</h2>
                </div>

                <Description title={"Play Quiz and Win Coins!"} descValue={description} />

                <TaglineBottom />
            </div>
        </div >
    )
}
export default Login

