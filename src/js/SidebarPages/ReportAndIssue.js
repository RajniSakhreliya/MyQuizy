import './ReportAndIssue.scss';
import Navbar from '../Views/Navbar';

const ReportAndIssue = () => {
    return (
        <div className='ReportAndIssue' style={{ minHeight: window.innerHeight }}>
            <Navbar />
            <div className='ReportAndIssue-main'>
                <div className='ReportAndIssue-radio'>
                    <dir>
                        <input type="radio" className='radio-input' id='radio-input' />
                        <label htmlFor="radio-input">It’s not responding</label>
                    </dir>
                    <dir>
                        <input type="radio" className='radio-input' id='radio-input' />
                        <label htmlFor="radio-input">It’s stopped working</label>
                    </dir>
                    <dir>
                        <input type="radio" className='radio-input' id='radio-input' />
                        <label htmlFor="radio-input">Delayed loading</label>
                    </dir>
                    <dir>
                        <input type="radio" className='radio-input' id='radio-input' />
                        <label htmlFor="radio-input">Game not responding</label>
                    </dir>
                    <dir>
                        <input type="radio" className='radio-input' id='radio-input' />
                        <label htmlFor="radio-input">Instruction not clear</label>
                    </dir>
                    <dir>
                        <input type="radio" className='radio-input' id='radio-input' />
                        <label htmlFor="radio-input">Other</label>
                    </dir>
                </div>

                <textarea name="" id="textarea" cols="30" rows="7" placeholder='Enter other issues,problems'></textarea>
                <div className="JoinQuiz-componet">
                    <button>
                        <dir>
                            <h1 className="JoinQuiz-btn">Submit issue</h1>
                        </dir>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ReportAndIssue;