import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import '../css/sidebar.scss'
import {
    sidebardishple,
    setUsreLogData,
    setSignout
} from './Slice'

import { useNavigate } from 'react-router-dom';

import contestRules from '../assets/contest_rule.svg';
import home from '../assets/home.svg';
import about from '../assets/about_us.svg';
import contactUs from '../assets/contact_us.svg';
import report from '../assets/report_issue.svg';
import facebook from '../assets/facebook.svg';
import google from '../assets/google.svg';
import instagram from '../assets/insta.svg';
import close from '../assets/close.svg';
import term_condition from '../assets/term_condition.svg'

import { useDispatch, useSelector } from "react-redux";
import { auth } from './Constant/firebase';

const Sidebar = () => {
    const [sidebar, setSidebar] = useState(true)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const setUsreLogDatas = useSelector(setUsreLogData);
    const [loginData, setLoginData] = useState('')
    const logindate = useSelector(setUsreLogData)

    useEffect(() => {
        dispatchSidebardishple()
        setUsreLogData()
        const userDaat = JSON.parse(localStorage.getItem('userData'));
        if (userDaat) {
            setLoginData(userDaat)
        } else {
        }
    })
    useEffect(() => {
        getLoginDatat()
    }, [])

    const dispatchSidebardishple = () => {
        dispatch(sidebardishple(sidebar));
    }

    const getLoginDatat = async () => {
        try {
            // setLoginData(JSON.parse(atob(localStorage.getItem('userData'))))
        } catch (e) { }
    }

    const { innerWidth: width, innerHeight: height } = window;

    let name = setUsreLogDatas?.payload?.Data?.login.name
    let email = setUsreLogDatas?.payload?.Data?.login.email
    let photo = setUsreLogDatas?.payload?.Data.login.photo;

    return (
        <div className="Sidebar">
            <div className='sidebar-componet' style={{ height: "100%" }}>

                <header className='header'>
                    <div className='headerTitle'>Quizy Games Quiz</div>

                    <div onClick={() => { setSidebar(false) }} className='closeIcon'>
                        <div> <img src={close} width='13px' alt="close-icon" /></div>
                    </div>
                </header>

                <div className='user-componet'>
                    {loginData?.email?.length > 0 ?
                        <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
                            {/* <img className='user-img' src={loginData?.photo} width="100%" alt={`${loginData?.name}-Photo`} /> */}
                            <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems: "center" }}>
                                <div>
                                    <img className='user-img' src={loginData?.imageUrl} style={{ width: "50px" }} alt={`${loginData?.name}-Photo`} />
                                </div>
                                <div>
                                    <div>
                                        <h2>{loginData?.name}</h2>
                                    </div>
                                    <div>
                                        <p>{loginData?.email}</p>
                                    </div>
                                </div>
                            </div>
                            <div className="SIGNIN-componet">
                                <button
                                    onClick={() => {
                                        setSidebar(false)
                                        setLoginData('')
                                        localStorage.removeItem('userData')
                                        setTimeout(() => {
                                            navigate('/')
                                        }, 2);
                                    }}
                                ><h3 className="JoinQuiz-btn">Logout</h3></button>
                            </div>
                        </div>
                        :
                        <>
                            <div>
                                <img className='user-img' src={require('../assets/male-user-avatar.png')} style={{ width: "50px" }} alt="male-user-avatar" />
                            </div>
                            <div>
                                <h2>Welcome!</h2>
                                <p>play Quiz & earn coins</p>
                            </div>

                        </>
                    }
                </div>

                {!loginData?.email?.length > 0 ?
                    <div className="SIGNIN-componet">
                        {/* <button
                            onClick={() => {
                                setSidebar(false)
                                setTimeout(() => {
                                    navigate('/login')
                                }, 1);
                            }}
                        ><h3 className="JoinQuiz-btn">SIGN IN</h3></button> */}
                    </div>
                    :
                    <></>
                }

                <main className='main'>
                    <div className='Contest'>
                        <div
                            onClick={() => {
                                setSidebar(false)
                                setTimeout(() => {
                                    navigate('/')
                                }, 1);
                            }}
                            className='Contest-componet'
                        >
                            <div className='Contest-img'><img src={home} width='22px' alt="contestRules" /></div>
                            <h4>Home</h4>
                        </div>
                    </div>


                    <div className='Contest'>
                        <div
                            onClick={() => {
                                setSidebar(false)
                                setTimeout(() => {
                                    navigate("/contest-rules")
                                }, 1);
                            }}
                            className='Contest-componet'
                        >
                            <div className='Contest-img'><img src={contestRules} width='22px' alt="contestRules" /></div>
                            <h4>Contest Rules</h4>
                        </div>
                    </div>

                    <div className='Contests'>
                        <div className='Contest-componet' onClick={() => {
                            setSidebar(false)
                            setTimeout(() => {
                                navigate("/aboutus");
                            }, 1);
                        }}>
                            <div className='Contest-img'><img src={about} alt="contestRules" /></div>
                            <h4>About Us</h4>
                        </div>
                    </div>

                    <div className='Contests'>
                        <div className='Contest-componet'
                            onClick={() => {
                                setSidebar(false)
                                setTimeout(() => {
                                    navigate('/contactus');
                                }, 1);
                            }}>
                            <div className='Contest-img'><img src={contactUs} alt="contestRules" /></div>
                            <h4>Contact Us</h4>
                        </div>
                    </div>

                    <div className='Contests'
                        onClick={() => {
                            setSidebar(false)
                            setTimeout(() => {
                                navigate('/privacy');
                            }, 1);
                        }}>
                        <div className='Contest-componet'>
                            <div className='Contest-img'><img src={term_condition} alt="contestRules" /></div>
                            <h4>Privacy Policy</h4>
                        </div>
                    </div>

                </main>

                <div className='ConnectWithUs' style={{ justifyContent: "center", display: "flex", marginLeft: "-10px", marginBottom: '10px' }}>
                    <div className='ConnectWithUs-div'>
                        <div className='ConnectWithUs-componet'>
                            {/* <div className='ConnectWithUs-facebook'>
                                <img src={facebook} alt="facebook" />
                            </div>

                            <div className='ConnectWithUs-facebook'>
                                <img src={google} alt="facebook" />
                            </div>

                            <div className='ConnectWithUs-facebook'>
                                <img src={instagram} alt="facebook" />
                            </div> */}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Sidebar;
// 