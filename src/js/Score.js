import "../css/CurrentScore.scss";
import awardImg from '../assets/award.svg';
import Navbar from "./Views/Navbar";
import { coinGet } from './Slice';
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import coinImg from '../assets/coin.svg';
import CategoryDiv from "./categoryDiv";
import Tagline from "./Views/TaglineBottom";

const Score = () => {

  const [Coin, setcoin] = useState()
  const Selector = useSelector(coinGet)

  const [TotlQestion, setTotlQestion] = useState()
  const [correctAnswer, setCorrectAnswer] = useState()
  const [wrongAnswer, setWrongAnswer] = useState()
  const [yourscorre, setYourscorre] = useState()
  const [data, setData] = useState()

  useEffect(() => {
    try {
      getLocalStorage();
      setTotlQestion(localStorage.getItem('totlQestion'));
      setCorrectAnswer(localStorage.getItem('correctAnswer'));
      setWrongAnswer(localStorage.getItem('wrongAnswer'));
      setYourscorre(localStorage.getItem('yourscorre'));

      setcoin(localStorage.getItem('coin'));

      getCategoryData();
    } catch (e) {

    }
    getdata();
  }, [])

  const [categoryData, setCategoryData] = useState();

  const getCategoryData = async () => {
    try {
      let datas = await JSON.parse(atob(localStorage.getItem('categoryData')))

      let dataFilter = await datas.filter(category => category.category == localStorage.getItem('categoryKey'));

      dataFilter.map((categoryData) => {
        setCategoryData(categoryData)
      });
    } catch (error) {
    }
  }


  const getLocalStorage = () => {
    if (
      localStorage.getItem('data') &&
      localStorage.getItem('categoryData') &&
      localStorage.getItem('wrongAnswer') &&
      localStorage.getItem('yourscorre')
    ) {
    } else {
      window.location.replace('/')
      return
    }
  }

  const [login, setLogin] = useState(false)

  useEffect(() => {
    setLogin(localStorage.getItem('login'))
  }, [])

  let totlQestion = Selector.payload.Data.totlQuestions

  if (localStorage.getItem('categoryData')) {
    var datas = JSON.parse(atob(localStorage.getItem('categoryData')))
    console.log(datas);
  } else {
    let datas = ''
    return
  }

  const getdata = () => {
    try {
      setData(datas)
    } catch (e) {
    }
  }


  const { innerWidth: width, innerHeight: height } = window;

  return (
    <div className="current" style={{ minHeight: height }}>
      <Navbar />

      <div className="mainTitle" style={{ color: "#e8e8e8" }}>
        {categoryData?.category}
      </div>

      <h2 style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "5px" }} >
        Play and Win {categoryData?.coin}
        <span style={{ marginLeft: "5px", verticalAlign: "middle" }}>
          <img src={coinImg} width="20px" alt="" />
        </span>
      </h2>

      <div className='current-componet'>
        <div className="trophy-componet">
          <img src={awardImg} width='55px' alt="trophy" />

          <div className="TimeIsOver">Time is over! Well Played</div>

          <div className="Current">Your Score is: <div style={{ marginLeft: "8px", color: "#5fff9f" }}>{yourscorre}</div></div>

          <p>Winner announcement @8:30PM</p>

        </div>
      </div>

      <div className="current-bar">
        <div className="border1 curren ">
          <div><h2>{localStorage.getItem('CurrentRank')}</h2></div>
          <div className="heading">Current Rank</div>
        </div>

        <div className="curren border2">
          <div><h2>{TotlQestion}</h2></div>
          <div className="heading">Total Questions</div>
        </div>

        <div className="curren border3">
          <div><h2>{correctAnswer}</h2></div>
          <div className="heading">Correct Answer</div>
        </div>

        <div className="curren border4">
          <div><h2>{wrongAnswer}</h2></div>
          <div className="heading">Wrong Answer</div>
        </div>
      </div>

      <div className="PlayQuizzes">
        <h2>
          <div className="title">
            Quiz Contests For You
          </div>
        </h2>

        <CategoryDiv />
      </div>

      <Tagline />

    </div>
  )
};

export default Score;
