import './contestRules.scss'
import Description from '../Views/Description';
import BackBar from "../Views/BackBar";
import { GAME_TIMER } from '../Constant/Constant'

const ContestRules = () => {

    const { innerWidth: width, innerHeight: height } = window;

    let description = [
        {
            line: "The winners for each quiz will be declared based on the scores they obtain during the participation in the quiz."
        },
        {
            line: "There will be a fixed time for declaring the winners of each quiz."
        },
        {
            line: "You will have overall " + GAME_TIMER + " seconds to solve as many as questions from 20 questions in quiz."
        },
        {
            line: "There will be 4 options given below each question and one will be the answer for it out of them."
        },
        {
            line: "Each right answer fetches you 20 points."
        },
        {
            line: "Each wrong answer gives you (-) 10 points."
        },
        {
            line: "Do not forget to use the lifelines in case if you are stuck during the contest."
        },
        {
            line: "Remember users can use each lifeline once during the each contest. Use a given amount of coins from your coin bank or watch an ad for a few secs to use the lifeline for free!"
        },
        {
            line: "You would have 4 different lifelines to use:"
        },
        {
            line: "50:50 – On using it, two incorrect answers will be eliminated from the screen."
        },
        {
            line: "Freezer Time – A pause for the ongoing timer will take place for 30 seconds while allowing the users get more time to answer the question."
        },

        {
            line: "Audience Poll – You can use this option to choose the right answer out of 4 options by using the intelligence of the smart audience."
        },

        {
            line: "Flip Question – A new question will interchange the question currently showing on the screen."
        },

    ]

    return (
        <div style={{ minHeight: height }} className='ContestRules'>
            <BackBar headingValue={"Contest Rules"} />

            <Description title={"Play Quiz and Win Coins!"} descValue={description} />
        </div>
    )


}


export default ContestRules