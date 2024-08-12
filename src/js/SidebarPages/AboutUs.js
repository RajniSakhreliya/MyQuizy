import './aboutus.scss';
import React from "react";
import BackBar from "../Views/BackBar";

const AboutUs = () => {
    const { innerWidth: width, innerHeight: height } = window;

    return (
        <div style={{ minHeight: height }} className='AboutUs'>

            <BackBar headingValue={"About US"} />

            <div style={{ padding: "15px" }}>
                <div className='heading'>
                    <h2>Quizy Games</h2>
                </div>
                <div className='description'>Welcome to Quizy Games Quiz, your ultimate destination for a diverse array of quizzes spanning across various categories including film, board games, books, general knowledge, music and so on. At Quizy Games, we believe in the power of trivia to entertain, educate, and engage users of all ages and interests. With a passion for quizzing and a commitment to providing high-quality content, we strive to offer an enjoyable and enriching experience for quiz enthusiasts worldwide.</div>

                <div className='heading'>
                    <h2>Our Mission</h2>
                </div>
                <div className='description'>At Quizy Games, our mission is to create a fun and interactive platform where users can test their knowledge, learn new facts, and challenge themselves in a variety of subjects. We aim to inspire curiosity, foster intellectual growth, and promote a love for learning through the medium of quizzes. By offering a wide range of topics and questions, we seek to cater to diverse interests and provide something for everyone to enjoy.</div>

                <div className='heading'>
                    <h2>What Sets Us Apart</h2>
                </div>
                <div className='description'>Diverse Categories: We pride ourselves on offering a wide range of quiz categories to cater to different interests and preferences. Whether you're a movie buff, a bookworm, a music aficionado, or a trivia connoisseur, you'll find something to pique your curiosity at Quizy Games.</div>
                <div className='description'>High-Quality Content: Our quizzes are meticulously crafted by knowledgeable experts with a keen eye for detail. We ensure that each question is accurate, engaging, and thought-provoking, guaranteeing a rewarding experience for our users.</div>
                <div className='description'>User-Friendly Interface: We understand the importance of accessibility and ease of use. That's why we've designed our website with a clean, intuitive interface that allows users to navigate effortlessly, discover new quizzes, and enjoy seamless quiz-taking experiences.</div>
                <div className='description'>Interactive Features: In addition to traditional text-based quizzes, we also offer interactive features such as multimedia elements, timed challenges, and leaderboards to enhance the user experience and add an extra layer of excitement to the quiz-taking process.</div>
                <div className='description'>Community Engagement: We value our community of users and actively encourage interaction and participation. Users can share their quiz scores, compete with friends, and engage in lively discussions about their favorite topics, fostering a sense of camaraderie and friendly competition.</div>

                <div className='heading'>
                    <h2>Contact Us</h2>
                </div>
                <div className='description'>Have questions, feedback, or suggestions? We'd love to hear from you! Feel free to reach out to us at contact@example.com, and our dedicated team will be happy to assist you. Your input is invaluable to us as we continue to improve and evolve our platform to better serve your quizzing needs.</div>

                <div className='heading'>
                    <h2>Join the Fun</h2>
                </div>
                <div className='description'>Ready to put your knowledge to the test? Dive into the world of trivia with Quizy Games and embark on an exciting journey of discovery, learning, and entertainment. Whether you're a casual quizzer or a seasoned trivia enthusiast, there's always something new to explore and enjoy at Quizy Games. Join us today and let the quizzing adventure begin!</div>

            </div>

            {/* <dir className='sponsored'>
                <p>SPONSORED</p>
            </dir> */}
        </div>
    )
}

export default AboutUs