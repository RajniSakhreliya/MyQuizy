import './backbar.scss'
import backArrow from '../../assets/back_arrow.svg'
import useBackButton from "../../hooks/useBackButton";
import { useNavigate } from "react-router";

const BackBar = ({ headingValue }) => {
    const navigate = useNavigate();

    const toDo = () => {
        navigate("/");
    };
    const isBackPressed = useBackButton(toDo);

    return (
        <div className='main'>
            <div className='backArrow' onClick={() => {
                navigate("/");
            }}>
                <img src={backArrow} alt="back" color="#ffffff" />
            </div>

            <div className='headingBack'>
                {headingValue}
            </div>

            <div style={{ height: "35px", width: "35px", marginRight: "10px" }}>

            </div>
        </div>
    )
}

export default BackBar;