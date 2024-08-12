import './navbr.scss'
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import Sidebar from '../sidebar';
import { sidebardishple, coinGet } from '../Slice'
import bellAnimationData from '../../assets/bell.json'
import menuImg from '../../assets/menu.svg'
import coinImg from "../../assets/coin.svg"
import { useNavigate } from 'react-router-dom';
import mainLogo from '../../assets/logo_top.png';

const Navbar = () => {


    const dispatch = useDispatch()
    const Selector = useSelector(coinGet)
    const [Coin, setcoin] = useState(0)
    const [sidebar, setSidebar] = useState(false)
    const s = useSelector(sidebardishple)
    const navigate = useNavigate()


    useEffect(() => {
        sessionStorage.setItem('isSidebar', false)
        setSidebar(s?.payload?.Data?.sidebardishple)
    })

    useEffect(() => {
        setcoin(localStorage.getItem('coin'))
        let coin = Selector.payload.Data.coin

    })
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: bellAnimationData,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <div className="navbar">
            {sidebar ?
                <Sidebar />
                :
                <div style={{ display: "none" }}></div>
            }

            <div className='menu-logo'>
                <div onClick={() => { setSidebar(true) }} className='menu'>
                    <img src={menuImg} alt="menuIcon" width={'30px'} />
                </div>

                <div className='logo' onClick={() => { navigate('/') }}>
                    <img src={mainLogo} alt="Quizy Games" />
                </div>
            </div>

            <div className='notifications'>
                <div>
                    <h3>{Coin}</h3>
                </div>

                <div>
                    <img src={coinImg} width='20px' style={{ marginLeft: "2px" }} alt="coin-icon" />
                </div>
            </div>
        </div>
    )
}

export default Navbar;